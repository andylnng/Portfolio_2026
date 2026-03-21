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
        aria-label="Close messages window"
        class="absolute inset-0"
        @click="emit('close')"
      />

      <section
        class="absolute left-8 top-10 bottom-36 w-full rounded-xl border border-white/10 bg-black/85 backdrop-blur-2xl md:w-lg"
      >
        <ModalWindowHeader title="Messages" @close="emit('close')" />

        <main class="h-[calc(100%-52px)] overflow-y-auto p-6 text-white/90">
          <div class="space-y-3 text-sm">
            <div class="rounded-lg border border-white/10 bg-white/5 p-3">
              <p class="font-medium">Alex</p>
              <p class="mt-1 text-white/70">
                Can we review the latest portfolio build?
              </p>
            </div>
            <div class="rounded-lg border border-white/10 bg-white/5 p-3">
              <p class="font-medium">Recruiter</p>
              <p class="mt-1 text-white/70">
                Thanks for sharing your projects.
              </p>
            </div>
          </div>
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
