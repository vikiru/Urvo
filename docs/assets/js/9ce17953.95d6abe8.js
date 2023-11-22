'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9696],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => f });
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
			var c = r.createContext({}),
				m = function (e) {
					var t = r.useContext(c),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				s = function (e) {
					var t = m(e.components);
					return r.createElement(c.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				d = {
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
						c = e.parentName,
						s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = m(n),
						u = a,
						f = p[''.concat(c, '.').concat(u)] || p[u] || d[u] || o;
					return n
						? r.createElement(f, i(i({ ref: t }, s), {}, { components: n }))
						: r.createElement(f, i({ ref: t }, s));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = u;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e), (l[p] = 'string' == typeof e ? e : a), (i[1] = l);
					for (var m = 2; m < o; m++) i[m] = n[m];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		4976: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => c,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => m,
				});
			var r = n(7462),
				a = (n(7294), n(4137));
			const o = { id: 'whale', title: 'Whale' },
				i = void 0,
				l = {
					unversionedId: 'commands/images/whale',
					id: 'commands/images/whale',
					title: 'Whale',
					description: 'Overview',
					source: '@site/docs/commands/images/whale.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/whale',
					permalink: '/Urvo/commands/images/whale',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'whale', title: 'Whale' },
					sidebar: 'docs',
					previous: { title: 'Red Panda', permalink: '/Urvo/commands/images/red-panda' },
					next: { title: 'Anime', permalink: '/Urvo/commands/info/anime' },
				},
				c = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: m },
				p = 'wrapper';
			function d(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					p,
					(0, r.Z)({}, s, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a random image and fact of a whale into the server via an embed.'),
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
							'Some Random API (',
							(0, a.kt)(
								'a',
								{ parentName: 'li', href: 'https://some-random-api.com/docs/welcome/introduction' },
								'Documentation',
							),
							')',
						),
					),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', { alt: 'Whale Command Demo GIF', src: n(3413).Z, width: '1220', height: '954' }),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		3413: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/whale-819e8d7df38e9126b6f4d9166016baa3.gif';
		},
	},
]);
