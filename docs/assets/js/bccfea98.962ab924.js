'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4609],
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
				d = function (e) {
					var r = n.useContext(l),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : i(i({}, r), e)), t;
				},
				p = function (e) {
					var r = d(e.components);
					return n.createElement(l.Provider, { value: r }, e.children);
				},
				s = 'mdxType',
				u = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				m = n.forwardRef(function (e, r) {
					var t = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = d(t),
						m = o,
						f = s[''.concat(l, '.').concat(m)] || s[m] || u[m] || a;
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
					i[0] = m;
					var c = {};
					for (var l in r) hasOwnProperty.call(r, l) && (c[l] = r[l]);
					(c.originalType = e), (c[s] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var d = 2; d < a; d++) i[d] = t[d];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, t);
			}
			m.displayName = 'MDXCreateElement';
		},
		3305: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => l,
					contentTitle: () => i,
					default: () => u,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => d,
				});
			var n = t(7462),
				o = (t(7294), t(4137));
			const a = { id: 'leaderboard', title: 'Leaderboard' },
				i = void 0,
				c = {
					unversionedId: 'commands/troopica/leaderboard',
					id: 'commands/troopica/leaderboard',
					title: 'Leaderboard',
					description: 'Overview',
					source: '@site/docs/commands/troopica/leaderboard.md',
					sourceDirName: 'commands/troopica',
					slug: '/commands/troopica/leaderboard',
					permalink: '/Urvo/commands/troopica/leaderboard',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'leaderboard', title: 'Leaderboard' },
					sidebar: 'docs',
					previous: { title: 'Daily', permalink: '/Urvo/commands/troopica/daily' },
					next: { title: 'Purchase', permalink: '/Urvo/commands/troopica/purchase' },
				},
				l = {},
				d = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: d },
				s = 'wrapper';
			function u(e) {
				let { components: r, ...a } = e;
				return (0, o.kt)(
					s,
					(0, n.Z)({}, p, a, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'See the top 10 players within the leaderboards.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Leaderboard Command Demo GIF', src: t(8305).Z, width: '1220', height: '954' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		8305: (e, r, t) => {
			t.d(r, { Z: () => n });
			const n = t.p + 'assets/images/leaderboard-f7ed490622b78a1feaf13684ee18f2bb.gif';
		},
	},
]);
