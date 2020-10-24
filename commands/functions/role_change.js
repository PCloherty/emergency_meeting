const Discord = require("discord.js");

module.exports = {
    name: "role_change",
    description: "function to change role to evicted for 5 minutes and auto remove it",
    execute(message) {        
        //declare ejected role
        let ejected = message.guild.roles.cache.find(role=>role.name === "Ejected");
        
        //get the target who is mentioned in the original message
        let target = message.mentions.members.first()
    
        //add the ejected role
        target.roles.add(ejected.id)
        console.log('added ejected')
        
        //set up timeout 
        console.log("5 minute counter started")
        setTimeout(() => {
            target.roles.remove(ejected.id)
            console.log('removed ejected')
            console.log("Role change restored")
        }, 300000);
        message.delete()
        
    }
} 