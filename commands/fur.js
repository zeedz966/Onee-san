const { GuildMember, User } = require("discord.js")

module.exports = {
    name: 'fur',
    description: "kukuh cikal!",
    execute(message, args){
        message.channel.send(`nee~~ kukuh-kun no echii`)
    }
}