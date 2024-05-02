<template>
    <div class="overflow-auto">
        <AdminFormHeader :title="$t('category_list')">
            <el-button type="primary" @click="dialogFormVisible = true">{{ $t('create_new') }}</el-button>
        </AdminFormHeader>
        <CategoryTable :data="categoryData" :is-loading="isLoading" :onDelete="onConfirm" />
    </div>
    <!-- Dialogin -->
    <el-dialog v-model="dialogFormVisible" :title="$t('create_new_category')" width="500">
        <el-form size="small" :model="categoryRequestForm" :rules="rules" ref="ruleFormRef">
            <el-form-item :label="$t('category_name')" :label-width="formLabelWidth" prop="CategoryName">
                <el-input v-model="categoryRequestForm.CategoryName" autocomplete="off" placeholder="Enter the value" />
            </el-form-item>
            <el-form-item :label="$t('remark')" :label-width="formLabelWidth" prop="Description">
                <el-input v-model="categoryRequestForm.Description" autocomplete="off" placeholder="Enter the value" />
            </el-form-item></el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" :loading="isLoading" @click="onSubmit(ruleFormRef)">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import CategoryTable from '@/components/admin/CategoryTable.vue';
import AdminFormHeader from '@/components/admin/FormHeader.vue';
import useCategory from '@/composables/useCategory';

const {
    onSubmit,
    onConfirm,
    ruleFormRef,
    rules,
    dialogFormVisible,
    formLabelWidth,
    categoryRequestForm,
    categoryData,
    isLoading
} = useCategory();
</script>