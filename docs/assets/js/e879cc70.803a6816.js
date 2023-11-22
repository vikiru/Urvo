'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4666],
	{
		4137: (e, t, a) => {
			a.d(t, { Zo: () => s, kt: () => u });
			var r = a(7294);
			function n(e, t, a) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = a),
					e
				);
			}
			function i(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						a.push.apply(a, r);
				}
				return a;
			}
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(a), !0).forEach(function (t) {
								n(e, t, a[t]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
						  : i(Object(a)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
						    });
				}
				return e;
			}
			function p(e, t) {
				if (null == e) return {};
				var a,
					r,
					n = (function (e, t) {
						if (null == e) return {};
						var a,
							r,
							n = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
						return n;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(a = i[r]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]));
				}
				return n;
			}
			var l = r.createContext({}),
				m = function (e) {
					var t = r.useContext(l),
						a = t;
					return e && (a = 'function' == typeof e ? e(t) : o(o({}, t), e)), a;
				},
				s = function (e) {
					var t = m(e.components);
					return r.createElement(l.Provider, { value: t }, e.children);
				},
				c = 'mdxType',
				f = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				h = r.forwardRef(function (e, t) {
					var a = e.components,
						n = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						s = p(e, ['components', 'mdxType', 'originalType', 'parentName']),
						c = m(a),
						h = n,
						u = c[''.concat(l, '.').concat(h)] || c[h] || f[h] || i;
					return a
						? r.createElement(u, o(o({ ref: t }, s), {}, { components: a }))
						: r.createElement(u, o({ ref: t }, s));
				});
			function u(e, t) {
				var a = arguments,
					n = t && t.mdxType;
				if ('string' == typeof e || n) {
					var i = a.length,
						o = new Array(i);
					o[0] = h;
					var p = {};
					for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
					(p.originalType = e), (p[c] = 'string' == typeof e ? e : n), (o[1] = p);
					for (var m = 2; m < i; m++) o[m] = a[m];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, a);
			}
			h.displayName = 'MDXCreateElement';
		},
		6846: (e, t, a) => {
			a.r(t),
				a.d(t, {
					assets: () => l,
					contentTitle: () => o,
					default: () => f,
					frontMatter: () => i,
					metadata: () => p,
					toc: () => m,
				});
			var r = a(7462),
				n = (a(7294), a(4137));
			const i = { id: 'api-references', title: 'API References' },
				o = void 0,
				p = {
					unversionedId: 'commands/api-references',
					id: 'commands/api-references',
					title: 'API References',
					description: 'API References',
					source: '@site/docs/commands/api-references.md',
					sourceDirName: 'commands',
					slug: '/commands/api-references',
					permalink: '/Urvo/commands/api-references',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'api-references', title: 'API References' },
					sidebar: 'docs',
					previous: { title: 'Acknowledgements', permalink: '/Urvo/acknowledgements' },
				},
				l = {},
				m = [{ value: 'API References', id: 'api-references', level: 2 }],
				s = { toc: m },
				c = 'wrapper';
			function f(e) {
				let { components: t, ...a } = e;
				return (0, n.kt)(
					c,
					(0, r.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
					(0, n.kt)('h2', { id: 'api-references' }, 'API References'),
					(0, n.kt)(
						'p',
						null,
						'The majority of the commands provided by this bot would not be possible without all of the various APIs being used. The following list below showcases all of these APIs.',
					),
					(0, n.kt)(
						'ol',
						null,
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Advice Slip JSON API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://api.adviceslip.com/' }, 'Documentation'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Affirmations API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://www.affirmations.dev/' }, 'API'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Agify.io API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://agify.io/' }, 'Website'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Animechan API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://animechan.xyz/docs' }, 'Documentation'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/rocktimsaikia/anime-chan' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Bored API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://www.boredapi.com/documentation' }, 'Documentation'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/drewthoennes/Bored-API' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Coffee API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://coffee.alexflipnote.dev/' }, 'Website'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/AlexFlipnote/CoffeeAPI' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Digimon API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://digimon-api.vercel.app/' }, 'Website'),
							' | ',
							(0, n.kt)(
								'a',
								{ parentName: 'li', href: 'https://github.com/heyshadowsmith/digimon-api' },
								'GitHub Repo',
							),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Discord API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://discord.com/developers/docs/intro' }, 'Documentation'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Disney API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://disneyapi.dev/docs/' }, 'Documentation'),
							' | ',
							(0, n.kt)(
								'a',
								{ parentName: 'li', href: 'https://github.com/ManuCastrillonM/disney-api' },
								'GitHub Repo',
							),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Dummy JSON API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://dummyjson.com/' }, 'Website'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/Ovi/DummyJSON' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Game of Thrones API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://thronesapi.com/' }, 'Website'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Genderize.io API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://genderize.io/' }, 'Website'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Harry Potter API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://hp-api.onrender.com/' }, 'Website'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/KostaSav/hp-api' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'JikanAPI (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://docs.api.jikan.moe/' }, 'Documentation'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/jikan-me/jikan-rest' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'JokeAPI (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://v2.jokeapi.dev/' }, 'Documentation'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/Sv443/JokeAPI' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Memegen.link API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://memegen.link/' }, 'Documentation'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/jacebrowning/memegen' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Minotar API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://minotar.net/' }, 'Website'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/minotar/imgd' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Nationalize.io API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://nationalize.io' }, 'Website'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'PoetryDB API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://poetrydb.org/index.html' }, 'Website'),
							' | ',
							(0, n.kt)('a', { parentName: 'li', href: 'https://github.com/thundercomb/poetrydb' }, 'GitHub Repo'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Official JokeAPI (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://official-joke-api.appspot.com/' }, 'Website'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Random Duck API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://random-d.uk/api' }, 'Documentation'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Random Useless Facts API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://uselessfacts.jsph.pl/' }, 'Documentation'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Some Random API (',
							(0, n.kt)(
								'a',
								{ parentName: 'li', href: 'https://some-random-api.com/docs/welcome/introduction' },
								'Documentation',
							),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'Urban Dictionary API (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://www.urbandictionary.com/' }, 'Website'),
							')',
						),
						(0, n.kt)(
							'li',
							{ parentName: 'ol' },
							'xkcd Comics (',
							(0, n.kt)('a', { parentName: 'li', href: 'https://xkcd.com/' }, 'Website'),
							')',
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
