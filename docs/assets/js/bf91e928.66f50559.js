'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4372],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => d });
			var r = n(7294);
			function a(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function o(e, t) {
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
						? o(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: o(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function c(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
				}
				return a;
			}
			var l = r.createContext({}),
				m = function (e) {
					var t = r.useContext(l),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				p = function (e) {
					var t = m(e.components);
					return r.createElement(l.Provider, { value: t }, e.children);
				},
				f = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						f = m(n),
						u = a,
						d = f[''.concat(l, '.').concat(u)] || f[u] || s[u] || o;
					return n
						? r.createElement(d, i(i({ ref: t }, p), {}, { components: n }))
						: r.createElement(d, i({ ref: t }, p));
				});
			function d(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = u;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e), (c[f] = 'string' == typeof e ? e : a), (i[1] = c);
					for (var m = 2; m < o; m++) i[m] = n[m];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		5037: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => o,
					metadata: () => c,
					toc: () => m,
				});
			var r = n(7462),
				a = (n(7294), n(4137));
			const o = { id: 'minecraft', title: 'Minecraft' },
				i = void 0,
				c = {
					unversionedId: 'commands/info/minecraft',
					id: 'commands/info/minecraft',
					title: 'Minecraft',
					description: 'Overview',
					source: '@site/docs/commands/info/minecraft.md',
					sourceDirName: 'commands/info',
					slug: '/commands/info/minecraft',
					permalink: '/Urvo/commands/info/minecraft',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'minecraft', title: 'Minecraft' },
					sidebar: 'docs',
					previous: { title: 'Manhwa', permalink: '/Urvo/commands/info/manhwa' },
					next: { title: 'Top Anime', permalink: '/Urvo/commands/info/top-anime' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: m },
				f = 'wrapper';
			function s(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					f,
					(0, r.Z)({}, p, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Return an image of the minecraft avatar for a specific username/uid.'),
					(0, a.kt)(
						'table',
						null,
						(0, a.kt)(
							'thead',
							{ parentName: 'table' },
							(0, a.kt)(
								'tr',
								{ parentName: 'thead' },
								(0, a.kt)('th', { parentName: 'tr', align: 'center' }, 'argument name'),
								(0, a.kt)('th', { parentName: 'tr', align: 'center' }, 'description'),
							),
						),
						(0, a.kt)(
							'tbody',
							{ parentName: 'table' },
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'user'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The username or uid of the user'),
							),
						),
					),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, a.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, a.kt)('p', null, 'This command was made possible by the following API:'),
					(0, a.kt)(
						'ul',
						null,
						(0, a.kt)(
							'li',
							{ parentName: 'ul' },
							'Minotar API (',
							(0, a.kt)('a', { parentName: 'li', href: 'https://minotar.net/' }, 'Website'),
							' | ',
							(0, a.kt)('a', { parentName: 'li', href: 'https://github.com/minotar/imgd' }, 'GitHub Repo'),
						),
					),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', { alt: 'Minecraft Command Demo Gif', src: n(6235).Z, width: '1220', height: '954' }),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		6235: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/minecraft-179c01255322c0326d19cfdf5a76c9d7.gif';
		},
	},
]);
