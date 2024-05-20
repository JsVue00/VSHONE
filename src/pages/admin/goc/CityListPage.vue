<template>
  <div>
    <FormHeader :title="$t('city_list')">
      <el-button
        type="primary"
        @click="(dialogFormVisible = true), (isEditing = false), formHelper.clearForm(ruleFormRef)"
        >{{ $t('create_new') }}</el-button
      >
    </FormHeader>
    <el-table
      :data="cityData"
      border
      v-loading="pageLoading"
      header-cell-class-name="my-table-header"
      style="width: 100%; box-sizing: border-box"
    >
      <el-table-column :label="$t('#')" width="80" align="center">
        <template #default="scope">
          <div>
            {{ scope.$index + 1 }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="CountryId" :label="$t('country_id')" width="140" align="center" />
      <el-table-column prop="CityName" :label="$t('city_name')" />
      <el-table-column prop="Image" :label="$t('image')" width="120">
        <template #default="{ row }">
          <div class="w-[100px] max-h-[100px] rounded-md overflow-hidden">
            <img
              class="h-full w-full object-cover"
              :src="`https://localhost:3001/api/ImageUpload/get/cities/${row.CityImage}`"
              alt=""
            />
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
            {{ $t('edit') }} <el-icon class="el-icon--right"><Edit /></el-icon
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" :title="$t('create_city')" width="500">
      <el-form :model="cityRequestForm" :rules="rules" ref="ruleFormRef">
        <el-form-item :label="$t('city_name')" prop="CityName">
          <el-input
            v-model="cityRequestForm.CityName"
            autocomplete="off"
            placeholder="Enter the value"
          />
        </el-form-item>
        <el-form-item :label="$t('city_image')" prop="CityImage">
          <div class="flex w-full justify-between">
            <UploadSingleImage
              :FileName="cityRequestForm.CityImage"
              :Folder="'cities'"
              :handle-change="handleChange"
            />
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button
            type="primary"
            @click="isEditing ? onSubmitUpdate(ruleFormRef) : onSubmitCreate(ruleFormRef)"
          >
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

const ruleFormRef = ref<FormInstance>();

const {
  cityData,
  getAllCities,
  pageLoading,
  cityRequestForm,
  dialogFormVisible,
  rules,
  handleChange,
  onSubmitCreate,
  onSubmitUpdate,
  openEditForm,
  isEditing
} = useCity();

onMounted(() => {
  getAllCities();
});
</script>
<style>
.el-upload-list {
  display: none !important;
}
</style>
