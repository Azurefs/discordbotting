import { Events } from 'discord.js';

const name = Events.MessageCreate;

async function execute(message) {
	if (message.author.bot) return;

	try {
		if (message?.content?.toLowerCase()?.includes("meow")) {
			message.reply("nya~!");
		}
	} catch (error) {
		console.error(error);
	}
}

export { name, execute }