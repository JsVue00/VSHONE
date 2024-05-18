import type { IAxiosPromise } from "@/models/axiosPromise";
import api from "../api";
import type { ICityRequest, IGetCityResponse } from "@/models/city";

export default {
    async callCreateNewCity(request: ICityRequest): IAxiosPromise<any> {
        return await api.post('City', request)
    },
    async callGetAllCities(): IAxiosPromise<IGetCityResponse> {
        return await api.get('City');
    },
    async callUpdateCity(Id: number, request: ICityRequest): IAxiosPromise<any> {
        return api.put(`City/${Id}`, request)
    }
}