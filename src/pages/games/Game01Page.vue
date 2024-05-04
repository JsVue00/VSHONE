<template>
  <div class="flex flex-col   min-h-screen text-text1 justify-center items-center w-full  relative">

    <div class="md:w-[700px]  bg-sky-900 min-h-screen w-full md:py-4" v-for="item in myQuestion" :key="item.QuizId">
      <div class="bg-primary  py-1">
        <div v-show="isWon" class="congratulation text-center">Congratulation!!!💗💖</div>

        <div class="text-[25px] px-4  text-titleFont"> {{ item.Question }}</div>
      </div>
      <div class="  rounded-sm text-text1 p-1">
        <div v-for="(a, index) in JSON.parse(item.Options)" :key="index" class="p-4">
          <el-radio-group v-model="answer" style="width: 100%;">
            <el-radio :value="index + 1" size="large" border style="width: 100%;" @change="isSelected = false">{{ a
              }}</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="text-center">
        <el-button type="success" :disabled="isSelected" size="small"
          @click="onPlayerSelected(item.CorrectAnswer)">Submit</el-button>
        <el-button type="warning" :disabled="disabledRoute" class="text-center" size="small"
          @click="changeGame()">Next</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useGame01 from '@/composables/usegame01';

const { myQuestion, answer, isWon, isSelected, disabledRoute, onPlayerSelected, changeGame } =
  useGame01();

</script>

<style type="scss">
.el-radio-group .is-checked {
  border: 5px green solid !important;
}

.el-radio {
  border-radius: 25px !important;
  color: var(--text1);

}

.el-radio__label {
  font-size: 18px !important;
}

.el-radio__input.is-checked,
.el-radio__inner {
  display: none !important;
}
</style>
