import { AbstractNotification } from '@rosen-bridge/abstract-notification';
import { EmbedBuilder, WebhookClient } from 'discord.js';

class DiscordNotification extends AbstractNotification {
  private client: WebhookClient;

  constructor(
    webhookURL: string,
    private serviceName?: string,
  ) {
    super();
    this.client = new WebhookClient({
      url: webhookURL,
    });
  }

  /**
   * send a string to Discord, trimming all lines
   * @param title
   * @param message
   * @param color
   */
  private sendMessage = async (
    title: string,
    message: string,
    color: number,
  ) => {
    const embed = new EmbedBuilder()
      .setAuthor({ name: this.serviceName ?? ' ' })
      .setTitle(title)
      .setDescription(message.replace(/^ +| +$/gm, ''))
      .setColor(color);
    await this.client.send({
      embeds: [embed],
    });
  };

  /**
   * send an error notification
   * @param title
   * @param message
   */
  error = async (title: string, message: string) =>
    this.sendMessage(`❌ ${title}`, message, 0xd32f2f);

  /**
   * send a warning notification
   * @param title
   * @param message
   */
  warning = async (title: string, message: string) =>
    this.sendMessage(`⚠️ ${title}`, message, 0xed6c02);

  /**
   * send an info notification
   * @param title
   * @param message
   */
  info = async (title: string, message: string) =>
    this.sendMessage(`ℹ️ ${title}`, message, 0x0288d1);

  /**
   * send a success notification
   * @param title
   * @param message
   */
  success = async (title: string, message: string) =>
    this.sendMessage(`✅ ${title}`, message, 0x2e7d32);

  /**
   * send a raw notification
   * @param title
   * @param message
   */
  raw = async (title: string, message: string) =>
    this.sendMessage(`${title}`, message, 0x000000);
}

export default DiscordNotification;
