abstract class AbstractNotification {
  abstract error(title: string, message: string): Promise<void>;
  abstract warning(title: string, message: string): Promise<void>;
  abstract info(title: string, message: string): Promise<void>;
  abstract success(title: string, message: string): Promise<void>;
  abstract raw(title: string, message: string): Promise<void>;

  notify = (
    severity: 'error' | 'warning' | 'info' | 'success' | 'raw',
    title: string,
    message: string,
  ) => {
    return this[severity](title, message);
  };
}

export default AbstractNotification;
