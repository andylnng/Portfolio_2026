<template>
  <nav class="w-84 bg-[#272727] p-8 rounded-3xl m-6">
    <div class="flex flex-col space-y-2 w-full border-b border-[#4a4a4a] pb-4 mb-4">
        <RouterLink
          to="/"
          class="text-[#FFFFFF] p-4 rounded-xl hover:bg-[#333333] transition-colors"
          :class="{'bg-[#333333] font-semibold': route.path==='/'}"
          >Andy Luong</RouterLink
        >
        <RouterLink
          to="/resume"
          class="text-[#FFFFFF] p-4 rounded-xl hover:bg-[#333333] transition-colors"
          :class="{'bg-[#333333] font-semibold': route.path==='/resume'}"
          >Resume</RouterLink
        >
    </div>
    <div class="flex flex-col space-y-2 w-full">

            <h1 class="text-[#FFFFFF] text-lg p-4">Projects</h1>
      
        <RouterLink
          to="/yumzy"
          class="text-[#FFFFFF] p-4 rounded-lg hover:bg-[#333333] transition-colors"
          >Yumzy</RouterLink
        >
        <RouterLink
          to="/studybuddy"
          class="text-[#FFFFFF] p-4 rounded-lg hover:bg-[#333333] transition-colors"
          >StudyBuddy</RouterLink
        >
                <RouterLink
          to="/stockly"
          class="text-[#FFFFFF] p-4 rounded-lg hover:bg-[#333333] transition-colors"
          >Stockly</RouterLink
        >
    </div>

  </nav>
</template>

<script lang="ts" setup>
import { Folder } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
