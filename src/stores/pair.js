import { ref } from "vue";
import { defineStore } from "pinia";

export const usePairStore = defineStore("pair", () => {
  const pairs = ref([]);

  function addPair(pair) {
    pairs.value.push(pair);
  }

  function deletePair(pairId) {
    // const index = pairs.value.findIndex((pair) => pair.id === pairId);
    // pairs.value.splice(index, 1);
    pairs.value = pairs.value.filter((pair) => pair.id !== pairId);
  }

  return { pairs, addPair, deletePair };
});
