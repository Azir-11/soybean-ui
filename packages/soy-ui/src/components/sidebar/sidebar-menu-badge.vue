<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuBadgeProps } from './types';

defineOptions({
  name: 'SSidebarMenuBadge'
});

const { class: cls } = defineProps<SidebarMenuBadgeProps>();

const { menuBadge } = sidebarVariants();

const mergedCls = computed(() => cn(menuBadge(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="menu-badge">
    <slot />
  </Primitive>
</template>
