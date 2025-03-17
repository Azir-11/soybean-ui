<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import type { SidebarGroupActionPropsWithPrimitive } from './types';

defineOptions({
  name: 'SSidebarGroupAction'
});

const { class: cls, as = 'div', asChild } = defineProps<SidebarGroupActionPropsWithPrimitive>();

const { groupAction } = sidebarVariants();

const mergedCls = computed(() => cn(groupAction(), cls));
</script>

<template>
  <Primitive :class="mergedCls" :as="as" :as-child="asChild" data-sidebar="group-action">
    <slot />
  </Primitive>
</template>
