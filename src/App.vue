<template>
  <div class="min-h-[80vh] w-full">
    <component :is="$route.meta.Layout || 'div'">
      <router-view></router-view>
    </component>
  </div>
  <TheFooter />
</template>
<script lang="ts" setup>
import TheFooter from '@/components/TheFooter.vue';
</script>
