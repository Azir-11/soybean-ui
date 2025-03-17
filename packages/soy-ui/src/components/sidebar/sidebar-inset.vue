<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarInsetProps } from './types';

defineOptions({
  name: 'SSidebarInset'
});

const { class: cls } = defineProps<SidebarInsetProps>();

const { inset } = sidebarVariants();

const mergedCls = computed(() => cn(inset(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="main">
    <slot />
  </Primitive>
</template>
