'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9074],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
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
			function c(e) {
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
			function i(e, t) {
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
				m = function (e) {
					var t = n.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : c(c({}, t), e)), r;
				},
				s = function (e) {
					var t = m(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				d = 'mdxType',
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
						s = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = m(r),
						u = o,
						f = d[''.concat(l, '.').concat(u)] || d[u] || p[u] || a;
					return r
						? n.createElement(f, c(c({ ref: t }, s), {}, { components: r }))
						: n.createElement(f, c({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = u;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e), (i[d] = 'string' == typeof e ? e : o), (c[1] = i);
					for (var m = 2; m < a; m++) c[m] = r[m];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		4959: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => c,
					default: () => p,
					frontMatter: () => a,
					metadata: () => i,
					toc: () => m,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'fact', title: 'Random Fact' },
				c = void 0,
				i = {
					unversionedId: 'commands/random/fact',
					id: 'commands/random/fact',
					title: 'Random Fact',
					description: 'Overview',
					source: '@site/docs/commands/random/fact.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/fact',
					permalink: '/Urvo/commands/random/fact',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'fact', title: 'Random Fact' },
					sidebar: 'docs',
					previous: { title: 'Random xkcd Comic', permalink: '/Urvo/commands/random/comic' },
					next: { title: 'Random Harry Potter Character', permalink: '/Urvo/commands/random/harry-potter' },
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
				let { components: t, ...a } = e;
				return (0, o.kt)(
					d,
					(0, n.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random fact.'),
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
							'Random Useless Facts API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://uselessfacts.jsph.pl/' }, 'Documentation'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Random Fact Command Demo GIF', src: r(1270).Z, width: '1220', height: '954' }),
					),
				);
			}
			p.isMDXComponent = !0;
		},
		1270: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/fact-a48ec885f2c87e8c7eea7c7f33c6fb99.gif';
		},
	},
]);
