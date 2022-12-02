require("dotenv").config();
const TelegramBot = require('node-telegram-bot-api');
const controlador = require('./controlador');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(new RegExp(`/listar`), async (mensaje) => {
    const chatId = mensaje.chat.id;
    const mascotas = await controlador.obtener();
    let cadena = "";
    mascotas.forEach(mascota => {
        cadena += `*ID:* ${mascota.id} *Nombre*: ${mascota.nombre} *Creada por:* ${mascota.creada_por} *Timestamp: * ${mascota.timestamp_mensaje}


`;
    });
    bot.sendMessage(chatId, cadena, { parse_mode: "markdown" });
});

bot.onText(new RegExp('\/eliminar (\\d+)'), async (mensaje, coincidencias) => {
    const id = parseInt(coincidencias[1]);
    const chatId = mensaje.chat.id;
    await controlador.eliminar(id);
    bot.sendMessage(chatId, "Eliminar con id " + id);
});

bot.onText(new RegExp('\/insertar (\\d+|\\w+)'), async (mensaje, coincidencias) => {
    const nombre = coincidencias[1];
    const chatId = mensaje.chat.id;
    const nombreUsuario = mensaje.from.first_name;
    const timestampMensaje = mensaje.date;
    await controlador.insertar(nombre, nombreUsuario, timestampMensaje);
    bot.sendMessage(chatId, nombreUsuario + " quiere insertar mascota llamada " + nombre);
});
