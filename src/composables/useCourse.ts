import { normalValidate } from '@/libraries/elementPlusHelper/formValidationHelper';
import type { ICreateCourseRequest, IGetCourseResponse } from '@/models/course';
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import courseApiCalling from '@/apis/courses/couseApiCalling';
import notificationHelper from '@/libraries/notificationHelper';
import couseApiCalling from '@/apis/courses/couseApiCalling';
import formHelper from '@/libraries/elementPlusHelper/formHelper';

export default function useCourse() {
  const dialogFormVisible = ref(false);
  const isEditing = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  const ruleFormRef = ref<FormInstance>();
  const courseData = ref<IGetCourseResponse[]>([])

  const courseRquestForm = reactive<ICreateCourseRequest>({
    Title: '',
    CategoryId: null,
    SubCategoryId: 0,
    Credit: '',
    VideoLink: ''
  });
  const rules = reactive<FormRules<ICreateCourseRequest>>({
    Title: normalValidate,
    CategoryId: normalValidate,
    SubCategoryId: normalValidate,
    Credit: normalValidate,
    VideoLink: normalValidate
  });

  const createNewCourse = async () => {
    try {
      isLoading.value = true;
      const response = await couseApiCalling.callCreateCourse(courseRquestForm);
      notificationHelper.success('', response.data.Message);
      getAllCourses();
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
      dialogFormVisible.value = false;
    }
  }
  const onSubCreate = formHelper.onSubmitForm(createNewCourse);

  const getAllCourses = async () => {
    try {
      isLoading.value = true;
      const result = await courseApiCalling.callGetAllCourses();
      courseData.value = result.data.Data as IGetCourseResponse[];
    } catch (error: any) {
      notificationHelper.error('', error.message)
    } finally {
      isLoading.value
    }
  }
  return {
    getAllCourses,
    courseData,
    onSubCreate,
    rules,
    dialogFormVisible,
    courseRquestForm,
    isEditing,
    ruleFormRef,
    isLoading
  };
}
