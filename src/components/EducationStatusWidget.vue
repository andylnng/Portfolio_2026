<template>
  <div
    class="bg-white/10 backdrop-blur-3xl border border-white/10 p-6 rounded-2xl col-span-2"
  >
    <div
      class="inline-flex items-center gap-2 mb-4 rounded-full bg-white/20 px-3 py-1.5 border border-white/20"
    >
      <span class="text-xs font-light tracking-wide text-white/90"
        >Education</span
      >
    </div>
    <p class="text-white mt-2">BEng in Software Engineering</p>

    <div class="mt-4">
      <div class="mb-2 flex items-center justify-between text-xs text-white/80">
        <span>Progress</span>
        <span>{{ current }} / {{ total }}</span>
      </div>

      <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
        <div
          class="h-full rounded-full bg-white/80 transition-all duration-300"
          :style="{ width: `${progressPercent}%` }"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const current = 76;
const total = 116;

const progressPercent = computed(() => Math.round((current / total) * 100));
</script>
