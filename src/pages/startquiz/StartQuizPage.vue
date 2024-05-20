<template>
  <div class="flex flex-col   min-h-screen text-text1 justify-center items-center w-full  relative">

    <div class="md:w-[700px] md:rounded-md md:mt-2 quiz-bg min-h-screen w-full md:py-4" v-for="item in myQuestion"
      :key="item.QuizId">
      <div class="bg-primary p-5">
        <div class="question-title"> {{
          item.Question
        }}</div>
      </div>
      <div class="  rounded-sm text-text1 p-1">
        <div v-for="(a, index) in JSON.parse(item.Options)" :key="index" class="p-4">
          <el-radio-group v-model="answer" style="width: 100%;" class=" h-auto">
            <el-radio :value="index + 1" size="large" border style="width: 100%;" @change="isSelected = false">
              <div class=" text-wrap flex">
                {{
                  index + 1 + '/.' }}<div v-html="a"></div>
              </div>
            </el-radio> 
          </el-radio-group>
        </div>
      </div>
      <div class="text-center">
        <el-button type="success" :disabled="isSelected" size="small"
          @click="onSubmit(item.CorrectAnswer)">Submit</el-button>
        <el-button type="warning" :disabled="disabledRoute" class="text-center" size="small"
          @click="onNextGame()">Next</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useStartQuiz from '@/composables/useStartQuiz';
const { myQuestion, answer, isSelected, disabledRoute, onSubmit, onNextGame } =
  useStartQuiz();
</script>
<style>
.el-radio-group .is-checked {
  background: #ffffff !important;
  box-shadow: none !important;
  transition: all 0.4s ease-in-out;

  span {
    color: #000000 !important;
  }
}
.el-radio.el-radio--large {
  height: auto !important;
  padding: 5px !important;
}

.el-radio-group {
  height: auto !important;

}

.quiz-bg {
  background: linear-gradient(-45deg, #0b4a88, #00b196) !important;
}

.question-title {
  background: #001c23fc;
  color: #e2f700;
  border-radius: 20px;
  padding: 40px 20px;
}

.el-radio {
  border-radius: 5px !important;
  background: #0b0125 !important;
  color: rgb(198, 209, 0);
  border: none !important;
  box-shadow: 4px 4px 4px #486880 !important;
}

.el-radio__label {
  font-size: 18px !important;
}

span.el-radio__input.is-checked,
span.el-radio__input {
  display: none !important;
}
</style>
