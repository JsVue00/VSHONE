<template>
  <div
    class="min-h-[50px] relative bg-background1 w-full flex justify-center items-center text-text1 border-b-2 border-[var(--secondary)]"
  >
    <div class="absolute left-3">
      <button @click="store.toggleSidebar">
        <el-icon size="20" class="sidebar" :class="{ 'sidebar-close': !store.isShowSidebar }">
          <Expand />
        </el-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Expand } from '@element-plus/icons-vue';
import { appStore } from '@/stores';
const store = appStore();
</script>

<style scoped>
.sidebar {
  rotate: 0deg;
  transition: rotate 0.5s ease-in-out;
}
.sidebar-close {
  rotate: 180deg;
}
</style>
