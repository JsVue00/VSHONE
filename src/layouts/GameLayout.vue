<template>
  <div id="gameLayout" class="h-[80vh] w-full">
    <nav>
      <TheGameHeading />
    </nav>
    <main class="text-text2 w-full">
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import TheGameHeading from '@/components/TheGameHeading.vue';
</script>
