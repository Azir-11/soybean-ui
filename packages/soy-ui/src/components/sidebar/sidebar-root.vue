<script setup lang="ts">
import { computed } from 'vue';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import { useSidebar } from './context';
import SSidebarSheet from './sidebar-sheet.vue';
import type { SidebarCollapsible, SidebarRootProps, SidebarSide, SidebarState, SidebarVariant } from './types';

defineOptions({
  name: 'SSidebarRoot',
  inheritAttrs: false
});

const props = withDefaults(defineProps<SidebarRootProps>(), {
  side: 'left',
  variant: 'sidebar',
  collapsible: 'offcanvas'
});

interface SlotProps {
  dataCollapsible: SidebarCollapsible | '';
  dataVariant: SidebarVariant;
  dataSide: SidebarSide;
  dataState: SidebarState;
}

type Slots = {
  default: (props: SlotProps) => any;
};

defineSlots<Slots>();

const { isMobile, state } = useSidebar();

const dataCollapsible = computed(() => (state.value === 'collapsed' ? props.collapsible : ''));

const mergedCls = computed(() => {
  const { side, variant, collapsible, wrapperClass } = props;
  const { rootCollapsible, gapHandler, wrapper, wrapperInner } = sidebarVariants({
    side,
    variant,
    collapsible
  });

  return {
    rootCollapsible: cn(rootCollapsible(), props.class),
    gapHandler: cn(gapHandler()),
    wrapper: cn(wrapper(), wrapperClass),
    wrapperInner: cn(wrapperInner(), props.class)
  };
});

const slotProps = computed<SlotProps>(() => ({
  dataCollapsible: dataCollapsible.value,
  dataVariant: props.variant,
  dataSide: props.side,
  dataState: state.value
}));
</script>

<template>
  <div v-if="collapsible === 'none'" :class="mergedCls.rootCollapsible" v-bind="$attrs">
    <slot v-bind="slotProps" />
  </div>
  <SSidebarSheet v-else-if="isMobile" :side="side" :class="props.class" :sheet-class="mobileSheetClass">
    <slot v-bind="slotProps" />
  </SSidebarSheet>
  <div
    v-else
    class="group peer hidden md:block"
    :data-state="state"
    :data-collapsible="dataCollapsible"
    :data-variant="variant"
    :data-side="side"
  >
    <!-- This is what handles the sidebar gap on desktop  -->
    <div :class="mergedCls.gapHandler" />
    <div :class="mergedCls.wrapper">
      <div v-bind="$attrs" :class="mergedCls.wrapperInner" data-sidebar="sidebar">
        <slot v-bind="slotProps" />
      </div>
    </div>
  </div>
</template>
