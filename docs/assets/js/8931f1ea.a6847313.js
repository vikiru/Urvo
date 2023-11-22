'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[7742],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => d, kt: () => f });
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
			function c(e) {
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
			function i(e, t) {
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
			var m = r.createContext({}),
				l = function (e) {
					var t = r.useContext(m),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : c(c({}, t), e)), n;
				},
				d = function (e) {
					var t = l(e.components);
					return r.createElement(m.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				p = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						m = e.parentName,
						d = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = l(n),
						u = o,
						f = s[''.concat(m, '.').concat(u)] || s[u] || p[u] || a;
					return n
						? r.createElement(f, c(c({ ref: t }, d), {}, { components: n }))
						: r.createElement(f, c({ ref: t }, d));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						c = new Array(a);
					c[0] = u;
					var i = {};
					for (var m in t) hasOwnProperty.call(t, m) && (i[m] = t[m]);
					(i.originalType = e), (i[s] = 'string' == typeof e ? e : o), (c[1] = i);
					for (var l = 2; l < a; l++) c[l] = n[l];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		3927: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => m,
					contentTitle: () => c,
					default: () => p,
					frontMatter: () => a,
					metadata: () => i,
					toc: () => l,
				});
			var r = n(7462),
				o = (n(7294), n(4137));
			const a = { id: 'comic', title: 'Random xkcd Comic' },
				c = void 0,
				i = {
					unversionedId: 'commands/random/comic',
					id: 'commands/random/comic',
					title: 'Random xkcd Comic',
					description: 'Overview',
					source: '@site/docs/commands/random/comic.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/comic',
					permalink: '/Urvo/commands/random/comic',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'comic', title: 'Random xkcd Comic' },
					sidebar: 'docs',
					previous: { title: 'Random Activity Suggestion', permalink: '/Urvo/commands/random/bored' },
					next: { title: 'Random Fact', permalink: '/Urvo/commands/random/fact' },
				},
				m = {},
				l = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				d = { toc: l },
				s = 'wrapper';
			function p(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					s,
					(0, r.Z)({}, d, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Sends a random xkcd comic in the channel.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permission'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'This command was made possible by the following API:'),
					(0, o.kt)(
						'ul',
						null,
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							'xkcd Comics (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://xkcd.com/' }, 'Website'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Random xkcd Command Demo GIF', src: n(1574).Z, width: '1220', height: '954' }),
					),
				);
			}
			p.isMDXComponent = !0;
		},
		1574: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/comic-3a956606fa07f9c9a0609a2a190174e7.gif';
		},
	},
]);
