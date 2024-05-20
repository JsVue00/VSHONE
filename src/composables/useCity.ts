import cityApiCalling from "@/apis/city/cityApiCalling";
import type { ICityRequest, IGetCityResponse } from "@/models/city";
import { reactive, ref } from "vue";
import type { FormRules } from 'element-plus';
import { normalValidate } from "@/libraries/elementPlusHelper/formValidationHelper";
import type { UploadFile } from 'element-plus'
import api, { deleteImage } from '@/apis/api';
import notificationHelper from "@/libraries/notificationHelper";
import formHelper from "@/libraries/elementPlusHelper/formHelper";

export default function useCity() {
    const dialogFormVisible = ref<boolean>(false);
    const pageLoading = ref<boolean>(false)
    const isEditing = ref<boolean>(false);
    const cityData = ref<IGetCityResponse[]>([])
    const fileImagetoDelete = ref<string>()

    const cityRequestForm = reactive<ICityRequest>({
        CityName: "",
        CountryId: 0,
        CityImage: ""
    });
    const rules = reactive<FormRules<ICityRequest>>({
        CityImage: normalValidate,
        CityName: normalValidate,
    });




    const fileName = ref<String>('')
    const handleChange = async (uploadFile: UploadFile,) => {
        try {
            const formData = new FormData();
            formData.append("file", uploadFile.raw!);
            formData.append("folder", "cities");
            const result = await api.post('ImageUpload/upload/' + formData.get('folder'), formData)
            cityRequestForm.CityImage = result.data.fileName;
        } catch (error) {
            console.error(error);
        }
    }

    const createCity = async () => {
        try {
            await cityApiCalling.callCreateNewCity(cityRequestForm);
            notificationHelper.success('', 'City Created Successfully');
            getAllCities();
        } catch (error: any) {
            notificationHelper.error('', error.message)
        } finally {
            dialogFormVisible.value = false;
        }
    }
    const getAllCities = async () => {
        try {
            pageLoading.value = true;
            const response = await cityApiCalling.callGetAllCities();
            cityData.value = response.data.Data as IGetCityResponse[];
        } catch (error) {
            console.error(error);
        } finally {
            pageLoading.value = false;
        }
    }

    const cityId = ref<number>(0)
    const openEditForm = (Id: number) => {
        isEditing.value = true;
        cityId.value = Id;
        dialogFormVisible.value = true;
        const dataById = cityData.value.find((data) => data.Id === Id);
        if (dataById) {
            fileImagetoDelete.value = dataById.CityImage;
            cityRequestForm.CityName = dataById.CityName;
            cityRequestForm.CountryId = dataById.CountryId;
            cityRequestForm.CityImage = dataById.CityImage;
        }
    }
    const updateCity = async () => {
        try {
            if (cityRequestForm.CityImage !== fileImagetoDelete.value) {
                deleteImage('cities', fileImagetoDelete.value!);
            }
            await cityApiCalling.callUpdateCity(cityId.value, cityRequestForm);
            notificationHelper.success('', 'City Updated Successfully');
            getAllCities();
        } catch (error) {
            console.error(error);
        } finally {
            isEditing.value = false;
            dialogFormVisible.value = false;
        }
    }
    const onSubmitUpdate = formHelper.onSubmitForm(updateCity)
    const onSubmitCreate = formHelper.onSubmitForm(createCity);
    return {
        cityData,
        getAllCities,
        pageLoading,
        cityRequestForm,
        dialogFormVisible,
        rules,
        handleChange,
        fileName,
        onSubmitCreate,
        onSubmitUpdate,
        openEditForm,
        isEditing
    }
}