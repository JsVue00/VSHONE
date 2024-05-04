<template>
  <div class="overflow-auto">
    <AdminFormHeader :title="$t('quiz_list')">
      <el-button type="primary" @click="$router.push({ name: 'create-new-quiz' })">{{
        $t('create_new')
      }}</el-button>
    </AdminFormHeader>
    <DataTable />
  </div>
</template>
<script lang="ts" setup>
import DataTable from '@/components/admin/QuizDataTable.vue';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
</script>
