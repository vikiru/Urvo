'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4938],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => m, kt: () => f });
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
			function l(e, t) {
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
			var p = r.createContext({}),
				c = function (e) {
					var t = r.useContext(p),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				m = function (e) {
					var t = c(e.components);
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
						a = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						m = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = c(n),
						d = a,
						f = s[''.concat(p, '.').concat(d)] || s[d] || u[d] || o;
					return n
						? r.createElement(f, i(i({ ref: t }, m), {}, { components: n }))
						: r.createElement(f, i({ ref: t }, m));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = d;
					var l = {};
					for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
					(l.originalType = e), (l[s] = 'string' == typeof e ? e : a), (i[1] = l);
					for (var c = 2; c < o; c++) i[c] = n[c];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = 'MDXCreateElement';
		},
		9775: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => p,
					contentTitle: () => i,
					default: () => u,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => c,
				});
			var r = n(7462),
				a = (n(7294), n(4137));
			const o = { id: 'top-manga', title: 'Top Manga' },
				i = void 0,
				l = {
					unversionedId: 'commands/info/top-manga',
					id: 'commands/info/top-manga',
					title: 'Top Manga',
					description: 'Overview',
					source: '@site/docs/commands/info/topManga.md',
					sourceDirName: 'commands/info',
					slug: '/commands/info/top-manga',
					permalink: '/Urvo/commands/info/top-manga',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'top-manga', title: 'Top Manga' },
					sidebar: 'docs',
					previous: { title: 'Top Anime', permalink: '/Urvo/commands/info/top-anime' },
					next: { title: 'Urban', permalink: '/Urvo/commands/info/urban' },
				},
				p = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				m = { toc: c },
				s = 'wrapper';
			function u(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					s,
					(0, r.Z)({}, m, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)(
						'p',
						null,
						'Sends the user information about the top 10 manga (all time or publishing), obtained from MAL',
					),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'status'),
								),
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									'The publishing status of the top 10 manga (publishing or finished)',
								),
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
							'JikanAPI (',
							(0, a.kt)('a', { parentName: 'li', href: 'https://docs.api.jikan.moe/' }, 'Documentation'),
							' | ',
							(0, a.kt)('a', { parentName: 'li', href: 'https://github.com/jikan-me/jikan-rest' }, 'GitHub Repo'),
						),
					),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', { alt: 'Top Manga Command Demo Gif', src: n(7086).Z, width: '1220', height: '954' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		7086: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/top-manga-756241a2cb8b3a2be1f84938e991b40e.gif';
		},
	},
]);
