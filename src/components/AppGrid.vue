<template>
  <div class="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 w-full">
    <RouterLink
      v-for="app in applicationsList"
      :key="app.to"
      :to="app.to"
      :aria-label="app.label"
      class="group relative flex flex-col items-center justify-end outline-none"
    >
      <span
        class="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/20 backdrop-blur-3xl text-white transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
      >
        <component :is="app.icon" class="h-6 w-6" :stroke-width="2.15" />
      </span>
      <h3 class="mt-2 text-sm text-white">{{ app.label }}</h3>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import {
  FileText,
  Folder,
  UserRound,
  Mail,
  ForkKnife,
  GraduationCap,
  type LucideIcon,
} from "lucide-vue-next";
import { useRoute } from "vue-router";

type Application = {
  label: string;
  to: string;
  icon: LucideIcon;
};

const route = useRoute();

const applicationsList: Application[] = [
  { label: "About Me", to: "/resume", icon: UserRound },
  { label: "Contact", to: "/contact", icon: Mail },
  { label: "Yumzy", to: "/yumzy", icon: ForkKnife },
  { label: "Studybuddy", to: "/studybuddy", icon: GraduationCap },
  { label: "Stockly", to: "/stockly", icon: Folder },
  { label: "NotETS", to: "/notETS", icon: Mail },
  { label: "AL-V1", to: "/al-v1", icon: UserRound },
];
</script>
