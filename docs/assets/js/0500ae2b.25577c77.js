'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[1277],
	{
		4137: (e, a, t) => {
			t.d(a, { Zo: () => s, kt: () => f });
			var r = t(7294);
			function n(e, a, t) {
				return (
					a in e
						? Object.defineProperty(e, a, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[a] = t),
					e
				);
			}
			function o(e, a) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					a &&
						(r = r.filter(function (a) {
							return Object.getOwnPropertyDescriptor(e, a).enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function m(e) {
				for (var a = 1; a < arguments.length; a++) {
					var t = null != arguments[a] ? arguments[a] : {};
					a % 2
						? o(Object(t), !0).forEach(function (a) {
								n(e, a, t[a]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
							: o(Object(t)).forEach(function (a) {
									Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
								});
				}
				return e;
			}
			function i(e, a) {
				if (null == e) return {};
				var t,
					r,
					n = (function (e, a) {
						if (null == e) return {};
						var t,
							r,
							n = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) (t = o[r]), a.indexOf(t) >= 0 || (n[t] = e[t]);
						return n;
					})(e, a);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(t = o[r]), a.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]));
				}
				return n;
			}
			var l = r.createContext({}),
				d = function (e) {
					var a = r.useContext(l),
						t = a;
					return e && (t = 'function' == typeof e ? e(a) : m(m({}, a), e)), t;
				},
				s = function (e) {
					var a = d(e.components);
					return r.createElement(l.Provider, { value: a }, e.children);
				},
				u = 'mdxType',
				p = {
					inlineCode: 'code',
					wrapper: function (e) {
						var a = e.children;
						return r.createElement(r.Fragment, {}, a);
					},
				},
				c = r.forwardRef(function (e, a) {
					var t = e.components,
						n = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						s = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = d(t),
						c = n,
						f = u[''.concat(l, '.').concat(c)] || u[c] || p[c] || o;
					return t
						? r.createElement(f, m(m({ ref: a }, s), {}, { components: t }))
						: r.createElement(f, m({ ref: a }, s));
				});
			function f(e, a) {
				var t = arguments,
					n = a && a.mdxType;
				if ('string' == typeof e || n) {
					var o = t.length,
						m = new Array(o);
					m[0] = c;
					var i = {};
					for (var l in a) hasOwnProperty.call(a, l) && (i[l] = a[l]);
					(i.originalType = e), (i[u] = 'string' == typeof e ? e : n), (m[1] = i);
					for (var d = 2; d < o; d++) m[d] = t[d];
					return r.createElement.apply(null, m);
				}
				return r.createElement.apply(null, t);
			}
			c.displayName = 'MDXCreateElement';
		},
		1096: (e, a, t) => {
			t.r(a),
				t.d(a, {
					assets: () => l,
					contentTitle: () => m,
					default: () => p,
					frontMatter: () => o,
					metadata: () => i,
					toc: () => d,
				});
			var r = t(7462),
				n = (t(7294), t(4137));
			const o = { id: 'category-overview', title: 'Category Overview' },
				m = void 0,
				i = {
					unversionedId: 'commands/category-overview',
					id: 'commands/category-overview',
					title: 'Category Overview',
					description: '\ud83d\udcd6 Table of Contents',
					source: '@site/docs/commands/category-overview.md',
					sourceDirName: 'commands',
					slug: '/commands/category-overview',
					permalink: '/Urvo/commands/category-overview',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'category-overview', title: 'Category Overview' },
					sidebar: 'docs',
					previous: { title: '\u26a1 Setup Instructions', permalink: '/Urvo/setup' },
					next: { title: 'Bird', permalink: '/Urvo/commands/images/bird' },
				},
				l = {},
				d = [
					{ value: '\ud83d\udcd6 Table of Contents', id: '-table-of-contents', level: 2 },
					{ value: '\ud83d\udcf7 Images', id: '-images', level: 3 },
					{ value: '\u2753 Information', id: '-information', level: 3 },
					{ value: '\ud83d\ude02 Memes', id: '-memes', level: 3 },
					{ value: '\ud83d\udd79\ufe0f Minigames', id: '\ufe0f-minigames', level: 3 },
					{ value: '\ud83d\udee1\ufe0f Moderation', id: '\ufe0f-moderation', level: 3 },
					{ value: '\ud83c\udfb2 Random', id: '-random', level: 3 },
					{ value: '\u2694\ufe0f Troopica', id: '\ufe0f-troopica', level: 3 },
					{ value: '\ud83d\udee0\ufe0f Utility', id: '\ufe0f-utility', level: 3 },
				],
				s = { toc: d },
				u = 'wrapper';
			function p(e) {
				let { components: a, ...t } = e;
				return (0, n.kt)(
					u,
					(0, r.Z)({}, s, t, { components: a, mdxType: 'MDXLayout' }),
					(0, n.kt)('h2', { id: '-table-of-contents' }, '\ud83d\udcd6 Table of Contents'),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '#-table-of-contents' }, '\ud83d\udcd6 Table of Contents'),
							(0, n.kt)(
								'ul',
								{ parentName: 'li' },
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#-images' }, '\ud83d\udcf7 Images'),
								),
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#-information' }, '\u2753 Information'),
								),
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#-memes' }, '\ud83d\ude02 Memes'),
								),
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#%EF%B8%8F-minigames' }, '\ud83d\udd79\ufe0f Minigames'),
								),
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#%EF%B8%8F-moderation' }, '\ud83d\udee1\ufe0f Moderation'),
								),
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#-random' }, '\ud83c\udfb2 Random'),
								),
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#%EF%B8%8F-troopica' }, '\u2694\ufe0f Troopica'),
								),
								(0, n.kt)(
									'li',
									{ parentName: 'ul' },
									(0, n.kt)('a', { parentName: 'li', href: '#%EF%B8%8F-utility' }, '\ud83d\udee0\ufe0f Utility'),
								),
							),
						),
					),
					(0, n.kt)('h3', { id: '-images' }, '\ud83d\udcf7 Images'),
					(0, n.kt)(
						'p',
						null,
						'Enhance your mood with a random image of an animal from the available options or an image of coffee to boost your energy!',
					),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/bird' }, 'Bird'),
							' - Send a random fact and image of a bird.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/cat' }, 'Cat'),
							' - Send a random fact and image of a cat.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/coffee' }, 'Coffee'),
							' - Send a random image of coffee.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/dog' }, 'Dog'),
							' - Send a random fact and image of a dog.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/duck' }, 'Duck'),
							' - Send a random image of a duck.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/fox' }, 'Fox'),
							' - Send a random fact and image of a fox.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/kangaroo' }, 'Kangaroo'),
							' - Send a random image of a kangaroo.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/koala' }, 'Koala'),
							' - Send a random fact and image of a koala.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/panda' }, 'Panda'),
							' - Send a random fact and image of a panda.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/raccoon' }, 'Raccoon'),
							' - Send a random fact and image of a raccoon.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/red-panda' }, 'Red Panda'),
							' - Send a random fact and image of a red panda.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/images/whale' }, 'Whale'),
							' - Send a random image of a whale.',
						),
					),
					(0, n.kt)('h3', { id: '-information' }, '\u2753 Information'),
					(0, n.kt)(
						'p',
						null,
						'Whether you\u2019re a fan of anime or manga, Digimon or Disney, or just curious about a term, you\u2019ll find everything you need here!',
					),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/anime' }, 'Anime'),
							' - Sends the user information about a queried anime, obtained from MAL.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/digimon' }, 'Digimon'),
							' - Sends the user information about a queried digimon.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/disney' }, 'Disney'),
							' - Retrieve information about a specified disney character.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/guess-user' }, 'Guess User'),
							' - Determine the age, gender, and nationality of a user based on their name.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/manga' }, 'Manga'),
							' - Sends the user information about a queried manga, obtained from MAL.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/manhua' }, 'Manhua'),
							' - Sends the user information about a queried manhua, obtained from MAL.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/manhwa' }, 'Manhwa'),
							' - Sends the user information about a queried manhwa, obtained from MAL.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/minecraft' }, 'Minecraft'),
							' - Return an image of the minecraft avatar for a specific username/uid.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/top-anime' }, 'Top Anime'),
							' - Sends the user information about the top 10 anime (all time or airing), obtained from MAL.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/top-manga' }, 'Top Manga'),
							' - Sends the user information about the top 10 manga (all time or publishing), obtained from MAL.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/info/urban' }, 'Urban'),
							' - Provides the definition for a given term from Urban Dictionary.',
						),
					),
					(0, n.kt)('h3', { id: '-memes' }, '\ud83d\ude02 Memes'),
					(0, n.kt)('p', null, 'Generate memes to enjoy with your friends, using easy prompts!'),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/buzz' }, 'Buzz Lightyear'),
							' - Send a Buzz Lightyear Everywhere meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/change-my-mind' }, 'Change My Mind'),
							' - Send a Change My Mind meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/daily-struggle' }, 'Daily Struggle'),
							' - Send a Daily Struggle meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/drake' }, 'Drake'),
							' - Send a Drake Hotline Bling meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/kermit' }, 'Kermit Mind Your Business'),
							" - Send a But That's None of My Business Kermit meme with your desired text.",
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/knuckles' }, 'Knuckles'),
							' - Send a Ugandan Knuckles meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/mordor' }, 'Mordor'),
							' - Send a One Does Not Simply Walk Into Mordor meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/philosoraptor' }, 'Philosoraptor'),
							' - Send a Philosoraptor meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/spongebob' }, 'Spongebob'),
							' - Send a Mocking Spongebob meme with your desired text.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/memes/winnie' }, 'Winnie'),
							' - Send a Tuxedo Winnie the Pooh meme with your desired text.',
						),
					),
					(0, n.kt)('h3', { id: '\ufe0f-minigames' }, '\ud83d\udd79\ufe0f Minigames'),
					(0, n.kt)('p', null, 'The cure for boredom. Beat the bot and have a blast!'),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/minigames/flip' }, 'Flip'),
							' - Flip a coin and guess the outcome.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/minigames/guess-number' }, 'Guess Number'),
							' - Guess the number that the bot is thinking of (1 - 10).',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/minigames/rps' }, 'Rock-Paper-Scissors'),
							' - Play Rock-Paper-Scissors with the bot.',
						),
					),
					(0, n.kt)('h3', { id: '\ufe0f-moderation' }, '\ud83d\udee1\ufe0f Moderation'),
					(0, n.kt)('p', null, 'Use these commands to manage the server effectively and efficiently!'),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/moderation/ban' }, 'Ban'),
							' - Bans the mentioned user from the server.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/moderation/kick' }, 'Kick'),
							' - Kicks the mentioned user from the server.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/moderation/remove-timeout' }, 'Remove Timeout'),
							' - Remove the timeout on the mentioned user.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/moderation/create-role' }, 'Create Role'),
							' - Creates a new role based on the inputted name and colour.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/moderation/timeout' }, 'Timeout'),
							' - Timeout the mentioned user from the server.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/moderation/unban' }, 'Unban'),
							' - Unban the mentioned user from the server.',
						),
					),
					(0, n.kt)('h3', { id: '-random' }, '\ud83c\udfb2 Random'),
					(0, n.kt)(
						'p',
						null,
						'An assortment of commands that provide you with random pieces of information such as motivating you with a quote or making you laugh with a joke!',
					),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/advice' }, 'Advice'),
							' - Send a random piece of advice.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/affirmation' }, 'Affirmation'),
							' - Send a random affirmation.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/anime-quote' }, 'Anime Quote'),
							' - Send a random quote from an anime.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/bored' }, 'Bored'),
							' - Suggest a random activity to the user.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/comic' }, 'Comic'),
							' - Sends a random xkcd comic in the channel.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/fact' }, 'Fact'),
							' - Send a random fact.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/harry-potter' }, 'Harry Potter'),
							' - Get information about a random Harry Potter character.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/joke' }, 'Joke'),
							' - Receive a random joke.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/programming-joke' }, 'Programming Joke'),
							' - Send a random programming joke.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/pun' }, 'Pun'),
							' - Send a random pun.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/quote' }, 'Quote'),
							' - Send a random quote.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/shakespeare' }, 'Shakespeare'),
							' - Send a random sonnet written by William Shakespeare.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/random/thrones' }, 'Thrones'),
							' - Get information about a random Game of Thrones character.',
						),
					),
					(0, n.kt)('h3', { id: '\ufe0f-troopica' }, '\u2694\ufe0f Troopica'),
					(0, n.kt)('p', null, 'Rise to the top of your server by amassing wealth and troops!'),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/troopica/attack' }, 'Attack'),
							' - Deploy your troops against another user, may the odds be in your favor.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/troopica/balance' }, 'Balance'),
							' - Retrieve your balance, including how many troops you posess.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/troopica/daily' }, 'Daily'),
							' - Retrieve your daily supplement of currency and troops.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/troopica/leaderboard' }, 'Leaderboard'),
							' - See the top 10 players within the leaderboards.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/troopica/purchase' }, 'Purchase'),
							' - Purchase troops to add to your army.',
						),
					),
					(0, n.kt)('h3', { id: '\ufe0f-utility' }, '\ud83d\udee0\ufe0f Utility'),
					(0, n.kt)('p', null, 'Additional commands that can prove useful to yourself or the server!'),
					(0, n.kt)(
						'ul',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/utility/calculate' }, 'Calculate'),
							' - Calculate a given mathematical expression.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/utility/create-channel' }, 'Create Channel'),
							' - Create a new channel of the specified type.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/utility/delete-channel' }, 'Delete Channel'),
							' - Deletes a mentioned channel.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/utility/help' }, 'Help'),
							' - Access a list of commands that can be used with Urvo.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/utility/prune' }, 'Prune'),
							' - Deletes a specified number of messages in the given channel.',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ul' },
							(0, n.kt)('a', { parentName: 'li', href: '/Urvo/commands/utility/server-info' }, 'Server Info'),
							' - Retrieve information about the server.',
						),
					),
				);
			}
			p.isMDXComponent = !0;
		},
	},
]);
