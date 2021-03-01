const Discord = require("discord.js");
const ayarlar = require("../ayar.json");
const db = require("quick.db");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
      

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#27167A')
    .setTitle("Sitemize gidin!")
    .setURL("http://netherbot.tk/")
	.setAuthor('Rapel Studio Sunar')
	.setDescription('Rapel komutları!')
	.addFields(
		{ name: 'Müzik komutları', value: `${prefix}müzik`, inline: true },
		{ name: 'Yazı komutları ', value: `${prefix}yazılar`, inline: true },
		{ name: 'Logo komutları ', value: `${prefix}logolar`, inline: true },
		{ name: 'Mod komutları ', value: `${prefix}moderasyon`, inline: true },
    { name: 'Bot ayarları ', value: `${prefix}ayarlar`, inline: true },

	)
	.addField('Gif komutları', `${prefix}gifs`, true)
	.setImage('https://images-ext-2.discordapp.net/external/oi25x2VNTl7ft5O9gBUnfb9I24OOgyJWIkzPH7iEKao/https/media.discordapp.net/attachments/813821451240079401/814526098175819796/standard_3.gif')
	.setTimestamp()
	.setFooter('Rapel Studio Sunar');

message.channel.send(exampleEmbed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "helpssdsfdsf",
  category: "helpsasdf",
  description: "helpdsf"
};
