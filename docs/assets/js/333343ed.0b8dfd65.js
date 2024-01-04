'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[120],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => f });
			var r = n(7294);
			function o(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function a(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: a(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function m(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
				}
				return o;
			}
			var l = r.createContext({}),
				c = function (e) {
					var t = r.useContext(l),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(l.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						p = m(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = c(n),
						u = o,
						f = s[''.concat(l, '.').concat(u)] || s[u] || d[u] || a;
					return n
						? r.createElement(f, i(i({ ref: t }, p), {}, { components: n }))
						: r.createElement(f, i({ ref: t }, p));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = u;
					var m = {};
					for (var l in t) hasOwnProperty.call(t, l) && (m[l] = t[l]);
					(m.originalType = e), (m[s] = 'string' == typeof e ? e : o), (i[1] = m);
					for (var c = 2; c < a; c++) i[c] = n[c];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		8710: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => m,
					toc: () => c,
				});
			var r = n(7462),
				o = (n(7294), n(4137));
			const a = { id: 'winnie', title: 'Tuxedo Winnie Meme' },
				i = void 0,
				m = {
					unversionedId: 'commands/memes/winnie',
					id: 'commands/memes/winnie',
					title: 'Tuxedo Winnie Meme',
					description: 'Overview',
					source: '@site/docs/commands/memes/winnie.md',
					sourceDirName: 'commands/memes',
					slug: '/commands/memes/winnie',
					permalink: '/Urvo/commands/memes/winnie',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'winnie', title: 'Tuxedo Winnie Meme' },
					sidebar: 'docs',
					previous: { title: 'Mocking Spongebob Meme', permalink: '/Urvo/commands/memes/spongebob' },
					next: { title: 'Flip a Coin', permalink: '/Urvo/commands/minigames/flip' },
				},
				l = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: c },
				s = 'wrapper';
			function d(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					s,
					(0, r.Z)({}, p, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a Tuxedo Winnie the Pooh meme with your desired text.'),
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
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'top_text'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the top'),
							),
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'bottom_text'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the bottom'),
							),
						),
					),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'This command was made possible by the following API:'),
					(0, o.kt)(
						'ul',
						null,
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							'Memegen.link API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://memegen.link/' }, 'Documentation'),
							' | ',
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/jacebrowning/memegen' }, 'GitHub Repo'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', {
							alt: 'Tuxedo Winnie Meme Command Demo Gif',
							src: n(3114).Z,
							width: '1220',
							height: '904',
						}),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		3114: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/winnie-f2464cc2efc802f1fdcea8509913f1f9.gif';
		},
	},
]);
