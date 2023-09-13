<script setup>
import { storeToRefs } from "pinia";

import PairItem from "../components/PairItem.vue";
import { usePairStore } from "../stores/pair";

const pairStore = usePairStore();
const { pairs } = storeToRefs(pairStore);

const handleAddPair = () => {
  const newPair = {
    id: Date.now(),
    key: "",
    value: "",
  };
  pairStore.addPair(newPair);
};
</script>

<template lang="pug">
div(class="flex justify-end p-3")
  button(@click="handleAddPair()" class="bg-slate-200 text-slate-800 p-2 font-bold") + Add New Pair
div
  PairItem(v-for="pair in pairs" :pair="pair")
</template>
