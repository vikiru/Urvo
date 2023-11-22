'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[1569],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => f });
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
			var c = r.createContext({}),
				m = function (e) {
					var t = r.useContext(c),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				u = function (e) {
					var t = m(e.components);
					return r.createElement(c.Provider, { value: t }, e.children);
				},
				d = 'mdxType',
				p = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				s = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = m(n),
						s = o,
						f = d[''.concat(c, '.').concat(s)] || d[s] || p[s] || a;
					return n
						? r.createElement(f, i(i({ ref: t }, u), {}, { components: n }))
						: r.createElement(f, i({ ref: t }, u));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = s;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e), (l[d] = 'string' == typeof e ? e : o), (i[1] = l);
					for (var m = 2; m < a; m++) i[m] = n[m];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			s.displayName = 'MDXCreateElement';
		},
		7475: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => c,
					contentTitle: () => i,
					default: () => p,
					frontMatter: () => a,
					metadata: () => l,
					toc: () => m,
				});
			var r = n(7462),
				o = (n(7294), n(4137));
			const a = { id: 'quote', title: 'Random Quote' },
				i = void 0,
				l = {
					unversionedId: 'commands/random/quote',
					id: 'commands/random/quote',
					title: 'Random Quote',
					description: 'Overview',
					source: '@site/docs/commands/random/quote.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/quote',
					permalink: '/Urvo/commands/random/quote',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'quote', title: 'Random Quote' },
					sidebar: 'docs',
					previous: { title: 'Random Pun', permalink: '/Urvo/commands/random/pun' },
					next: { title: 'Random Shakespeare Sonnet', permalink: '/Urvo/commands/random/shakespeare' },
				},
				c = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				u = { toc: m },
				d = 'wrapper';
			function p(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					d,
					(0, r.Z)({}, u, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random quote.'),
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
							'Dummy JSON API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://dummyjson.com/' }, 'Website'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Random Quote Command Demo GIF', src: n(4376).Z, width: '1220', height: '954' }),
					),
				);
			}
			p.isMDXComponent = !0;
		},
		4376: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/quote-8b37ead3ee51aa507660f35d130725f5.gif';
		},
	},
]);
