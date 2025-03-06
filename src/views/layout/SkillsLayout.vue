<template lang="pug">
motion(id="skills" is="section" preset="slideVisibleBottom" class="sm:px-8 m-8" :delay="200" :duration="1000")
  h2.text-4xl.font-bold.mb-8.underline.decoration-sky-500.underline-offset-8.decoration-4 SKILLS
  p.text-lg.mb-12.text-gray-600
    | My skills as a Full-Stack Software Engineer include a strong aptitude for learning new technologies and programming languages,
    | problem-solving abilities, and a keen attention to detail. I excel in organizing and managing time effectively,
    | adapting to the latest trends, and understanding their impact in a business environment.
  .grid.grid-cols-1.gap-6(class="md:grid-cols-2 lg:grid-cols-3")

    .bg-white.p-6.rounded-xl.shadow-lg.border.border-blue-100.transform.transition-all.duration-300(class="hover:scale-105")
      h3.text-xl.font-semibold.mb-4 Lenguajes de Programación
      ul.space-y-2.text-gray-700
        li.flex.items-center(v-for="lang in programing_languages")
          span.w-2.h-2.bg-blue-500.rounded-full.mx-4
          span {{ lang }}

    .bg-white.p-6.rounded-xl.shadow-lg.border.border-blue-100.transform.transition-all.duration-300(class="hover:scale-105")
      h3.text-xl.font-semibold.mb-4 Frameworks y Librerías
      ul.space-y-3.text-gray-700
        li.flex.flex-col.space-y-1(v-for="(items, category) in frameworks")
          strong.text-blue-500.mx-4 {{ category }}:
          span.ml-8 {{ items.join(', ') }}

    .bg-white.p-6.rounded-xl.shadow-lg.border.border-blue-100.transform.transition-all.duration-300(class="hover:scale-105")
      h3.text-xl.font-semibold.mb-4 Bases de Datos
      ul.space-y-3.text-gray-700
        li.flex.flex-col.space-y-1(v-for="(items, category) in databases")
          strong.text-blue-500.mx-4 {{ category }}:
          span.ml-8 {{ items.join(', ') }}

    //- Tools & Technologies
    .bg-white.p-6.rounded-xl.shadow-lg.border.border-blue-100.transform.transition-all.duration-300x.col-span-full(class="lg:col-span-3 hover:scale-105")
      h3.text-xl.font-semibold.text-blue-600.mb-4 Herramientas y Tecnologías
      ul.space-y-3.text-gray-700
        li.flex.flex-col.space-y-1(v-for="(items, category) in tools")
          strong.text-blue-500.mx-4 {{ category }}:
          span.ml-8 {{ items.join(', ') }}

</template>

<script setup lang="ts">

import { ref } from 'vue'

const programing_languages = ref(['JavaScript', 'Python', 'TypeScript', 'Java'])

const frameworks = ref({
  'Frontend': ['Angular', 'React', 'Vue.js', 'Svelte', 'Reflex'],
  'Backend': ['Django', 'Flask', 'Fastify', 'FastAPI','Dash'],
  'Otros': ['Node.js', 'NPM', 'Vite', 'Bun', 'UV', 'Celery'],
  'Testing': ['Karma', 'Jest', 'Jasmine', 'Unittest', 'Pytest']
})

const databases = ref({
  'Relacionales': ['MySQL', 'PostgreSQL'],
  'No relacionales': ['MongoDB', 'DynamoDB']
})

const tools = ref({
  'Control de versiones': ['Git'],
  'Estilos': ['Bootstrap', 'Bulma', 'Quasar', 'Angular Material', 'Tailwind CSS'],
  'Cloud y DevOps': ['AWS (EC2, Lambda, S3, RDS, ...)', 'Docker'],
  'Automatización': ['Bash scripting', 'Cron', 'Jenkins', 'SonarQube'],
  'Metodologías Ágiles': ['SCRUM', 'Kanban']
})

</script>