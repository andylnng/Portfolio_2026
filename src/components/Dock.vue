<template>
  <ContactWindowModal
    :open="activeModal === 'contact'"
    @close="activeModal = null"
  />
  <FilesWindowModal
    :open="activeModal === 'files'"
    @close="activeModal = null"
  />
  <MessageWindowModal
    :open="activeModal === 'messages'"
    @close="activeModal = null"
  />
  <MailWindowModal :open="activeModal === 'mail'" @close="activeModal = null" />

  <nav
    class="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 pointer-events-none"
  >
    <div
      class="pointer-events-auto rounded-2xl border border-white/12 bg-black/20 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
    >
      <div class="flex items-end gap-2 md:gap-3">
        <div
          v-for="(item, index) in dockItems"
          :key="item.label"
          :aria-label="item.label"
          class="group relative flex-col items-center justify-end outline-none"
          :class="index < 4 ? 'flex' : 'hidden md:flex'"
        >
          <span
            class="pointer-events-none absolute -top-10 whitespace-nowrap rounded-xl border border-white/10 bg-black/70 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
          >
            {{ item.label }}
          </span>

          <button
            type="button"
            :aria-label="`Open ${item.label}`"
            @click="openDockItem(item)"
            class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl text-white transition-all duration-200 group-hover:-translate-y-0.5"
          >
            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="`${item.label} icon`"
              class="h-full w-full rounded-2xl object-cover"
            />
            <span
              v-else
              class="text-sm font-semibold tracking-wide text-white/95"
            >
              {{ item.shortLabel }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ContactWindowModal from "./modals/ContactWindowModal.vue";
import FilesWindowModal from "./modals/FilesWindowModal.vue";
import MessageWindowModal from "./modals/MessageWindowModal.vue";
import MailWindowModal from "./modals/MailWindowModal.vue";
import Resume from "./Resume.vue";

type DockModal = "contact" | "files" | "messages" | "mail" | "resume" | null;

type DockItem = {
  label: string;
  shortLabel: string;
  imageUrl?: string;
  imageClass?: string;
  modal?: DockModal;
};

const activeModal = ref<DockModal>(null);

const openDockItem = (item: DockItem) => {
  if (item.modal) {
    activeModal.value = item.modal;
  }
};

const dockItems: DockItem[] = [
  {
    label: "Files",
    shortLabel: "AM",
    imageUrl: "/public/assets/folder.png",
    modal: "files",
  },
  {
    label: "Contacts",
    shortLabel: "AM",
    imageUrl: "/public/assets/contacts.png",
    modal: "contact",
  },
  {
    label: "Messages",
    shortLabel: "AM",
    imageUrl: "/public/assets/message.png",
    modal: "messages",
  },
  {
    label: "Resume",
    shortLabel: "AM",
    imageUrl: "/public/assets/resume.png",
    modal: "resume",
  },
  {
    label: "Mail",
    shortLabel: "AM",
    imageUrl: "/public/assets/apple-mail.svg",
    modal: "mail",
  },
];
</script>
