<template>
  <div>
    <el-table :data="props.data" border header-cell-class-name="my-table-header" style="width: 100%"
      v-loading="isLoading">
      <el-table-column prop="categoryId" label="Category ID" width="140" align="center" />
      <el-table-column prop="categoryName" label="Game Name" width="150" />
      <el-table-column prop="Image" :label="$t('image')" width="120" />
      <el-table-column prop="description" label="Description" />

      <el-table-column fixed="right" label="Operations" width="200">
        <template #default="scope">
          <el-button link size="small" @click="onDelete(scope.row.categoryId)" type="danger" :icon="Delete" circle />
          <el-button link size="small" type="info" :icon="Edit" circle />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  },
  onDelete: {
    type: Function,
    required: true,
  }
});
</script>
