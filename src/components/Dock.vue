<template>
  <nav
    class="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 pointer-events-none"
  >
    <div
      class="pointer-events-auto rounded-4xl border border-white/12 bg-white/10 px-3 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
    >
      <div class="flex items-end gap-2 md:gap-3">
        <RouterLink
          v-for="item in dockItems"
          :key="item.to"
          :to="item.to"
          :aria-label="item.label"
          class="group relative flex flex-col items-center justify-end outline-none"
        >
          <span
            class="pointer-events-none absolute -top-10 whitespace-nowrap rounded-xl border border-white/10 bg-black/70 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
          >
            {{ item.label }}
          </span>

          <span
            class="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-b from-white/18 to-white/6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_25px_rgba(0,0,0,0.35)] transition-colors duration-200 group-hover:from-white/22 group-hover:to-white/10"
            :class="{
              'ring-1 ring-white/20 from-[#4f8cff]/80 to-[#2563eb]/70 text-white':
                isActive(item.to),
            }"
          >
            <component :is="item.icon" class="h-6 w-6" :stroke-width="2.15" />
          </span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {
  FileText,
  Folder,
  User,
  Mail,
  ForkKnife,
  type LucideIcon,
} from "lucide-vue-next";
import { useRoute } from "vue-router";

type DockItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

const route = useRoute();

const dockItems: DockItem[] = [
  { label: "About Me", to: "/about", icon: User },
  { label: "Resume", to: "/resume", icon: FileText },
  { label: "Contact", to: "/contact", icon: Mail },
  { label: "Yumzy", to: "/yumzy", icon: ForkKnife },
  { label: "Studybuddy", to: "/studybuddy", icon: FileText },
  { label: "Stockly", to: "/stockly", icon: Folder },
  { label: "NotETS", to: "/notETS", icon: Mail },
  { label: "Github", to: "/stockly", icon: Folder },
  { label: "Linkedin", to: "/notETS", icon: Mail },
];

const isActive = (path: string) => route.path === path;
</script>
