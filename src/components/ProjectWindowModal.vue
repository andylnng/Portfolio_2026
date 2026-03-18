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
        class="absolute right-0 top-0 w-full border-l rounded-xl border-white/10 bg-black/35 backdrop-blur-2xl md:w-205 mt-6 mr-6 mb-36"
      >
        <header
          class="flex items-center gap-3 border-b rounded-t-xl border-white/10 bg-white/8 px-4 py-3"
        >
          <button
            class="h-3 w-3 rounded-full bg-red-500"
            @click="emit('close')"
          />
          <span class="h-3 w-3 rounded-full bg-yellow-400" />
          <span class="h-3 w-3 rounded-full bg-green-500" />
          <p class="ml-2 text-sm font-medium text-white/85">
            {{ project.title }}
          </p>
        </header>

        <div class="grid h-[calc(100%-56px)] md:grid-cols-[260px_1fr]">
          <aside class="border-r border-white/10 p-4 text-white/90">
            <p class="text-xs uppercase tracking-wide text-white/60">Details</p>
            <p class="mt-2 text-sm">{{ project.description }}</p>

            <p class="mt-5 text-xs uppercase tracking-wide text-white/60">
              Tech Stack
            </p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs"
              >
                {{ tech }}
              </span>
            </div>

            <p class="mt-5 text-xs uppercase tracking-wide text-white/60">
              Links
            </p>
            <div class="mt-2 flex flex-col gap-2 text-sm">
              <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
                class="text-white underline underline-offset-4"
              >
                {{ link.label }}
              </a>
            </div>
          </aside>

          <main class="overflow-auto p-4">
            <div class="grid gap-3 sm:grid-cols-2">
              <img
                v-for="shot in project.screenshots"
                :key="shot"
                :src="shot"
                :alt="`${project.title} screenshot`"
                class="h-44 w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </main>
        </div>
      </section>
    </div>
  </Transition>
</template>

<script setup lang="ts">
export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectData = {
  title: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  screenshots: string[];
};

defineProps<{
  open: boolean;
  project: ProjectData | null;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>
