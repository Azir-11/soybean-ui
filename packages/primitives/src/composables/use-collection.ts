import { computed, defineComponent, h, inject, markRaw, provide, ref, watch, watchEffect } from 'vue';
import type { Ref } from 'vue';
import { Slot } from '../components/primitive';
import { usePrimitiveElement } from './use-primitive-element';

interface CollectionContext<ItemData = {}> {
  collectionRef: Ref<HTMLElement | undefined>;
  itemMap: Ref<Map<HTMLElement, { ref: HTMLElement; value?: any } & ItemData>>;
}

const ITEM_DATA_ATTR = 'data-soybean-collection-item';

export function useCollection<ItemData = {}>(options: { key?: string; isProvider?: boolean } = {}) {
  const { key = '', isProvider = false } = options;

  const injectionKey = `${key}CollectionProvider`;

  let context: CollectionContext<ItemData>;

  if (isProvider) {
    context = {
      collectionRef: ref<HTMLElement>(),
      itemMap: ref(new Map()) as Ref<Map<HTMLElement, { ref: HTMLElement } & ItemData>>
    };
    provide<CollectionContext<ItemData>>(injectionKey, context);
  } else {
    context = inject<CollectionContext<ItemData>>(injectionKey)!;
  }

  function getItems(includeDisabledItem = false) {
    const collectionNode = context.collectionRef.value;
    if (!collectionNode) return [];

    const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
    const items = Array.from(context.itemMap.value.values());
    const orderedItems = items.sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));

    if (includeDisabledItem) {
      return orderedItems;
    }

    return orderedItems.filter(i => i.ref.dataset.disabled !== '');
  }

  const CollectionSlot = defineComponent({
    name: 'CollectionSlot',
    setup(_, { slots }) {
      const { primitiveElement, currentElement } = usePrimitiveElement();

      watch(currentElement, () => {
        context.collectionRef.value = currentElement.value;
      });

      return () => h(Slot, { ref: primitiveElement }, slots);
    }
  });

  const CollectionItem = defineComponent({
    name: 'CollectionItem',
    inheritAttrs: false,
    props: {
      value: {
        // It accepts any value
        validator: () => true
      }
    },
    setup(props, { slots, attrs }) {
      const { primitiveElement, currentElement } = usePrimitiveElement();

      watchEffect(cleanupFn => {
        if (currentElement.value) {
          const elementKey = markRaw(currentElement.value);
          // @ts-expect-error ignore assignment of unknown to any
          context.itemMap.value.set(elementKey, { ref: currentElement.value!, value: props.value });
          cleanupFn(() => context.itemMap.value.delete(elementKey));
        }
      });

      return () => h(Slot, { ...attrs, [ITEM_DATA_ATTR]: '', ref: primitiveElement }, slots);
    }
  });

  const reactiveItems = computed(() => Array.from(context.itemMap.value.values()));

  const itemMapSize = computed(() => context.itemMap.value.size);

  return { getItems, reactiveItems, itemMapSize, CollectionSlot, CollectionItem };
}
