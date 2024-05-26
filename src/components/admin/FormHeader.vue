<template>
  <div class="flex items-center w-full justify-between px-5 py-4 bg-background1 rounded-t-md text-white">
    <span class="text-[18px]">
      {{ props.title }}
    </span>
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

interface IFormHeader {
  title: string;
}

const props = defineProps<IFormHeader>();
</script>
