'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[2582],
	{
		4137: (e, r, n) => {
			n.d(r, { Zo: () => s, kt: () => f });
			var t = n(7294);
			function o(e, r, n) {
				return (
					r in e
						? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[r] = n),
					e
				);
			}
			function a(e, r) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					r &&
						(t = t.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						n.push.apply(n, t);
				}
				return n;
			}
			function i(e) {
				for (var r = 1; r < arguments.length; r++) {
					var n = null != arguments[r] ? arguments[r] : {};
					r % 2
						? a(Object(n), !0).forEach(function (r) {
								o(e, r, n[r]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						  : a(Object(n)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
						    });
				}
				return e;
			}
			function c(e, r) {
				if (null == e) return {};
				var n,
					t,
					o = (function (e, r) {
						if (null == e) return {};
						var n,
							t,
							o = {},
							a = Object.keys(e);
						for (t = 0; t < a.length; t++) (n = a[t]), r.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (t = 0; t < a.length; t++)
						(n = a[t]), r.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
				}
				return o;
			}
			var l = t.createContext({}),
				m = function (e) {
					var r = t.useContext(l),
						n = r;
					return e && (n = 'function' == typeof e ? e(r) : i(i({}, r), e)), n;
				},
				s = function (e) {
					var r = m(e.components);
					return t.createElement(l.Provider, { value: r }, e.children);
				},
				p = 'mdxType',
				u = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return t.createElement(t.Fragment, {}, r);
					},
				},
				d = t.forwardRef(function (e, r) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						s = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = m(n),
						d = o,
						f = p[''.concat(l, '.').concat(d)] || p[d] || u[d] || a;
					return n
						? t.createElement(f, i(i({ ref: r }, s), {}, { components: n }))
						: t.createElement(f, i({ ref: r }, s));
				});
			function f(e, r) {
				var n = arguments,
					o = r && r.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = d;
					var c = {};
					for (var l in r) hasOwnProperty.call(r, l) && (c[l] = r[l]);
					(c.originalType = e), (c[p] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var m = 2; m < a; m++) i[m] = n[m];
					return t.createElement.apply(null, i);
				}
				return t.createElement.apply(null, n);
			}
			d.displayName = 'MDXCreateElement';
		},
		3131: (e, r, n) => {
			n.r(r),
				n.d(r, {
					assets: () => l,
					contentTitle: () => i,
					default: () => u,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => m,
				});
			var t = n(7462),
				o = (n(7294), n(4137));
			const a = { id: 'kangaroo', title: 'Kangaroo' },
				i = void 0,
				c = {
					unversionedId: 'commands/images/kangaroo',
					id: 'commands/images/kangaroo',
					title: 'Kangaroo',
					description: 'Overview',
					source: '@site/docs/commands/images/kangaroo.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/kangaroo',
					permalink: '/Urvo/commands/images/kangaroo',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'kangaroo', title: 'Kangaroo' },
					sidebar: 'docs',
					previous: { title: 'Duck', permalink: '/Urvo/commands/images/duck' },
					next: { title: 'Koala', permalink: '/Urvo/commands/images/koala' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: m },
				p = 'wrapper';
			function u(e) {
				let { components: r, ...a } = e;
				return (0, o.kt)(
					p,
					(0, t.Z)({}, s, a, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random image and fact of a kangaroo into the server via an embed.'),
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
							'Some Random API (',
							(0, o.kt)(
								'a',
								{ parentName: 'li', href: 'https://some-random-api.com/docs/welcome/introduction' },
								'Documentation',
							),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Kangaroo Command Demo GIF', src: n(7074).Z, width: '1220', height: '904' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		7074: (e, r, n) => {
			n.d(r, { Z: () => t });
			const t = n.p + 'assets/images/kangaroo-ca5b1236740dc092b1dfa805659ffbb4.gif';
		},
	},
]);
