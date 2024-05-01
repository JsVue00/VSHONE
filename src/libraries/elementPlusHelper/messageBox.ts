import { ElMessage, ElMessageBox } from 'element-plus';

const onConfirm = async (func: () => Promise<void>, content: string) => {
  const messageBox = await ElMessageBox.confirm(content, {
    confirmButtonText: 'OK',
    type: 'warning',
    showCancelButton: false,
    beforeClose: async (action, instance, done) => {
      if (action === 'confirm') {
        func();
        done();
      } else {
        done();
      }
    }
  });
  return messageBox;
};
export default {
  onConfirm
};
