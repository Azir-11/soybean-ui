<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarMenuSubButtonPropsWithPrimitive } from './types';

defineOptions({
  name: 'SSidebarMenuSubButton'
});

const { class: cls, as = 'button', asChild } = defineProps<SidebarMenuSubButtonPropsWithPrimitive>();

const { menuSubButton } = sidebarVariants();

const mergedCls = computed(() => cn(menuSubButton(), cls));
</script>

<template>
  <Primitive :class="mergedCls" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>
