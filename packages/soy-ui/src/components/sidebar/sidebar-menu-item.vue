<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuItemProps } from './types';

defineOptions({
  name: 'SSidebarMenuItem'
});

const { class: cls } = defineProps<SidebarMenuItemProps>();

const { menuItem } = sidebarVariants();

const mergedCls = computed(() => cn(menuItem(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="li" data-sidebar="menu-item">
    <slot />
  </Primitive>
</template>
