import { ref } from "vue";
import { defineStore } from "pinia";

export const usePairStore = defineStore("pair", () => {
  const pairs = ref([
    { id: 7209525097, key: "nav.header.creator", value: "3D Fabric Creator" },
    {
      id: 2780927657,
      key: "nav.icon",
      value: "Icon name",
    },
    {
      id: 2780927665,
      key: "nav.header.product",
      value: "Product",
    },
    {
      id: 2780927666,
      key: "common.feature.experience",
      value: "Try It Now!",
    },
    {
      id: 2780927667,
      key: "common.feature.chooseFabric",
      value: "Choose Fabric",
    },
  ]);

  function addPair(pair) {
    pairs.value.push(pair);
  }

  function deletePair(pairId) {
    // <METHOD I>
    // const index = pairs.value.findIndex((pair) => pair.id === pairId);
    // pairs.value.splice(index, 1);

    // <METHOD II>
    pairs.value = pairs.value.filter((pair) => pair.id !== pairId);
  }

  function saveKey(pairId, keyText) {
    const index = pairs.value.findIndex((pair) => pair.id === pairId);
    pairs.value[index].key = keyText;
  }

  function saveValue(pairId, valueText) {
    const index = pairs.value.findIndex((pair) => pair.id === pairId);
    pairs.value[index].value = valueText;
  }

  return { pairs, addPair, deletePair, saveKey, saveValue };
});
