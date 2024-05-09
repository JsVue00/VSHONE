<template>
  <div id="gameLayout" class=" min-h-screen w-full bg-gradient-to-tr to-green-500 from-gray-700">
    <nav>
      <TheGameHeading />
    </nav>
    <main class="text-text2 w-full  ">
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import TheGameHeading from '@/components/TheGameHeading.vue';
</script>
