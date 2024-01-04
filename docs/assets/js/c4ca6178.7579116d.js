'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[748],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => f });
			var r = n(7294);
			function i(e, t, n) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: o(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var n,
					r,
					i = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							i = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
				}
				return i;
			}
			var m = r.createContext({}),
				c = function (e) {
					var t = r.useContext(m),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(m.Provider, { value: t }, e.children);
				},
				d = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						i = e.mdxType,
						o = e.originalType,
						m = e.parentName,
						p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = c(n),
						u = i,
						f = d[''.concat(m, '.').concat(u)] || d[u] || s[u] || o;
					return n
						? r.createElement(f, a(a({ ref: t }, p), {}, { components: n }))
						: r.createElement(f, a({ ref: t }, p));
				});
			function f(e, t) {
				var n = arguments,
					i = t && t.mdxType;
				if ('string' == typeof e || i) {
					var o = n.length,
						a = new Array(o);
					a[0] = u;
					var l = {};
					for (var m in t) hasOwnProperty.call(t, m) && (l[m] = t[m]);
					(l.originalType = e), (l[d] = 'string' == typeof e ? e : i), (a[1] = l);
					for (var c = 2; c < o; c++) a[c] = n[c];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		9702: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => m,
					contentTitle: () => a,
					default: () => s,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => c,
				});
			var r = n(7462),
				i = (n(7294), n(4137));
			const o = { id: 'digimon', title: 'Digimon' },
				a = void 0,
				l = {
					unversionedId: 'commands/info/digimon',
					id: 'commands/info/digimon',
					title: 'Digimon',
					description: 'Overview',
					source: '@site/docs/commands/info/digimon.md',
					sourceDirName: 'commands/info',
					slug: '/commands/info/digimon',
					permalink: '/Urvo/commands/info/digimon',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'digimon', title: 'Digimon' },
					sidebar: 'docs',
					previous: { title: 'Anime', permalink: '/Urvo/commands/info/anime' },
					next: { title: 'Disney', permalink: '/Urvo/commands/info/disney' },
				},
				m = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: c },
				d = 'wrapper';
			function s(e) {
				let { components: t, ...o } = e;
				return (0, i.kt)(
					d,
					(0, r.Z)({}, p, o, { components: t, mdxType: 'MDXLayout' }),
					(0, i.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, i.kt)('p', null, 'Sends the user information about a queried digimon.'),
					(0, i.kt)(
						'table',
						null,
						(0, i.kt)(
							'thead',
							{ parentName: 'table' },
							(0, i.kt)(
								'tr',
								{ parentName: 'thead' },
								(0, i.kt)('th', { parentName: 'tr', align: 'center' }, 'argument name'),
								(0, i.kt)('th', { parentName: 'tr', align: 'center' }, 'description'),
							),
						),
						(0, i.kt)(
							'tbody',
							{ parentName: 'table' },
							(0, i.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, i.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, i.kt)('inlineCode', { parentName: 'td' }, 'query'),
								),
								(0, i.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									'The name of the digimon you wish to search for',
								),
							),
						),
					),
					(0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, i.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, i.kt)('p', null, 'This command was made possible by the following API:'),
					(0, i.kt)(
						'ul',
						null,
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							'Digimon API (',
							(0, i.kt)('a', { parentName: 'li', href: 'https://digimon-api.vercel.app/' }, 'Website'),
							' | ',
							(0, i.kt)(
								'a',
								{ parentName: 'li', href: 'https://github.com/heyshadowsmith/digimon-api' },
								'GitHub Repo',
							),
							')',
						),
					),
					(0, i.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, i.kt)(
						'p',
						null,
						(0, i.kt)('img', { alt: 'Digimon Command Demo Gif', src: n(3675).Z, width: '1220', height: '954' }),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		3675: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/digimon-15244ce476c016c725b3a7a11a28c8ff.gif';
		},
	},
]);
