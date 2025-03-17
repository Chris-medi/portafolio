<script setup lang="ts">
import { LinkIcon } from "@heroicons/vue/24/outline";
import { onBeforeMount, ref } from "vue";

import type { Projects } from "@interfaces/global";
import { requestGetProject } from "@services/ProjectsServices";

const projects = ref<Projects[]>();

onBeforeMount(async () => {
  projects.value = await requestGetProject();
});
</script>
<template lang="pug">
motion(id="projects" is="section" preset="slideVisibleOnceBottom" class="sm:px-8 m-8" :delay="200" :duration="1000")
  h2.py-8.text-4xl.font-bold.underline.decoration-sky-500.underline-offset-8.decoration-4 Projects
  p.text-lg.text-gray-600 Here you will find one of my projects with programming technologies that validate my knowledge.
  .max-w-2xl.px-4.py-16(class="sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 flex mx-auto xl:flex-nowrap flex-wrap")
    .m-4(v-for="(project, index) in projects" :key="index" class="group/item group  relative" )
      a(:href="project.link" target="_blank")
        img.aspect-square.w-full.rounded-lg.bg-gray-200.object-cover(:src="project.url_image" class="group-hover:opacity-75 xl:aspect-7/8")
        div(class="invisible group-hover/item:visible bottom-0 absolute w-full bg-sky-600 mx-auto py-4 text-center rounded-b-lg")
          h3.text-lg.text-white.font-medium {{ project.title }}
        LinkIcon(class="invisible group-hover/item:visible text-gray-500 size-12 absolute top-4 right-4 z-9" aria-label="Explore project")

</template>
