'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[6325],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => d, kt: () => f });
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
				m = function (e) {
					var t = n.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				d = function (e) {
					var t = m(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
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
						d = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = m(r),
						u = o,
						f = s[''.concat(l, '.').concat(u)] || s[u] || p[u] || a;
					return r
						? n.createElement(f, i(i({ ref: t }, d), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, d));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = u;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e), (c[s] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var m = 2; m < a; m++) i[m] = r[m];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		3040: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => p,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => m,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'bored', title: 'Random Activity Suggestion' },
				i = void 0,
				c = {
					unversionedId: 'commands/random/bored',
					id: 'commands/random/bored',
					title: 'Random Activity Suggestion',
					description: 'Overview',
					source: '@site/docs/commands/random/bored.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/bored',
					permalink: '/Urvo/commands/random/bored',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'bored', title: 'Random Activity Suggestion' },
					sidebar: 'docs',
					previous: { title: 'Random Anime Quote', permalink: '/Urvo/commands/random/anime-quote' },
					next: { title: 'Random xkcd Comic', permalink: '/Urvo/commands/random/comic' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				d = { toc: m },
				s = 'wrapper';
			function p(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					s,
					(0, n.Z)({}, d, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Suggest a random activity to the user.'),
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
							'Advice Slip JSON API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://api.adviceslip.com/' }, 'Documentation'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Random Activity Command Demo GIF', src: r(9320).Z, width: '1220', height: '954' }),
					),
				);
			}
			p.isMDXComponent = !0;
		},
		9320: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/bored-beb558153afc732ee7942377e1504212.gif';
		},
	},
]);
