<template>
  <div
    class="relative bg-white/10 backdrop-blur-3xl border border-white/10 p-6 rounded-2xl w-full"
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
      <span class="text-sm font-light tracking-wide text-white"
        >Available for internship · Fall 2026</span
      >
    </div>
    <div class="mb-4">
      <h2 class="text-3xl text-white mb-1">Hi, i'm Andy.</h2>
    </div>
    <div class="text-white/90">
      <p class="mb-4">
        Third year Software engineering student at
        <label class="text-white font-semibold">ÉTS</label> based in Montreal
        who builds things outside the classroom web apps, tools, and interfaces
        where design and code meet. Previously interned at
        <label class="text-white font-semibold">Safran Landing Systems</label>
        2025.
      </p>
      <p class="mb-2 text-md">
        Currently working on
        <a
          href="https://notets.app"
          target="_blank"
          class="text-white font-semibold"
          >notETS</a
        >
        a platform for students to share their course notes and possibly making
        money from it.
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
        <div>
          <a
            href="mailto:andy.luong.1@ens.etsmtl.ca"
            target="_blank"
            class="text-white underline underline-offset-4"
            >Contact Me</a
          >
          <ArrowUpRight class="inline-block ml-1 mb-1 w-3 h-3 text-gray-300" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ArrowUpRight } from "lucide-vue-next";
</script>
