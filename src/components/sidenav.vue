<template>
    <nav class="w-64 bg-white h-screen p-4">
        <ul>
            <li class="mb-4">
                <RouterLink to="/" class="text-gray-800 hover:text-gray-600 transition-colors" :class="{'font-bold text-blue-600': route.path === '/'}">Home</RouterLink>
            </li>
            <li class="mb-4">
                <RouterLink to="/about" class="text-gray-800 hover:text-gray-600 transition-colors" :class="{'font-bold text-blue-600': route.path === '/about'}">About</RouterLink>
            </li>
            <li class="mb-4">
                <RouterLink to="/projects" class="text-gray-800 hover:text-gray-600 transition-colors" :class="{'font-bold text-blue-600': route.path === '/projects'}">Projects</RouterLink>
            </li>
            <li>
                <RouterLink to="/contact" class="text-gray-800 hover:text-gray-600 transition-colors" :class="{'font-bold text-blue-600': route.path === '/contact'}">Contact</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>