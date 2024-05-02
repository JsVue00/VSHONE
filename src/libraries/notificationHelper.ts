import { ElNotification } from 'element-plus';
import EMessageType from '@/models/enums/enumMessageType';

const notification = (title: string, message: string, type: EMessageType) => {
  ElNotification({
    title,
    message,
    type
  });
};

const success = (title: string, message: string) => {
  notification(title, message, EMessageType.Success);
};
const error = (title: string, message: string) => {
  notification(title, message, EMessageType.Error);
};
const warning = (title: string, message: string) => {
  notification(title, message, EMessageType.Warning);
};
const info = (title: string, message: string) => {
  notification(title!, message, EMessageType.Info);
};
export default {
  success,
  error,
  warning,
  info
};
