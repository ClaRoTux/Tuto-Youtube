module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Membre introuvable")
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
    if (!member.manageable) return message.channel.send("Je ne peux pas mute ce membre")
    let muterole = message.guild.roles.find(role => role.name === 'Muted')
    if (muterole) {
        member.removeRole(muterole)
        message.channel.send(member + ' a été unmute :white_check_mark:')
        }
};

module.exports.help = {
    name: 'unmute'
};