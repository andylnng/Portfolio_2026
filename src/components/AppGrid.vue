<template>
  <div class="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 w-full">
    <div
      v-for="app in applicationsList"
      :aria-label="app.label"
      class="group relative flex flex-col items-center justify-end outline-none"
      @click="openProjectWindow(app, $event)"
    >
      <button
        class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl text-white transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
      >
        <img
          v-if="app.imageUrl"
          :src="app.imageUrl"
          :alt="`${app.label} icon`"
          class="h-full w-full"
          :class="app.imageClass ?? 'object-cover'"
        />
      </button>
      <h3 class="mt-2 text-sm text-white">{{ app.label }}</h3>
    </div>
  </div>

  <ProjectWindowModal
    :open="Boolean(activeProject)"
    :project="activeProject"
    @close="closeProjectWindow"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import ProjectWindowModal, {
  type ProjectData,
} from "./modals/ProjectWindowModal.vue";

type Application = {
  label: string;
  imageUrl?: string;
  imageClass?: string;
  project?: ProjectData;
  externalUrl?: string;
};

const activeProject = ref<ProjectData | null>(null);

const openProjectWindow = (app: Application, event: MouseEvent) => {
  if (app.externalUrl) {
    event.preventDefault();

    if (app.externalUrl.startsWith("mailto:")) {
      window.location.href = app.externalUrl;
      return;
    }

    window.open(app.externalUrl, "_blank", "noopener,noreferrer");
    return;
  }

  if (!app.project) {
    return;
  }

  event.preventDefault();
  activeProject.value = app.project;
};

const closeProjectWindow = () => {
  activeProject.value = null;
};

const applicationsList: Application[] = [
  {
    label: "Mealio",
    imageUrl: "/Mealio.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Mealio",
      description:
        "Mealio is an AI-powered weekly meal planner that chats with you to build personalized meal ideas around your budget, preferences, and local grocery deals. It automatically gathers and analyzes current promotions by scraping weekly flyers and store articles to help you plan smarter.",
      problem:
        "Many people spend too much time deciding what to cook and often overspend on groceries because they do not have a practical meal plan tied to real weekly deals. Mealio aims to reduce decision fatigue, improve budgeting habits, and make weekly meal planning faster and easier.",
      goal: "Launch Mealio by summer 2027, then expand with personalized recommendations based on dietary needs, household size, and long-term spending patterns.",
      status: "In construction",
      techStack: ["Vue", "TypeScript", "Tailwind", "Firebase"],
      links: [
        { label: "Live Demo", url: "https://example.com/yumzy" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/yumzy-shot-1/800/500",
        "https://picsum.photos/seed/yumzy-shot-2/800/500",
      ],
      imageUrl: "/Mealio.png",
    },
  },

  {
    label: "notETS",
    imageUrl: "/notETS.png",
    imageClass: "object-contain scale-200",
    project: {
      title: "notETS",
      description:
        "Inspired by a classmate known for her exceptional note-taking, I joked about creating a platform where students could access her notes and even donate by buying her a coffee. As I started building the project, more ideas surfaced, and I realized the potential to expand. Instead of limiting it to just one person, why not have the whole school able to contribute by sharing their own notes?",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
      status: "In construction",
      techStack: ["Vue", "Pinia", "TypeScript", "Tailwind"],
      links: [
        { label: "Case Study", url: "https://example.com/studybuddy" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/studybuddy-shot-1/800/500",
        "https://picsum.photos/seed/studybuddy-shot-2/800/500",
      ],
      imageUrl: "/notETS.png",
    },
  },
  {
    label: "StudyBuddy",
    imageUrl: "/StudyBuddy.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Study Buddy",
      description:
        "Started selling unused items on facebook marketplace and to my surprise, I was able to make a decent profit. This experience made me realize the potential of online marketplaces for buying and selling items. I didn't want to keep track of everything manually on a excel sheet, so I decided to use my web development skills to create a web app that would help me manage my inventory and sales more efficiently. and hence, Stockly was born.",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
      status: "In construction",
      techStack: ["Vue", "TypeScript", "Tailwind", "Supabase"],
      links: [
        { label: "Live App", url: "https://example.com/stockly" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/stockly-shot-1/800/500",
        "https://picsum.photos/seed/stockly-shot-2/800/500",
      ],
      imageUrl: "/StudyBuddy.png",
    },
  },
  {
    label: "Brainwave",
    imageUrl: "/brainwave.png",
    imageClass: "object-contain scale-down-50",
    project: {
      title: "Brainwave",
      description:
        "Collaborative study planner with reminders and progress tracking.",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
      status: "Live",
      techStack: ["React", "Tailwindcss", "Javascript"],
      links: [
        {
          label: "Live website",
          url: "https://brainwave-liard-six.vercel.app/",
        },
      ],
      screenshots: [
        "https://picsum.photos/seed/studybuddy-shot-1/800/500",
        "https://picsum.photos/seed/studybuddy-shot-2/800/500",
      ],
      imageUrl: "/brainwave.png",
    },
  },
  {
    label: "AL-V1",
    imageUrl: "/AL.png",
    imageClass: "object-contain scale-down-50",
    project: {
      title: "Andy Luong Version 1",
      description:
        "Collaborative study planner with reminders and progress tracking.",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
      status: "Live",
      techStack: ["React", "Tailwindcss", "Javascript"],
      links: [
        { label: "Live website", url: "https://v1.andyluong.com" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/studybuddy-shot-1/800/500",
        "https://picsum.photos/seed/studybuddy-shot-2/800/500",
      ],
      imageUrl: "/AL.png",
    },
  },
  {
    label: "Mail",
    imageUrl: "/apple-mail.svg",
    imageClass: "object-contain scale-105",
    externalUrl: "mailto:andy.luong.1@ens.etsmtl.ca",
  },
  {
    label: "Resume EN",
    imageUrl: "/folder.png",
    imageClass: "object-contain scale-110",
    externalUrl: "/CV_2026_EN.pdf",
  },
  {
    label: "Resume FR",
    imageUrl: "/folder.png",
    imageClass: "object-contain scale-110",
    externalUrl: "/CV_2026_EN.pdf",
  },
];
</script>
