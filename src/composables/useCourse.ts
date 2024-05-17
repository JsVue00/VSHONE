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
  const confirmDialogVisible = ref(false);

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

  const courseId = ref<number>(0)
  const onOpenEditForm = async (Id: number) => {
    isEditing.value = true;
    dialogFormVisible.value = true;
    courseId.value = Id;
    const courbyId = courseData.value.find((data: IGetCourseResponse) => data.Id === Id);
    if (courbyId) {
      courseRquestForm.Title = courbyId.Title;
      courseRquestForm.Credit = courbyId.Credit;
      courseRquestForm.Description = courbyId.Description;
      courseRquestForm.VideoLink = courbyId.VideoLink;
      courseRquestForm.CategoryId = courbyId.CategoryId;
    }
  }
  const updateCourse = async () => {
    try {
      const response = await courseApiCalling.callUpdateCourse(courseId.value, courseRquestForm);
      notificationHelper.success('', response.data.Message)
      getAllCourses();
    } catch (error) {
      console.log(error);
    } finally {
      isEditing.value = false;
      isLoading.value = false;
      dialogFormVisible.value = false;
    }
  }

  const openConfirmForm = (Id: number) => {
    courseId.value = Id;
    confirmDialogVisible.value = true;
  }
  const onConfirmDelete = async () => {
    try {
      isLoading.value = true;
      const reponse = await courseApiCalling.callDeleteCourse(courseId.value);
      notificationHelper.success('', reponse.data.Message);
      getAllCourses();
    } catch (error) {
      console.log(error);
    } finally {
      confirmDialogVisible.value = false;
      isLoading.value = false;
    }
  };
  const onSubminUpdate = formHelper.onSubmitForm(updateCourse);
  const onSubminCreate = formHelper.onSubmitForm(createNewCourse);


  const getAllCourses = async () => {
    try {
      isLoading.value = true;
      const result = await courseApiCalling.callGetAllCourses();
      courseData.value = result.data.Data as IGetCourseResponse[];
    } catch (error: any) {
      notificationHelper.error('', error.message)
    } finally {
      isLoading.value = false;
    }
  }
  return {
    getAllCourses,
    courseData,
    onSubminCreate,
    rules,
    dialogFormVisible,
    courseRquestForm,
    isEditing,
    ruleFormRef,
    isLoading,
    onOpenEditForm,
    onSubminUpdate,
    onConfirmDelete,
    openConfirmForm,
    confirmDialogVisible
  };
}
