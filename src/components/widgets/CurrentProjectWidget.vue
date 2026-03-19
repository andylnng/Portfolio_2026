<template>
  <div
    class="group relative inline-flex justify-center items-center gap-3 rounded-5xl"
  >
    <img
      src="/assets/notETS.png"
      alt="NotETS"
      class="rounded-2xl object-cover"
    />

    <span
      class="absolute top-5 left-3 right-3 w-full inline-flex items-center gap-2 text-sm text-black"
    >
      <span class="relative flex h-2.5 w-2.5">
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75"
        />
        <span
          class="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-300"
        />
      </span>
      Working on
    </span>

    <span
      class="pointer-events-none absolute inset-x-0 bottom-4 text-center text-base font-semibold tracking-wide text-gray-400 opacity-0 translate-y-2 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"
    >
      NotETS
    </span>
  </div>
</template>
<script lang="ts" setup></script>
