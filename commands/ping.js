const discord = require("discord.js")
module.exports = {
    name: "ping",
    execute: async (client, message, args) => {
var kolghcreations = new discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Ping: **${client.ws.ping}**  <a:dance2:729465242752647284>`)
message.channel.send(kolghcreations)
    }
}