<template>
  <nav
    class="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 pointer-events-none"
  >
    <div
      class="pointer-events-auto rounded-4xl border border-white/12 bg-black/20 px-3 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
    >
      <div class="flex items-end gap-2 md:gap-3">
        <RouterLink
          v-for="(item, index) in dockItems"
          :key="item.to"
          :to="item.to"
          :aria-label="item.label"
          class="group relative flex-col items-center justify-end outline-none"
          :class="index < 4 ? 'flex' : 'hidden md:flex'"
        >
          <span
            class="pointer-events-none absolute -top-10 whitespace-nowrap rounded-xl border border-white/10 bg-black/70 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
          >
            {{ item.label }}
          </span>

          <span
            class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_25px_rgba(0,0,0,0.35)] transition-all duration-200 group-hover:-translate-y-0.5"
            :class="{
              'ring-1 ring-white/20': isActive(item.to),
              [item.bgClass]: true,
            }"
          >
            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="`${item.label} icon`"
              class="h-full w-full object-cover"
            />
            <span
              v-else
              class="text-sm font-semibold tracking-wide text-white/95"
            >
              {{ item.shortLabel }}
            </span>
          </span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

type DockItem = {
  label: string;
  to: string;
  bgClass: string;
  shortLabel: string;
  imageUrl?: string;
};

const route = useRoute();

const dockItems: DockItem[] = [
  {
    label: "About Me",
    to: "/about",
    bgClass: "bg-sky-500/80",
    shortLabel: "AM",
  },
  {
    label: "Resume",
    to: "/resume",
    bgClass: "bg-indigo-500/80",
    shortLabel: "CV",
  },
  {
    label: "Contact",
    to: "/contact",
    bgClass: "bg-emerald-500/80",
    shortLabel: "CT",
  },
  {
    label: "Yumzy",
    to: "/yumzy",
    bgClass: "bg-amber-500/80",
    shortLabel: "YZ",
    imageUrl: "https://picsum.photos/seed/yumzy-dock/120/120",
  },
  {
    label: "Studybuddy",
    to: "/studybuddy",
    bgClass: "bg-violet-500/80",
    shortLabel: "SB",
    imageUrl: "https://picsum.photos/seed/studybuddy-dock/120/120",
  },
  {
    label: "Stockly",
    to: "/stockly",
    bgClass: "bg-fuchsia-500/80",
    shortLabel: "SK",
  },
  {
    label: "NotETS",
    to: "/notETS",
    bgClass: "bg-rose-500/80",
    shortLabel: "NE",
  },
  {
    label: "Github",
    to: "/stockly",
    bgClass: "bg-slate-700/80",
    shortLabel: "GH",
  },
  {
    label: "Linkedin",
    to: "/notETS",
    bgClass: "bg-blue-600/80",
    shortLabel: "IN",
  },
];

const isActive = (path: string) => route.path === path;
</script>
