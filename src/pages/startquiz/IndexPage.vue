<template>
  <div class="grid justify-center w-full ">
    <div class="text-lg text-center py-4 font-bold">{{ $t('all_quiz_categories') }}</div>
    <div class="flex justify-center items-center gap-4 flex-wrap">
      <div @click="onStartQuiz(subCat.SubCategoryName, subCat.Id)" class="form-item group cursor-pointer"
        v-for="(subCat, index) in subCategoryData" :key="index"
        :data-content="subCat.TotalQuizzes + ` ${$t('questions')}`">
        <div class="h-[150px]">
          <img class="w-full h-full object-cover"
            :src="subCat.Image! !== null ? subCat.Image! : 'https://png.pngtree.com/png-vector/20230503/ourmid/pngtree-quiz-time-bubble-speech-banner-vector-design-png-image_7078139.png'"
            alt="">
        </div>
        <div class="text-center text-[20px] capitalize bg-white rounded-md group-hover:border">{{ subCat.SubCategoryName
          }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import useSubCategory from '@/composables/useSubCategory';
import useQuiz from '@/composables/useQuiz';
import useStartQuiz from '@/composables/useStartQuiz';


const { onStartQuiz } = useStartQuiz();
useQuiz();
const { subCategoryData } = useSubCategory();

const router = useRouter();
onMounted(() => {
  router.push('/games');
});
</script>
<style scoped>
.form-item {
  position: relative;
  padding: 10px;
  background-color: #d4d4d4;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  animation: form-top-left 0.5s ease-in-out;

  &:hover {
    box-shadow: 4px 4px 4px rgb(196, 196, 196);
    background: white;
  }

  &::after {
    content: attr(data-content);
    background: #0701b678;
    padding: 2px 10px;
    color: white;
    border-radius: 20px 10px 20px 0;
    display: none;
    position: absolute;
    top: -10px;
    z-index: 1;
    right: -50px;
  }

}

.form-item:hover::after {
  display: block;
  transition: all 0.5s ease-in-out;
}

@keyframes form-top-left {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@media screen and (max-width: 700px) {
  .form-item {
    width: 150px;

    &::after {
      display: block;
      right: -10px;
    }
  }
}
</style>