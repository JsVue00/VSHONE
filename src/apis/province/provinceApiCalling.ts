import type { IAxiosPromise } from "@/models/axiosPromise";
import api from "../api";
import type { IGetProvinceResponse, IProvinceRequest } from "@/models/province";

export default {
    async callGetAllProvinces(): IAxiosPromise<IGetProvinceResponse> {
        return await api.get('province');
    },
    async callCreateNewProvince(request: IProvinceRequest): IAxiosPromise<any> {
        return await api.post('province', request);
    },
    async callUpdateProvince(Id: number, request: IProvinceRequest): IAxiosPromise<any> {
        return await api.put(`province/${Id}`, request);
    }
}