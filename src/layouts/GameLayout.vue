<template>
  <div id="gameLayout" class="h-full">
    <nav>
      <TheGameHeading />
    </nav>
    <main class="text-text1">
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import TheGameHeading from '@/components/TheGameHeading.vue'
</script>
<style scoped>
#gameLayout {
  background: #373131;
}
</style>
