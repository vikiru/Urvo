'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[8227],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => f });
			var r = n(7294);
			function o(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function a(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						  : a(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						    });
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
				}
				return o;
			}
			var p = r.createContext({}),
				m = function (e) {
					var t = r.useContext(p),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				c = function (e) {
					var t = m(e.components);
					return r.createElement(p.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				u = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = m(n),
						d = o,
						f = s[''.concat(p, '.').concat(d)] || s[d] || u[d] || a;
					return n
						? r.createElement(f, i(i({ ref: t }, c), {}, { components: n }))
						: r.createElement(f, i({ ref: t }, c));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = d;
					var l = {};
					for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
					(l.originalType = e), (l[s] = 'string' == typeof e ? e : o), (i[1] = l);
					for (var m = 2; m < a; m++) i[m] = n[m];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = 'MDXCreateElement';
		},
		4098: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => p,
					contentTitle: () => i,
					default: () => u,
					frontMatter: () => a,
					metadata: () => l,
					toc: () => m,
				});
			var r = n(7462),
				o = (n(7294), n(4137));
			const a = { id: 'top-anime', title: 'Top Anime' },
				i = void 0,
				l = {
					unversionedId: 'commands/info/top-anime',
					id: 'commands/info/top-anime',
					title: 'Top Anime',
					description: 'Overview',
					source: '@site/docs/commands/info/topAnime.md',
					sourceDirName: 'commands/info',
					slug: '/commands/info/top-anime',
					permalink: '/Urvo/commands/info/top-anime',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'top-anime', title: 'Top Anime' },
					sidebar: 'docs',
					previous: { title: 'Minecraft', permalink: '/Urvo/commands/info/minecraft' },
					next: { title: 'Top Manga', permalink: '/Urvo/commands/info/top-manga' },
				},
				p = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				c = { toc: m },
				s = 'wrapper';
			function u(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					s,
					(0, r.Z)({}, c, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)(
						'p',
						null,
						'Sends the user information about the top 10 anime (all time or airing), obtained from MAL.',
					),
					(0, o.kt)(
						'table',
						null,
						(0, o.kt)(
							'thead',
							{ parentName: 'table' },
							(0, o.kt)(
								'tr',
								{ parentName: 'thead' },
								(0, o.kt)('th', { parentName: 'tr', align: 'center' }, 'argument name'),
								(0, o.kt)('th', { parentName: 'tr', align: 'center' }, 'description'),
							),
						),
						(0, o.kt)(
							'tbody',
							{ parentName: 'table' },
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'status'),
								),
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									'The airing status of the top 10 anime (airing or finished)',
								),
							),
						),
					),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'This command was made possible by the following API:'),
					(0, o.kt)(
						'ul',
						null,
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							'JikanAPI (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://docs.api.jikan.moe/' }, 'Documentation'),
							' | ',
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/jikan-me/jikan-rest' }, 'GitHub Repo'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Top Anime Command Demo Gif', src: n(2240).Z, width: '1220', height: '954' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		2240: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/top-anime-802761034f392ae28df0888011d7e101.gif';
		},
	},
]);
