<script setup>
import PairList from "../components/PairList.vue";
import TreeViewer from "../components/TreeViewer.vue";
</script>

<template lang="pug">
div(class="px-20 pb-20 pt-5 h-screen bg-slate-900")
  h2(class="mb-2 text-2xl text-slate-200 font-bold") Nested Key-Value Pair Tree Viewer
  div(class="grid grid-cols-2 gap-8 h-full")
    div(class="border border-slate-500")
      PairList
    div(class="text-slate-200 p-6 border border-slate-500")
      TreeViewer
</template>
