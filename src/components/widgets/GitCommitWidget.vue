<template>
  <div
    class="flex h-60 w-full flex-col rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-3xl"
  >
    <div class="mb-3 text-white inline-flex items-center">
      <Github class="h-6 w-6" />
      <span class="text-md">Latest commit</span>
    </div>

    <p class="text-xs text-white/70">{{ owner }}/{{ repo }}</p>

    <p v-if="loading" class="mt-3 text-sm text-white/80">Loading commit...</p>
    <p v-else-if="errorMessage" class="mt-3 text-sm text-white">
      {{ errorMessage }}
    </p>

    <template v-else-if="commit">
      <p class="mt-3 line-clamp-2 text-white">
        {{ commit.commit.message }}
      </p>

      <div class="mt-3 text-xs text-white/70">
        <p>Author: {{ commit.commit.author.name }}</p>
        <p>{{ formattedDate }}</p>
      </div>
    </template>

    <p v-else class="mt-3 text-sm text-white/80">No commits found.</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { Github } from "lucide-vue-next";

type GitHubCommit = {
  html_url: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
};

const props = withDefaults(
  defineProps<{
    owner?: string;
    repo?: string;
  }>(),
  {
    owner: "andylnng",
    repo: "Portfolio_2026",
  },
);

const commit = ref<GitHubCommit | null>(null);
const loading = ref(false);
const errorMessage = ref("");

const formattedDate = computed(() => {
  if (!commit.value) {
    return "";
  }

  return new Date(commit.value.commit.author.date).toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
});

const fetchLatestCommit = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await fetch(
      `https://api.github.com/repos/${props.owner}/${props.repo}/commits?per_page=1`,
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = (await response.json()) as GitHubCommit[];
    commit.value = data[0] ?? null;
  } catch {
    errorMessage.value = "Couldn't load latest commit right now.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  void fetchLatestCommit();
});
</script>
