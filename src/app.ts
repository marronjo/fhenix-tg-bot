import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const token: string = process.env.TELEGRAM_BOT_TOKEN as string;
const bot = new Telegraf(token);

bot.command('hello', (ctx) => {
    ctx.reply('Hello ' + ctx.from?.first_name + '!');
});

bot.launch();
