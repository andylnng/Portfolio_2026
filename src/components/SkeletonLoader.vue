<template>
  <div
    v-if="variant === 'widget'"
    class="w-full rounded-2xl border border-white/10 bg-black/10 p-6 backdrop-blur-3xl"
  >
    <div class="skeleton h-7 w-32 rounded-full" />
    <div class="mt-5 skeleton h-8 w-44 rounded-lg" />
    <div class="mt-4 space-y-3">
      <div class="skeleton h-4 w-full rounded" />
      <div class="skeleton h-4 w-10/12 rounded" />
      <div class="skeleton h-4 w-8/12 rounded" />
    </div>
  </div>

  <div v-else class="grid w-full grid-cols-4 gap-2 md:grid-cols-5 md:gap-4">
    <div v-for="i in count" :key="i" class="flex flex-col items-center">
      <div class="skeleton h-16 w-16 rounded-xl" />
      <div class="mt-2 skeleton h-3 w-12 rounded" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "widget" | "grid";
    count?: number;
  }>(),
  {
    variant: "widget",
  },
);
</script>

<style scoped>
.skeleton {
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0.08) 20%,
    rgba(255, 255, 255, 0.16) 40%,
    rgba(255, 255, 255, 0.08) 60%
  );
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;
}

@keyframes shimmer {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
</style>
