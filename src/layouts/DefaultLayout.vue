<template>
  <div class="flex-col flex relative">
    <!-- <nav class="sticky top-0" @scroll="handleScroll">
      <TheHeading />
    </nav> -->
    <div class="h-full">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TheHeading from '@/components/TheHeading.vue';
import { ref } from 'vue';
const showElement = ref(false);
const lastScrollTop = ref(0);

const handleScroll = (event: any) => {
  const scrollTop = event.target.scrollTop;

  if (scrollTop > lastScrollTop.value) {
    // Scrolling down
    showElement.value = false;
  } else {
    // Scrolling up
    showElement.value = true;
  }

  lastScrollTop.value = scrollTop;
};
</script>
