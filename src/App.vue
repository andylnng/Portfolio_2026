<template>
  <div class="app-background relative min-h-screen">
    <MenuBar :current-time="currentTime" />
    <main class="relative overflow-auto p-6 pb-36 md:pb-40">
      <div class="grid items-start gap-8 md:grid-cols-11">
        <section class="md:col-span-6">
          <SkeletonLoader v-if="loading.about" />
          <Transition name="fade-up">
            <div v-if="!loading.about">
              <AboutWidget />
            </div>
          </Transition>

          <div class="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6">
            <SkeletonLoader v-if="loading.goal" />
            <Transition name="fade-up">
              <div v-if="!loading.goal">
                <GoalWidget />
              </div>
            </Transition>

            <SkeletonLoader v-if="loading.gitCommit" />
            <Transition name="fade-up">
              <div v-if="!loading.gitCommit">
                <GitCommitWidget owner="andylnng" repo="Portfolio_2026" />
              </div>
            </Transition>

            <SkeletonLoader v-if="loading.currentProject" />
            <Transition name="fade-up">
              <div v-if="!loading.currentProject">
                <CurrentProject />
              </div>
            </Transition>
          </div>
        </section>

        <section class="md:col-span-5">
          <SkeletonLoader v-if="loading.grid" variant="grid" :count="12" />
          <Transition name="fade-right">
            <div v-if="!loading.grid">
              <AppGrid />
            </div>
          </Transition>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AboutWidget from "./components/widgets/AboutWidget.vue";
import AppGrid from "./components/AppGrid.vue";
import MenuBar from "./components/menubar/MenuBar.vue";
import GitCommitWidget from "./components/widgets/GitCommitWidget.vue";
import CurrentProject from "./components/widgets/CurrentProjectWidget.vue";
import GoalWidget from "./components/widgets/GoalWidget.vue";
import SkeletonLoader from "./components/SkeletonLoader.vue";

import { reactive, ref, onMounted, onUnmounted } from "vue";

const formatCurrentTime = (date: Date) =>
  date
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\./g, "")
    .toLowerCase();

const currentTime = ref(formatCurrentTime(new Date()));
let timer: number;
const loading = reactive({
  about: true,
  goal: true,
  gitCommit: true,
  currentProject: true,
  grid: true,
});

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = formatCurrentTime(new Date());
  }, 1000);

  setTimeout(() => {
    loading.about = false;
  }, 220);
  setTimeout(() => {
    loading.goal = false;
  }, 340);
  setTimeout(() => {
    loading.gitCommit = false;
  }, 440);
  setTimeout(() => {
    loading.currentProject = false;
  }, 540);
  setTimeout(() => {
    loading.grid = false;
  }, 640);

  console.log(timer);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.app-background {
  background: linear-gradient(
    135deg,
    #d0415e 0%,
    #d0415e 20%,
    #d65767 calc(20% + 1px),
    #d65767 40%,
    #db7971 calc(40% + 1px),
    #db7971 60%,
    #e0a57c calc(60% + 1px),
    #e0a57c 80%,
    #e6d886 calc(80% + 1px) 100%
  );
}

.fade-up-enter-active,
.fade-right-enter-active {
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-right-enter-from {
  opacity: 0;
  transform: translateX(8px);
}
</style>
