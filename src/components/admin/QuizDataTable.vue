<template>
  <div>
    <el-table :data="data" border header-cell-class-name="my-table-header" style="width: 100%">
      <el-table-column v-for="(pro, index) in tableProperties" :key="index" :prop="pro[0]" :label="$t(pro[1])"
        :width="pro[0] === 'Options' ? 'full' : '140'" align="center">
        <template #default="{ row }">
          <div v-if="pro[0] === 'Options'">
            <ul>
              <li v-for="(Option, index) in JSON.parse(row.Options)" :key="index">{{ index + 1 + ': ' + Option }}</li>
            </ul>
          </div>
          <div v-if="pro[0] === 'CorrectAnswer'">
            <span class="text-text3 font-medium">{{ row.CorrectAnswer }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" align="center" width="120">
        <template #default="scope">
          <el-button @click="onUpdate(scope.row.QuizId)" type="warning" link :icon="Edit" circle />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Edit } from '@element-plus/icons-vue';
import type { TableProperty } from '@/models/tableProperty';

defineProps<{
  tableProperties: TableProperty,
  data:Object,
  onUpdate: Function,
}>();
</script>
