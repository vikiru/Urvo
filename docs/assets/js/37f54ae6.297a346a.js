'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[2647],
	{
		4137: (e, n, t) => {
			t.d(n, { Zo: () => m, kt: () => f });
			var r = t(7294);
			function o(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[n] = t),
					e
				);
			}
			function a(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function i(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? a(Object(t), !0).forEach(function (n) {
								o(e, n, t[n]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
						: a(Object(t)).forEach(function (n) {
								Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
						  });
				}
				return e;
			}
			function c(e, n) {
				if (null == e) return {};
				var t,
					r,
					o = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
				}
				return o;
			}
			var d = r.createContext({}),
				l = function (e) {
					var n = r.useContext(d),
						t = n;
					return e && (t = 'function' == typeof e ? e(n) : i(i({}, n), e)), t;
				},
				m = function (e) {
					var n = l(e.components);
					return r.createElement(d.Provider, { value: n }, e.children);
				},
				p = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				u = r.forwardRef(function (e, n) {
					var t = e.components,
						o = e.mdxType,
						a = e.originalType,
						d = e.parentName,
						m = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = l(t),
						u = o,
						f = p[''.concat(d, '.').concat(u)] || p[u] || s[u] || a;
					return t
						? r.createElement(f, i(i({ ref: n }, m), {}, { components: t }))
						: r.createElement(f, i({ ref: n }, m));
				});
			function f(e, n) {
				var t = arguments,
					o = n && n.mdxType;
				if ('string' == typeof e || o) {
					var a = t.length,
						i = new Array(a);
					i[0] = u;
					var c = {};
					for (var d in n) hasOwnProperty.call(n, d) && (c[d] = n[d]);
					(c.originalType = e), (c[p] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var l = 2; l < a; l++) i[l] = t[l];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, t);
			}
			u.displayName = 'MDXCreateElement';
		},
		8179: (e, n, t) => {
			t.r(n),
				t.d(n, {
					assets: () => d,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => l,
				});
			var r = t(7462),
				o = (t(7294), t(4137));
			const a = { id: 'advice', title: 'Random Advice' },
				i = void 0,
				c = {
					unversionedId: 'commands/random/advice',
					id: 'commands/random/advice',
					title: 'Random Advice',
					description: 'Overview',
					source: '@site/docs/commands/random/advice.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/advice',
					permalink: '/Urvo/commands/random/advice',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'advice', title: 'Random Advice' },
					sidebar: 'docs',
					previous: { title: 'Unban', permalink: '/Urvo/commands/moderation/unban' },
					next: { title: 'Random Affirmation', permalink: '/Urvo/commands/random/affirmation' },
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
				let { components: n, ...a } = e;
				return (0, o.kt)(
					p,
					(0, r.Z)({}, m, a, { components: n, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random piece of advice.'),
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
						(0, o.kt)('img', { alt: 'Random Advice Command Demo GIF', src: t(5991).Z, width: '1220', height: '954' }),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		5991: (e, n, t) => {
			t.d(n, { Z: () => r });
			const r = t.p + 'assets/images/advice-bbd01f4b6c6d6c35dfbd13c1cd57a2fb.gif';
		},
	},
]);
