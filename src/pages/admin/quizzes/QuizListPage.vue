<template>
  <div class="overflow-auto">
    <AdminFormHeader :title="$t('quiz_list')">
      <el-button type="primary" @click="$router.push({ name: 'create-new-quiz' })">{{
        $t('create_new')
      }}</el-button>
    </AdminFormHeader>
    <QuizDataTable :data="quizData" :onUpdate="onEditButton" :tableProperties="tableProperties" />


  </div>
</template>
<script lang="ts" setup>
import QuizDataTable from '@/components/admin/QuizDataTable.vue';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import useQuiz from '@/composables/useQuiz';

const { quizData, onEditButton, tableProperties } = useQuiz()

</script>
