'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[6435],
	{
		4137: (e, n, t) => {
			t.d(n, { Zo: () => p, kt: () => f });
			var r = t(7294);
			function a(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[n] = t),
					e
				);
			}
			function o(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function i(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? o(Object(t), !0).forEach(function (n) {
								a(e, n, t[n]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
						: o(Object(t)).forEach(function (n) {
								Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
						  });
				}
				return e;
			}
			function c(e, n) {
				if (null == e) return {};
				var t,
					r,
					a = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
				}
				return a;
			}
			var l = r.createContext({}),
				m = function (e) {
					var n = r.useContext(l),
						t = n;
					return e && (t = 'function' == typeof e ? e(n) : i(i({}, n), e)), t;
				},
				p = function (e) {
					var n = m(e.components);
					return r.createElement(l.Provider, { value: n }, e.children);
				},
				s = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				u = r.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = m(t),
						u = a,
						f = s[''.concat(l, '.').concat(u)] || s[u] || d[u] || o;
					return t
						? r.createElement(f, i(i({ ref: n }, p), {}, { components: t }))
						: r.createElement(f, i({ ref: n }, p));
				});
			function f(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ('string' == typeof e || a) {
					var o = t.length,
						i = new Array(o);
					i[0] = u;
					var c = {};
					for (var l in n) hasOwnProperty.call(n, l) && (c[l] = n[l]);
					(c.originalType = e), (c[s] = 'string' == typeof e ? e : a), (i[1] = c);
					for (var m = 2; m < o; m++) i[m] = t[m];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, t);
			}
			u.displayName = 'MDXCreateElement';
		},
		5664: (e, n, t) => {
			t.r(n),
				t.d(n, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => o,
					metadata: () => c,
					toc: () => m,
				});
			var r = t(7462),
				a = (t(7294), t(4137));
			const o = { id: 'panda', title: 'Panda' },
				i = void 0,
				c = {
					unversionedId: 'commands/images/panda',
					id: 'commands/images/panda',
					title: 'Panda',
					description: 'Overview',
					source: '@site/docs/commands/images/panda.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/panda',
					permalink: '/Urvo/commands/images/panda',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'panda', title: 'Panda' },
					sidebar: 'docs',
					previous: { title: 'Koala', permalink: '/Urvo/commands/images/koala' },
					next: { title: 'Raccoon', permalink: '/Urvo/commands/images/raccoon' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: m },
				s = 'wrapper';
			function d(e) {
				let { components: n, ...o } = e;
				return (0, a.kt)(
					s,
					(0, r.Z)({}, p, o, { components: n, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a random image and fact of a panda into the server via an embed.'),
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
						(0, a.kt)('img', { alt: 'Panda Command Demo GIF', src: t(346).Z, width: '1220', height: '954' }),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		346: (e, n, t) => {
			t.d(n, { Z: () => r });
			const r = t.p + 'assets/images/panda-49c915f9de445da12b6b746f4d9628a7.gif';
		},
	},
]);
