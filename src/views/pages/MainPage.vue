<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from "vue";
import HeaderLayout from "../components/HeaderComponent.vue";
import AboutMe from "../layout/AboutMeLayout.vue";
import ContactLayout from "../layout/ContactLayout.vue";
import FooterLayout from "../layout/FooterLayout.vue";
import NavLayout from "../layout/NavLayout.vue";
import ProjectsLayout from "../layout/ProjectsLayout.vue";
import SkillsLayout from "../layout/SkillsLayout.vue";

import { useIntersectionObserver } from "@vueuse/core";

const header = useTemplateRef<HTMLElement>("header");
const about = useTemplateRef<HTMLElement>("about");
const skills = useTemplateRef<HTMLElement>("skills");
const projects = useTemplateRef<HTMLElement>("projects");
const contact = useTemplateRef<HTMLElement>("contact");
const footer = useTemplateRef<HTMLElement>("footer");

const current_element = ref("");
function callback(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    current_element.value = entry.target.id;
  }
}

onMounted(() => {
  useIntersectionObserver(header, callback, { threshold: 0.5 });
  useIntersectionObserver(about, callback, { threshold: 0.5 });
  useIntersectionObserver(skills, callback, { threshold: 0.5 });
  useIntersectionObserver(projects, callback, { threshold: 0.5 });
  useIntersectionObserver(contact, callback, { threshold: 0.25 });
  useIntersectionObserver(footer, callback, { threshold: 0.25 });
});
</script>

<template lang="pug">
main(ref="root")
  NavLayout(:current_element="current_element")
  HeaderLayout(ref="header")
  AboutMe(ref="about")
  SkillsLayout(ref="skills")
  ProjectsLayout(ref="projects")
  ContactLayout(ref="contact")
  FooterLayout(ref="footer")
</template>
