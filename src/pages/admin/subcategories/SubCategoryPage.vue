<template>
    <div class="overflow-auto">
        <AdminFormHeader :title="$t('sub_category_list')">
            <el-button type="primary" @click="dialogFormVisible = true, isEditing = false">{{ $t('create_new')
                }}</el-button>
        </AdminFormHeader>
        <SubCategoryTable :data="subCategoryData" :is-loading="isLoading" :on-update="onClickEdit"
            :on-delete="confirmDialog" />
    </div>
    <!-- Dialogin -->
    <el-dialog v-model="dialogFormVisible" :title="isEditing ? $t('update_sub_category') : $t('create_new_category')"
        width="500">
        <el-form :model="subCategoryRequestForm" label-width="180" :rules="rules" ref="ruleFormRef">
            <el-form-item :label="$t('sub_category_name')" prop="SubCategoryName">
                <el-input v-model="subCategoryRequestForm.SubCategoryName" autocomplete="off"
                    placeholder="Enter the value" />
            </el-form-item>
            <el-form-item :label="$t('category_name')" prop="CategoryId">
                <el-select v-model="subCategoryRequestForm.CategoryId" :placeholder="$t('select')">
                    <el-option v-for="(cat, index) in categoryData" :key="index" :label="cat.CategoryName"
                        :value="cat.CategoryId" />
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('remark')" prop="Description">
                <el-input v-model="subCategoryRequestForm.Description" autocomplete="off"
                    placeholder="Enter the value" />
            </el-form-item></el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" :loading="isLoading"
                    @click="isEditing ? onConfirmEdit(ruleFormRef) : onSubmit(ruleFormRef)">
                    {{ isEditing ? $t('update') : $t('save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
    <ConfirmDialog :isDialogVisible="confirmDialogVisible" @close="confirmDialogVisible = false" :title="$t('delete')"
        :content="$t('do_you_want_to_delete_this_data_?')" :confirm="deleteSubCategory">
        <br>
        <div>{{ $t('Will delete all quizzes that have this subcategory.') }}</div>
    </ConfirmDialog>
</template>
<script lang="ts" setup>
import SubCategoryTable from '@/components/admin/SubCategoryTable.vue';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import useSubCategory from '@/composables/useSubCategory';
import useCategory from '@/composables/useCategory';
import ConfirmDialog from '@/components/admin/ConfirmDialog.vue';

const { categoryData } = useCategory();

const { subCategoryData,
    dialogFormVisible,
    subCategoryRequestForm,
    onConfirmEdit,
    isEditing,
    isLoading,
    rules,
    onSubmit,
    confirmDialog,
    onClickEdit,
    ruleFormRef, confirmDialogVisible, deleteSubCategory } = useSubCategory();
</script>