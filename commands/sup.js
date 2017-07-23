exports.run = (client, message) => {
  message.channel.send('sup')
    .then(msg => {
      msg.edit(`hi`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wassup"],
  permLevel: 0
};

exports.help = {
  name: 'sup',
  description: 'sayhellowassup',
  usage: 'sup'
};
