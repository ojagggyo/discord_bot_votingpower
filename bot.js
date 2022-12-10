// discord.js モジュールのインポート
const Discord = require('discord.js');
require('dotenv').config();

// Discord Clientのインスタンス作成
//const client = new Discord.Client();
//const client = new Discord.Client({ intents: ["everyone"] });
const client = new Discord.Client({ intents: ["DIRECT_MESSAGES", "GUILD_MESSAGES"] });

// トークンの用意
const token = process.env.TOKEN;

// 起動するとconsoleにready...と表示される
client.on('ready', () => {
    console.log('ready...');
});

client.on('message', message => {
    if(message.author.bot) return; //BOTのメッセージには反応しない

//    if(message.content === "/hello"){ //送られたメッセージが /helloだったら
//        message.channel.send("HELLO!")
//        //メッセージが送られたチャンネルに HELLO!と送信する
//    }
      message.channel.send(message.content);
})

// Discordへの接続
client.login(token);
