<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuActionPropsWithPrimitive } from './types';

defineOptions({
  name: 'SSidebarMenuAction'
});

const { class: cls, as = 'button', asChild, showOnHover } = defineProps<SidebarMenuActionPropsWithPrimitive>();

const mergedCls = computed(() => {
  const { menuAction } = sidebarVariants({ showOnHover });

  return cn(menuAction(), cls);
});
</script>

<template>
  <Primitive :class="mergedCls" :as="as" :as-child="asChild" data-sidebar="menu-action">
    <slot />
  </Primitive>
</template>
