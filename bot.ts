import { Bot } from "./deps.deno.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

function startMenu(ctx) {
    ctx.reply(`
        <b>Welcome to GoGalaGames official AI chat support.</b>\n
        <b>This AI CHAT is powered by openAI modal and help any crypto related issues.</b>\n\n
        <i>All conversations are End-to-end encrypted and are fully <b>Secured & Private</b>.</i>`, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'GALA TOKEN PRICE', callback_data: 'tokenPrice' },
                    { text: 'GET HELP', callback_data: 'support' }
                ]
            ]
        }
    })
}

// bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
    bot.command('start', (ctx) => {
        ctx.replyWithHTML(`
        <b>Welcome to GoGalaGames official AI chat support.</b>\n
        <b>This AI CHAT is powered by openAI modal and help any crypto related issues.</b>\n\n
        <i>All conversations are End-to-end encrypted and are fully <b>Secured & Private</b>.</i>`, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'GALA TOKEN PRICE', callback_data: 'tokenPrice' },
                    { text: 'GET HELP', callback_data: 'support' }
                ]
            ]
        }
    })
    })

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
