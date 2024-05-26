import type { IAxiosPromise } from "@/models/axiosPromise";
import api from "../api";
import type { IImageRequest, ITourRequest } from "@/models/tour";

export default {
    async callGetAllTours(): IAxiosPromise<any> {
        return await api.get('Tours/getall');
    },
    async callCreateNewTour(request: ITourRequest): IAxiosPromise<any> {
        return await api.post('Tours', request);
    },
    async callAddTourImageDetails(request: IImageRequest): IAxiosPromise<any> {
        return await api.post('Tours/ImageDetail', request);
    },
    async callUpdateTour(Id: number, request: ITourRequest): IAxiosPromise<any> {
        return await api.put(`Tours/${Id}`, request);
    },
    async callDeleteImageDetailById(Id: number): IAxiosPromise<any> {
        return await api.delete(`Tours/DetailImageDetail/${Id}`);
    },
    async callDeleteTour(Id: number): IAxiosPromise<any> {
        return await api.delete(`Tours/${Id}`);
    }
}