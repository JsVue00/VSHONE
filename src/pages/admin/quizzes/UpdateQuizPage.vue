<template>
    <div class="max-w-[1200px]">
        <AdminFormHeader :title="$t('update_quiz')" />
        <div class="bg-background rounded-sm p-4 max-h-screen relative">
            <div class="text-center">
                <el-form ref="ruleFormRef" style="max-width: 100%" :model="requestForm" :rules="rules"
                    label-width="auto" class="demo-ruleForm" status-icon>
                    <div class="grid lg:grid-cols-2 lg:gap-8 justify-between w-full">
                        <div>
                            <el-form-item :label="$t('title')" prop="Title">
                                <el-input v-model="requestForm.Title" />
                            </el-form-item>
                            <el-form-item :label="$t('question')" prop="Question">
                                <el-input v-model="requestForm.Question" />
                            </el-form-item>

                            <el-form-item :label="$t('category_name')" prop="CategoryId">
                                <el-select v-model="requestForm.CategoryId" :placeholder="$t('select')">
                                    <el-option v-for="(cat, index) in categoryData" :key="index"
                                        :label="cat.CategoryName" :value="cat.CategoryId" />
                                </el-select>
                            </el-form-item>
                            <el-form-item :label="$t('sub_category_name')" prop="SubCategoryId">
                                <el-select v-model="requestForm.SubCategoryId" :placeholder="$t('select')">
                                    <el-option v-for="(cat, index) in SubCategory" :key="index"
                                        :label="cat.SubCategoryName" :value="cat.Id" />
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="w-full">
                            <el-form-item :label="$t('options')" prop="Options">
                                <div v-for="(option, index) in optionsField" :key="index" class="w-full">
                                    <div class="flex w-full gap-2">
                                        <span>{{ index + 1 }} </span>
                                        <el-input style="width: 100%" v-model="option.value" class="mb-1"
                                            :placeholder="`Answer ${index + 1}`" />
                                        <el-button v-if="index === 0" @click="handleAddOption">
                                            <PlusIcon />
                                        </el-button>
                                        <el-button plain type="danger" v-else @click="handleDeleteOption(index)">
                                            <MinusIcon />
                                        </el-button>
                                    </div>
                                </div>
                            </el-form-item>
                            <el-form-item :label="$t('correct_answer')" prop="CorrectAnswer">
                                <el-select v-model="requestForm.CorrectAnswer" :placeholder="$t('select')">
                                    <el-option v-for="(ans, index) in allAnswers" :key="index" :label="ans"
                                        :value="ans" />
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>

                    <div class="flex justify-end w-full">
                        <el-form-item>
                            <el-button type="primary" @click="onUpdate(ruleFormRef)"> {{ $t('update') }} </el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import quizApi from '@/apis/quiz/quizApi';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import MinusIcon from '@/components/icons/MinusIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import useCreateQuiz from '@/composables/useQuiz';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import notificationHelper from '@/libraries/notificationHelper';
import type { ICreateQuizRequest, IGetQuizResponse } from '@/models/quiz';
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const {
    optionsField,
    handleAddOption,
    handleDeleteOption,
    allAnswers,
    requestForm,
    ruleFormRef,
    rules,
    SubCategory,
    categoryData,
} = useCreateQuiz();


let data = ref<IGetQuizResponse[]>([]);
const quizId = Number(route.params.id);
async function getAllQuizzes() {
    const response = await quizApi.getAllQuizzes();
    data.value = response.data.Data as IGetQuizResponse[];
    const filterDataById = data.value.find((data: IGetQuizResponse) => data.QuizId === quizId);
    if (filterDataById) {
        requestForm.Title = filterDataById.Title || '';
        const optionData = JSON.parse(filterDataById.Options || '[]');
        optionsField.value = optionData.map((value: string) => ({ value }));
        requestForm.Question = filterDataById.Question;
        requestForm.CorrectAnswer = filterDataById.CorrectAnswer || null;
        requestForm.CategoryId = filterDataById.CategoryId;
        requestForm.SubCategoryId = filterDataById.SubCategoryId;
    }

}
const quizUpdate = async () => {
    const optionsValue = optionsField.value
        .filter((options) => options.value !== '')
        .map((options) => options.value);
    requestForm.Options = optionsValue;
    console.log(Object.values(requestForm.Options));
    const request: ICreateQuizRequest = {
        SubCategoryId: requestForm.SubCategoryId,
        CategoryId: requestForm.CategoryId,
        GameName: '',
        Title: requestForm.Title,
        Question: requestForm.Question,
        Options: `${JSON.stringify(requestForm.Options)}`,
        CorrectAnswer: requestForm.CorrectAnswer
    };
    try {
      const reponse =  await quizApi.updateQuiz(quizId, request);
        notificationHelper.success('Succes',reponse.data.Message);
        router.push({name: 'questionList'})
    } catch (error) {
        console.log(error);
    }
};
const onUpdate = formHelper.onSubmitForm(quizUpdate);
onMounted(() => {
    getAllQuizzes();
});
</script>