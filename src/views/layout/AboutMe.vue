<template lang="pug">
section(id="about" class="sm:px-8 m-8 mb-24")
  h2.py-8.text-4xl.font-bold.underline.decoration-sky-500.underline-offset-8.decoration-4  About me
  p.text-lg.text-gray-600
    | Cristian Medina is a passionate Full-Stack Software Engineer with expertise in web development (Python, JavaScript, Flask),
    | low-level programming (Bash), and database management (SQL). Skilled in building RESTful APIs, leveraging version control systems (Git),
    | and delivering scalable solutions, Cristian thrives on solving complex problems with clean, efficient code. A lifelong learner and team player,
    | he combines curiosity with a collaborative mindset to drive innovation and create impactful technology.
  .bg-white(class="md:grid-cols-3 grid grid-cols-1 gap-8 pt-12 ")
    Motion(is="section" preset="slideVisibleLeft" class="md:col-span-1 justify-center items-center flex" :delay="200" :duration="1000")
        img(src="@img/IMG_20240829_150821-Photoroom.png").rounded-full.h-96.w-96.object-cover
    Motion(is="section" preset="slideVisibleRight" class="md:col-span-2 self-center " :delay="200" :duration="1000")
      .space-y-6
        div
          h2.text-2xl.font-bold.text-gray-800.mb-4.flex.items-center
            span.mr-2 Full-Stack Software Engineer & Web Developer.
          .space-y-4.text-gray-600.leading-relaxed
            p.text-lg
              | have experience in task automation, CI/CD pipelines, Bash scripting, Linux server administration,
              | and cloud application deployment using AWS. Skilled in optimizing workflows and deploying scalable solutions,
              | I bring a practical, results-driven approach to every project.
            .mb-4
              p
                strong Email:
                a(href="mailto:developer.medi.00@gmail.com").text-sm  developer.medi.00@gmail.com
              p
                strong Tel&eacute;fono:
                |  (+57) 3208249542
              p
                strong Repositorio:
                a.text-blue-500(href='https://github.com/Chris-medi?tab=repositories')  https://github.com/Chris-medi?tab=repositories
            p.text-lg
              | Cristian is always eager to embrace
              | new challenges and stay at the forefront of emerging tech trends.
</template>
