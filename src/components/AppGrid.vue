<template>
  <div class="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 w-full">
    <RouterLink
      v-for="app in applicationsList"
      :key="app.to"
      :to="app.to"
      :aria-label="app.label"
      class="group relative flex flex-col items-center justify-end outline-none"
      @click="openProjectWindow(app, $event)"
    >
      <span
        class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 text-white transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
        :class="app.bgClass"
      >
        <img
          v-if="app.imageUrl"
          :src="app.imageUrl"
          :alt="`${app.label} icon`"
          class="h-full w-full object-cover"
        />
        <span v-else class="text-sm font-semibold tracking-wide text-white/95">
          {{ app.shortLabel }}
        </span>
      </span>
      <h3 class="mt-2 text-sm text-white">{{ app.label }}</h3>
    </RouterLink>
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
  to: string;
  bgClass: string;
  shortLabel: string;
  imageUrl?: string;
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
    label: "About Me",
    to: "/resume",
    bgClass: "bg-sky-500",
    shortLabel: "AM",
  },
  {
    label: "Contact",
    to: "/contact",
    bgClass: "bg-emerald-500",
    shortLabel: "CT",
  },
  {
    label: "Yumzy",
    to: "/yumzy",
    bgClass: "bg-amber-500",
    shortLabel: "YZ",
    imageUrl: "https://picsum.photos/seed/yumzy/120/120",
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
    to: "/studybuddy",
    bgClass: "bg-indigo-500",
    shortLabel: "SB",
    imageUrl: "https://picsum.photos/seed/studybuddy/120/120",
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
    label: "Stockly",
    to: "/stockly",
    bgClass: "bg-fuchsia-500",
    shortLabel: "SK",
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
    label: "NotETS",
    to: "/notETS",
    bgClass: "bg-rose-500",
    shortLabel: "NE",
  },
  {
    label: "AL-V1",
    to: "/al-v1",
    bgClass: "bg-cyan-500",
    shortLabel: "AL",
  },
];
</script>
