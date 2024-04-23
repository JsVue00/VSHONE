<template>
  <div class="min-h-screen w-full">
    <nav>
      <AdminHeader />
    </nav>
    <main class="flex w-full">
      <div>
        <AdminSidebar />
      </div>
      <div class="p-2 overflow-x-auto min-h-full w-full bg-gray-300">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import AdminHeader from '@/components/AdminHeader.vue';
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>
