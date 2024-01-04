'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[8055],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
			var n = r(7294);
			function a(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			function o(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: o(Object(r)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
						  });
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
				}
				return a;
			}
			var c = n.createContext({}),
				m = function (e) {
					var t = n.useContext(c),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				s = function (e) {
					var t = m(e.components);
					return n.createElement(c.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = m(r),
						u = a,
						f = p[''.concat(c, '.').concat(u)] || p[u] || d[u] || o;
					return r
						? n.createElement(f, i(i({ ref: t }, s), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = u;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e), (l[p] = 'string' == typeof e ? e : a), (i[1] = l);
					for (var m = 2; m < o; m++) i[m] = r[m];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		1818: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => c,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => m,
				});
			var n = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'koala', title: 'Koala' },
				i = void 0,
				l = {
					unversionedId: 'commands/images/koala',
					id: 'commands/images/koala',
					title: 'Koala',
					description: 'Overview',
					source: '@site/docs/commands/images/koala.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/koala',
					permalink: '/Urvo/commands/images/koala',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'koala', title: 'Koala' },
					sidebar: 'docs',
					previous: { title: 'Kangaroo', permalink: '/Urvo/commands/images/kangaroo' },
					next: { title: 'Panda', permalink: '/Urvo/commands/images/panda' },
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
					(0, n.Z)({}, s, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a random image and fact of a koala into the server via an embed.'),
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
						(0, a.kt)('img', { alt: 'Koala Command Demo GIF', src: r(3018).Z, width: '1220', height: '904' }),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		3018: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/koala-41fd9eaedfdc0b1dcd705117b5592269.gif';
		},
	},
]);
