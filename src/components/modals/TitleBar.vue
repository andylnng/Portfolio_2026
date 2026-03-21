<template>
  <header :class="headerClass">
    <button
      type="button"
      class="h-3 w-3 rounded-full bg-red-500"
      @click="emit('close')"
    />
    <button type="button" class="h-3 w-3 rounded-full bg-yellow-400" />
    <button type="button" class="h-3 w-3 rounded-full bg-green-500" />
    <p v-if="title" class="ml-2 text-sm font-medium text-white/85">
      {{ title }}
    </p>
  </header>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    headerClass?: string;
  }>(),
  {
    title: "",
    headerClass:
      "flex items-center gap-3 border-b border-white/10 bg-white/8 px-4 py-3",
  },
);

const emit = defineEmits<{
  close: [];
}>();
</script>
