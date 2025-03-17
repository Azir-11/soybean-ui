<script setup lang="ts">
import { computed } from 'vue';
import { cn, sidebarVariants } from '@soybean-ui/variants';
import { PanelLeft } from 'lucide-vue-next';
import SButtonIcon from '../button/button-icon.vue';
import { useSidebar } from './context';
import type { SidebarTriggerProps } from './types';

defineOptions({
  name: 'SSidebarTrigger'
});

const { class: cls } = defineProps<SidebarTriggerProps>();

const { toggleSidebar } = useSidebar();

const { trigger } = sidebarVariants();

const mergedCls = computed(() => cn(trigger(), cls));
</script>

<template>
  <SButtonIcon :class="mergedCls" @click="toggleSidebar">
    <PanelLeft />
  </SButtonIcon>
</template>
