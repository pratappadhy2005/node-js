import { Client, GatewayIntentBits } from 'discord.js';

const TOKEN = 'MTM2OTg3OTY4MTMxNDE56745MzQ0OA.G3AS0G.XdCGEh5EXCGvZqmWaWRrkkc7Pt0AoRXgQ3E2zc';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply('Hi from bot')
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }
})

client.login(TOKEN);