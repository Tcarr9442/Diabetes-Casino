// Imports
const Discord = require('discord.js')
const cron = require('node-cron')

// Globals
const bot = new Discord.Client()
bot.login(require('./botKey.json').key)


// Event Listeners
bot.on('ready', async () => {
    console.log(`${bot.user.username} loaded`)
    cron.schedule('0 * * * *', () => {
        //casino logic
    })
})

bot.on('message', async message => {
    //message handler
})