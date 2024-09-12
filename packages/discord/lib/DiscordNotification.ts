import { AbstractNotification } from '@rosen-bridge/abstract-notification';
import { WebhookClient } from 'discord.js';

class DiscordNotification extends AbstractNotification {
  private client: WebhookClient;

  constructor(webhookURL: string) {
    super();
    this.client = new WebhookClient({
      url: webhookURL,
    });
  }

  /**
   * send a string to Discord, trimming all lines
   * @param message
   */
  private sendMessage = async (message: string) => {
    await this.client.send({
      content: message.replace(/^ +| +$/gm, ''), // trim all lines
    });
  };

  /**
   * send an error notification
   * @param title
   * @param message
   */
  error = async (title: string, message: string) => {
    await this.sendMessage(`
      ## ❌ ${title}
      ${message}
      `);
  };

  /**
   * send a warning notification
   * @param title
   * @param message
   */
  warning = async (title: string, message: string) => {
    await this.sendMessage(`
      ## ⚠️ ${title}
      ${message}
      `);
  };

  /**
   * send an info notification
   * @param title
   * @param message
   */
  info = async (title: string, message: string) => {
    await this.sendMessage(`
      ## ℹ️ ${title}
      ${message}
      `);
  };

  /**
   * send a success notification
   * @param title
   * @param message
   */
  success = async (title: string, message: string) => {
    await this.sendMessage(`
      ## ✅ ${title}
      ${message}
      `);
  };

  /**
   * send a raw notification
   * @param title
   * @param message
   */
  raw = async (title: string, message: string) => {
    await this.sendMessage(`
      ## ${title}
      ${message}
      `);
  };
}

export default DiscordNotification;
