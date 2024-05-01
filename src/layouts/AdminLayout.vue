<template>
  <div class="min-h-screen w-full">
    <nav>
      <AdminHeader />
    </nav>
    <main class="flex w-full">
      <!-- Sidebar left -->
      <div>
        <AdminSidebar />
      </div>
      <!-- Body components -->
      <div
        class="p-2 overflow-x-auto max-h-[calc(100vh-50px)] w-full bg-gray-300 overflow-y-scroll"
      >
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import AdminHeader from '@/components/AdminHeader.vue';
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>
