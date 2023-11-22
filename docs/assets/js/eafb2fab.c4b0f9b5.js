'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[6777],
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
				p = function (e) {
					var r = n.useContext(l),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : i(i({}, r), e)), t;
				},
				m = function (e) {
					var r = p(e.components);
					return n.createElement(l.Provider, { value: r }, e.children);
				},
				d = 'mdxType',
				s = {
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
						d = p(t),
						u = o,
						f = d[''.concat(l, '.').concat(u)] || d[u] || s[u] || a;
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
					(c.originalType = e), (c[d] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var p = 2; p < a; p++) i[p] = t[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, t);
			}
			u.displayName = 'MDXCreateElement';
		},
		1252: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => l,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => p,
				});
			var n = t(7462),
				o = (t(7294), t(4137));
			const a = { id: 'harry-potter', title: 'Random Harry Potter Character' },
				i = void 0,
				c = {
					unversionedId: 'commands/random/harry-potter',
					id: 'commands/random/harry-potter',
					title: 'Random Harry Potter Character',
					description: 'Overview',
					source: '@site/docs/commands/random/potter.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/harry-potter',
					permalink: '/Urvo/commands/random/harry-potter',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'harry-potter', title: 'Random Harry Potter Character' },
					sidebar: 'docs',
					previous: { title: 'Random Fact', permalink: '/Urvo/commands/random/fact' },
					next: { title: 'Random Joke', permalink: '/Urvo/commands/random/joke' },
				},
				l = {},
				p = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				m = { toc: p },
				d = 'wrapper';
			function s(e) {
				let { components: r, ...a } = e;
				return (0, o.kt)(
					d,
					(0, n.Z)({}, m, a, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Get information about a random Harry Potter character.'),
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
							'Harry Potter API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://hp-api.onrender.com/' }, 'Website'),
							' | ',
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/KostaSav/hp-api' }, 'GitHub Repo'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', {
							alt: 'Random Harry Potter Character Command Demo GIF',
							src: t(3554).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		3554: (e, r, t) => {
			t.d(r, { Z: () => n });
			const n = t.p + 'assets/images/potter-feedbc42ef3536c72c5d31a53bb7e8c9.gif';
		},
	},
]);
