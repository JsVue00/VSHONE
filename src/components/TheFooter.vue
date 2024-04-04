import SwitchLanguageButton from './SwitchLanguageButton.vue';
<template>
  <footer>
    <div
      class="flex relative w-full min-h-[200px] bg-background1 text-text1 justify-around lg:px-20 py-2 px-5"
    >
      <!-- social -->
      <div class="flex flex-col space-y-2 w-full text-center h-full">
        <router-link to="#" class="flex group items-center space-x-2">
          <div class="w-[30px] h-[30px] rounded-full p-2 bg-background overflow-hidden">
            <img
              class="object-fill group-hover:scale-[140%]"
              src="@/assets/icons/facebook.png"
              alt=""
            />
          </div>
          <span>Facebook</span>
        </router-link>
        <router-link to="#" class="flex group items-center space-x-2">
          <div class="w-[30px] h-[30px] rounded-full p-2 bg-background overflow-hidden">
            <img
              class="object-fill group-hover:scale-[140%]"
              src="@/assets/icons/twitter.png"
              alt=""
            />
          </div>
          <span>Facebook</span>
        </router-link>
      </div>
      <div class="text-center w-full">
        <SwitchLanguageButton />
      </div>
      <!-- Content -->
      <ul class="list-disc">
        <li><router-link to="/games">Game</router-link></li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="#">Game</router-link></li>
        <li><router-link to="/login">Logout</router-link></li>
      </ul>
      <span class="absolute w-full text-center bottom-0"> Copy right by: Senghong </span>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import SwitchLanguageButton from './SwitchLanguageButton.vue';
</script>
