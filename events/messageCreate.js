const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return;

		try {
			if (message?.content?.toLowerCase()?.includes("meow")) {
				message.reply("nya~!");
			}
		} catch (error) {
			console.error(error);
		}
	},
};