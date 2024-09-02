const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tell_joke')
		.setDescription('Tells a very good joke'),
	async execute(interaction) {
		const jokesJson = fs.readFileSync('./commands/resources/joke.json', {flag: 'r'});
		const jokes = JSON.parse(jokesJson).jokes;
		console.log(jokes);
		const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
		await interaction.reply(randomJoke);
	},
};