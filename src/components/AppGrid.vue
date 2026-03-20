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
        <span v-else class="text-sm font-semibold tracking-wide text-white/95">
          {{ app.shortLabel }}
        </span>
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
  shortLabel: string;
  imageUrl?: string;
  imageClass?: string;
  project?: ProjectData;
};

const activeProject = ref<ProjectData | null>(null);

const openProjectWindow = (app: Application, event: MouseEvent) => {
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
    shortLabel: "YZ",
    imageUrl: "/Mealio.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Mealio",
      description:
        "Food ordering experience with personalized recommendations.",
      problem:
        "Users struggle to find healthy and diverse meal options that fit their dietary preferences.",
      goal: "To create a user-friendly platform that simplifies the process of discovering and ordering nutritious meals.",
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
    label: "Studybuddy",
    shortLabel: "SB",
    imageUrl: "/Studybuddy.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Studybuddy",
      description:
        "Collaborative study planner with reminders and progress tracking.",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
      techStack: ["Vue", "Pinia", "TypeScript", "Tailwind"],
      links: [
        { label: "Case Study", url: "https://example.com/studybuddy" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/studybuddy-shot-1/800/500",
        "https://picsum.photos/seed/studybuddy-shot-2/800/500",
      ],
      imageUrl: "/Studybuddy.png",
    },
  },
  {
    label: "NotETS",
    shortLabel: "NE",
    imageUrl: "/notETS.png",
    imageClass: "object-contain scale-200",
    project: {
      title: "NotETS",
      description:
        "Inspired by a classmate known for her exceptional note-taking, I joked about creating a platform where students could access her notes and even donate by buying her a coffee. As I started building the project, more ideas surfaced, and I realized the potential to expand. Instead of limiting it to just one person, why not have the whole school able to contribute by sharing their own notes?",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
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
    label: "Stockly",
    shortLabel: "SK",
    imageUrl: "/stockly.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Stockly",
      description:
        "Started selling unused items on facebook marketplace and to my surprise, I was able to make a decent profit. This experience made me realize the potential of online marketplaces for buying and selling items. I didn't want to keep track of everything manually on a excel sheet, so I decided to use my web development skills to create a web app that would help me manage my inventory and sales more efficiently. and hence, Stockly was born.",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
      techStack: ["Vue", "TypeScript", "Tailwind", "Supabase"],
      links: [
        { label: "Live App", url: "https://example.com/stockly" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/stockly-shot-1/800/500",
        "https://picsum.photos/seed/stockly-shot-2/800/500",
      ],
      imageUrl: "/stockly.png",
    },
  },
  {
    label: "AL-V1",
    shortLabel: "AL",
    imageUrl: "/AL.png",
    imageClass: "object-contain scale-down-50",
    project: {
      title: "Andy Luong V1",
      description:
        "Collaborative study planner with reminders and progress tracking.",
      problem:
        "Students often struggle with managing their study schedules and tracking their progress effectively.",
      goal: "To create a user-friendly platform that helps students organize their study time and monitor their academic progress.",
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
];
</script>
