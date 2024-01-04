'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[2008],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => f });
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
			function l(e, t) {
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
				p = function (e) {
					var t = c(e.components);
					return n.createElement(m.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						m = e.parentName,
						p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = c(r),
						u = a,
						f = s[''.concat(m, '.').concat(u)] || s[u] || d[u] || o;
					return r
						? n.createElement(f, i(i({ ref: t }, p), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, p));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = u;
					var l = {};
					for (var m in t) hasOwnProperty.call(t, m) && (l[m] = t[m]);
					(l.originalType = e), (l[s] = 'string' == typeof e ? e : a), (i[1] = l);
					for (var c = 2; c < o; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		3950: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => m,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => c,
				});
			var n = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'drake', title: 'Drake Hotline Bling Meme' },
				i = void 0,
				l = {
					unversionedId: 'commands/memes/drake',
					id: 'commands/memes/drake',
					title: 'Drake Hotline Bling Meme',
					description: 'Overview',
					source: '@site/docs/commands/memes/drake.md',
					sourceDirName: 'commands/memes',
					slug: '/commands/memes/drake',
					permalink: '/Urvo/commands/memes/drake',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'drake', title: 'Drake Hotline Bling Meme' },
					sidebar: 'docs',
					previous: { title: 'Daily Struggle Meme', permalink: '/Urvo/commands/memes/daily-struggle' },
					next: { title: "But That's None of My Business Meme", permalink: '/Urvo/commands/memes/kermit' },
				},
				m = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: c },
				s = 'wrapper';
			function d(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					s,
					(0, n.Z)({}, p, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a Drake Hotline Bling meme with your desired text.'),
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
							alt: 'Drake Hotline Bling Meme Command Demo Gif',
							src: r(1683).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		1683: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/drake-0d82804e26b5f9c1c8b9cbbd4701da9d.gif';
		},
	},
]);
