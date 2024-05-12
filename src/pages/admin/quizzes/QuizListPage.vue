<template>
  <div class="overflow-auto">
    <AdminFormHeader :title="$t('quiz_list')">
      <el-button type="primary" @click="$router.push({ name: 'create-new-quiz' })">{{
        $t('create_new')
      }}</el-button>
    </AdminFormHeader>
    <QuizDataTable :data="quizData" :onUpdate="onEditButton" :onDelete="openDialog"
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
import { onMounted } from 'vue';


const { getAllQuizzes, quizData, onEditButton, tableProperties, onConfirmDelete, openDialog, dialogVisible, isLoading } = useQuiz()

onMounted(() => {
  getAllQuizzes();
});
</script>
