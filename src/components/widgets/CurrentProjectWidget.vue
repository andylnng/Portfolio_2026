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
      Coding...
    </span>

    <span
      class="pointer-events-none absolute inset-x-0 bottom-4 text-center text-base font-semibold tracking-wide text-gray-800 opacity-0 translate-y-2 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"
    >
      NotETS
    </span>
  </div>
</template>
<script lang="ts" setup></script>
