<template>
    <div class="text-xl text-text2   mb-4 border-b-[1px] border-gray-600 flex w-full ">
        <div class="w-full flex overflow-hidden">
            <div class="title">{{ $t('dashboard') }}</div>
        </div>
    </div>
    <div class="flex flex-wrap gap-4">
        <div v-for="(data, index) in fakeDashboardData" :key="index"
            class="text-text2 dashboard-card  w-52 hover:w  border-primary rounded-md bg-white content-center p-4 ">
            <div class="text-2xl font-medium">{{ data.total }}</div>
            <div>{{ data.name }}</div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
interface FakeDashboardData {
    name: string;
    total: number;
}

const fakeDashboardData = ref<FakeDashboardData[]>([
    { name: 'total video', total: 100 },
    { name: 'total quizzes', total: 200 },
    { name: 'total cities', total: 300 },
    { name: 'total provinces', total: 300 },
    { name: 'total tour area', total: 300 },
]);
</script>

<style scoped>
.dashboard-card:hover {
    transition: all 0.5s ease-in-out;
    background: var(--primary);
    color: var(--text1);
    box-shadow: 4px 4px 10px #4a739b;
}

.title {
    z-index: 2;
    color: var(--text1);
    padding: 4px 8px;
    background: var(--background1);
    position: relative;
}

.title::after {
    content: '';
    top: 0;
    right: -30px;
    border-top: 100px solid var(--background1);
    border-right: 60px solid transparent;
    position: absolute;
    z-index: -1;
}
</style>