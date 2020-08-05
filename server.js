const discord = require("discord.js"); //KOLGH CREATİONS#0278
const Discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
}); //KOLGH CREATİONS#0278
const { readdirSync } = require("fs"); //KOLGH CREATİONS#0278
const { join } = require("path"); //KOLGH CREATİONS#0278
const { TOKEN, PREFIX } = require("./config.json"); //KOLGH CREATİONS#0278
//KOLGH CREATİONS#0278
//CLIENT EVENTS
client.on("ready", () => {
  //KOLGH CREATİONS#0278
  console.log(
    `${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`
  );
  client.user.setActivity(`SPONSOR ARANIYOR Kolgh Creations#0278 Yazın`, { type: "LISTENING" });
});

client.on("warn", info => console.log(info));

client.on("error", console.error);

//DEFINIING
client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.vote = new Map();

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
} //LOADING DONE

//WHEN SOMEONE MESSAGE
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    //IF MESSSAGE STARTS WITH MINE BOT PREFIX

    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/); //removing prefix from args
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }

    try {
      //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args);
      //COMMAND LOGS
      console.log(
        `${message.guild.name}: ${message.author.tag} Used ${
          client.commands.get(command).name
        } in #${message.channel.name}`
      );
    } catch (err) {
      //IF IT CATCH ERROR
      console.log(err);
      message.reply("I am getting error on using this command");
    } //KOLGH CREATİONS#0278
    //KOLGH CREATİONS#0278
  } //KOLGH CREATİONS#0278
  //KOLGH CREATİONS#0278
  //KOLGH CREATİONS#0278
}); //KOLGH CREATİONS#0278
//KOLGH CREATİONS#0278
//KOLGH CREATİONS#0278
//KOLGH CREATİONS#0278
//KOLGH CREATİONS#0278
//DONT DO ANYTHING WITH THIS TOKEN lol//KOLGH CREATİONS#0278
client.login(TOKEN); //KOLGH CREATİONS#0278
//KOLGH CREATİONS#0278//KOLGH CREATİONS#0278
////Eklendim
client.on("guildCreate", async function(guild) {
  const owner = client.users.cache.get(guild.ownerID);
  const kanal = "731495012793319508"; //Eklendim mesajının atılacağı kanal ID'sini giriniz.
  const devtr = new Discord.MessageEmbed()
    .setTitle(`Yeni bir sunucuya eklendim`)
    .setColor("#ff0000")

    .addField(`Sunucu Adı`, guild.name)
    .addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)
    .addField(`Sunucu Üye Sayısı`, guild.memberCount);

  client.channels.cache
    .get(kanal)
    .send({ embed: devtr })
    .catch(err => console.log("Kanala mesaj atamıyorum!"));
});

//Atıldım
client.on("guildDelete", async function(guild) {
  const owner = client.users.cache.get(guild.ownerID);
  const kanal = "731495012793319508"; //Atıldım mesajının atılacağı kanal ID'sini giriniz.
  const devtr = new Discord.MessageEmbed()
    .setTitle(`Bir sunucudan atıldım`)
    .setColor("#ff0000")
    .addField(`Sunucu Adı`, guild.name)
    .addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)
    .addField(`Sunucu Üye Sayısı`, guild.memberCount);

  client.channels.cache
    .get(kanal)
    .send({ embed: devtr })
    .catch(err => console.log("Kanala mesaj atamıyorum!"));
});
