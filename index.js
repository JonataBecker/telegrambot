const TeleBot = require('telebot');
const bot = new TeleBot('432910057:AAEoUt8EDQ_kb4Ts1lu6_CZuzd1EOQe8jII');

// On every text message
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `ola amiguido eu sou um bot criado pelo jonata magicamente: ${ text }`);
});

bot.connect();
