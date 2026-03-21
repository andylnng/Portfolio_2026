<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-12 opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-12 opacity-0"
  >
    <div v-if="open" class="fixed inset-0 z-40">
      <button
        type="button"
        aria-label="Close files window"
        class="absolute inset-0"
        @click="emit('close')"
      />

      <section
        class="absolute left-8 top-10 bottom-36 w-full rounded-xl border border-white/10 bg-black/85 backdrop-blur-2xl md:w-lg"
      >
        <ModalWindowHeader title="Files" @close="emit('close')" />

        <main class="h-[calc(100%-52px)] overflow-y-auto p-6 text-white/90">
          <p class="text-sm text-white/70">Recent files</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li class="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              Portfolio_2026
            </li>
            <li class="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              Resume.pdf
            </li>
            <li class="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              Notes.md
            </li>
          </ul>
        </main>
      </section>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import ModalWindowHeader from "./TitleBar.vue";

defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>
