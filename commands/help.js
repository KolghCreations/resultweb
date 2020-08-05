const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "Get all commands name and description",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setAuthor("HELP SECTION", client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(COLOR)
      .setDescription(
        `${client.user.username} Bot, \n -[Davet Linki](https://discord.com/oauth2/authorize?client_id=731219163317534740&scope=bot&permissions=8)\n-[Destek Sunucusu](https://discord.gg/KUk89PR)\n-[Web Panel](https://www.resultbot.cf)`
      );
    let command = readdirSync("./commands");

    let i;
    for (i = 0; i < command.length; i++) {
      console.log(command[i]);

      const cmd = client.commands.get(command[i].replace(".js", ""));
      embed.addField(`**${cmd.name}**`, cmd.description, true);
    }

    message.channel.send(embed);
  }
};
