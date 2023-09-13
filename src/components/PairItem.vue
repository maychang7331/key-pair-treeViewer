<script setup>
import { ref, watch } from "vue";
import { defineProps } from "vue";
import { usePairStore } from "../stores/pair";

const props = defineProps({
  pair: Object,
});

const pairStore = usePairStore();
const key = ref("");
const value = ref("");

const deletePair = (pairId) => {
  pairStore.deletePair(pairId);
};

watch([key], ([key]) => {
  pairStore.saveKey(props.pair.id, key);
});

watch([value], ([value]) => {
  pairStore.saveValue(props.pair.id, value);
});
</script>
<template lang="pug">
div(:key="pair.id" class="px-5 py-2 flex")
  div(class="grid grid-cols-2 gap-4 flex-grow mr-3")
    input(type="text" v-model="key" :placeholder="pair.key" class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full placeholder-slate-200")
    input(type="text" v-model="value" :placeholder="pair.value" class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full placeholder-slate-200")
  button(@click.prevent="deletePair(pair.id)" class="w-10 text-sm flex justify-center items-center bg-slate-300 text-slate-800") -
</template>
