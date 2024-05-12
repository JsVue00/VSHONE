<template>
    <div>
        <el-table :data="props.data" border header-cell-class-name="my-table-header" style="width: 100%"
            v-loading="isLoading">
            <el-table-column prop="CategoryName" :label="$t('category_name')" width="140" align="center" />
            <el-table-column prop="SubCategoryName" :label="$t('sub_category_name')" width="200" />
            <el-table-column prop="Image" :label="$t('image')" width="120" />
            <el-table-column prop="Description" :label="$t('description')" />

            <el-table-column fixed="right" align="center" :label="$t('actions')" width="180">
                <template #default="scope">
                    <div class="flex">
                        <el-button @click="onUpdate(scope.row.Id)" type="info" size="small">{{ $t('edit')
                            }}<el-icon class="el-icon--right">
                                <Edit />
                            </el-icon></el-button>
                        <el-button @click="onDelete(scope.row.Id)" type="danger" size="small">{{ $t('remove')
                            }}<el-icon class="el-icon--right">
                                <Delete />
                            </el-icon>
                        </el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import {
    Edit, Delete
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
        required: true,
    },
    onDelete: {
        type: Function,
        required: true,
    }
});
</script>