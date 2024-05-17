<template>
    <div>
        <FormHeader :title="$t('course_list')">
            <el-button type="primary"
                @click="dialogFormVisible = true, isEditing = false, formHelper.clearForm(ruleFormRef)">{{
                    $t('create_new')
                }}</el-button>
        </FormHeader>
        <el-table :data="courseData" v-loading="isLoading" border header-cell-class-name="my-table-header"
            style="width: 100%">
            <el-table-column prop="Title" :label="$t('title')" width="250" align="center" />
            <el-table-column prop="Credit" :label="$t('credit')" width="150" />
            <el-table-column prop="VideoLink" :label="$t('video_link')" width="220">
                <template #default="{ row }">
                    <a class=" text-blue-700" :href="row.VideoLink" target="_blank" rel="noopener noreferrer">{{
                        row.VideoLink
                    }}</a>
                </template>
            </el-table-column>
            <el-table-column prop="Description" :label="$t('description')">
                <template #default="{ row }">
                    <div v-html="row.Description"></div>
                </template>
            </el-table-column>
            <el-table-column prop="ModifiedAt" :label="$t('modified_at')">
                <template #default="{ row }">
                    <span>{{ dateTimeConverter(row.ModifiedAt) }}</span>
                </template>
            </el-table-column>
            <el-table-column fixed="right" align="center" :label="$t('actions')" width="180">
                <template #default="{ row }">
                    <el-button @click="onOpenEditForm(row.Id), isLoading = false" type="info" size="small">{{
                        $t('edit')
                    }}<el-icon class="el-icon--right">
                            <Edit />
                        </el-icon>
                    </el-button>
                    <el-button @click="openConfirmForm(row.Id), isLoading = false" type="danger" size="small">{{
                        $t('delete')
                    }}<el-icon class="el-icon--right">
                            <Delete />
                        </el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- Dialogin -->
        <el-dialog v-model="dialogFormVisible" :title="isEditing ? $t('update_course') : $t('add_new_course')"
            width="750">
            <el-form :model="courseRquestForm" label-width="150" :rules="rules" ref="ruleFormRef">
                <el-form-item :label="$t('title')" prop="Title">
                    <el-input v-model="courseRquestForm.Title" autocomplete="off" placeholder="Enter the value" />
                </el-form-item>
                <el-form-item :label="$t('credit')" prop="Credit">
                    <el-input v-model="courseRquestForm.Credit" autocomplete="off" placeholder="Enter the value" />
                </el-form-item>
                <el-form-item :label="$t('video_link')" prop="VideoLink">
                    <el-input v-model="courseRquestForm.VideoLink" autocomplete="off" placeholder="Enter the value" />
                </el-form-item>
                <el-form-item :label="$t('category_name')" prop="CategoryId">
                    <el-select v-model="courseRquestForm.CategoryId" :placeholder="$t('select')">
                        <el-option v-for="(cat, index) in categoryData" :key="index" :label="cat.CategoryName"
                            :value="cat.CategoryId" />
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('remark')" prop="Description">
                    <el-input :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
                        v-model="courseRquestForm.Description" autocomplete="off" placeholder="Enter the value" />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" :loading="isLoading"
                        @click=" isEditing ? onSubminUpdate(ruleFormRef) : onSubminCreate(ruleFormRef)">
                        {{ isEditing ? $t('update') : $t('save') }}
                    </el-button>
                </div>
            </template>
        </el-dialog>

        <ConfirmDialog :isDialogVisible="confirmDialogVisible" @close="confirmDialogVisible = false"
            :title="$t('delete')" :content="$t('do_you_want_to_delete_this_data_?')" :confirm="onConfirmDelete">
        </ConfirmDialog>
    </div>
</template>
<script lang="ts" setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import useCourse from '@/composables/useCourse';
import FormHeader from '@/components/admin/FormHeader.vue';
import { onMounted } from 'vue';
import useCategory from '@/composables/useCategory';
import { dateTimeConverter } from '@/libraries/utils/converter';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import ConfirmDialog from '@/components/admin/ConfirmDialog.vue';


const { categoryData } = useCategory();
const {
    getAllCourses,
    courseData,
    onSubminCreate,
    rules,
    dialogFormVisible,
    courseRquestForm,
    isEditing,
    isLoading,
    ruleFormRef,
    onOpenEditForm,
    onSubminUpdate,
    openConfirmForm,
    confirmDialogVisible,
    onConfirmDelete
} = useCourse();

onMounted(() => {
    getAllCourses()
})
</script>
<style scoped>
div>a {
    color: #08088b;
    text-decoration: none;
}

a:hover {
    color: blue;
    text-decoration: underline;
}
</style>