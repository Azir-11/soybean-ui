<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarGroupProps } from './types';

defineOptions({
  name: 'SSidebarGroup'
});

const { class: cls } = defineProps<SidebarGroupProps>();

const { group } = sidebarVariants();

const mergedCls = computed(() => cn(group(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="group">
    <slot />
  </Primitive>
</template>
