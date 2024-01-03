'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[5489],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => f });
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
			function m(e, t) {
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
				d = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = m(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = c(n),
						u = a,
						f = d[''.concat(l, '.').concat(u)] || d[u] || s[u] || o;
					return n
						? r.createElement(f, i(i({ ref: t }, p), {}, { components: n }))
						: r.createElement(f, i({ ref: t }, p));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = u;
					var m = {};
					for (var l in t) hasOwnProperty.call(t, l) && (m[l] = t[l]);
					(m.originalType = e), (m[d] = 'string' == typeof e ? e : a), (i[1] = m);
					for (var c = 2; c < o; c++) i[c] = n[c];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		4147: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => o,
					metadata: () => m,
					toc: () => c,
				});
			var r = n(7462),
				a = (n(7294), n(4137));
			const o = { id: 'change-my-mind', title: 'Change My Mind Meme' },
				i = void 0,
				m = {
					unversionedId: 'commands/memes/change-my-mind',
					id: 'commands/memes/change-my-mind',
					title: 'Change My Mind Meme',
					description: 'Overview',
					source: '@site/docs/commands/memes/change-my-mind.md',
					sourceDirName: 'commands/memes',
					slug: '/commands/memes/change-my-mind',
					permalink: '/Urvo/commands/memes/change-my-mind',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'change-my-mind', title: 'Change My Mind Meme' },
					sidebar: 'docs',
					previous: { title: 'Buzz Lightyear Meme', permalink: '/Urvo/commands/memes/buzz' },
					next: { title: 'Daily Struggle Meme', permalink: '/Urvo/commands/memes/daily-struggle' },
				},
				l = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: c },
				d = 'wrapper';
			function s(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					d,
					(0, r.Z)({}, p, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Send a Change My Mind meme with your desired text.'),
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
							alt: 'Change My Mind Meme Command Demo Gif',
							src: n(4772).Z,
							width: '1220',
							height: '904',
						}),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		4772: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/change-my-mind-9f333a16c8ba3da8f1ff0bfdf046909a.gif';
		},
	},
]);
