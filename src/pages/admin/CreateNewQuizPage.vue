<template>
  <div class="max-w-[1200px]">
    <AdminFormHeader :title="$t('create_new_quiz')" />
    <div class="bg-background rounded-sm p-4 max-h-screen relative">
      <div class="text-center">
        <el-form ref="ruleFormRef" style="max-width: 100%" :model="requestForm" :rules="rules" label-width="auto"
          class="demo-ruleForm" status-icon>
          <div class="grid lg:grid-cols-2 gap-8 justify-between w-full">
            <div>
              <el-form-item :label="$t('title')" prop="Title">
                <el-input v-model="requestForm.Title" />
              </el-form-item>
              <el-form-item :label="$t('question')" prop="name">
                <el-input v-model="requestForm.Question" />
              </el-form-item>
              <!-- <el-form-item :label="$t('category_name')" prop="region">
                <el-select v-model="requestForm.CategoryName" :placeholder="$t('select')">
                  <el-option label="Zone one" value="shanghai" />
                </el-select>
              </el-form-item> -->
              <el-form-item :label="$t('sub_category_name')" prop="CategoryId">
                <el-select v-model="requestForm.CategoryId" :placeholder="$t('select')">
                  <el-option v-for="(cat, index) in categoryData" :key="index" :label="cat.categoryName"
                    :value="cat.categoryId" />
                </el-select>
              </el-form-item>

            </div>

            <div class="w-full">
              <el-form-item :label="$t('options')">
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
                  <el-option v-for="(ans, index) in allAnswers" :key="index" :label="ans" :value="ans" />
                </el-select>
              </el-form-item>
            </div>
          </div>

          <!-- <el-form-item label="Activity form" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
          </el-form-item> -->
          <div class="flex justify-end w-full">
            <el-form-item>
              <el-button type="primary" @click="onSubmit(ruleFormRef)"> Create </el-button>
              <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import MinusIcon from '@/components/icons/MinusIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import useCreateQuiz from '@/composables/useCreateQuiz';
import useCategory from '@/composables/useCategory';

const { categoryData } = useCategory();
const {
  optionsField,
  handleAddOption,
  handleDeleteOption,
  allAnswers,
  requestForm,
  ruleFormRef,
  rules,
  onSubmit,
} = useCreateQuiz();
</script>
