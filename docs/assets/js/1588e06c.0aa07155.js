'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[3249],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => f });
			var r = n(7294);
			function i(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function o(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: o(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var n,
					r,
					i = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							i = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
				}
				return i;
			}
			var c = r.createContext({}),
				m = function (e) {
					var t = r.useContext(c),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
				},
				p = function (e) {
					var t = m(e.components);
					return r.createElement(c.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				u = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						i = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = m(n),
						d = i,
						f = s[''.concat(c, '.').concat(d)] || s[d] || u[d] || o;
					return n
						? r.createElement(f, a(a({ ref: t }, p), {}, { components: n }))
						: r.createElement(f, a({ ref: t }, p));
				});
			function f(e, t) {
				var n = arguments,
					i = t && t.mdxType;
				if ('string' == typeof e || i) {
					var o = n.length,
						a = new Array(o);
					a[0] = d;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e), (l[s] = 'string' == typeof e ? e : i), (a[1] = l);
					for (var m = 2; m < o; m++) a[m] = n[m];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = 'MDXCreateElement';
		},
		927: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => c,
					contentTitle: () => a,
					default: () => u,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => m,
				});
			var r = n(7462),
				i = (n(7294), n(4137));
			const o = { id: 'flip', title: 'Flip a Coin' },
				a = void 0,
				l = {
					unversionedId: 'commands/minigames/flip',
					id: 'commands/minigames/flip',
					title: 'Flip a Coin',
					description: 'Overview',
					source: '@site/docs/commands/minigames/flip.md',
					sourceDirName: 'commands/minigames',
					slug: '/commands/minigames/flip',
					permalink: '/Urvo/commands/minigames/flip',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'flip', title: 'Flip a Coin' },
					sidebar: 'docs',
					previous: { title: 'Tuxedo Winnie Meme', permalink: '/Urvo/commands/memes/winnie' },
					next: { title: 'Guess Number', permalink: '/Urvo/commands/minigames/guess-number' },
				},
				c = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: m },
				s = 'wrapper';
			function u(e) {
				let { components: t, ...o } = e;
				return (0, i.kt)(
					s,
					(0, r.Z)({}, p, o, { components: t, mdxType: 'MDXLayout' }),
					(0, i.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, i.kt)('p', null, 'Flip a coin and guess the outcome.'),
					(0, i.kt)(
						'table',
						null,
						(0, i.kt)(
							'thead',
							{ parentName: 'table' },
							(0, i.kt)(
								'tr',
								{ parentName: 'thead' },
								(0, i.kt)('th', { parentName: 'tr', align: 'center' }, 'argument name'),
								(0, i.kt)('th', { parentName: 'tr', align: 'center' }, 'description'),
							),
						),
						(0, i.kt)(
							'tbody',
							{ parentName: 'table' },
							(0, i.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, i.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, i.kt)('inlineCode', { parentName: 'td' }, 'choice'),
								),
								(0, i.kt)('td', { parentName: 'tr', align: 'center' }, 'The outcome of the coin flip (heads or tails)'),
							),
						),
					),
					(0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, i.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, i.kt)('p', null, 'No external APIs were used for this command.'),
					(0, i.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, i.kt)(
						'p',
						null,
						(0, i.kt)('img', { alt: 'Coin Flip Command Demo GIF', src: n(4640).Z, width: '1220', height: '954' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		4640: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/flip-704789c44c5c4e0e66b9b3b4262b900c.gif';
		},
	},
]);
