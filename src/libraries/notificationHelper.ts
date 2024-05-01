import { ElNotification } from 'element-plus';

enum NotificationTypes {
  Success = 'success',
  warning = 'warning',
  Info = 'info',
  Error = 'error'
}

const notification = (title: string, message: string, type: NotificationTypes) => {
  ElNotification({
    title,
    message,
    type
  });
};

const success = (title: string, message: string) => {
  notification(title, message, NotificationTypes.Success);
};
const error = (title: string | undefined, message: string) => {
  notification(title!, message, NotificationTypes.Error);
};

export default {
  notification,
  success,
  error
};
