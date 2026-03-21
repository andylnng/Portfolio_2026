<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-12 opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-12 opacity-0"
  >
    <div v-if="open" class="fixed inset-0 z-40">
      <button
        type="button"
        aria-label="Close contact window"
        class="absolute inset-0"
        @click="emit('close')"
      />

      <section
        class="absolute left-1/2 top-16 h-[min(70vh,540px)] w-[min(94vw,980px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#1f1f22]/95 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      >
        <ModalWindowHeader
          header-class="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-2.5"
          @close="emit('close')"
        />

        <main
          class="grid h-[calc(100%-46px)] grid-cols-1 md:grid-cols-[280px_1fr]"
        >
          <aside class="border-r border-white/10 p-4 text-white/90">
            <div
              class="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2"
            >
              <Search class="h-4 w-4 text-white/65" />
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Search"
                class="w-full bg-transparent text-base text-white/85 placeholder:text-white/35 focus:outline-none"
              />
            </div>

            <div class="mt-5">
              <p class="text-2xl font-semibold tracking-tight text-white/40">
                F
              </p>
              <div class="mt-2 h-px bg-white/12" />
            </div>

            <div
              class="mt-3 space-y-2 overflow-y-auto pr-1 text-lg leading-tight"
            >
              <button
                v-for="contact in filteredContacts"
                :key="contact.name"
                type="button"
                class="block text-left text-white transition hover:text-white/70"
                :class="
                  contact.name === activeContact.name
                    ? 'text-white'
                    : 'text-white/90'
                "
                @click="activeContact = contact"
              >
                {{ contact.name }}
              </button>
            </div>
          </aside>

          <section class="flex flex-col p-6 text-white/90">
            <div class="border-b border-white/12 pb-6">
              <div class="flex flex-col items-center gap-4 text-white">
                <div class="flex items-center gap-3">
                  <span
                    class="inline-flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-semibold"
                  >
                    F
                  </span>
                </div>
                <p class="text-3xl">{{ activeContact.name }}</p>
                <p class="text-md">{{ activeContact.internshipRole }}</p>
              </div>
            </div>

            <div class="space-y-8 mt-6 text-lg">
              <div class="grid grid-cols-2">
                <div>
                  <p class="text-sm uppercase tracking-wide text-white/60">
                    Job Role
                  </p>
                  <p class="mt-1 text-white/80">
                    {{ activeContact.jobRole }}
                  </p>
                </div>
                <div>
                  <p class="text-sm uppercase tracking-wide text-white/60">
                    Company
                  </p>
                  <p class="mt-1 text-white/80">
                    {{ activeContact.company }}
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div>
                  <p class="text-sm uppercase tracking-wide text-white/60">
                    Email
                  </p>
                  <p class="mt-1 text-white/80">{{ activeContact.email }}</p>
                </div>
                <div>
                  <p class="text-sm uppercase tracking-wide text-white/60">
                    Phone
                  </p>
                  <p class="mt-1 text-white/80">{{ activeContact.phone }}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Search } from "lucide-vue-next";
import ModalWindowHeader from "./TitleBar.vue";

type Contact = {
  name: string;
  jobRole: string;
  internshipRole: string;
  company: string;
  email: string;
  phone: string;
};

const contacts: Contact[] = [
  {
    name: "Félip Rousseau",
    jobRole: "Full Stack Developer",
    internshipRole: "Supervisor ",
    company: "Safran Landing Systems",
    email: "On demand",
    phone: "On demand",
  },
];

const activeContact = ref<Contact>(contacts[0]!);
const searchTerm = ref("");

const filteredContacts = computed(() => {
  const term = searchTerm.value.trim().toLowerCase();
  if (!term) {
    return contacts;
  }

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(term),
  );
});

defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>
