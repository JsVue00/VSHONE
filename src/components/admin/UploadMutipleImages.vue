<template>
    <div class="w-full">
        <div class="flex justify-end">
            <el-upload :on-change="handleChange" :multiple="true" :auto-upload="false">
                <template #trigger>
                    <el-button type="warning" size="small">{{ $t('upload_image_details') }}</el-button>
                </template>
            </el-upload>
        </div>
        <div class="mt-1" v-for="(file, index) in fileList" :key="index">
            <div class="px-2 py-.5 flex items-center justify-between bg-gray-100 shadow-sm m-[1px]">
                <div> {{ file.name }}</div> <el-button link type="danger"
                    @click="$emit('handleDelete', index)"><el-icon>
                        <CloseBold />
                    </el-icon></el-button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { UploadInstance } from 'element-plus'
import {
    CloseBold
} from '@element-plus/icons-vue';
interface FileList {
    name: string,
    raw: object,
}

const upload = ref<UploadInstance>()

defineProps<{
    tourId: number,
    fileList: FileList[],
    handleChange: Function,
}>()

</script>