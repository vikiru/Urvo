'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[6892],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => b });
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
			var p = r.createContext({}),
				l = function (e) {
					var t = r.useContext(p),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				c = function (e) {
					var t = l(e.components);
					return r.createElement(p.Provider, { value: t }, e.children);
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
						p = e.parentName,
						c = m(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = l(n),
						u = o,
						b = s[''.concat(p, '.').concat(u)] || s[u] || d[u] || a;
					return n
						? r.createElement(b, i(i({ ref: t }, c), {}, { components: n }))
						: r.createElement(b, i({ ref: t }, c));
				});
			function b(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = u;
					var m = {};
					for (var p in t) hasOwnProperty.call(t, p) && (m[p] = t[p]);
					(m.originalType = e), (m[s] = 'string' == typeof e ? e : o), (i[1] = m);
					for (var l = 2; l < a; l++) i[l] = n[l];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		9241: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => p,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => m,
					toc: () => l,
				});
			var r = n(7462),
				o = (n(7294), n(4137));
			const a = { id: 'spongebob', title: 'Mocking Spongebob Meme' },
				i = void 0,
				m = {
					unversionedId: 'commands/memes/spongebob',
					id: 'commands/memes/spongebob',
					title: 'Mocking Spongebob Meme',
					description: 'Overview',
					source: '@site/docs/commands/memes/spongebob.md',
					sourceDirName: 'commands/memes',
					slug: '/commands/memes/spongebob',
					permalink: '/Urvo/commands/memes/spongebob',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'spongebob', title: 'Mocking Spongebob Meme' },
					sidebar: 'docs',
					previous: { title: 'Philosoraptor Meme', permalink: '/Urvo/commands/memes/philosoraptor' },
					next: { title: 'Tuxedo Winnie Meme', permalink: '/Urvo/commands/memes/winnie' },
				},
				p = {},
				l = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				c = { toc: l },
				s = 'wrapper';
			function d(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					s,
					(0, r.Z)({}, c, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a Mocking Spongebob meme with your desired text.'),
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
							alt: 'Mocking Spongebob Meme Command Demo Gif',
							src: n(3254).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		3254: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/spongebob-20afae390c37d5026651185a4eef0290.gif';
		},
	},
]);
