import type { IAxiosPromise } from "@/models/axiosPromise";
import api from "../api";
import type { ICreateCourseRequest, IGetCourseResponse } from "@/models/course";

export default {
    async callGetAllCourses(): IAxiosPromise<IGetCourseResponse> {
        return await api.get('course');
    },
    async callCreateCourse(request: ICreateCourseRequest) {
        return await api.post('course', request);
    },
    async callUpdateCourse(Id: number, request: ICreateCourseRequest) {
        return await api.put('course/' + Id, request);
    },
    async callDeleteCourse(Id: number) {
        return await api.delete('course/' + Id);
    }
}