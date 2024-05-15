import type { IAxiosPromise } from "@/models/axiosPromise";
import api from "../api";
import type { ICreateCourseRequest, IGetCourseResponse } from "@/models/course";

export default {
    async callGetAllCourses(): IAxiosPromise<IGetCourseResponse> {
        const reponse = await api.get('course');
        return reponse;
    },
    async callCreateCourse(request: ICreateCourseRequest) {
        return await api.post('course', request);
    }
}