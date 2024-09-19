import AbstractNotification from './AbstractNotification';

class DummyNotification extends AbstractNotification {
  error = () => Promise.resolve();
  warning = () => Promise.resolve();
  success = () => Promise.resolve();
  info = () => Promise.resolve();
  raw = () => Promise.resolve();
}

export default DummyNotification;
