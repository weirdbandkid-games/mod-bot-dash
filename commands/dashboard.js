exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	message.channel.send('https://www.modbot.ml');
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'dashboard',
	category: 'Miscelaneous',
	description: 'Sends a link to the dashboard',
	usage: 'dashboard'
};
