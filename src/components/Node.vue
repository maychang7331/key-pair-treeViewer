<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  node: Object,
});

const isOpen = ref(true);

const toggleOpen = () => {
  if (!props.node.children) return;

  // only toggle when a parent node has children
  isOpen.value = !isOpen.value;
};
</script>

<template lang="pug">
//- Render key-value pair only when name has content
div(v-if="node.name" @click.prevent="toggleOpen" class="text-lg")
  span(class="font-bold") {{node.name}}
  span(v-if="node.children && node.children.length > 0" class="ml-1") {{isOpen? '[-]' : '[+]'}}
  span(v-if="node.value" class="ml-1") :
  span(v-if="node.value" class="ml-3 text-rose-300") {{node.value}}
div(class="pl-8")
  div(:class="isOpen? '': 'hidden'" )
    Node(v-for="childNode in node.children" :key="childNode.name" :node="childNode")
</template>
