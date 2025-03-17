import type { Skills } from "@interfaces/global";

export async function requestGetSkills(): Promise<Skills> {
  return {
    frameworks: {
      Frontend: ["Angular", "React", "Vue.js", "Svelte", "Reflex"],
      Backend: ["Django", "Flask", "Fastify", "FastAPI", "Dash"],
      Otros: ["Node.js", "NPM", "Vite", "Bun", "UV", "Celery"],
      Testing: ["Karma", "Jest", "Jasmine", "Unittest", "Pytest"],
    },
    programing_languages: [
      "JavaScript",
      "Python",
      "TypeScript",
      "Java",
      "Golang",
    ],
    databases: {
      Relacionales: ["MySQL", "PostgreSQL"],
      "No relacionales": ["MongoDB", "DynamoDB"],
    },
    tools: {
      "Control de versiones": ["Git"],
      Estilos: [
        "Bootstrap",
        "Bulma",
        "Quasar",
        "Angular Material",
        "Tailwind CSS",
      ],
      "Cloud y DevOps": ["AWS (EC2, Lambda, S3, RDS, ...)", "Docker"],
      Automatización: ["Bash scripting", "Cron", "Jenkins", "SonarQube"],
      "Metodologías Ágiles": ["SCRUM", "Kanban"],
    },
  };
}
