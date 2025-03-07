import type { Projects } from "@interfaces/global";

export function requestGetProject(): Projects[] {
  return [
    {
      title: "Automation x account",
      link: "https://github.com/Chris-medi/Automation-of-uploading-images-to-Twitter-account",
      url_image: "/src/assets/screenshot-1740785524534.png",
    },
    {
      title: "Template backend flask",
      link: "https://github.com/Chris-medi/template-py-flask-orm",
      url_image: "/src/assets/screenshot-1740785586445.png",
    },
    {
      title: "Personal portfolio",
      link: "https://github.com/Chris-medi/portafolio",
      url_image: "/src/assets/screenshot-1740785631983.png",
    },
    {
      title: "Podcast",
      link: "https://chris-medi.github.io/Proyect-podcast-/",
      url_image: "/src/assets/Screenshot 2025-03-06 140518.png",
    },
    // {"title": "Asistente persanal", "description":"lorem", "url_image": "/src/assets/screenshot-1740785524534.png"},
  ];
}
