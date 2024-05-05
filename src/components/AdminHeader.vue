<template>
  <div
    class="min-h-[50px] relative bg-background1 w-full flex justify-center items-center text-text1 border-b-2 px-2 border-[var(--secondary)]">
    <div class="absolute left-3 index-10">
      <button @click="handleSidebar()">
        <el-icon size="20" class="sidebar" :class="{ 'sidebar-close': !store.isShowSidebar }">
          <Expand />
        </el-icon>
      </button>
    </div>

    <div class="time absolute right-6">
      <div class="flex gap-2">
        <div>
          {{ dateTime }}
        </div>
        <div>
          <SwitchLanguageButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Expand } from '@element-plus/icons-vue';
import userHeader from '@/composables/useHeader';
import SwitchLanguageButton from '@/components/SwitchLanguageButton.vue';

const { dateTime, handleSidebar, store } = userHeader();
</script>

<style scoped>
.sidebar {
  rotate: 0deg;
  transition: rotate 0.5s ease-in-out;
}

.sidebar-close {
  rotate: 180deg;
}

.el-button {
  background-color: transparent !important;
}
</style>
