<script setup lang="ts">
import { computed } from 'vue';
import { Primitive } from '@soybean-ui/primitives';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import { useSidebar } from './context';
import type { SidebarRailProps } from './types';

defineOptions({
  name: 'SSidebarRail'
});

const { class: cls } = defineProps<SidebarRailProps>();

const { rail } = sidebarVariants();

const { toggleSidebar } = useSidebar();

const mergedCls = computed(() => cn(rail(), cls));
</script>

<template>
  <Primitive
    :class="mergedCls"
    as="button"
    aria-label="Toggle Sidebar"
    data-sidebar="rail"
    :tabindex="-1"
    title="Toggle Sidebar"
    @click="toggleSidebar"
  >
    <slot />
  </Primitive>
</template>
