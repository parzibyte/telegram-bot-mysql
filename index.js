const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(new RegExp(`/listar`), (mensaje) => {
    const chatId = mensaje.chat.id;
    bot.sendMessage(chatId, "Listar");
});

bot.onText(new RegExp('\/eliminar (\\d+)'), (mensaje, coincidencias) => {
    const id = parseInt(coincidencias[1]);
    const chatId = mensaje.chat.id;
    bot.sendMessage(chatId, "Eliminar con id " + id);
});

bot.onText(new RegExp('\/insertar (\\d+|\\w+)'), (mensaje, coincidencias) => {
    const nombre = coincidencias[1];
    const chatId = mensaje.chat.id;
    const nombreUsuario = mensaje.from.first_name;
    bot.sendMessage(chatId, nombreUsuario + " quiere insertar mascota llamada " + nombre);
});
