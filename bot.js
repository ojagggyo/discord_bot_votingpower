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
    
      //message.channel.send(message.content);
    
    const username = message.content;
    
        const dsteem = require('dsteem');
        const client = new dsteem.Client('https://api.steememory.com');
        console.log(`username=${username}`);
        client.database.call('get_accounts', [[username]])
        .then(result => {
            let vp = result[0].voting_power + (10000 * ((new Date() - new Date(result[0].last_vote_time + "Z")) / 1000) / 432000);
            vp = vp / 100;            
            message.channel.send(`こんにちは、${username}さん`);
            message.channel.send(`Voting Powerは、${vp.toFixed(1)}です。`);
            message.channel.send(`https://steemit.com/@${username}/posts`);
        })
        .catch(err =>{console.log(err);})
})

// Discordへの接続
client.login(token);
