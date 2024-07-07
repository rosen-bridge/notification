export type NotificationSeverity =
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'raw';

export type NotifyWithSeverity = (
  severity: NotificationSeverity,
  title: string,
  message: string,
) => Promise<void>;

export type Notify = (title: string, message: string) => Promise<void>;
