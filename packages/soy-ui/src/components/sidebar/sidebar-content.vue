<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarContentProps } from './types';

defineOptions({
  name: 'SSidebarContent'
});

const { class: cls } = defineProps<SidebarContentProps>();

const { content } = sidebarVariants();

const mergedCls = computed(() => cn(content(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="content">
    <slot />
  </Primitive>
</template>
