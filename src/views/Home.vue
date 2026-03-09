<template>
  <div class="flex items-center justify-center h-full max-w-xl mx-auto">
    <div>
      <h1 class="text-4xl text-white mb-4">Hi, I'm Andy.</h1>
      <div class="space-y-2">
        <p class="text-gray-300">
          I'm a Front-end developer and UX/UI enthusiast based in Montreal. I
          combine design and development to create simple, helpful, and
          human-centered experiences.
        </p>
        <p class="text-gray-300">
          I am currently building
          <label class="underline text-white font-semibold">yumzy</label>. A
          smart meal planner that finds recipes based on your budget and what's
          available at local grocery stores.
        </p>
      </div>
      <div class="mt-6">
        <div class="flex space-x-4">
          <div>
            <a
              href="https://github.com"
              target="_blank"
              class="text-white underline underline-offset-4"
              >Github</a
            >
            <ArrowUpRight
              class="inline-block ml-1 mb-1 w-3 h-3 text-gray-300"
            />
          </div>

          <div>
            <a
              href="https://linkedin.com"
              target="_blank"
              class="text-white underline underline-offset-4"
              >LinkedIn</a
            >
            <ArrowUpRight
              class="inline-block ml-1 mb-1 w-3 h-3 text-gray-300"
            />
          </div>
          <div>
            <a
              href="https://twitter.com"
              target="_blank"
              class="text-white underline underline-offset-4"
              >Twitter</a
            >
            <ArrowUpRight
              class="inline-block ml-1 mb-1 w-3 h-3 text-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
</script>
