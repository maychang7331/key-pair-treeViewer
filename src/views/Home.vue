<script setup>
import PairList from "../components/PairList.vue";
import TreeViewer from "../components/TreeViewer.vue";
</script>

<template lang="pug">
div(class="px-10 pb-20 pt-5 h-screen bg-slate-900 text-slate-200 overflow-y-scroll sm:px-20 md:px-10")
  h2(class="mb-2 text-2xl font-bold") Nested Key-Value Pair Tree Viewer
  div(class="grid grid-cols-1 gap-8 h-full md:grid-cols-2 ")
    div(class="border border-slate-500")
      PairList
    div(class=" border border-slate-500  p-6")
      TreeViewer
</template>
