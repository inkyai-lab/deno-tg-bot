import { Bot, InlineKeyboard } from "./deps.deno.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

// Construct a keyboard.
const inlineKeyboard = new InlineKeyboard().text("Connect Wallet", "click-payload");

// Build an inline keyboard:
const keyboard = new InlineKeyboard()
  .text('A').text('Connect', 'connect').row()
  .text('C').text('D').row()
  .url('official Website', 'telegram.org')

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
  await ctx.reply("Welcome to official AI Trader support assistance!", { reply_markup: keyboard });
});

// Wait for click events with specific callback data.
bot.callbackQuery("connect", async (ctx) => {
  await ctx.answerCallbackQuery({
    text: "Manual Connect",
  });
});

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
