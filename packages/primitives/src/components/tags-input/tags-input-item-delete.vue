<script setup lang="ts">
import { computed } from 'vue';
import { isEqual } from 'ohash';
import { useForwardExpose } from '../../composables';
import { Primitive } from '../primitive';
import { injectTagsInputItemContext, injectTagsInputRootContext } from './context';
import type { TagsInputItemDeletePropsWithPrimitive } from './types';

defineOptions({
  name: 'TagsInputItemDelete'
});

const props = withDefaults(defineProps<TagsInputItemDeletePropsWithPrimitive>(), {
  as: 'button'
});

useForwardExpose();
const context = injectTagsInputRootContext();
const itemContext = injectTagsInputItemContext();

const disabled = computed(() => itemContext.disabled?.value || context.disabled.value);

function handleDelete() {
  if (disabled.value) return;
  const index = context.modelValue.value.findIndex(i => isEqual(i, itemContext.value.value));
  context.onRemoveValue(index);
}
</script>

<template>
  <Primitive
    tabindex="-1"
    v-bind="props"
    :aria-labelledby="itemContext.textId"
    :aria-current="itemContext.isSelected.value"
    :data-state="itemContext.isSelected.value ? 'active' : 'inactive'"
    :data-disabled="disabled ? '' : undefined"
    :type="as === 'button' ? 'button' : undefined"
    @click="handleDelete"
  >
    <slot />
  </Primitive>
</template>
