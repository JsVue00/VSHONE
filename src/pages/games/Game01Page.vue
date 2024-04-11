<template>
  <div class="flex flex-col justify-center items-center w-full p-2 relative">
    <div v-show="isWon" class="congratulation">Congratulation!!!💗💖</div>
    <div class="w-full" v-for="item in myQuestion" :key="item.id">
      <div class="bg-primary px-3 py-1">
        <span>{{ $t('body.question') }}:</span> {{ item.qa }}
      </div>
      <div class="my-2 bg-background1 rounded-sm text-text1 p-1">
        <div v-for="(a, index) in item.options" :key="index" class="p-4">
          <label for="text">
            <input type="radio" :value="index + 1" v-model="answer" @change="isSelected = false" />
            {{ a }}
          </label>
        </div>
      </div>
      <el-button
        type="success"
        :disabled="isSelected"
        size="small"
        @click="onPlayerSelected(item.correctAnswer)"
        >Submit</el-button
      >
      <el-button
        type="warning"
        :disabled="disabledRoute"
        class="text-center"
        size="small"
        @click="changeGame()"
        >Next</el-button
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import useGame01 from '@/composables/usegame01';

const { answer, isWon, isSelected, myQuestion, disabledRoute, onPlayerSelected, changeGame } =
  useGame01();
</script>

<style>
.congratulation {
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  animation: changeFont 2s linear forwards;
}

@keyframes changeFont {
  from {
    transform: translate(-50%, -50%) scale(1) opacity(1); /* Initial position, scale, and opacity */
  }
  to {
    transform: translate(-50%, -50%) scale(3) opacity(0); /* Final position, scale, and opacity */
  }
}
</style>
