import type { UploadFile } from "element-plus";
import notificationHelper from "./notificationHelper";
import { uploadImage } from "@/apis/api";
interface IUploadImage {
    filePath: string;
    fileName: string;
}

export const handleSingleImageUpload = async (uploadFile: UploadFile, folder: string): Promise<IUploadImage | null> => {
    const type = uploadFile.raw?.type;
    if (type !== 'image/jpeg' && type !== 'image/png') {
        notificationHelper.error('', 'Images type uploaded incorrectly');
    }
    else {
        const result = await uploadImage(uploadFile.raw!, folder)
        return result.data as IUploadImage;
    }
    return null;
}