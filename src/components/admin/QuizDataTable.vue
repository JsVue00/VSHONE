<template>
  <div>
    <el-table :data="data" border header-cell-class-name="my-table-header" style="width: 100%">
      <el-table-column v-for="(pro, index) in tableProperties" :key="index" :prop="pro[0]" :label="$t(pro[1])"
        :width="pro[0] == 'Options' ? '500' : '200'" align="start">
        <template #default="{ row }">
          <div v-if="pro[0] === 'Options'">
            <ul>
              <li v-for="(Option, index) in JSON.parse(row.Options)" :key="index">{{ index + 1 + ': ' + Option }}</li>
            </ul>
          </div>
          <div v-if="pro[0] === 'CorrectAnswer'" class="text-center">
            <span class="text-text3 font-medium">{{ row.CorrectAnswer }}</span>
          </div>
          <div v-if="pro[0] === 'CreatedAt'">
            <span>{{ dateTimeConverter(row.CreatedAt) }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" :label="$t('actions')" width="200">
        <template #default="scope">
          <div class="flex">
            <el-button @click="onUpdate(scope.row.QuizId)" type="info" size="small">{{ $t('edit')
              }}<el-icon class="el-icon--right">
                <Edit />
              </el-icon></el-button>
            <el-button @click="onDelete(scope.row.QuizId)" type="danger" size="small">{{ $t('remove') }}<el-icon
                class="el-icon--right">
                <Delete />
              </el-icon>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Edit, Delete } from '@element-plus/icons-vue';
import type { TableProperty } from '@/models/tableProperty';
import { dateTimeConverter } from '@/libraries/utils/converter'

defineProps<{
  tableProperties: TableProperty,
  data: Object,
  onUpdate: Function,
  onDelete: Function,
}>();
</script>
