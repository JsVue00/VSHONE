<template>
  <div class="overflow-auto">
    <AdminFormHeader :title="$t('user_list')">
      <el-button type="primary" @click="$router.push({ name: 'create-new-quiz' })">{{
        $t('create_new')
      }}</el-button>
    </AdminFormHeader>
    <DataTable />
  </div>
  <!-- Dialogin -->
  <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import DataTable from '@/components/admin/QuizDataTable.vue';
import { appStore } from '@/stores';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import useCategory from '@/composables/useCategory';

const { dialogFormVisible, dialogTableVisible, formLabelWidth, form, gridData } = useCategory();
const store = appStore();
</script>
