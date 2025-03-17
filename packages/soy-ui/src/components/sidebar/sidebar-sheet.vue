<script setup lang="ts">
import { computed } from 'vue';
import { DialogPortal, DialogRoot } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import SDialogOverlay from '../dialog/dialog-overlay.vue';
import SSheetContent from '../sheet/sheet-content.vue';
import { useSidebar } from './context';
import { SIDEBAR_WIDTH_MOBILE } from './shared';
import type { SidebarSheetProps } from './types';

defineOptions({
  name: 'SSidebarSheet',
  inheritAttrs: false
});

const props = defineProps<SidebarSheetProps>();

const { openMobile, setOpenMobile } = useSidebar();

const { mobileSheet, mobileInner } = sidebarVariants();

const mergedCls = computed(() => cn(mobileInner(), props.class));

const sheetCls = computed(() => cn(mobileSheet(), props.sheetClass));
</script>

<template>
  <DialogRoot :open="openMobile" @update:open="setOpenMobile">
    <DialogPortal>
      <SDialogOverlay />
      <SSheetContent
        :class="sheetCls"
        :side="side"
        :style="{
          '--sidebar-width': SIDEBAR_WIDTH_MOBILE
        }"
      >
        <div v-bind="$attrs" :class="mergedCls" data-sidebar="sidebar" data-mobile="true">
          <slot />
        </div>
      </SSheetContent>
    </DialogPortal>
  </DialogRoot>
</template>
