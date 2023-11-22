'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[5129],
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
			function c(e, t) {
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
			var l = r.createContext({}),
				s = function (e) {
					var t = r.useContext(l),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
				},
				p = function (e) {
					var t = s(e.components);
					return r.createElement(l.Provider, { value: t }, e.children);
				},
				d = 'mdxType',
				m = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						i = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = s(n),
						u = i,
						f = d[''.concat(l, '.').concat(u)] || d[u] || m[u] || o;
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
					a[0] = u;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e), (c[d] = 'string' == typeof e ? e : i), (a[1] = c);
					for (var s = 2; s < o; s++) a[s] = n[s];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = 'MDXCreateElement';
		},
		372: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => l,
					contentTitle: () => a,
					default: () => m,
					frontMatter: () => o,
					metadata: () => c,
					toc: () => s,
				});
			var r = n(7462),
				i = (n(7294), n(4137));
			const o = { id: 'disney', title: 'Disney' },
				a = void 0,
				c = {
					unversionedId: 'commands/info/disney',
					id: 'commands/info/disney',
					title: 'Disney',
					description: 'Overview',
					source: '@site/docs/commands/info/disney.md',
					sourceDirName: 'commands/info',
					slug: '/commands/info/disney',
					permalink: '/Urvo/commands/info/disney',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'disney', title: 'Disney' },
					sidebar: 'docs',
					previous: { title: 'Digimon', permalink: '/Urvo/commands/info/digimon' },
					next: { title: 'Guess User', permalink: '/Urvo/commands/info/guess-user' },
				},
				l = {},
				s = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				p = { toc: s },
				d = 'wrapper';
			function m(e) {
				let { components: t, ...o } = e;
				return (0, i.kt)(
					d,
					(0, r.Z)({}, p, o, { components: t, mdxType: 'MDXLayout' }),
					(0, i.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, i.kt)('p', null, 'Retrieve information about a specified disney character.'),
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
									(0, i.kt)('inlineCode', { parentName: 'td' }, 'name'),
								),
								(0, i.kt)('td', { parentName: 'tr', align: 'center' }, 'The name of the Disney character'),
							),
						),
					),
					(0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, i.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, i.kt)('p', null, 'This command was made possible by the following API:'),
					(0, i.kt)(
						'ul',
						null,
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							'Disney API (',
							(0, i.kt)('a', { parentName: 'li', href: 'https://disneyapi.dev/docs/' }, 'Documentation'),
							' | ',
							(0, i.kt)(
								'a',
								{ parentName: 'li', href: 'https://github.com/ManuCastrillonM/disney-api' },
								'GitHub Repo',
							),
							')',
						),
					),
					(0, i.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, i.kt)(
						'p',
						null,
						(0, i.kt)('img', { alt: 'Disney Command Demo Gif', src: n(6338).Z, width: '1220', height: '954' }),
					),
				);
			}
			m.isMDXComponent = !0;
		},
		6338: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/disney-23ddef1be7f2c62690c45dd176757e17.gif';
		},
	},
]);
