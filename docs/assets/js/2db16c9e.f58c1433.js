'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[1086],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => f });
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
			var s = n.createContext({}),
				l = function (e) {
					var t = n.useContext(s),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				p = function (e) {
					var t = l(e.components);
					return n.createElement(s.Provider, { value: t }, e.children);
				},
				m = 'mdxType',
				d = {
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
						s = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						m = l(r),
						u = o,
						f = m[''.concat(s, '.').concat(u)] || m[u] || d[u] || a;
					return r
						? n.createElement(f, i(i({ ref: t }, p), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, p));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = u;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e), (c[m] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var l = 2; l < a; l++) i[l] = r[l];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		5702: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => s,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => l,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'rps', title: 'Rock-Paper-Scissors' },
				i = void 0,
				c = {
					unversionedId: 'commands/minigames/rps',
					id: 'commands/minigames/rps',
					title: 'Rock-Paper-Scissors',
					description: 'Overview',
					source: '@site/docs/commands/minigames/rps.md',
					sourceDirName: 'commands/minigames',
					slug: '/commands/minigames/rps',
					permalink: '/Urvo/commands/minigames/rps',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'rps', title: 'Rock-Paper-Scissors' },
					sidebar: 'docs',
					previous: { title: 'Guess Number', permalink: '/Urvo/commands/minigames/guess-number' },
					next: { title: 'Ban', permalink: '/Urvo/commands/moderation/ban' },
				},
				s = {},
				l = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: l },
				m = 'wrapper';
			function d(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					m,
					(0, n.Z)({}, p, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Play Rock-Paper-Scissors with the bot.'),
					(0, o.kt)(
						'table',
						null,
						(0, o.kt)(
							'thead',
							{ parentName: 'table' },
							(0, o.kt)(
								'tr',
								{ parentName: 'thead' },
								(0, o.kt)('th', { parentName: 'tr', align: 'center' }, 'argument name'),
								(0, o.kt)('th', { parentName: 'tr', align: 'center' }, 'description'),
							),
						),
						(0, o.kt)(
							'tbody',
							{ parentName: 'table' },
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'choice'),
								),
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									'The move you would like to play (rock, paper, scissors)',
								),
							),
						),
					),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', {
							alt: 'Rock-Paper-Scissors Command Demo GIF',
							src: r(3021).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		3021: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/rps-1bbd86a036d3eecd69a3e2c0439f5b79.gif';
		},
	},
]);
