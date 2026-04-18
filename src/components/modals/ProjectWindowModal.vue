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
        class="absolute inset-0 h-screen w-screen bg-white backdrop-blur-2xl"
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
            <p class="text-md uppercase tracking-wide text-black font-semibold">
              Status
            </p>
            <div class="mt-2 mb-6 flex flex-col gap-2">
              <span class="inline-flex items-center gap-2 text-md">
                <span class="relative flex h-2.5 w-2.5">
                  <span
                    class="absolute inline-flex h-full w-full rounded-full animate-ping"
                    :class="getStatusPingClass(project.status)"
                  />
                  <span
                    class="relative inline-flex h-2.5 w-2.5 rounded-full"
                    :class="getStatusPingClass(project.status)"
                  />
                </span>
                {{ project.status }}
              </span>
            </div>

            <p class="text-md uppercase tracking-wide text-black font-semibold">
              Tech Stack
            </p>
            <div class="mt-2 mb-6 flex flex-col gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-md"
              >
                {{ tech }}
              </span>
            </div>
            <p class="text-md uppercase tracking-wide text-black font-semibold">
              Links
            </p>
            <div class="mt-2 flex flex-col gap-2 text-sm">
              <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
                class="text-black underline underline-offset-4"
              >
                {{ link.label }}
              </a>
            </div>
          </aside>

          <main class="overflow-y-auto min-h-0 p-6 text-black/80">
            <div class="flex flex-col space-y-4">
              <h1 class="text-3xl font-bold text-black mb-1">
                {{ project.title }}
              </h1>
              <h3 class="mb-4">
                Small description or tagline about the project that gives a
                brief overview of
              </h3>
            </div>
            <h1 class="text-black text-3xl my-6 font-semibold">
              project brief
            </h1>
            <div class="space-y-6 pb-8 mb-6">
              <p class="text-md leading-relaxed">
                {{ project.description }}
              </p>
              <div class="grid grid-cols-2 gap-5">
                <div class="p-4 bg-black/8 rounded-lg">
                  <h1 class="text-black text-xl font-semibold mb-2">problem</h1>
                  <p class="text-md leading-relaxed">
                    {{ project.problem }}
                  </p>
                </div>
                <div class="p-4  bg-black/8 rounded-lg">
                  <h1 class="text-black text-xl font-semibold">goal</h1>
                  <p class="text-md leading-relaxed">
                    {{ project.goal }}
                  </p>
                </div>
              </div>
            </div>
            <h1 class="text-black text-xl font-semibold">Key features</h1>
            <p class="text-lg leading-relaxed">
              {{ project.features }}
            </p>
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
  features?: string[];
};

defineProps<{
  open: boolean;
  project: ProjectData | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const getStatusPingClass = (status: string): string => {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("live")) {
    return "bg-green-500";
  }

  if (normalizedStatus.includes("construction")) {
    return "bg-yellow-400";
  }

  return "bg-gray-400";
};
</script>
