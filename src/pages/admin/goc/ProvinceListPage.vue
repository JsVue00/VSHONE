<template>
    <div>
        <FormHeader :title="$t('province_list')">
            <el-button type="primary"
                @click="(dialogFormVisible = true), (isEditing = false), formHelper.clearForm(ruleFormRef)">{{
                    $t('create_new') }}</el-button>
        </FormHeader>
        <el-table :data="provinceData" border v-loading="isLoadinPage" header-cell-class-name="my-table-header"
            style="width: 100%; box-sizing: border-box">
            <el-table-column :label="$t('#')" width="80" align="center">
                <template #default="scope">
                    <div>
                        {{ scope.$index + 1 }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="CountryId" :label="$t('country_id')" width="140" align="center" />
            <el-table-column prop="ProvinceCode" :label="$t('province_code')" width="140" align="center" />
            <el-table-column prop="NameEn" :label="$t('name_en')" />
            <el-table-column prop="NameKh" :label="$t('name_kh')" />
            <el-table-column prop="Image" :label="$t('image')" width="120">
                <template #default="{ row }">
                    <div class="w-[100px] max-h-[100px] rounded-md overflow-hidden">
                        <img class="h-full w-full object-cover" :src="getImage('provinces', row.ProvinceImage)"
                            :alt="row.ProvinceImage" />
                    </div>
                </template>
            </el-table-column>
            <el-table-column :label="$t('modified_at')">
                <template #default="{ row }">
                    <div>{{ dateTimeConverter(row.ModifiedAt) }}</div>
                </template>
            </el-table-column>

            <el-table-column fixed="right" align="center" :label="$t('actions')" width="100">
                <template #default="scope">
                    <el-button @click="openEditForm(scope.row.Id)" type="info" size="small">
                        {{ $t('edit') }}
                        <el-icon class="el-icon--right">
                            <Edit />
                        </el-icon></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="dialogFormVisible" :title="$t('create_new_province')" width="700">
            <el-form :model="provinceRequestForm" label-width="150" :rules="roles" ref="ruleFormRef">
                <el-form-item :label="$t('name_en')" prop="NameEn">
                    <el-input v-model="provinceRequestForm.NameEn" autocomplete="off" placeholder="Enter the value" />
                </el-form-item>
                <el-form-item :label="$t('name_kh')" prop="NameEn">
                    <el-input v-model="provinceRequestForm.NameKh" autocomplete="off" placeholder="Enter the value" />
                </el-form-item>
                <el-form-item :label="$t('province_code')" prop="ProvinceCode">
                    <el-input v-model="provinceRequestForm.ProvinceCode" autocomplete="off"
                        placeholder="Enter the value" />
                </el-form-item>
                <el-form-item :label="$t('country_id')" prop="CountryId">
                    <el-input v-model="provinceRequestForm.CountryId" autocomplete="off"
                        placeholder="Enter the value" />
                </el-form-item>
                <el-form-item :label="$t('province_image')" prop="ProvinceImage">
                    <UploadSingleImage :FileName="provinceRequestForm.ProvinceImage" :Folder="'provinces'"
                        :handle-change="handleChange" />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary"
                        @click="isEditing ? onSubmitUpdate(ruleFormRef) : onSubmitCreate(ruleFormRef)">
                        {{ isEditing ? $t('update') : $t('save') }}
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import useCity from '@/composables/useCity';
import { onMounted, ref } from 'vue';
import { dateTimeConverter } from '@/libraries/utils/converter';
import FormHeader from '@/components/admin/FormHeader.vue';
import UploadSingleImage from '@/components/admin/UploadSingleImage.vue';
import type { FormInstance } from 'element-plus';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import { Edit } from '@element-plus/icons-vue';
import { getImage } from '@/apis/api';
import useProvince from '@/composables/useProvince';

const ruleFormRef = ref<FormInstance>();



const { getAllProvinces, provinceData, isLoadinPage, roles, provinceRequestForm, handleChange, onSubmitCreate,
    dialogFormVisible, isEditing, openEditForm, onSubmitUpdate } = useProvince();

onMounted(() => {
    getAllProvinces();
});
</script>

<style>
.el-upload-list {
    display: none !important;
}
</style>
