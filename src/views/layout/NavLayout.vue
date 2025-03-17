<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/vue/24/outline";

import { ref } from "vue";
const navigation = [
  { name: "Home", href: "#header", target: "header" },
  { name: "About", href: "#about", target: "about" },
  { name: "Skills", href: "#skills", target: "skills" },
  { name: "Projects", href: "#projects", target: "projects" },
  { name: "Contact", href: "#contact", target: "contact" },
  { name: "Footer", href: "#footer", target: "footer" },
];

const { current_element = " " } = defineProps<{
  current_element: string;
}>();

let current = ref(navigation[0].name);

function clickCurrentLink(e: string) {
  current.value = e;
}
</script>
<template lang="pug">
Disclosure(as="nav" class="bg-gray-800 fixed w-full z-40" v-slot="{ open }")
  div(class="max-w-lg px-2 sm:px-6 lg:px-8")
    div(class="relative flex h-16 items-center justify-between")
      div(class="absolute inset-y-0 left-0 flex items-center sm:hidden")
        <!-- Mobile menu button-->
        DisclosureButton(class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset")
          span(class="absolute -inset-0.5")
          span(class="sr-only") Open main menu
          Bars3Icon( v-if="!open" class="block size-6" aria-hidden="true")
          XMarkIcon(v-else class="block size-6" aria-hidden="true")
      div(class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start")
        div(class="flex shrink-0 items-center")
          GlobeAsiaAustraliaIcon(class="h-8 w-auto text-white")
        div( class="hidden sm:ml-6 sm:block")
          div(class="flex space-x-4")
            a( v-for="item in navigation" :key="item.name" :href="item.href" class="rounded-md px-3 py-2 text-sm font-medium" :class="{'bg-gray-900 text-white':current_element == item.target,'text-gray-300 hover:bg-gray-700 hover:text-white': current != item.name || current_element != item.target }" @click="clickCurrentLink(item.name)") {{ item.name }}
  DisclosurePanel(class="sm:hidden")
    div(class="space-y-1 px-2 pt-2 pb-3")
      DisclosureButton(v-for="item in navigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium" :class="{'bg-gray-900 text-white': current == item.name? 'text-gray-300 hover:bg-gray-700 hover:text-white': current != item.name }" @click="clickCurrentLink(item.name)") {{ item.name }}

</template>
