const { GuildMember, User } = require("discord.js")

module.exports = {
    name: 'nee-san?',
    description: "salam sapa!",
    execute(message, args){
        message.channel.send(`ara~ara~`)
    }
}