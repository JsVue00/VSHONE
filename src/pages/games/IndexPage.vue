<template>
  <div><router-view></router-view></div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
onMounted(() => {
  router.push('/games/1');
});
</script>
