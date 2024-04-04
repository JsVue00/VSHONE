import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

export default function useLogin() {
  interface RuleForm {
    email: string;
    password: string;
  }

  const formSize = ref('default');
  const loginFormRule = ref<FormInstance>();
  const loginRequestForm = reactive<RuleForm>({
    email: '',
    password: ''
  });

  const rules = reactive<FormRules<RuleForm>>({
    email: [
      {
        required: true,
        message: 'Required',
        trigger: 'blur'
      },
      {
        type: 'email',
        message: 'Please input correct email address',
        trigger: ['blur', 'change']
      }
    ],
    password: [{ required: true, message: 'Required', min: 6, max: 20, trigger: 'blur' }]
  });

  const onUserSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!');
      } else {
        console.log('error submit!', fields);
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };

  return {
    rules,
    onUserSubmit,
    loginFormRule,
    loginRequestForm,
    formSize,
    resetForm
  };
}
