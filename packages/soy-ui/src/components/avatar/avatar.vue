<script setup lang="ts">
import { useForwardPropsEmits, useOmitForwardProps } from '@soybean-ui/primitives';
import SAvatarRoot from './avatar-root.vue';
import SAvatarImage from './avatar-image.vue';
import SAvatarFallback from './avatar-fallback.vue';
import type { AvatarEmits, AvatarProps } from './types';

defineOptions({
  name: 'SAvatar'
});

const props = defineProps<AvatarProps>();

const emit = defineEmits<AvatarEmits>();

const forwardedImageProps = useOmitForwardProps(props, ['class', 'size', 'ui', 'fallbackLabel']);

const forwardedImage = useForwardPropsEmits(forwardedImageProps, emit);
</script>

<template>
  <SAvatarRoot :class="props.class || ui?.root" :size="size">
    <slot>
      <slot name="image">
        <SAvatarImage v-bind="forwardedImage" :class="ui?.image" />
      </slot>
      <SAvatarFallback :class="ui?.fallback">
        <slot name="fallback">{{ fallbackLabel }}</slot>
      </SAvatarFallback>
    </slot>
  </SAvatarRoot>
</template>
