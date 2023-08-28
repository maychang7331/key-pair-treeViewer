<script setup>
import { storeToRefs } from "pinia";
import { usePairStore } from "../stores/pair.js";
import PairList from "../components/PairList.vue";

const pairStore = usePairStore();
const { pairs } = storeToRefs(pairStore);
</script>

<template lang="pug">
div(class="px-20 pb-20 pt-5 h-screen bg-slate-900")
  h2(class="mb-2 text-2xl text-slate-200 font-bold") Nested -ValListue Pair Tree Viewer
  div(class="grid grid-cols-2 gap-8 h-full")
    div(class="border border-slate-500")
      PairList
    div(class="text-slate-200 p-6 border border-slate-500")
</template>
