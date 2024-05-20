<template>
  <div class="flex w-full justify-between">
    <div class="max-w-[200px] max-h-[100px] rounded-md overflow-hidden border">
      <img
        v-if="props.FileName !== ''"
        class="h-full w-full object-contain"
        :src="getImage(props.Folder, props.FileName)"
        alt=""
      />
      <img
        v-else
        class="h-full w-full object-contain"
        src="../../assets/images/noImage.jpg"
        alt=""
      />
    </div>
    <div>
      <el-upload style="width: 100%" :auto-upload="false" :on-change="handleChange">
        <template #trigger>
          <el-button type="warning" size="small">{{ $t('upload') }}</el-button>
        </template>
      </el-upload>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImage } from '@/apis/api';

const props = defineProps({
  FileName: {
    type: String,
    required: true
  },
  Folder: {
    type: String,
    required: true
  },
  handleChange: Function
});
</script>
