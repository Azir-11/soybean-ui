<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuSubItemProps } from './types';

defineOptions({
  name: 'SSidebarMenuSubItem'
});

const { class: cls } = defineProps<SidebarMenuSubItemProps>();

const { menuSubItem } = sidebarVariants();

const mergedCls = computed(() => cn(menuSubItem(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="li" data-sidebar="menu-sub-item">
    <slot />
  </Primitive>
</template>
