<template>
  <div class="flex justify-around w-full h-[60px] items-center bg-background2 text-text1">
    <div class="flex  gap-4">
      <router-link :to="{ name: 'game' }">
        <svg class="w-[24px] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor"
            d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576">
          </path>
        </svg>
      </router-link>
      {{ $t('try_your_challenge') }}
    </div>
    <SwitchLanguageButton />
  </div>
</template>
<script setup lang="ts">
import SwitchLanguageButton from '@/components/SwitchLanguageButton.vue';
</script>
