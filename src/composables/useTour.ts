import { deleteImage, uploadImage, uploadMultipleImages } from "@/apis/api";
import tourApiCalling from "@/apis/tours/tourApiCalling";
import { handleSingleImageUpload } from "@/libraries/commonHelper";
import formHelper from "@/libraries/elementPlusHelper/formHelper";
import { normalValidate } from "@/libraries/elementPlusHelper/formValidationHelper";
import notificationHelper from "@/libraries/notificationHelper";
import type { TableProperty } from "@/models/tableProperty";
import type { IGetToureResponse, IImageDetail, IImageRequest, ITourRequest } from "@/models/tour";
import type { FormRules, UploadFile, UploadRawFile } from "element-plus";
import { reactive, ref } from "vue";
interface FileList {
    name: string,
    raw: object,
}
interface IGetFileUpload {
    fileName: string,
    filePath: string,
}
export default function useTour() {
    const isPageLoading = ref<boolean>(false);
    const dialogFormVisible = ref<boolean>(false);
    const tourData = ref<IGetToureResponse[]>([]);
    const isEditing = ref<boolean>(false);
    const isLoading = ref<boolean>(false);
    const confirmDeleteDialog = ref<boolean>(false);

    // tour table list name
    const tourTableDisplay: TableProperty = [
        ['title', 'Title', 200],
        ['thumbnail', 'Thumbnail', 200],
        ['area_name', "AreaName", 200],
        ['map_embed', "MapEmbed", 300],
        ['images_details', 'ImageDetails', 345],
        ['description', 'Description', 600],
        ['modified_at', "CreatedAt", 200],
        // ['modified_at', "ModifiedAt", 200],

    ]
    // get all tour data
    const getAllTours = async () => {
        try {
            isPageLoading.value = true;
            const response = await tourApiCalling.callGetAllTours();
            tourData.value = response.data.Data as IGetToureResponse[];

        } catch (error) {
            console.error(error);
        } finally {
            isPageLoading.value = false;
        }
    }
    // Create new tour
    const tourRequestForm = reactive<ITourRequest>({
        Thumbnail: "",
        Title: "",
        CountryId: 0,
        ProvinceId: null,
        DistrictId: 0,
        AreaName: "",
        Price: 0,
        Description: "",
        MapEmbed: ""
    });
    const roles = reactive<FormRules<ITourRequest>>({
        Title: normalValidate,
        Thumbnail: normalValidate,
        CountryId: normalValidate,
        ProvinceId: normalValidate,
        DistrictId: normalValidate,
        AreaName: normalValidate,
        Price: normalValidate,
        Description: normalValidate,
        MapEmbed: normalValidate,
    });

    // upload images
    const fileList = ref<FileList[]>([]);
    const fileRaw = ref<UploadRawFile[]>([])
    const handleChange = (uploadFile: UploadFile) => {
        fileList.value.push({ name: uploadFile.name, raw: uploadFile.raw! });
        fileRaw.value.push(uploadFile.raw!);
    }

    const onUploadThumnail = async (uploadFile: UploadFile) => {
        const reponse = await handleSingleImageUpload(uploadFile, 'TourImages%5C%5CThumbnail');
        if (reponse?.fileName) tourRequestForm.Thumbnail = reponse.fileName;
    }

    const onCacelFileUpload = (index: number) => {
        fileList.value.splice(index, 1)
        fileRaw.value.splice(index, 1)
    }

    const onDeleteImageDetailById = async (ImageDetail: IImageDetail, index: number) => {
        isLoading.value = true;
        const response = await tourApiCalling.callDeleteImageDetailById(ImageDetail.Id);
        notificationHelper.success('', response.data.Message);
        await onDeleteImageInApiFolder(ImageDetail.TourId, ImageDetail.ImageName)
        ImageDetailList.value.splice(index, 1)
        getAllTours()
        isLoading.value = false;
    }

    const onDeleteImageInApiFolder = async (TourId: number, fileName: string) => {
        await deleteImage("TourImages%5C%5CTourId" + TourId, fileName)
    }

    const responseUploadFile = ref<IGetFileUpload[]>([]);
    const uploadImages = async (tourId: number) => {
        try {
            const result = await uploadMultipleImages(fileRaw.value, 'TourId' + tourId);
            responseUploadFile.value = result;
        } catch (error) {
            console.error(error);
        }
    }

    const addTourImageDetails = async (tourId: number) => {
        try {
            responseUploadFile.value.forEach(async (file, index) => {
                const repuest: IImageRequest = {
                    TourId: tourId,
                    ImageName: file.fileName,
                    ImageOrder: index + 1,
                }
                await tourApiCalling.callAddTourImageDetails(repuest);
            })
        } catch (error) {
            console.error(error);
        }
    }

    const createNewTour = async () => {
        try {
            const response = await tourApiCalling.callCreateNewTour(tourRequestForm);
            const tourId = response.data.Data.createdTourId;
            await uploadImages(tourId);
            await addTourImageDetails(tourId);
            notificationHelper.success('', 'success');
            getAllTours();
        } catch (error) {
            console.error(error);
        } finally {
            dialogFormVisible.value = false;
        }
    }

    const ImageDetailList = ref<IImageDetail[]>([])
    const tourId = ref<number>(0);
    const onOpenEditForm = async (Id: number) => {
        tourId.value = Id;
        isEditing.value = true;
        dialogFormVisible.value = true;
        const TourById = tourData.value.find((data: any) => data.Id === Id);
        if (TourById) {
            tourRequestForm.Thumbnail = TourById.Thumbnail;
            tourRequestForm.Title = TourById.Title;
            tourRequestForm.CountryId = TourById.CountryId;
            tourRequestForm.ProvinceId = TourById.ProvinceId;
            tourRequestForm.DistrictId = TourById.DistrictId;
            tourRequestForm.AreaName = TourById.AreaName;
            tourRequestForm.Price = TourById.Price;
            tourRequestForm.Description = TourById.Description;
            tourRequestForm.MapEmbed = TourById.MapEmbed;
            ImageDetailList.value = TourById.ImageDetails;

            console.log(TourById.Description)
        }
    }

    const updateTour = async () => {
        isLoading.value = true;
        try {
            const response = await tourApiCalling.callUpdateTour(tourId.value, tourRequestForm);
            if (fileRaw.value.length !== 0) {
                await uploadImages(tourId.value);
                await addTourImageDetails(tourId.value);
            }
            await getAllTours();
            notificationHelper.success('', response.data.Message);
        } catch (err) {
            console.log(err);
        } finally {
            dialogFormVisible.value = false;
            isEditing.value = false;
            isLoading.value = false;
        }
    }
    const thumbmailImage = ref<string>('')
    const openConfirmDelete = async (Id: number) => {
        confirmDeleteDialog.value = true;
        tourId.value = Id;
        const dataDelete = tourData.value.find((data: IGetToureResponse) => data.Id = Id);
        if (dataDelete) {
            thumbmailImage.value = dataDelete.Thumbnail;
        }
    }
    const onDelete = async () => {
        try {
            const response = await tourApiCalling.callDeleteTour(tourId.value);
            await deleteImage("TourImages%5C%5CTourId" + tourId.value);
            await deleteImage("TourImages%5C%5CThumbnail", thumbmailImage.value);
            notificationHelper.success('', response.data.Message);
        } catch (error) {
            console.error(error);
        } finally {
            confirmDeleteDialog.value = false;
            getAllTours();
        }
    }
    const onSubmitUpdate = formHelper.onSubmitForm(updateTour);
    const onSubmitCreate = formHelper.onSubmitForm(createNewTour);

    return {
        isLoading,
        tourData,
        isPageLoading,
        getAllTours,
        tourTableDisplay,
        dialogFormVisible,
        tourRequestForm,
        createNewTour,
        fileList,
        handleChange,
        uploadImages,
        onSubmitCreate,
        isEditing,
        roles,
        onOpenEditForm,
        ImageDetailList,
        onSubmitUpdate,
        onCacelFileUpload,
        onDeleteImageDetailById,
        onUploadThumnail,
        confirmDeleteDialog,
        openConfirmDelete,
        onDelete

    }
}