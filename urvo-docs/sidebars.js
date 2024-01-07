// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docs: [
		{
			type: 'category',
			label: 'Getting Started',
			items: ['intro', 'prereqs', 'setup'],
		},
		{
			type: 'category',
			label: 'Commands',
			items: [
				'commands/category-overview',
				{
					type: 'category',
					label: '📷 Images',
					items: [
						'commands/images/bird',
						'commands/images/cat',
						'commands/images/coffee',
						'commands/images/dog',
						'commands/images/duck',
						'commands/images/kangaroo',
						'commands/images/koala',
						'commands/images/panda',
						'commands/images/raccoon',
						'commands/images/red-panda',
						'commands/images/whale',
					],
				},
				{
					type: 'category',
					label: '❓ Information',
					items: [
						'commands/info/anime',
						'commands/info/digimon',
						'commands/info/disney',
						'commands/info/guess-user',
						'commands/info/manga',
						'commands/info/manhua',
						'commands/info/manhwa',
						'commands/info/minecraft',
						'commands/info/top-anime',
						'commands/info/top-manga',
						'commands/info/urban',
					],
				},
				{
					type: 'category',
					label: '😂 Memes',
					items: [
						'commands/memes/buzz',
						'commands/memes/change-my-mind',
						'commands/memes/daily-struggle',
						'commands/memes/drake',
						'commands/memes/kermit',
						'commands/memes/knuckles',
						'commands/memes/mordor',
						'commands/memes/philosoraptor',
						'commands/memes/spongebob',
						'commands/memes/winnie',
					],
				},
				{
					type: 'category',
					label: '🕹️ Minigames',
					items: ['commands/minigames/flip', 'commands/minigames/guess-number', 'commands/minigames/rps'],
				},
				{
					type: 'category',
					label: '🛡️ Moderation',
					items: [
						'commands/moderation/ban',
						'commands/moderation/kick',
						'commands/moderation/create-role',
						'commands/moderation/timeout',
						'commands/moderation/unban',
					],
				},
				{
					type: 'category',
					label: '🎲 Random',
					items: [
						'commands/random/advice',
						'commands/random/affirmation',
						'commands/random/anime-quote',
						'commands/random/bored',
						'commands/random/comic',
						'commands/random/fact',
						'commands/random/harry-potter',
						'commands/random/joke',
						'commands/random/programming-joke',
						'commands/random/pun',
						'commands/random/quote',
						'commands/random/shakespeare',
						'commands/random/thrones',
					],
				},
				{
					type: 'category',
					label: '⚔️ Troopica',
					items: [
						'commands/troopica/attack',
						'commands/troopica/balance',
						'commands/troopica/daily',
						'commands/troopica/leaderboard',
						'commands/troopica/purchase',
					],
				},
				{
					type: 'category',
					label: '🛠️ Utility',
					items: [
						'commands/utility/calculate',
						'commands/utility/create-channel',
						'commands/utility/delete-channel',
						'commands/utility/help',
						'commands/utility/prune',
						'commands/utility/server-info',
					],
				},
			],
		},
		{
			type: 'category',
			label: 'Conclusion',
			items: ['acknowledgments', 'commands/api-references'],
		},
	],
};

module.exports = sidebars;
