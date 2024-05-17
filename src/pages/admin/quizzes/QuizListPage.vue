<template>
  <div class="overflow-auto">
    <AdminFormHeader :title="$t('quiz_list')">
      <el-button type="primary" @click="$router.push({ name: 'create-new-quiz' })">{{
        $t('create_new')
      }}</el-button>
    </AdminFormHeader>
    <div class="w-full bg-background pt-2 px-4">
      <el-form label-width="auto" class="flex flex-wrap">
        <el-form-item :label="$t('category_name')">
          <el-select v-model="filterCategoryId" filterable placeholder="Select" style="width: 200px">
            <el-option :label="$t('all')" :value="0" />
            <el-option v-for="item in categoryData" :key="item.CategoryId" :label="item.CategoryName"
              :value="item.CategoryId" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('question')">
          <el-input v-model="filterQuestion" placeholder="Enter Question" />
        </el-form-item>
      </el-form>
    </div>
    <QuizDataTable :data="quizDataFilter" :onUpdate="onEditButton" :onDelete="openDialog"
      :tableProperties="tableProperties" />
    <ConfirmDialog :isDialogVisible="dialogVisible" @close="dialogVisible = false" :title="$t('delete')"
      :content="$t('do_you_want_to_delete_this_data_?')" :confirm="onConfirmDelete" :isLoading="isLoading">
    </ConfirmDialog>
  </div>
</template>
<script lang="ts" setup>
import QuizDataTable from '@/components/admin/QuizDataTable.vue';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import ConfirmDialog from '@/components/admin/ConfirmDialog.vue';
import useQuiz from '@/composables/useQuiz';
import { computed, onMounted, ref } from 'vue';
import useCategory from '@/composables/useCategory';

const { categoryData } = useCategory()
const { getAllQuizzes, quizData, onEditButton, tableProperties, onConfirmDelete, openDialog, dialogVisible, isLoading } = useQuiz()

const filterCategoryId = ref<number>(0)
const filterQuestion = ref<string>('')

const quizDataFilter = computed(() => {
  if (filterCategoryId.value !== 0 && filterQuestion.value !== '') {
    return quizData.value.filter((quiz) => {
      return quiz.CategoryId === filterCategoryId.value && quiz.Question.toLowerCase().includes(filterQuestion.value.toLowerCase());
    });
  } else if (filterCategoryId.value !== 0) {
    return quizData.value.filter((quiz) => quiz.CategoryId === filterCategoryId.value);
  } else if (filterQuestion.value !== '') {
    return quizData.value.filter((quiz) => quiz.Question.toLowerCase().includes(filterQuestion.value.toLowerCase()));
  } else {
    return quizData.value;
  }
})



onMounted(() => {
  getAllQuizzes();
});
</script>
