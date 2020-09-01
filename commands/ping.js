module.exports = {
    name: 'ping',
    description: "ini command ping!",
    execute(message, args){
        message.channel.send('ping juga!')
    }
}