'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[8254],
	{
		4137: (e, r, t) => {
			t.d(r, { Zo: () => p, kt: () => f });
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
			function s(e, r) {
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
				c = function (e) {
					var r = n.useContext(l),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : i(i({}, r), e)), t;
				},
				p = function (e) {
					var r = c(e.components);
					return n.createElement(l.Provider, { value: r }, e.children);
				},
				m = 'mdxType',
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
						p = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
						m = c(t),
						u = o,
						f = m[''.concat(l, '.').concat(u)] || m[u] || d[u] || a;
					return t
						? n.createElement(f, i(i({ ref: r }, p), {}, { components: t }))
						: n.createElement(f, i({ ref: r }, p));
				});
			function f(e, r) {
				var t = arguments,
					o = r && r.mdxType;
				if ('string' == typeof e || o) {
					var a = t.length,
						i = new Array(a);
					i[0] = u;
					var s = {};
					for (var l in r) hasOwnProperty.call(r, l) && (s[l] = r[l]);
					(s.originalType = e), (s[m] = 'string' == typeof e ? e : o), (i[1] = s);
					for (var c = 2; c < a; c++) i[c] = t[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, t);
			}
			u.displayName = 'MDXCreateElement';
		},
		8313: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => s,
					toc: () => c,
				});
			var n = t(7462),
				o = (t(7294), t(4137));
			const a = { id: 'shakespeare', title: 'Random Shakespeare Sonnet' },
				i = void 0,
				s = {
					unversionedId: 'commands/random/shakespeare',
					id: 'commands/random/shakespeare',
					title: 'Random Shakespeare Sonnet',
					description: 'Overview',
					source: '@site/docs/commands/random/shakespeare.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/shakespeare',
					permalink: '/Urvo/commands/random/shakespeare',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'shakespeare', title: 'Random Shakespeare Sonnet' },
					sidebar: 'docs',
					previous: { title: 'Random Quote', permalink: '/Urvo/commands/random/quote' },
					next: { title: 'Random Game of Thrones Character', permalink: '/Urvo/commands/random/thrones' },
				},
				l = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: c },
				m = 'wrapper';
			function d(e) {
				let { components: r, ...a } = e;
				return (0, o.kt)(
					m,
					(0, n.Z)({}, p, a, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random sonnet written by William Shakespeare.'),
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
							'PoetryDB API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://poetrydb.org/index.html' }, 'Website'),
							' | ',
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/thundercomb/poetrydb' }, 'GitHub Repo'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', {
							alt: 'Random Shakespeare Sonnet Command Demo GIF',
							src: t(4186).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		4186: (e, r, t) => {
			t.d(r, { Z: () => n });
			const n = t.p + 'assets/images/shakespeare-7edeaf40a8130ee88659e20c767bd08b.gif';
		},
	},
]);
