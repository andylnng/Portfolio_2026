<template>
  <div
    class="relative min-h-screen bg-cover bg-center bg-no-repeat"
    style="
      background-image: url(macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-4096x2304-1455.jpg);
    "
  >
    <div class="absolute inset-0" />
    <main class="relative min-h-screen overflow-auto p-12 pb-36 md:pb-40">
      <RouterView />
      <AboutWidget />
    </main>
    <Dock />
  </div>
</template>

<script setup lang="ts">
import Dock from "./components/Dock.vue";
import AboutWidget from "./components/about-widget.vue";
</script>
