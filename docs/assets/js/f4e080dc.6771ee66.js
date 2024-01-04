'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[5943],
	{
		4137: (e, n, r) => {
			r.d(n, { Zo: () => s, kt: () => f });
			var t = r(7294);
			function o(e, n, r) {
				return (
					n in e
						? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[n] = r),
					e
				);
			}
			function a(e, n) {
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
			function c(e) {
				for (var n = 1; n < arguments.length; n++) {
					var r = null != arguments[n] ? arguments[n] : {};
					n % 2
						? a(Object(r), !0).forEach(function (n) {
								o(e, n, r[n]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: a(Object(r)).forEach(function (n) {
								Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
						  });
				}
				return e;
			}
			function i(e, n) {
				if (null == e) return {};
				var r,
					t,
					o = (function (e, n) {
						if (null == e) return {};
						var r,
							t,
							o = {},
							a = Object.keys(e);
						for (t = 0; t < a.length; t++) (r = a[t]), n.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (t = 0; t < a.length; t++)
						(r = a[t]), n.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
				}
				return o;
			}
			var l = t.createContext({}),
				m = function (e) {
					var n = t.useContext(l),
						r = n;
					return e && (r = 'function' == typeof e ? e(n) : c(c({}, n), e)), r;
				},
				s = function (e) {
					var n = m(e.components);
					return t.createElement(l.Provider, { value: n }, e.children);
				},
				p = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var n = e.children;
						return t.createElement(t.Fragment, {}, n);
					},
				},
				u = t.forwardRef(function (e, n) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						s = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = m(r),
						u = o,
						f = p[''.concat(l, '.').concat(u)] || p[u] || d[u] || a;
					return r
						? t.createElement(f, c(c({ ref: n }, s), {}, { components: r }))
						: t.createElement(f, c({ ref: n }, s));
				});
			function f(e, n) {
				var r = arguments,
					o = n && n.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = u;
					var i = {};
					for (var l in n) hasOwnProperty.call(n, l) && (i[l] = n[l]);
					(i.originalType = e), (i[p] = 'string' == typeof e ? e : o), (c[1] = i);
					for (var m = 2; m < a; m++) c[m] = r[m];
					return t.createElement.apply(null, c);
				}
				return t.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		9707: (e, n, r) => {
			r.r(n),
				r.d(n, {
					assets: () => l,
					contentTitle: () => c,
					default: () => d,
					frontMatter: () => a,
					metadata: () => i,
					toc: () => m,
				});
			var t = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'raccoon', title: 'Raccoon' },
				c = void 0,
				i = {
					unversionedId: 'commands/images/raccoon',
					id: 'commands/images/raccoon',
					title: 'Raccoon',
					description: 'Overview',
					source: '@site/docs/commands/images/raccoon.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/raccoon',
					permalink: '/Urvo/commands/images/raccoon',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'raccoon', title: 'Raccoon' },
					sidebar: 'docs',
					previous: { title: 'Panda', permalink: '/Urvo/commands/images/panda' },
					next: { title: 'Red Panda', permalink: '/Urvo/commands/images/red-panda' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: m },
				p = 'wrapper';
			function d(e) {
				let { components: n, ...a } = e;
				return (0, o.kt)(
					p,
					(0, t.Z)({}, s, a, { components: n, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random image and fact of a raccoon into the server via an embed.'),
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
						(0, o.kt)('img', { alt: 'Raccoon Command Demo GIF', src: r(5308).Z, width: '1220', height: '954' }),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		5308: (e, n, r) => {
			r.d(n, { Z: () => t });
			const t = r.p + 'assets/images/raccoon-2ebe6b6697037d985d182417fcad658c.gif';
		},
	},
]);
