<template>
  <div class="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 w-full">
    <div
      v-for="app in applicationsList"
      :aria-label="app.label"
      class="group relative flex flex-col items-center justify-end outline-none"
      @click="openProjectWindow(app, $event)"
    >
      <span
        class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 text-white transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
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
      </span>
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
import ProjectWindowModal, { type ProjectData } from "./ProjectWindowModal.vue";

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
    imageUrl: "/public/mealio.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Yumzy",
      description:
        "Food ordering experience with personalized recommendations.",
      techStack: ["Vue", "TypeScript", "Tailwind", "Firebase"],
      links: [
        { label: "Live Demo", url: "https://example.com/yumzy" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/yumzy-shot-1/800/500",
        "https://picsum.photos/seed/yumzy-shot-2/800/500",
      ],
    },
  },
  {
    label: "Studybuddy",
    shortLabel: "SB",
    imageUrl: "/public/studybuddy.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Studybuddy",
      description:
        "Collaborative study planner with reminders and progress tracking.",
      techStack: ["Vue", "Pinia", "TypeScript", "Tailwind"],
      links: [
        { label: "Case Study", url: "https://example.com/studybuddy" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/studybuddy-shot-1/800/500",
        "https://picsum.photos/seed/studybuddy-shot-2/800/500",
      ],
    },
  },
  {
    label: "NotETS",
    shortLabel: "NE",
    imageUrl: "/public/notETS.png",
    imageClass: "object-contain scale-200",
  },
  {
    label: "Stockly",
    shortLabel: "SK",
    imageUrl: "/public/stockly.png",
    imageClass: "object-contain scale-150",
    project: {
      title: "Stockly",
      description: "Inventory dashboard focused on speed and simple workflows.",
      techStack: ["Vue", "TypeScript", "Tailwind", "Supabase"],
      links: [
        { label: "Live App", url: "https://example.com/stockly" },
        { label: "GitHub", url: "https://github.com" },
      ],
      screenshots: [
        "https://picsum.photos/seed/stockly-shot-1/800/500",
        "https://picsum.photos/seed/stockly-shot-2/800/500",
      ],
    },
  },
  {
    label: "AL-V1",
    shortLabel: "AL",
    imageUrl: "/public/AL.png",
    imageClass: "object-contain scale-down-50",
  },
  {
    label: "Resume",
    shortLabel: "AM",
    imageUrl: "/public/notes.png",
    imageClass: "object-cover scale-155",
  },
  {
    label: "Contact",
    shortLabel: "CT",
    imageUrl: "/public/apple-mail.svg",
    imageClass: "object-cover scale-125",
  },
];
</script>
