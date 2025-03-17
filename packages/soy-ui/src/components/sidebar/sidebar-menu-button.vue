<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuButtonPropsWithPrimitive } from './types';

defineOptions({
  name: 'SSidebarMenuButton'
});

const { class: cls, as = 'button', asChild } = defineProps<SidebarMenuButtonPropsWithPrimitive>();

const { menuButton } = sidebarVariants();

const mergedCls = computed(() => cn(menuButton(), cls));
</script>

<template>
  <Primitive :class="mergedCls" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>
