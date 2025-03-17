<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import SSkeleton from '../skeleton/skeleton.vue';
import type { SidebarMenuSkeletonProps } from './types';

defineOptions({
  name: 'SSidebarMenuSkeleton'
});

const { class: cls, showIcon, iconClass, textClass } = defineProps<SidebarMenuSkeletonProps>();

const { menuSkeleton, menuSkeletonIcon, menuSkeletonText } = sidebarVariants();

const mergedCls = computed(() => cn(menuSkeleton(), cls));

const iconCls = computed(() => cn(menuSkeletonIcon(), iconClass));

const textCls = computed(() => cn(menuSkeletonText(), textClass));
</script>

<template>
  <Primitive :class="mergedCls" as="div" data-sidebar="menu-skeleton">
    <SSkeleton v-if="showIcon" :class="iconCls" />
    <SSkeleton :class="textCls" />
  </Primitive>
</template>
