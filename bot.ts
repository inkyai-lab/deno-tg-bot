import { Bot } from "./deps.deno.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

// Construct a keyboard.
const inlineKeyboard = new InlineKeyboard().text("Connect Wallet", "click-payload");

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
  await ctx.reply("Connect your wallet to receive airdrop!", { reply_markup: inlineKeyboard });
});

// Wait for click events with specific callback data.
bot.callbackQuery("click-payload", async (ctx) => {
  await ctx.answerCallbackQuery({
    text: "Manualconnect",
  });
});

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
