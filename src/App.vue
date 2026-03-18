<template>
  <div
    class="relative min-h-screen bg-cover bg-center bg-no-repeat"
    style="
      background-image: url(macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-4096x2304-1455.jpg);
    "
  >
    <div class="absolute inset-0" />
    <main class="relative overflow-auto p-6 pb-36 md:pb-40">
      <div class="grid items-start gap-8 md:grid-cols-11">
        <section class="md:col-span-6">
          <AboutWidget />
        </section>

        <section class="md:col-span-5">
          <RouterView />
          <AppGrid />
        </section>
      </div>
    </main>
    <Dock />
  </div>
</template>

<script setup lang="ts">
import Dock from "./components/Dock.vue";
import AboutWidget from "./components/AboutWidget.vue";
import AppGrid from "./components/AppGrid.vue";
import EducationStatusWidget from "./components/EducationStatusWidget.vue";
import SkillsWidget from "./components/SkillsWidget.vue";
</script>
