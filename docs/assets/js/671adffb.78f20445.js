'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4527],
	{
		4137: (e, r, t) => {
			t.d(r, { Zo: () => s, kt: () => f });
			var n = t(7294);
			function o(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[r] = t),
					e
				);
			}
			function i(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r &&
						(n = n.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						t.push.apply(t, n);
				}
				return t;
			}
			function a(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? i(Object(t), !0).forEach(function (r) {
								o(e, r, t[r]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
						: i(Object(t)).forEach(function (r) {
								Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
						  });
				}
				return e;
			}
			function c(e, r) {
				if (null == e) return {};
				var t,
					n,
					o = (function (e, r) {
						if (null == e) return {};
						var t,
							n,
							o = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++) (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(t = i[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
				}
				return o;
			}
			var l = n.createContext({}),
				m = function (e) {
					var r = n.useContext(l),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : a(a({}, r), e)), t;
				},
				s = function (e) {
					var r = m(e.components);
					return n.createElement(l.Provider, { value: r }, e.children);
				},
				d = 'mdxType',
				p = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				u = n.forwardRef(function (e, r) {
					var t = e.components,
						o = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						s = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = m(t),
						u = o,
						f = d[''.concat(l, '.').concat(u)] || d[u] || p[u] || i;
					return t
						? n.createElement(f, a(a({ ref: r }, s), {}, { components: t }))
						: n.createElement(f, a({ ref: r }, s));
				});
			function f(e, r) {
				var t = arguments,
					o = r && r.mdxType;
				if ('string' == typeof e || o) {
					var i = t.length,
						a = new Array(i);
					a[0] = u;
					var c = {};
					for (var l in r) hasOwnProperty.call(r, l) && (c[l] = r[l]);
					(c.originalType = e), (c[d] = 'string' == typeof e ? e : o), (a[1] = c);
					for (var m = 2; m < i; m++) a[m] = t[m];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, t);
			}
			u.displayName = 'MDXCreateElement';
		},
		4650: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => l,
					contentTitle: () => a,
					default: () => p,
					frontMatter: () => i,
					metadata: () => c,
					toc: () => m,
				});
			var n = t(7462),
				o = (t(7294), t(4137));
			const i = { id: 'bird', title: 'Bird' },
				a = void 0,
				c = {
					unversionedId: 'commands/images/bird',
					id: 'commands/images/bird',
					title: 'Bird',
					description: 'Overview',
					source: '@site/docs/commands/images/bird.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/bird',
					permalink: '/Urvo/commands/images/bird',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'bird', title: 'Bird' },
					sidebar: 'docs',
					previous: { title: 'Category Overview', permalink: '/Urvo/commands/category-overview' },
					next: { title: 'Cat', permalink: '/Urvo/commands/images/cat' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: m },
				d = 'wrapper';
			function p(e) {
				let { components: r, ...i } = e;
				return (0, o.kt)(
					d,
					(0, n.Z)({}, s, i, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random image and fact of a bird into the server via an embed.'),
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
						(0, o.kt)('img', { alt: 'Bird Command Demo GIF', src: t(7968).Z, width: '1220', height: '905' }),
					),
				);
			}
			p.isMDXComponent = !0;
		},
		7968: (e, r, t) => {
			t.d(r, { Z: () => n });
			const n = t.p + 'assets/images/bird-88c398bfb02b6e980ff930e26a4b7f63.gif';
		},
	},
]);
