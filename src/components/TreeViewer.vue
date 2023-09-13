<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { usePairStore } from "../stores/pair";
import Node from "./Node.vue";

const pairStore = usePairStore();
const { pairs } = storeToRefs(pairStore);

const treeContainer = computed(() => {
  const treeData = [];

  pairs.value.forEach((pair) => {
    const keys = pair.key.split(".");

    keys.reduce(
      (obj, k, index, arr) => {
        let item = (obj.children = obj.children || []).find(
          (i) => i.name === k,
        );

        if (!item) {
          item = { name: k, value: null };
          obj.children.push(item);
        }

        if (index === arr.length - 1) {
          item.value = pair.value;
        }

        return item;
      },
      { children: treeData },
    );
  });
  return treeData;
});
</script>

<template lang="pug">
Node(v-for="node in treeContainer" :node="node" :key="node.name")
</template>
