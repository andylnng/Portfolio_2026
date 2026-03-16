<template>
  <div
    class="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-4 w-full md:w-1/2 mt-8"
  >
    <RouterLink
      v-for="app in applicationsList"
      :key="app.to"
      :to="app.to"
      :aria-label="app.label"
      class="group relative flex flex-col items-center justify-end outline-none"
    >
      <span
        class="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/20 backdrop-blur-3xl text-white"
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
  User,
  Mail,
  ForkKnife,
  Github,
  Linkedin,
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
  { label: "About Me", to: "/about", icon: User },
  { label: "Resume", to: "/resume", icon: FileText },
  { label: "Contact", to: "/contact", icon: Mail },
  { label: "Yumzy", to: "/yumzy", icon: ForkKnife },
  { label: "Studybuddy", to: "/studybuddy", icon: GraduationCap },
  { label: "Stockly", to: "/stockly", icon: Folder },
  { label: "NotETS", to: "/notETS", icon: Mail },
  { label: "Github", to: "/github", icon: Github },
  { label: "Linkedin", to: "/linkedin", icon: Linkedin },
];

const isActive = (path: string) => route.path === path;
</script>
