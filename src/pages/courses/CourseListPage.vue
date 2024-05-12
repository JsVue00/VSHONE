<template>
    <div class="w-full overflow-hidden bg-gradient-to-tr from-[#1A3490] to-[#0386A3] min-h-screen p-4 2xl:p-[100px]">
        <div
            class="flex flex-wrap justify-between items-start p-4 lg:p-[60px] w-full bg-black bg-opacity-[25%] rounded-md">
            <div class="grid  place-content-center gap-[30px] text-white">
                <div class="text-[40px] lg:text-[80px]">Welcome</div>
                <p class="text-[18px]">Welcome to video lesion related to programming skill</p>
            </div>
            <div class="bg-[#1E1E1E] grid h-[250px] place-content-center w-[660px] rounded-md">
                <div class="text-[#00FF47] text-[40px] lg:text-[80px]">{{ data.length + ' ' + $t('courses') }}</div>
            </div>
        </div>
        <div class=" mt-10 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 justify-center w-full gap-10">
            <div v-for="(course, index) in data" :key="index">
                <div
                    class="grid gap-10 rounded-md p-[25px] bg-black bg-opacity-[25%] hover:bg-opacity-[50%] hover:shadow-lg hover:shadow-gray-800">
                    <div class="rounded-md overflow-hidden">
                        <iframe width="100%" :src="course.VideoLink + '? modestbranding = 1'" title="test"
                            allowfullscreen></iframe>
                    </div>
                    <p class="text-[18px] text-white">8 Must Know JavaScript Array Methods</p>
                    <div class="text-center bg-[#D9D9D9] py-1 rounded-md">
                        <span class=" font-medium text-[18px]">{{ course.Credit }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useCourse from '@/composables/useCourse';


const { data } = useCourse();
</script>

<style scoped>
.ytp-youtube-button {
    display: none !important;
    visibility: hidden !important;
}
</style>