<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuButtonChildProps } from './types';

defineOptions({
  name: 'SSidebarMenuButtonChild'
});

const { class: cls } = defineProps<SidebarMenuButtonChildProps>();

const { menuButtonChild } = sidebarVariants();

const mergedCls = computed(() => cn(menuButtonChild(), cls));
</script>

<template>
  <Primitive :class="mergedCls">
    <slot />
  </Primitive>
</template>
