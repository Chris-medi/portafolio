<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import  NavLayout  from '../layout/NavLayout.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import AboutMe from '../layout/AboutMe.vue'
import SkillsLayout from '../layout/SkillsLayout.vue'
import ProjectsLayout from '../layout/ProjectsLayout.vue'
import ContactLayout from '../layout/ContactLayout.vue'

import { useIntersectionObserver } from '@vueuse/core'

const header = useTemplateRef<HTMLElement>('header')
const about = useTemplateRef<HTMLElement>('about')
const skills = useTemplateRef<HTMLElement>('skills')
const projects = useTemplateRef<HTMLElement>('projects')
const contact = useTemplateRef<HTMLElement>('contact')

const  current_element = ref('')

onMounted(()=>{
  function callback([entries], observer){
    if(entries.isIntersecting){
      current_element.value = entries.target.id
    }
  }
  useIntersectionObserver(header,callback,{threshold:0.5})
  useIntersectionObserver(about,callback,{threshold:0.5})
  useIntersectionObserver(skills,callback,{threshold:0.5})
  useIntersectionObserver(projects,callback,{threshold:0.5})
  useIntersectionObserver(contact,callback,{threshold:0.5})

})


</script>

<template lang="pug">
main(ref="root")
  NavLayout(:current_element="current_element")
  HeaderComponent(ref="header")
  AboutMe(ref="about")
  SkillsLayout(ref="skills")
  ProjectsLayout(ref="projects")
  ContactLayout(ref="contact")
</template>