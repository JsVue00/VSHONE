<template>
    <div class="overflow-auto">
        <AdminFormHeader :title="$t('category_list')">
            <el-button type="primary" @click="dialogFormVisible = true">{{ $t('create_new') }}</el-button>
        </AdminFormHeader>
        <SubCategoryTable :data="subCategoryData" :is-loading="isLoading" />
    </div>
    <!-- Dialogin -->
    <el-dialog v-model="dialogFormVisible" :title="isEditing ? $t('update_category') : $t('create_new_category')"
        width="500">
        <el-form :model="subCategoryRequestForm" ref="ruleFormRef">
            <el-form-item :label="$t('category_name')" :label-width="formLabelWidth" prop="CategoryName">
                <el-input v-model="subCategoryRequestForm.SubCategoryName" autocomplete="off"
                    placeholder="Enter the value" />
            </el-form-item>
            <el-form-item :label="$t('sub_category_name')" prop="CategoryId">
                <el-select v-model="subCategoryRequestForm.CategoryId" :placeholder="$t('select')">
                    <el-option v-for="(cat, index) in categoryData" :key="index" :label="cat.CategoryName"
                        :value="cat.CategoryId" />
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('remark')" :label-width="formLabelWidth" prop="Description">
                <el-input v-model="subCategoryRequestForm.Description" autocomplete="off"
                    placeholder="Enter the value" />
            </el-form-item></el-form>
        <template #footer>
            <div class="dialog-footer">
                <!-- <el-button type="primary" :loading="isLoading"
                    @click="isEditing ? onConfirmUpdate() : onSubmit(ruleFormRef)">
                    {{ isEditing ? $t('update') : $t('save') }}
                </el-button> -->
            </div>
        </template>
    </el-dialog>

</template>
<script lang="ts" setup>
import SubCategoryTable from '@/components/admin/SubCategoryTable.vue';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import useSubCategory from '@/composables/useSubCategory';
import useCategory from '@/composables/useCategory';
const { categoryData } = useCategory();

const { subCategoryData,
    dialogFormVisible,
    subCategoryRequestForm,
    formLabelWidth,
    isEditing,
    isLoading,
    ruleFormRef } = useSubCategory();
</script>