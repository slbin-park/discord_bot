
const router = require('./src/router')
const dotenv = require('./src/config/env')

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity(process.env.BOT_STATUS)
});

client.on('message', router.router);

client.login(process.env.BOT_TOKEN);
