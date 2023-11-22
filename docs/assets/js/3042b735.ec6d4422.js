'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9908],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => k });
			var r = n(7294);
			function a(e, t, n) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
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
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
				}
				return a;
			}
			var m = r.createContext({}),
				c = function (e) {
					var t = r.useContext(m),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				s = function (e) {
					var t = c(e.components);
					return r.createElement(m.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				u = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						m = e.parentName,
						s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = c(n),
						d = a,
						k = p[''.concat(m, '.').concat(d)] || p[d] || u[d] || o;
					return n
						? r.createElement(k, i(i({ ref: t }, s), {}, { components: n }))
						: r.createElement(k, i({ ref: t }, s));
				});
			function k(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = d;
					var l = {};
					for (var m in t) hasOwnProperty.call(t, m) && (l[m] = t[m]);
					(l.originalType = e), (l[p] = 'string' == typeof e ? e : a), (i[1] = l);
					for (var c = 2; c < o; c++) i[c] = n[c];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = 'MDXCreateElement';
		},
		8221: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => m,
					contentTitle: () => i,
					default: () => u,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => c,
				});
			var r = n(7462),
				a = (n(7294), n(4137));
			const o = { id: 'knuckles', title: 'Ugandan Knuckles Meme' },
				i = void 0,
				l = {
					unversionedId: 'commands/memes/knuckles',
					id: 'commands/memes/knuckles',
					title: 'Ugandan Knuckles Meme',
					description: 'Overview',
					source: '@site/docs/commands/memes/knuckles.md',
					sourceDirName: 'commands/memes',
					slug: '/commands/memes/knuckles',
					permalink: '/Urvo/commands/memes/knuckles',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'knuckles', title: 'Ugandan Knuckles Meme' },
					sidebar: 'docs',
					previous: { title: "But That's None of My Business Meme", permalink: '/Urvo/commands/memes/kermit' },
					next: { title: 'One Does Not Simply Walk Into Mordor Meme', permalink: '/Urvo/commands/memes/mordor' },
				},
				m = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: c },
				p = 'wrapper';
			function u(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					p,
					(0, r.Z)({}, s, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a Ugandan Knuckles meme with your desired text.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'top_text'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the top'),
							),
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'bottom_text'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the bottom'),
							),
						),
					),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, a.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, a.kt)('p', null, 'This command was made possible by the following API:'),
					(0, a.kt)(
						'ul',
						null,
						(0, a.kt)(
							'li',
							{ parentName: 'ul' },
							'Memegen.link API (',
							(0, a.kt)('a', { parentName: 'li', href: 'https://memegen.link/' }, 'Documentation'),
							' | ',
							(0, a.kt)('a', { parentName: 'li', href: 'https://github.com/jacebrowning/memegen' }, 'GitHub Repo'),
							')',
						),
					),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', {
							alt: 'Ugandan Knuckles Meme Command Demo Gif',
							src: n(1055).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		1055: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/knuckles-6161a5a7db53211f109e143e16e70655.gif';
		},
	},
]);
