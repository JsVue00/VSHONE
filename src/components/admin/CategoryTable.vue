<template>
  <div>
    <el-table :data="props.data" border header-cell-class-name="my-table-header" style="width: 100%"
      v-loading="isLoading">
      <el-table-column prop="CategoryId" :label="$t('category_id')" width="140" align="center" />
      <el-table-column prop="CategoryName" :label="$t('category_name')" width="150" />
      <el-table-column prop="Image" :label="$t('image')" width="120">
        <div>
          <img src="https://localhost:3001/api/ImageUpload?imageName=13810c76-91ec-4ad8-9f7b-b59df0bbe9a9.png" alt="">
        </div>
      </el-table-column>
      <el-table-column prop="Description" :label="$t('description')" />

      <el-table-column fixed="right" align="center" :label="$t('actions')" width="100">
        <template #default="scope">
          <el-button @click="onUpdate(scope.row.CategoryId)" type="warning" link :icon="Edit" circle />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import {
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
  // onDelete: {
  //   type: Function,
  //   required: true,
  // },
  onUpdate: {
    type: Function,
    required: true,
  }
});
</script>
