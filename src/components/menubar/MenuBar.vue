<template>
  <div class="bg-black/20 py-1 px-6">
    <div
      class="text-white flex justify-between items-center font-light text-sm"
    >
      <div class="flex gap-4">
        <h2>Finder</h2>
        <h2>File</h2>
        <h2>Edit</h2>
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
