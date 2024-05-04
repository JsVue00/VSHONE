<template>
  <div>
    <el-table :data="quizData" border header-cell-class-name="my-table-header" style="width: 100%">
      <el-table-column prop="CategoryName" :label="$t('category')" width="140" align="center" />
      <el-table-column prop="GameName" :label="$t('game_name')" width="150" />
      <el-table-column prop="Question" :label="$t('quiz')" />
      <el-table-column prop="Options" :label="$t('options')" style="width: 100%">
        <template #default="{ row }">
          <ul>
            <li v-for="(Option, index) in JSON.parse(row.Options)" :key="index">{{ index + 1 + ': ' + Option }}</li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="CorrectAnswer" :label="$t('correct_answer')" width="120" />
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
import useQuiz from '@/composables/useQuiz';
const { quizData } = useQuiz();

const handleClick = () => {
  console.log('click');
};
</script>
<!-- <style></style> -->
