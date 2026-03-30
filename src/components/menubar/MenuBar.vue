<template>
  <div class="bg-black/20 py-2 px-6">
    <div
      class="text-white flex justify-between items-center font-light text-sm"
    >
      <div class="flex gap-4">
        <h2>Tech Stack</h2>
        <h2>Experience</h2>
      </div>

      <div>{{ currentTime }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  currentTime: string;
}>();
</script>
