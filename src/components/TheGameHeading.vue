<template>
  <div class="flex justify-around w-full h-[60px] items-center bg-background2 text-text1">
    <router-link to="#">{{ $t('games.game_iq') }}</router-link>
    <SwitchLanguageButton />
  </div>
</template>
<script setup lang="ts">
import SwitchLanguageButton from '@/components/SwitchLanguageButton.vue';
</script>
