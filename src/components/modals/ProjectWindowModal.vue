<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-12 opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-12 opacity-0"
  >
    <div v-if="open && project" class="fixed inset-0 z-40">
      <button
        type="button"
        aria-label="Close project preview"
        class="absolute inset-0"
        @click="emit('close')"
      />

      <section
        class="absolute inset-0 h-screen w-screen border border-white/10 bg-white backdrop-blur-2xl"
      >
        <TitleBar
          header-class="flex items-center gap-3 border-b border-white/10 bg-black/8 px-4 py-3"
          @close="emit('close')"
        />

        <div class="grid h-[calc(100%-56px)] min-h-0 md:grid-cols-[260px_1fr]">
          <aside
            class="border-r border-black/10 p-6 text-black/90 overflow-auto min-h-0 flex flex-col"
          >
            <div
              class="shrink-0 mb-6 flex items-center justify-center rounded-lg bg-black/5"
            >
              <img
                :src="project.imageUrl"
                :alt="project.title"
                class="object-contain rounded-2xl"
              />
            </div>
            <p class="text-xs uppercase tracking-wide text-black/60">Status</p>
            <div class="mt-2 mb-6 flex flex-col gap-2">
              <span class="text-sm">
                {{ project.status }}
              </span>
            </div>

            <p class="text-xs uppercase tracking-wide text-black/60">
              Tech Stack
            </p>
            <div class="mt-2 mb-6 flex flex-col gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-sm"
              >
                {{ tech }}
              </span>
            </div>

            <p class="text-xs uppercase tracking-wide text-black/60">Links</p>
            <div class="mt-2 flex flex-col gap-2 text-sm">
              <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
                class="text-black underline underline-offset-4 hover:text-white/80"
              >
                {{ link.label }}
              </a>
            </div>
          </aside>

          <main class="overflow-y-auto min-h-0 p-6 text-black/90">
            <h1 class="text-4xl mb-6 font-semibold">{{ project.title }}</h1>
            <div class="space-y-6">
              <p class="text-md leading-relaxed">
                {{ project.description }}
              </p>
              <h1 class="text-xl font-semibold">Problem</h1>
              <p class="text-md leading-relaxed">
                {{ project.problem }}
              </p>
              <h1 class="text-xl font-semibold">Goal</h1>
              <p class="text-md leading-relaxed">
                {{ project.goal }}
              </p>
            </div>
          </main>
        </div>
      </section>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import TitleBar from "./TitleBar.vue";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectData = {
  title: string;
  description: string;
  problem: string;
  goal: string;
  status: string;
  techStack: string[];
  links: ProjectLink[];
  screenshots: string[];
  imageUrl?: string;
};

defineProps<{
  open: boolean;
  project: ProjectData | null;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>
