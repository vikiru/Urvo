'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[3051],
	{
		4137: (e, n, r) => {
			r.d(n, { Zo: () => m, kt: () => f });
			var t = r(7294);
			function a(e, n, r) {
				return (
					n in e
						? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[n] = r),
					e
				);
			}
			function o(e, n) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					n &&
						(t = t.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable;
						})),
						r.push.apply(r, t);
				}
				return r;
			}
			function i(e) {
				for (var n = 1; n < arguments.length; n++) {
					var r = null != arguments[n] ? arguments[n] : {};
					n % 2
						? o(Object(r), !0).forEach(function (n) {
								a(e, n, r[n]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						  : o(Object(r)).forEach(function (n) {
									Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
						    });
				}
				return e;
			}
			function c(e, n) {
				if (null == e) return {};
				var r,
					t,
					a = (function (e, n) {
						if (null == e) return {};
						var r,
							t,
							a = {},
							o = Object.keys(e);
						for (t = 0; t < o.length; t++) (r = o[t]), n.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (t = 0; t < o.length; t++)
						(r = o[t]), n.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
				}
				return a;
			}
			var d = t.createContext({}),
				l = function (e) {
					var n = t.useContext(d),
						r = n;
					return e && (r = 'function' == typeof e ? e(n) : i(i({}, n), e)), r;
				},
				m = function (e) {
					var n = l(e.components);
					return t.createElement(d.Provider, { value: n }, e.children);
				},
				p = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var n = e.children;
						return t.createElement(t.Fragment, {}, n);
					},
				},
				u = t.forwardRef(function (e, n) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						d = e.parentName,
						m = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = l(r),
						u = a,
						f = p[''.concat(d, '.').concat(u)] || p[u] || s[u] || o;
					return r
						? t.createElement(f, i(i({ ref: n }, m), {}, { components: r }))
						: t.createElement(f, i({ ref: n }, m));
				});
			function f(e, n) {
				var r = arguments,
					a = n && n.mdxType;
				if ('string' == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = u;
					var c = {};
					for (var d in n) hasOwnProperty.call(n, d) && (c[d] = n[d]);
					(c.originalType = e), (c[p] = 'string' == typeof e ? e : a), (i[1] = c);
					for (var l = 2; l < o; l++) i[l] = r[l];
					return t.createElement.apply(null, i);
				}
				return t.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		8669: (e, n, r) => {
			r.r(n),
				r.d(n, {
					assets: () => d,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => o,
					metadata: () => c,
					toc: () => l,
				});
			var t = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'red-panda', title: 'Red Panda' },
				i = void 0,
				c = {
					unversionedId: 'commands/images/red-panda',
					id: 'commands/images/red-panda',
					title: 'Red Panda',
					description: 'Overview',
					source: '@site/docs/commands/images/red-panda.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/red-panda',
					permalink: '/Urvo/commands/images/red-panda',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'red-panda', title: 'Red Panda' },
					sidebar: 'docs',
					previous: { title: 'Raccoon', permalink: '/Urvo/commands/images/raccoon' },
					next: { title: 'Whale', permalink: '/Urvo/commands/images/whale' },
				},
				d = {},
				l = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				m = { toc: l },
				p = 'wrapper';
			function s(e) {
				let { components: n, ...o } = e;
				return (0, a.kt)(
					p,
					(0, t.Z)({}, m, o, { components: n, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a random image and fact of a red panda into the server via an embed.'),
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
						(0, a.kt)('img', { alt: 'Red Panda Command Demo GIF', src: r(5092).Z, width: '1220', height: '954' }),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		5092: (e, n, r) => {
			r.d(n, { Z: () => t });
			const t = r.p + 'assets/images/red-panda-7d91d7721dd663062bc547a2537ad715.gif';
		},
	},
]);
