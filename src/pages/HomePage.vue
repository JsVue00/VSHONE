<template>
  <div class="w-full bg-[#0b0a2a] flex pb-12 flex-col px-2 md:px-5 justify-center items-center min-h-screen relative">
    <div class=" absolute lg:right-44 right-10 lg:top-12  top-4"><button @click="$router.push({ name: 'login' })"
        class="h-[30px] w-[115px] bg-[#02A9F1] rounded-[16px] border-2 border-[#FFC701] text-white uppercase font-bold">Login</button>
    </div>
    <div
      class="text-center relative flex flex-col w-full overflow-hidden lg:pt-80 pt-40 text-[60px] lg:text-[200px] text-white">
      <span>Welcome</span>
      <div class="spin"></div>
      <div class="spin2"></div>

    </div>
    <div
      class="lg:mt-[340px] mt-24 flex flex-col gap-20 justify-center px-5 rounded-[16px] items-center py-12 min-h-[200px] max-w-[1460px] bg-black bg-opacity-25 ">
      <div class="lg:text-[80px] text-[30px] text-white text-center"> Try your challenge with
        multiple questions</div>
      <button @click="$router.push({ name: 'game' })"
        class="lg:h-[147px] h-[60px] w-[200px] lg:w-[665px] bg-gradient-to-r from-[#154394] to-[#00FF47] rounded-[50px]">
        <span class="lg:text-[80px] text-[30px] text-white">Sart Now</span>
      </button>
    </div>
    <div
      class="lg:mt-[340px] mt-24 flex flex-col gap-20 justify-center lg:px-5 px-2 rounded-[16px] items-center py-12 min-h-[200px] max-w-[1460px] bg-black bg-opacity-25 ">
      <div class="lg:text-[80px] text-[30px] text-white text-center"> Learn with master teacher
        channel on Youtube</div>
      <button @click="$router.push({ name: 'course' })"
        class="lg:h-[147px] h-[60px] w-[200px] lg:w-[665px] bg-gradient-to-r from-[#154394] to-[#00FF47] rounded-[50px]">
        <span class="lg:text-[80px] text-[30px] text-white">Sart Now</span>
      </button>
    </div>
    <div class=" min-h-[200px]">

    </div>
  </div>
</template>

<script setup lang="ts">
import useQuiz from '@/composables/useQuiz';
useQuiz();
</script>
<style scoped>
.spin,
.spin2 {
  width: 200px;
  height: 5px;
  background-color: red;
  border-radius: 5px;
  position: absolute;
  animation: spin 2s linear infinite;
}

.spin2 {
  bottom: 30px;
  animation: spin2 2s linear infinite;
}

@keyframes spin {
  from {
    transform: translateX(0vw);
  }

  50% {
    background: #f2ff00;
  }

  to {
    transform: translateX(100vw)
  }
}

@keyframes spin2 {
  0% {
    transform: translateX(100vw);
  }

  50% {
    background: blue;
  }

  100% {
    transform: translateX(0vw)
  }
}

@media screen and (max-width:700px) {

  .spin2 {
    bottom: 10px;
  }

  .spin,
  .spin2 {
    width: 100px;
  }
}
</style>
