<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarHeaderProps } from './types';

defineOptions({
  name: 'SSidebarHeader'
});

const { class: cls } = defineProps<SidebarHeaderProps>();

const { header } = sidebarVariants();

const mergedCls = computed(() => cn(header(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="header">
    <slot />
  </Primitive>
</template>
