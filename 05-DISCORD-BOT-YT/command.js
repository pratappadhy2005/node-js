import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const TOKEN = 'MTM2OTg3OTY4MTMxNDE5MzQ0OA.G3564AS0G.XdCGEh5EXCGvZqmWaWRrkkc7Pt0AoRXgQ3E2zc';
const CLIENT_ID = '1369879681ererer314193448';

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}

