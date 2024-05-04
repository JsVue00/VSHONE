<template>
    <div>
        <el-table :data="props.data" border header-cell-class-name="my-table-header" style="width: 100%"
            v-loading="isLoading">
            <el-table-column prop="CategoryId" label="Category ID" width="140" align="center" />
            <el-table-column prop="CategoryName" label="Game Name" width="150" />
            <el-table-column prop="Image" :label="$t('image')" width="120" />
            <el-table-column prop="Description" label="Description" />

            <el-table-column fixed="right" align="center" :label="$t('action')" width="100">
                <!-- <template #default="scope">
                    <el-button @click="onUpdate(scope.row.CategoryId)" type="warning" link :icon="Edit" circle />
                </template> -->
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import {
    Edit,
} from '@element-plus/icons-vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    isLoading: {
        type: Boolean,
        required: false
    },
    onUpdate: {
        type: Function,
        required: false,
    }
});
</script>