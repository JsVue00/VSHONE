import provinceApiCalling from "@/apis/province/provinceApiCalling";
import type { IGetProvinceResponse, IProvinceRequest } from "@/models/province";
import { reactive, ref } from "vue";
import type { FormRules, UploadFile } from 'element-plus';
import { normalValidate } from "@/libraries/elementPlusHelper/formValidationHelper";
import { deleteImage, uploadImage } from "@/apis/api";
import notificationHelper from "@/libraries/notificationHelper";
import formHelper from "@/libraries/elementPlusHelper/formHelper";
export default function useProvince() {
    const provinceData = ref<IGetProvinceResponse[]>([]);
    const isLoadinPage = ref<boolean>(false);
    const dialogFormVisible = ref<boolean>(false);
    const isEditing = ref<boolean>(false);
    const fileImagetoDelete = ref<string>()

    const provinceRequestForm = reactive<IProvinceRequest>({
        ProvinceCode: "",
        NameEn: "",
        NameKh: "",
        CountryId: 0,
        ProvinceImage: ""
    });

    const roles = reactive<FormRules<IProvinceRequest>>({
        ProvinceCode: normalValidate,
        NameEn: normalValidate,
        NameKh: normalValidate,
        CountryId: normalValidate,
        ProvinceImage: normalValidate
    });

    const provinceId = ref<number>(0);
    const openEditForm = (Id: number) => {
        provinceId.value = Id;
        dialogFormVisible.value = true;
        isEditing.value = true;
        const dataById = provinceData.value.find((data) => data.Id === Id);
        if (dataById) {
            fileImagetoDelete.value = dataById.ProvinceImage;
            provinceRequestForm.NameEn = dataById.NameEn;
            provinceRequestForm.NameKh = dataById.NameKh;
            provinceRequestForm.CountryId = dataById.CountryId;
            provinceRequestForm.ProvinceImage = dataById.ProvinceImage;
            provinceRequestForm.ProvinceCode = dataById.ProvinceCode;
        }
    }

    const getAllProvinces = async () => {
        try {
            isLoadinPage.value = true;
            const response = await provinceApiCalling.callGetAllProvinces();
            provinceData.value = response.data.Data as IGetProvinceResponse[];
        } catch (error) {
            console.error(error);
        } finally {
            isLoadinPage.value = false;
        }
    }
    const handleChange = async (uploadFile: UploadFile) => {
        try {
            const formData = new FormData();
            formData.append("file", uploadFile.raw!);
            formData.append("folder", "provinces");
            const result = await uploadImage(formData.get('folder'), formData)
            provinceRequestForm.ProvinceImage = result.data.fileName;
        } catch (error) {
            console.error(error);
        }
    }

    const createProvince = async () => {
        try {
            const response = await provinceApiCalling.callCreateNewProvince(provinceRequestForm);
            notificationHelper.success('', response.data.Message);
            getAllProvinces();
        } catch (error: any) {
            notificationHelper.error('', error.message);
        } finally {
            dialogFormVisible.value = false;
        }
    }

    const updateProvince = async () => {
        try {
            if (provinceRequestForm.ProvinceImage !== fileImagetoDelete.value) {
                deleteImage('provinces', fileImagetoDelete.value!);
            }
            const response = await provinceApiCalling.callUpdateProvince(provinceId.value, provinceRequestForm);
            notificationHelper.success('', response.data.Message);
            getAllProvinces();
        } catch (error: any) {
            notificationHelper.error('', error.message);
            console.error(error);
        } finally {
            isEditing.value = false;
            dialogFormVisible.value = false;
        }
    }

    const onSubmitUpdate = formHelper.onSubmitForm(updateProvince);
    const onSubmitCreate = formHelper.onSubmitForm(createProvince);
    return {
        getAllProvinces,
        provinceData,
        isEditing,
        isLoadinPage,
        roles,
        provinceRequestForm,
        handleChange,
        onSubmitCreate,
        dialogFormVisible,
        openEditForm,
        onSubmitUpdate
    }
}