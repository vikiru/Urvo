'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[576],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => g });
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
				u = {
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
						p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = c(r),
						d = a,
						g = s[''.concat(m, '.').concat(d)] || s[d] || u[d] || o;
					return r
						? n.createElement(g, i(i({ ref: t }, p), {}, { components: r }))
						: n.createElement(g, i({ ref: t }, p));
				});
			function g(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = d;
					var l = {};
					for (var m in t) hasOwnProperty.call(t, m) && (l[m] = t[m]);
					(l.originalType = e), (l[s] = 'string' == typeof e ? e : a), (i[1] = l);
					for (var c = 2; c < o; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		8824: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => m,
					contentTitle: () => i,
					default: () => u,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => c,
				});
			var n = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'daily-struggle', title: 'Daily Struggle Meme' },
				i = void 0,
				l = {
					unversionedId: 'commands/memes/daily-struggle',
					id: 'commands/memes/daily-struggle',
					title: 'Daily Struggle Meme',
					description: 'Overview',
					source: '@site/docs/commands/memes/daily-struggle.md',
					sourceDirName: 'commands/memes',
					slug: '/commands/memes/daily-struggle',
					permalink: '/Urvo/commands/memes/daily-struggle',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'daily-struggle', title: 'Daily Struggle Meme' },
					sidebar: 'docs',
					previous: { title: 'Change My Mind Meme', permalink: '/Urvo/commands/memes/change-my-mind' },
					next: { title: 'Drake Hotline Bling Meme', permalink: '/Urvo/commands/memes/drake' },
				},
				m = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: c },
				s = 'wrapper';
			function u(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					s,
					(0, n.Z)({}, p, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a Daily Struggle meme with your desired text.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'left_button_text'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the left button'),
							),
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'right_button_text'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the right button'),
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
							alt: 'Daily Struggle Meme Command Demo Gif',
							src: r(6560).Z,
							width: '1220',
							height: '904',
						}),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		6560: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/daily-struggle-6bb3291e1ed939e32be91fb1a1ee3014.gif';
		},
	},
]);
