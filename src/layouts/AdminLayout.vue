<template>
  <div class="h-screen w-screen">
    <nav>
      <AdminHeader />
    </nav>
    <main class="flex">
      <div>
        <AdminSidebar />
      </div>
      <div class="container p-2 overflow-x-auto min-h-full bg-gray-300">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import AdminHeader from '@/components/AdminHeader.vue';
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>
