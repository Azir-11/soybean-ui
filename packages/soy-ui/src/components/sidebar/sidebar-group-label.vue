<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarGroupLabelProps } from './types';

defineOptions({
  name: 'SSidebarGroupLabel'
});

const { class: cls } = defineProps<SidebarGroupLabelProps>();

const { groupLabel } = sidebarVariants();

const mergedCls = computed(() => cn(groupLabel(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="group-label">
    <slot />
  </Primitive>
</template>
