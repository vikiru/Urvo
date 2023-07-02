'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[16],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => d });
			var n = r(7294);
			function o(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			function a(e, t) {
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
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: a(Object(r)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
						  });
				}
				return e;
			}
			function c(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
				}
				return o;
			}
			var l = n.createContext({}),
				f = function (e) {
					var t = n.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				s = function (e) {
					var t = f(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				m = 'mdxType',
				p = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						s = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						m = f(r),
						u = o,
						d = m[''.concat(l, '.').concat(u)] || m[u] || p[u] || a;
					return r
						? n.createElement(d, i(i({ ref: t }, s), {}, { components: r }))
						: n.createElement(d, i({ ref: t }, s));
				});
			function d(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = u;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e), (c[m] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var f = 2; f < a; f++) i[f] = r[f];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		558: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => p,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => f,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'coffee', title: 'Coffee' },
				i = void 0,
				c = {
					unversionedId: 'commands/images/coffee',
					id: 'commands/images/coffee',
					title: 'Coffee',
					description: 'Overview',
					source: '@site/docs/commands/images/coffee.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/coffee',
					permalink: '/Urvo/commands/images/coffee',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'coffee', title: 'Coffee' },
					sidebar: 'docs',
					previous: { title: 'Cat', permalink: '/Urvo/commands/images/cat' },
					next: { title: 'Dog', permalink: '/Urvo/commands/images/dog' },
				},
				l = {},
				f = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: f },
				m = 'wrapper';
			function p(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					m,
					(0, n.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random image of coffee.'),
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
							'Coffee API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://coffee.alexflipnote.dev/' }, 'Website'),
							' | ',
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/AlexFlipnote/CoffeeAPI' }, 'GitHub Repo'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Coffee Command Demo GIF', src: r(4691).Z, width: '1220', height: '904' }),
					),
				);
			}
			p.isMDXComponent = !0;
		},
		4691: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/coffee-696d9f366392cafd41eaf02950acce10.gif';
		},
	},
]);
