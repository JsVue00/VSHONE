<template>
  <div class="h-screen w-full">
    <nav>
      <AdminHeader />
    </nav>
    <main class="flex">
      <AdminSidebar />
      <div class="container p-2">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import AdminHeader from '@/components/AdminHeader.vue';
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>
