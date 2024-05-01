<template>
  <div>
    <el-table :data="tableData" border header-cell-class-name="my-table-header" style="width: 100%">
      <el-table-column prop="categoryName" :label="$t('category')" width="140" align="center" />
      <el-table-column prop="gameName" :label="$t('game_name')" width="150" />
      <el-table-column prop="question" :label="$t('quiz')" />
      <el-table-column prop="options" :label="$t('options')" style="width: 100%">
        <template #default="{ row }">
          <ul>
            <li v-for="(option, index) in JSON.parse(row.options)" :key="index">{{ index + 1 + ': ' + option }}</li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="correctAnswer" :label="$t('correct_answer')" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="info" size="small" @click="handleClick"> Detail </el-button>
          <el-button link size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import APIs from '@/apis/category/adminApis';
import { onMounted, ref } from 'vue';
import type { IGetQuizResponse } from '@/models/quiz';

const tableData = ref<IGetQuizResponse[]>([]);
onMounted(() => {
  getAllQuizzes();
});
async function getAllQuizzes() {
  const response = await APIs.getAllQuizzizApi();
  tableData.value = response.data;
}

const handleClick = () => {
  console.log('click');
};
</script>
<!-- <style></style> -->
