import { NotifyWithSeverity, Notify } from './types';

abstract class AbstractNotification {
  abstract error: Notify;
  abstract warning: Notify;
  abstract info: Notify;
  abstract success: Notify;
  abstract raw: Notify;

  notify: NotifyWithSeverity = (severity, title, message) => {
    return this[severity](title, message);
  };
}

export default AbstractNotification;
