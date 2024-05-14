<template>
    <div class="w-full overflow-hidden bg-gradient-to-tr from-[#1A3490] to-[#0386A3] min-h-screen p-4 2xl:p-[100px]">
        <div
            class="flex flex-wrap justify-between items-start p-4 lg:p-[60px] w-full bg-black bg-opacity-[25%] rounded-md">
            <div class="grid  place-content-center gap-[30px] text-white">
                <div class="text-[40px] font-bold lg:text-[80px] text-[#00FF47]">Welcome</div>
                <p class="text-[18px]">Welcome to videos lesson related to programming skills.</p>
            </div>
            <div class="bg-[#1E1E1E] grid h-[250px] place-content-center w-[660px] rounded-md">
                <div class="text-[#00FF47] text-[40px] lg:text-[80px]">{{ data.length + ' ' + $t('videos') }}</div>
            </div>
        </div>
        <div class=" mt-10 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 justify-center w-full gap-10 ">
            <div v-for="(course, index) in data" :key="index">

                <div
                    class="grid gap-10 rounded-md p-[20px] bg-black bg-opacity-[25%] hover:bg-opacity-[50%] relative hover:shadow-lg hover:shadow-gray-800">
                    <button class="absolute bg-gray-600 rounded-md px-2 top-[-8px] left-[-8px] text-white border"
                        @click="centerDialogVisible = true, video = course.VideoLink">Popup</button>

                    <div class="rounded-md overflow-hidden">
                        <iframe width="100%" height="100%" :src="course.VideoLink + '? modestbranding = 1'" title="test"
                            allowfullscreen></iframe>
                    </div>
                    <p class="text-[18px] text-white line-clamp-1">{{ course.Title }}</p>
                    <div class="text-center bg-[#D9D9D9] py-1 rounded-md">
                        <span class=" font-medium text-[18px]">{{ course.Credit }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog v-model="centerDialogVisible" width="80%" start @close="handleClose">
        <iframe width="100%" class="min-h-[80vh]" :src="video + '? modestbranding = 1'" title="test"
            allowfullscreen></iframe>
    </el-dialog>
</template>

<script lang="ts" setup>
import useCourse from '@/composables/useCourse';
import { ref } from 'vue';
const video = ref<string>();

const { data } = useCourse();
const centerDialogVisible = ref(false)


</script>

<style>
.ytp-youtube-button {
    display: none !important;
    visibility: hidden !important;
}

.el-dialog {
    --el-dialog-bg-color: rgba(0, 0, 0, 0.649) !important;
}

.el-dialog__close {
    color: rgb(255, 213, 0) !important;
    font-size: 25px !important;
    font-weight: bold !important;
}
</style>