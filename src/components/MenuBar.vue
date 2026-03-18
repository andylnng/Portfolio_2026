<template>
  <div class="bg-black/20 w-full p-1 px-6">
    <div
      class="text-white flex justify-between items-center font-light text-sm"
    >
      <div class="flex gap-4">
        <h1>Preference</h1>
        <h2>File</h2>
        <h2>test</h2>
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
