import type { FormInstance } from 'element-plus';
const onSubmitForm = (fun: () => void) => {
  const onSubmitFunction = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        fun();
      } else {
        console.log('error submit!', fields);
      }
    });
  };
  return onSubmitFunction;
};
const clearForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

export default {
  onSubmitForm,
  clearForm
};
