<template>
  <div class="overflow-auto">
    <div class="flex justify-end w-full py-2">
      <el-button type="primary" @click="$router.push({ name: 'create-new-quiz' })">{{
        $t('quiz.create_new')
      }}</el-button>
    </div>
    <DataTable />
  </div>
</template>
<script lang="ts" setup>
import DataTable from '@/components/DataTable.vue';
import { appStore } from '@/stores';
const store = appStore();
</script>
