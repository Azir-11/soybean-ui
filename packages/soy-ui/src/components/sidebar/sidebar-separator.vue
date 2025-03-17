<script setup lang="ts">
import { computed } from 'vue';
import { useForwardProps } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import SSeparator from '../separator/separator.vue';
import type { SidebarSeparatorProps } from './types';

defineOptions({
  name: 'SSidebarSeparator'
});

const { class: cls, ...delegatedProps } = defineProps<SidebarSeparatorProps>();

const forwardedProps = useForwardProps(delegatedProps);

const { separator } = sidebarVariants();

const mergedCls = computed(() => cn(separator(), cls));
</script>

<template>
  <SSeparator v-bind="forwardedProps" :class="mergedCls">
    <slot />
  </SSeparator>
</template>
