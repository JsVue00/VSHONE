<template>
    <div>
        <el-table :data="data" border header-cell-class-name="my-table-header" style="width: 100%">
            <el-table-column prop="Title" :label="$t('title')" width="140" align="center" />
            <el-table-column prop="Credit" :label="$t('credit')" width="150" />
            <el-table-column prop="VideoLink" :label="$t('video_link')" width="220">
                <template #default="{ row }">
                    <a class=" text-blue-700" :href="row.VideoLink" target="_blank" rel="noopener noreferrer">{{
                        row.VideoLink
                        }}</a>
                </template>
            </el-table-column>
            <el-table-column prop="Description" :label="$t('description')" />

            <el-table-column fixed="right" align="center" :label="$t('actions')" width="100">
                <template>
                    <!-- <el-button @click="onUpdate(scope.row.CategoryId)" type="warning" link :icon="Edit" circle /> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
import useCourse from '@/composables/useCourse';

const { data } = useCourse();
</script>