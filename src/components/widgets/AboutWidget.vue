<template>
  <div
    class="bg-black/30 backdrop-blur-3xl border border-white/10 p-6 rounded-2xl w-full"
  >
    <div class="inline-flex items-center gap-2 mb-4">
      <span class="relative flex h-2.5 w-2.5">
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
        />
        <span
          class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"
        />
      </span>
      <span class="text-xs font-light tracking-wide text-white"
        >Available for work</span
      >
    </div>
    <h2 class="text-3xl text-white mb-4">Hi, i'm Andy.</h2>
    <div>
      <p class="text-gray-200 mb-2">
        I'm a passionate
        <label class="font-bold"
          >Front-end developer and UX/UI enthusiast</label
        >
        with experience in creating modern web applications. I enjoy working at
        the intersection of design and engineering.
      </p>
    </div>
    <div class="mt-6">
      <div class="flex space-x-4">
        <div>
          <a
            href="https://github.com/andylnng"
            target="_blank"
            class="text-white underline underline-offset-4"
            >Github</a
          >
          <ArrowUpRight class="inline-block ml-1 mb-1 w-3 h-3 text-gray-300" />
        </div>

        <div>
          <a
            href="https://linkedin.com"
            target="_blank"
            class="text-white underline underline-offset-4"
            >LinkedIn</a
          >
          <ArrowUpRight class="inline-block ml-1 mb-1 w-3 h-3 text-gray-300" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ArrowUpRight } from "lucide-vue-next";
</script>
