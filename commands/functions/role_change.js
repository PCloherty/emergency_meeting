const Discord = require('discord.js');


module.exports = {
    name: 'role_change',
    description:
        'function to change role to evicted for 5 minutes and auto remove it',
    execute(message) {
        //declare ejected role
        let ejected = message.guild.roles.cache.find(
            (role) => role.name === 'Ejected'
        );

        //get the target who is mentioned in the original message
        let target = message.mentions.members.first();

        //187913508648779776
        // if (target.user.id === '187913508648779776') {
        //     //if yes messgae how im a god and all that
        //     const embed = new Discord.MessageEmbed()
        //         .setTitle('HAL 9000')
        //         .setDescription(
        //             `Im sorry ${message.author.username}, I'm afraid I can't do that.`
        //         )
        //         .setImage(['../../Hal.jpg']);
        //     return message.channel.send(embed);
        // } else{

            //add the ejected role
            target.roles.add(ejected.id);
            console.log(`added ejected to ${target.user.username}`);

            //set up timeout
            console.log('5 minute counter started');
            setTimeout(() => {
                target.roles.remove(ejected.id);
                console.log(`removed ejected from ${target.user.username}`);
                console.log('Role change restored');
                message.delete();
            }, 300000);
        //}   
    },
};
