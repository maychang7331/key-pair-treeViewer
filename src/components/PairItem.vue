<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const key = ref("");
const value = ref("");

const props = defineProps({
  pair: Object,
});

const emit = defineEmits(["keyChange", "delete"]);

const keyChange = (event) => {
  emit("keyChange", event.target.value.toUpperCase());
};

const deletePair = (pairId) => {
  emit("delete", pairId);
};
</script>
<template lang="pug">
div(:key="pair.id" class="px-5 py-2 flex")
  div(class="grid grid-cols-2 gap-4 flex-grow mr-3")
    input(type="text" v-model="key" @change="(e) => (keyChange(e))" class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full")
    input(type="text" v-model="value" class="bg-transparent outline-none border text-slate-200 border-slate-500 text-base px-2 py-1 w-full")
  button(@click.prevent="deletePair(pair.id)" class="w-10 text-sm flex justify-center items-center bg-slate-300 text-slate-800") -
</template>
