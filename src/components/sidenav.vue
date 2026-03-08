<template>
    <nav class="w-96 bg-[#272727] p-8 rounded-3xl m-6">
        <div class="flex flex-col space-y-2 w-full">
                <RouterLink to="/" class="text-[#FFFFFF] p-4 rounded-lg hover:bg-[#333333] transition-colors">Home</RouterLink>
                <RouterLink to="/about" class="text-[#FFFFFF] p-4 rounded-lg hover:bg-[#333333] transition-colors" >About</RouterLink>
                <RouterLink to="/projects" class="text-[#FFFFFF] p-4 rounded-lg hover:bg-[#333333] transition-colors" >Projects</RouterLink>
                <RouterLink to="/contact" class="text-[#FFFFFF] p-4 rounded-lg hover:bg-[#333333] transition-colors">Contact</RouterLink>
        </div> 
    </nav>
</template>

<script lang="ts" setup>

</script>