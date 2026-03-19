<template>
  <div
    class="relative min-h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url(martin-martz-W0NRebXbsjM-unsplash.jpg)"
  >
    <MenuBar :current-time="currentTime" />
    <div class="absolute inset-0" />
    <main class="relative overflow-auto p-6 pb-36 md:pb-40">
      <div class="grid items-start gap-8 md:grid-cols-11">
        <section class="md:col-span-6">
          <AboutWidget />
          <div class="grid grid-cols-3 mt-6 gap-6">
            <GitCommitWidget owner="andylnng" repo="Portfolio_2026" />
            <CurrentProject />
            <GoalWidget />
          </div>
        </section>

        <section class="md:col-span-5">
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
import MenuBar from "./components/MenuBar.vue";
import GitCommitWidget from "./components/GitCommitWidget.vue";
import CurrentProject from "./components/CurrentProject.vue";
import FunFactWidget from "./components/FunFactWidget.vue";
import GoalWidget from "./components/GoalWidget.vue";

import { ref, onMounted, onUnmounted } from "vue";

const currentTime = ref(
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
let timer: number;

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, 1000);
  console.log(timer);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
