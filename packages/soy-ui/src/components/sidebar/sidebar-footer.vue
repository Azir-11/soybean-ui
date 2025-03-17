<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarFooterProps } from './types';

defineOptions({
  name: 'SSidebarFooter'
});

const { class: cls } = defineProps<SidebarFooterProps>();

const { footer } = sidebarVariants();

const mergedCls = computed(() => cn(footer(), cls));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="footer">
    <slot />
  </Primitive>
</template>
