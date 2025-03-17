<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuProps } from './types';

defineOptions({
  name: 'SSidebarMenu'
});

const { class: cls } = defineProps<SidebarMenuProps>();

const { menu } = sidebarVariants();

const mergedCls = computed(() => cn(menu(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="ul" data-sidebar="menu">
    <slot />
  </Primitive>
</template>
