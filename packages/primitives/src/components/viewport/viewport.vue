<script setup lang="ts">
import { toRef } from 'vue';
import { useForwardExpose, useNonce } from '../../composables';
import { Primitive } from '../primitive';
import type { ViewportPropsWithPrimitive } from './types';

defineOptions({
  name: 'PrimitiveViewport',
  inheritAttrs: false
});

const props = defineProps<ViewportPropsWithPrimitive>();

const { forwardRef } = useForwardExpose();

const propNonce = useNonce(toRef(() => props.nonce));
</script>

<template>
  <Primitive
    v-bind="{ ...$attrs, ...props }"
    :ref="forwardRef"
    :class="props.class"
    :as="as"
    :as-child="asChild"
    data-soybean-viewport
    role="presentation"
    :style="{
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: 'relative',
      flex: 1,
      overflow: 'auto'
    }"
  >
    <slot />
  </Primitive>
  <Primitive as="style" :nonce="propNonce">
    /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-soybean-viewport] {
    scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
    [data-soybean-viewport]::-webkit-scrollbar { display: none; }
  </Primitive>
</template>
