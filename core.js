const Discord = require ('discord.js');

const client = new Discord.Client();

 const prefix = '~';
 
const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.command.set(command.name, command);
    
}

client.on('ready', () => {
    console.log('Onee~san udh online bego!');
    client.user.setActivity('nekopoi.care', { type: 'WATCHING'}).catch(console.error);

});

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channel.find(channel.name === 'selamat-datang');
    if(!channel) return;

    channel.send(`selamat datang, ${member}, silahkan baca peraturan`)
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping'){
        client.command.get('ping').execute(message, args);
    }else if (command == 'nee-san?'){
        client.command.get('nee-san?').execute(message, args);
    }else if (command == 'duarr'){
        client.command.get('duarr').execute(message, args);
    }else if (command == 'tadaima'){
        client.command.get('tadaima').execute(message, args); 
    }else if (command == 'fur'){
        client.command.get('fur').execute(message, args)   
    }else if (command == 'adminbaper?'){
        client.command.get('adminbaper?').execute(message, args)  
    }
});

client.login(process.env.token);
