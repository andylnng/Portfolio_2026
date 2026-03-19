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
        aria-label="Close mail window"
        class="absolute inset-0"
        @click="emit('close')"
      />

      <section
        class="absolute left-8 top-10 bottom-36 w-full rounded-xl border border-white/10 bg-black/85 backdrop-blur-2xl md:w-lg"
      >
        <header
          class="flex items-center gap-3 border-b border-white/10 bg-white/8 px-4 py-3"
        >
          <button
            type="button"
            class="h-3 w-3 rounded-full bg-red-500"
            @click="emit('close')"
          />
          <button type="button" class="h-3 w-3 rounded-full bg-yellow-400" />
          <button type="button" class="h-3 w-3 rounded-full bg-green-500" />
          <p class="ml-2 text-sm font-medium text-white/85">Mail</p>
        </header>

        <main class="h-[calc(100%-52px)] overflow-y-auto p-6 text-white/90">
          <p class="text-sm text-white/70">Inbox</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li class="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              Subject: Portfolio update
            </li>
            <li class="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              Subject: Interview follow up
            </li>
          </ul>
        </main>
      </section>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>
