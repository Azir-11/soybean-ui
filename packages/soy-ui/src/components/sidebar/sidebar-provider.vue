<script setup lang="ts">
import { computed, ref } from 'vue';
import type { CSSProperties, Ref } from 'vue';
import { useEventListener, useMediaQuery, useVModel } from '@vueuse/core';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import { provideSidebarContext } from './context';
import {
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_KEYBOARD_SHORTCUT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON
} from './shared';
import type { SidebarProviderEmits, SidebarProviderProps, SidebarState } from './types';

defineOptions({
  name: 'SSidebarProvider'
});

const props = withDefaults(defineProps<SidebarProviderProps>(), {
  open: undefined
});

const emit = defineEmits<SidebarProviderEmits>();

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen || getOpenStateFromCookie(),
  passive: true
}) as Ref<boolean>;

const { provider } = sidebarVariants();

const mergedCls = computed(() => cn(provider(), props.class));

const isMobile = useMediaQuery('(max-width: 768px)');
const openMobile = ref(false);

// We add a state so that we can do data-state="expanded" or "collapsed".
// This makes it easier to style the sidebar with Tailwind classes.
const state = computed<SidebarState>(() => (open.value ? 'expanded' : 'collapsed'));

const style = computed<CSSProperties>(() => ({
  '--sidebar-width': SIDEBAR_WIDTH,
  '--sidebar-width-icon': SIDEBAR_WIDTH_ICON
}));

function getOpenStateFromCookie() {
  const cookie = document.cookie.split('; ').find(row => row.startsWith(SIDEBAR_COOKIE_NAME));
  return cookie ? cookie.split('=')[1] === 'true' : false;
}

function setOpen(value: boolean) {
  open.value = value;

  // This sets the cookie to keep the sidebar state.
  document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
}

function setOpenMobile(value: boolean) {
  openMobile.value = value;
}

// Helper to toggle the sidebar.
function toggleSidebar() {
  if (isMobile.value) {
    setOpenMobile(!openMobile.value);
  } else {
    setOpen(!open.value);
  }
}

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    toggleSidebar();
  }
});

provideSidebarContext({
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar
});
</script>

<template>
  <Primitive :class="mergedCls" as="div" :style="style">
    <slot :is-mobile="isMobile" :open="open" :open-mobile="openMobile" />
  </Primitive>
</template>
