<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuSubProps } from './types';

defineOptions({
  name: 'SSidebarMenuSub'
});

const { class: cls } = defineProps<SidebarMenuSubProps>();

const { menuSub } = sidebarVariants();

const mergedCls = computed(() => cn(menuSub(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="ul" data-sidebar="menu-sub">
    <slot />
  </Primitive>
</template>
