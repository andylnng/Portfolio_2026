<template>
  <div class="bg-[#222222] h-screen p-6 flex">
    <SideNav />
    <main class="flex-1 overflow-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideNav from "./components/sidenav.vue";
</script>
