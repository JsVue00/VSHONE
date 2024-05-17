<template>
    <div class="w-full overflow-hidden bg-gradient-to-tr from-[#1A3490] to-[#0386A3] min-h-screen p-4 2xl:p-[100px]">
        <div
            class="flex flex-wrap justify-between items-start p-4 lg:p-[60px] w-full bg-black bg-opacity-[25%] rounded-md">
            <div class="grid  place-content-center gap-[30px] text-white">
                <div class="text-[40px] font-bold lg:text-[80px] text-[#00FF47]">Welcome</div>
                <p class="text-[18px]">Welcome to videos lesson related to programming skills.</p>
            </div>
            <div class="bg-[#1E1E1E] grid h-[250px] place-content-center w-[660px] rounded-md">
                <div class="text-[#00FF47] text-[40px] lg:text-[80px]">{{ courseData.length + ' ' + $t('videos') }}
                </div>
            </div>
        </div>
        <div class=" mt-10 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 justify-center w-full gap-10 ">
            <div v-for="(course, index) in courseData" :key="index">

                <div
                    class="grid gap-10 rounded-md p-[20px] bg-black bg-opacity-[25%] hover:bg-opacity-[50%] relative hover:shadow-lg hover:shadow-gray-800">
                    <button v-show="course.VideoLink?.includes('http')"
                        class="absolute bg-gray-600 rounded-md px-2 top-[-8px] left-[-8px] text-white border"
                        @click="showPopup(course.VideoLink)">Popup</button>

                    <div class="rounded-md overflow-hidden">
                        <iframe ref="videoIframe" v-if="course.VideoLink?.includes('http')" width="100%" height="100%"
                            :src="course.VideoLink + '? modestbranding = 1'" title="test" allowfullscreen></iframe>
                        <div v-else class="text-center">No Video</div>
                    </div>
                    <p class="text-[18px] text-white line-clamp-1">{{ course.Title }}</p>
                    <div class="text-center bg-[#D9D9D9] py-1 rounded-md">
                        <span class=" font-medium text-[18px]">{{ course.Credit }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog v-model="centerDialogVisible" fullscreen="true" :close-icon="CloseBold"
        style=" background: black !important; padding: 0 !important; border-radius: 0 !important;" @close="handleClose">
        <div v-loading="isLoading" :element-loading-background="'#000000'">
            <iframe ref="iframe" width="100%" class="min-h-[80vh]" :src="video + '?modestbranding=1'" title="test"
                allowfullscreen></iframe>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import useCourse from '@/composables/useCourse';
import { onMounted, ref } from 'vue';
import { CloseBold } from "@element-plus/icons-vue";

const video = ref<string>();
const isLoading = ref<boolean>(false);
const { courseData, getAllCourses } = useCourse();
const centerDialogVisible = ref(false)

const showPopup = (link: string) => {
    isLoading.value = true;
    video.value = link
    centerDialogVisible.value = true;
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
}

function handleClose(this: any) {
    centerDialogVisible.value = false;
    video.value = '';
}

onMounted(() => {
    getAllCourses()
})
</script>

<style type="css" scoped></style>