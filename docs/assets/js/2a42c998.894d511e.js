'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[5575],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => f });
			var n = r(7294);
			function a(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			function o(e, t) {
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
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: o(Object(r)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
						  });
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
				}
				return a;
			}
			var m = n.createContext({}),
				c = function (e) {
					var t = n.useContext(m),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				u = function (e) {
					var t = c(e.components);
					return n.createElement(m.Provider, { value: t }, e.children);
				},
				l = 'mdxType',
				p = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						m = e.parentName,
						u = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
						l = c(r),
						d = a,
						f = l[''.concat(m, '.').concat(d)] || l[d] || p[d] || o;
					return r
						? n.createElement(f, i(i({ ref: t }, u), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, u));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = d;
					var s = {};
					for (var m in t) hasOwnProperty.call(t, m) && (s[m] = t[m]);
					(s.originalType = e), (s[l] = 'string' == typeof e ? e : a), (i[1] = s);
					for (var c = 2; c < o; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		2023: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => m,
					contentTitle: () => i,
					default: () => p,
					frontMatter: () => o,
					metadata: () => s,
					toc: () => c,
				});
			var n = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'guess-number', title: 'Guess Number' },
				i = void 0,
				s = {
					unversionedId: 'commands/minigames/guess-number',
					id: 'commands/minigames/guess-number',
					title: 'Guess Number',
					description: 'Overview',
					source: '@site/docs/commands/minigames/guess-number.md',
					sourceDirName: 'commands/minigames',
					slug: '/commands/minigames/guess-number',
					permalink: '/Urvo/commands/minigames/guess-number',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'guess-number', title: 'Guess Number' },
					sidebar: 'docs',
					previous: { title: 'Flip a Coin', permalink: '/Urvo/commands/minigames/flip' },
					next: { title: 'Rock-Paper-Scissors', permalink: '/Urvo/commands/minigames/rps' },
				},
				m = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				u = { toc: c },
				l = 'wrapper';
			function p(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					l,
					(0, n.Z)({}, u, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Guess the number that the bot is thinking of (1 - 10).'),
					(0, a.kt)(
						'table',
						null,
						(0, a.kt)(
							'thead',
							{ parentName: 'table' },
							(0, a.kt)(
								'tr',
								{ parentName: 'thead' },
								(0, a.kt)('th', { parentName: 'tr', align: 'center' }, 'argument name'),
								(0, a.kt)('th', { parentName: 'tr', align: 'center' }, 'description'),
							),
						),
						(0, a.kt)(
							'tbody',
							{ parentName: 'table' },
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'guess'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'Guess the number that the bot is thinking of'),
							),
						),
					),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, a.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, a.kt)('p', null, 'No external APIs were used for this command.'),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', { alt: 'Guess Number Command Demo GIF', src: r(6365).Z, width: '1220', height: '954' }),
					),
				);
			}
			p.isMDXComponent = !0;
		},
		6365: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/guess-number-ea39f0aed95a972f5c6fe19e2156caeb.gif';
		},
	},
]);
