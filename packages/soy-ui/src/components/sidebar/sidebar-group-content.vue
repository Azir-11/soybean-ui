<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarGroupContentProps } from './types';

defineOptions({
  name: 'SSidebarGroupContent'
});

const { class: cls } = defineProps<SidebarGroupContentProps>();

const { groupContent } = sidebarVariants();

const mergedCls = computed(() => cn(groupContent(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="group-content">
    <slot />
  </Primitive>
</template>
