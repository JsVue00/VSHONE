<template>
  <div class="w-full bg-background1">
    <div class="section1 min-h-screen relative">
      <button
        @click="$router.push({ name: 'admin' })"
        class="absolute right-10 top-10 border border-white rounded-md px-4 py-1 bg-[#0a0c43] text-white font-bold hover:bg-[#034596] text-center"
      >
        L O G I N
      </button>
      <h1 class="text-[80px] absolute top-[100px] left-[50px] text-white">Welcome</h1>
      <!-- <button @click="$router.push('/login')">Next</button> -->
      <img
        class="absolute right-[200px] w-[300px] bottom-2"
        src="https://cdn-icons-png.flaticon.com/128/9042/9042238.png"
        alt=""
      />
    </div>
    <section class="section2 min-h-screen relative">
      <img
        src="https://cdn-icons-png.flaticon.com/128/7770/7770324.png"
        class="question left-[100px] top-[200px]"
        alt=""
      />
      <div
        class="w-[calc(100dvw/2)] bg-gray-700 bg-opacity-60 p-2 rounded-md shadow-md absolute right-3 bottom-[100px] content"
      >
        <h1 class="text-[40px] text-white font-bold">
          Try your chalange with multiple questions types
        </h1>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.section1 {
  background-image: linear-gradient(45deg, #11173f, #0a0c43, #034596);
}

.section2,
.section1 {
  min-height: 90dvh;
}

.section2 {
  background-image: url('https://www.slido.com/static/slido-live-quizzes-hero.a15bccb1.1600.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}

.question {
  height: auto;
  position: absolute;
  animation: top-bottom 2s ease-in-out infinite;
}

@keyframes top-bottom {
  0% {
    width: 250px;
    transform: translateY(0);
  }

  25% {
    width: 270px;
    transform: translateY(50px);
  }

  60% {
    width: 350px;
    transform: translateY(100px);
  }

  100% {
    width: 250px;
    transform: translateY(0);
  }
}
</style>
