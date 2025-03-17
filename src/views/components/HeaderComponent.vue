<script setup lang="ts">
import { onMounted, ref } from "vue";
const words = ref([
  "Developer Backend",
  "Developer Frontend",
  "Developer Full-Stack",
  "Freelancer",
]);
const word = ref("");

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let isBlink = false;

function demorar(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function type() {
  currentWord = words.value[i];
  if (isDeleting) {
    word.value = currentWord.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.value.length) {
        i = 0;
      }
    }
  } else {
    word.value = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
      isBlink = true;
      await demorar(2000);
      isBlink = false;
    }
  }
  setTimeout(type, 100);
}

onMounted(async () => {
  type();
});
</script>
<template lang="pug">
header(class=" bg-[url(@img/header.png)] bg-cover bg-center bg-no-repeat px-24 bg-fixed bg-center h-[calc(100vh-4rem)] justify-center flex flex-col" id="header")
  h1.text-6xl.font-bold Cristian Medina
  h2.text-4xl.py-4 I'm {{ word }}
    span( :class="{ blink: isBlink }") |
</template>
