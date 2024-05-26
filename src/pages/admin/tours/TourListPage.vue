<template>
    <div>
        <FormHeader :title="$t('tours_list')">
            <el-button type="primary"
                @click="(dialogFormVisible = true), isEditing = false, formHelper.clearForm(ruleFormRef)">{{
                    $t('create_new') }}</el-button>
        </FormHeader>

        <!-- Tour data table -->
        <el-table :data="tourData" border v-loading="isPageLoading" header-cell-class-name="my-table-header"
            style="width: 100%; box-sizing: border-box !important">
            <el-table-column style="text-align: start;" v-for="(pro, index) in tourTableDisplay" :key="index"
                :prop="pro[1]" :width="pro[2]" :label="$t(pro[0])">
                <template #default="scope">
                    <div v-if="pro[0] === 'images_details'">
                        <div class="w-full max-h-[300px] overflow-auto grid grid-cols-3 gap-1">
                            <div class="w-[100px] h-[100px] rounded-sm overflow-hidden"
                                v-for="(image, index) in scope.row.ImageDetails " :key="index">
                                <el-popover placement="right-start" :width="400" trigger="hover">
                                    <!-- Display image in tooltip -->
                                    <img class="w-full h-full object-cover"
                                        :src="getImage(`TourImages%5C%5CTourId${scope.row.Id}`, `${image.ImageName}`)"
                                        alt="">
                                    <template #reference>
                                        <img class="w-full h-full object-cover"
                                            :src="getImage(`TourImages%5C%5CTourId${scope.row.Id}`, `${image.ImageName}`)"
                                            alt="">
                                    </template>
                                </el-popover>
                            </div>
                        </div>
                    </div>
                    <div v-if="pro[0] === 'thumbnail'"> <img class="w-full object-cover"
                            :src="getImage(`TourImages%5C%5CThumbnail`, `${scope.row.Thumbnail}`)" alt=""></div>
                    <div v-if="pro[0] === 'description'" class="max-h-[300px] overflow-y-auto">{{ scope.row.Description
                        }}
                    </div>
                    <div v-if="pro[0] === 'created_at'">
                        <div>{{ dateTimeConverter(scope.row.CreatedAt) }}</div>
                        <div>{{ dateTimeConverter(scope.row.ModifiedAt) }}</div>
                    </div>
                    <!-- <div v-if="pro[0] === 'modified_at'">{{ dateTimeConverter(scope.row.ModifiedAt) }}</div> -->
                </template>
            </el-table-column>
            <el-table-column fixed="right" align="center" label="23" width="200">
                <template #default="scope">
                    <el-button @click="onOpenEditForm(scope.row.Id)" type="info" size="small">
                        {{ $t('edit') }}
                        <el-icon class="el-icon--right">
                            <Edit />
                        </el-icon></el-button>
                    <el-button @click="openConfirmDelete(scope.row.Id)" type="danger" size="small">
                        {{ $t('delete') }}
                        <el-icon class="el-icon--right">
                            <Delete />
                        </el-icon></el-button>
                </template>
            </el-table-column>
        </el-table>
        <ConfirmDialog :isDialogVisible="confirmDeleteDialog" :title="$t('delete')"
            :content="$t('do_you_want_to_delete_this_data_?')" :confirm="onDelete"
            @close="confirmDeleteDialog = false" />
        <!-- Create/Edit form dialog -->

        <el-dialog :overflow="false" top="50px" style="padding: 0 !important;" v-model="dialogFormVisible"
            :title="$t('create_new_tour')" width="1200">
            <el-form style="padding: 0 !important" class=" max-h-[75vh] grid grid-cols-2 space-x-4" label-position="top"
                :model="tourRequestForm" :rules="roles" label-width="150" ref="ruleFormRef">
                <div class="max-h-[75vh] overflow-auto px-1">
                    <el-form-item :label="$t('title')" prop="Title">
                        <el-input v-model="tourRequestForm.Title" autocomplete="off" placeholder="Enter the value" />
                    </el-form-item>
                    <el-form-item :label="$t('AreaName')" prop="AreaName">
                        <el-input v-model="tourRequestForm.AreaName" autocomplete="off" placeholder="Enter the value" />
                    </el-form-item>
                    <el-form-item :label="$t('province')" prop="ProvinceId">
                        <el-select v-model="tourRequestForm.ProvinceId" :placeholder="$t('select')">
                            <el-option v-for="(pro, index) in provinceData" :key="index" :label="pro.NameEn"
                                :value="pro.Id" />
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('MapEmbed')" prop="MapEmbed">
                        <el-input v-model="tourRequestForm.MapEmbed" autocomplete="off"
                            :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="Enter the value" />
                    </el-form-item>
                    <el-form-item :label="$t('description')" prop="Description">
                        <Editor v-model="tourRequestForm.Description" editorStyle="height: 320px">

                        </Editor>
                    </el-form-item>
                </div>

                <div class="flex flex-col justify-between">
                    <div class="max-h-[70vh] overflow-auto px-1">
                        <el-form-item :label="$t('Thumbnail')" prop="Thumbnail">
                            <UploadSingleImage :FileName="tourRequestForm.Thumbnail"
                                :Folder="'TourImages%5C%5CThumbnail'" :handleChange="onUploadThumnail" />
                        </el-form-item>

                        <el-form-item :label="$t('images_details')" prop="Thumbnail" class="w-full">
                            <UploadMutipleImages :fileList="fileList" :handleChange="handleChange" :tourId="tourId"
                                @handleDelete="onCacelFileUpload" />
                            <div v-show="isEditing"
                                class="flex flex-wrap justify-start gap-2 mt-1 hover:shadow-md hover:bg-gray-100 p-2 rounded-md">
                                <div v-for="(detail, index) in ImageDetailList" :key="index">
                                    <div class="w-[100px] h-[100px] myImage group overflow-hidden relative">
                                        <div
                                            class="w-[100px] absolute h-[100px]  hidden group-hover:block  group-hover:bg-opacity-20 bg-black">
                                        </div>

                                        <el-button size="small" type="danger" class="removeBtn"
                                            @click=" onDeleteImageDetailById(detail, index)">{{
                                                $t('remove')
                                            }}
                                        </el-button>
                                        <img class=" w-full  h-full object-cover z-0 rounded-md"
                                            :src="getImage(`TourImages%5C%5CTourId${detail.TourId}`, `${detail.ImageName}`)"
                                            alt="">
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                    </div>
                    <div class=" text-end">
                        <el-button type="primary" :loading="isLoading"
                            @click="isEditing ? onSubmitUpdate(ruleFormRef) : onSubmitCreate(ruleFormRef)">
                            {{ isEditing ? $t('update') : $t('save') }}
                        </el-button>
                    </div>
                </div>

            </el-form>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { dateTimeConverter } from '@/libraries/utils/converter';
import FormHeader from '@/components/admin/FormHeader.vue';
import type { FormInstance } from 'element-plus';
import useTour from '@/composables/useTour';
import UploadMutipleImages from '@/components/admin/UploadMutipleImages.vue';
import { Edit, Delete } from "@element-plus/icons-vue";
import { getImage } from '@/apis/api';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import UploadSingleImage from '@/components/admin/UploadSingleImage.vue';
import useProvince from '@/composables/useProvince';
import Editor from 'primevue/editor';
import ConfirmDialog from '@/components/admin/ConfirmDialog.vue';



const content = "hello snegonhg";

const ruleFormRef = ref<FormInstance>();
const tourId = ref<number>(1);
const { provinceData, getAllProvinces } = useProvince();

const {
    isLoading,
    getAllTours,
    isPageLoading,
    tourData,
    tourTableDisplay,
    dialogFormVisible,
    tourRequestForm,
    isEditing,
    roles,
    onOpenEditForm,
    onSubmitUpdate,
    ImageDetailList,
    fileList,
    handleChange,
    onCacelFileUpload,
    onDeleteImageDetailById,
    onUploadThumnail,
    onSubmitCreate,
    confirmDeleteDialog,
    openConfirmDelete,
    onDelete
} = useTour();
onMounted(() => {
    getAllTours(); getAllProvinces();
});
</script>

<style>
.el-upload-list {
    display: none !important;
}

.el-popover.el-popper {
    padding: 1px !important;
    background: black !important;
}

.ql-image {
    display: none !important;
}

.removeBtn {
    position: absolute;
    left: 0;
    bottom: -25px;
    right: 0;
    margin: 0 10px;
    transition: all 0.2s linear;
}

.myImage:hover .removeBtn {
    bottom: 6px;
    z-index: 999;
}
</style>
