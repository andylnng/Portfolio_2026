<template>
  <div
    class="group relative flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10"
  >
    <img src="/notETS.png" alt="NotETS" class="h-full w-full object-cover" />

    <span
      class="absolute left-3 right-3 top-5 inline-flex items-center gap-2 text-sm text-black"
    >
      <span class="relative flex h-2.5 w-2.5">
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75"
        />
        <span
          class="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-300"
        />
      </span>
      <span class="inline-flex items-end">
        Coding
        <span class="ml-0.5 inline-flex">
          <span class="loading-dot">.</span>
          <span class="loading-dot">.</span>
          <span class="loading-dot">.</span>
        </span>
      </span>
    </span>

    <span
      class="pointer-events-none absolute inset-x-0 bottom-4 text-center text-base font-semibold tracking-wide text-gray-800 opacity-0 translate-y-2 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"
    >
      notETS
    </span>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped>
.loading-dot {
  animation: dotPulse 1.2s infinite;
  opacity: 0.2;
  transform: translateY(1px);
}

.loading-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dotPulse {
  0%,
  20% {
    opacity: 0.2;
    transform: translateY(1px);
  }

  40% {
    opacity: 1;
    transform: translateY(-1px);
  }

  100% {
    opacity: 0.2;
    transform: translateY(1px);
  }
}
</style>
