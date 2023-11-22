'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9127],
	{
		4137: (e, r, t) => {
			t.d(r, { Zo: () => m, kt: () => f });
			var n = t(7294);
			function o(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[r] = t),
					e
				);
			}
			function a(e, r) {
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
			function i(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? a(Object(t), !0).forEach(function (r) {
								o(e, r, t[r]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
						  : a(Object(t)).forEach(function (r) {
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
							a = Object.keys(e);
						for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(t = a[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
				}
				return o;
			}
			var l = n.createContext({}),
				s = function (e) {
					var r = n.useContext(l),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : i(i({}, r), e)), t;
				},
				m = function (e) {
					var r = s(e.components);
					return n.createElement(l.Provider, { value: r }, e.children);
				},
				p = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				u = n.forwardRef(function (e, r) {
					var t = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						m = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = s(t),
						u = o,
						f = p[''.concat(l, '.').concat(u)] || p[u] || d[u] || a;
					return t
						? n.createElement(f, i(i({ ref: r }, m), {}, { components: t }))
						: n.createElement(f, i({ ref: r }, m));
				});
			function f(e, r) {
				var t = arguments,
					o = r && r.mdxType;
				if ('string' == typeof e || o) {
					var a = t.length,
						i = new Array(a);
					i[0] = u;
					var c = {};
					for (var l in r) hasOwnProperty.call(r, l) && (c[l] = r[l]);
					(c.originalType = e), (c[p] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var s = 2; s < a; s++) i[s] = t[s];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, t);
			}
			u.displayName = 'MDXCreateElement';
		},
		9062: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => s,
				});
			var n = t(7462),
				o = (t(7294), t(4137));
			const a = { id: 'thrones', title: 'Random Game of Thrones Character' },
				i = void 0,
				c = {
					unversionedId: 'commands/random/thrones',
					id: 'commands/random/thrones',
					title: 'Random Game of Thrones Character',
					description: 'Overview',
					source: '@site/docs/commands/random/thrones.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/thrones',
					permalink: '/Urvo/commands/random/thrones',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'thrones', title: 'Random Game of Thrones Character' },
					sidebar: 'docs',
					previous: { title: 'Random Shakespeare Sonnet', permalink: '/Urvo/commands/random/shakespeare' },
					next: { title: 'Attack', permalink: '/Urvo/commands/troopica/attack' },
				},
				l = {},
				s = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				m = { toc: s },
				p = 'wrapper';
			function d(e) {
				let { components: r, ...a } = e;
				return (0, o.kt)(
					p,
					(0, n.Z)({}, m, a, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Get information about a random Game of Thrones character.'),
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
							'Game of Thrones API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://thronesapi.com/' }, 'Website'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', {
							alt: 'Random Game of Thrones Character Command Demo GIF',
							src: t(8852).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		8852: (e, r, t) => {
			t.d(r, { Z: () => n });
			const n = t.p + 'assets/images/thrones-914e4d93581da7e6bece1a258c09a14c.gif';
		},
	},
]);
