<template>
  <el-button type="primary" size="small" @click="changeLanguage">{{ $t('language') }}</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { appStore } from '@/stores';

const isLoading = ref<boolean>(false);
const store = appStore();
const changeLanguage = async () => {
  isLoading.value = true;
  await new Promise(() =>
    setTimeout(async () => {
      store.changeLanguage();
      window.location.reload();
    }, 500)
  );
  isLoading.value = false;
};
</script>
@/stores
