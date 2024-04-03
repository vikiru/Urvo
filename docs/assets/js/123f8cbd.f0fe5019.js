'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[3653],
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
			var l = n.createContext({}),
				c = function (e) {
					var t = n.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				u = function (e) {
					var t = c(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				m = {
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
						l = e.parentName,
						u = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = c(r),
						d = a,
						f = p[''.concat(l, '.').concat(d)] || p[d] || m[d] || o;
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
					for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
					(s.originalType = e), (s[p] = 'string' == typeof e ? e : a), (i[1] = s);
					for (var c = 2; c < o; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		6796: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => m,
					frontMatter: () => o,
					metadata: () => s,
					toc: () => c,
				});
			var n = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'guess-user', title: 'Guess User' },
				i = void 0,
				s = {
					unversionedId: 'commands/info/guess-user',
					id: 'commands/info/guess-user',
					title: 'Guess User',
					description: 'Overview',
					source: '@site/docs/commands/info/guessUser.md',
					sourceDirName: 'commands/info',
					slug: '/commands/info/guess-user',
					permalink: '/Urvo/commands/info/guess-user',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'guess-user', title: 'Guess User' },
					sidebar: 'docs',
					previous: { title: 'Disney', permalink: '/Urvo/commands/info/disney' },
					next: { title: 'Manga', permalink: '/Urvo/commands/info/manga' },
				},
				l = {},
				c = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				u = { toc: c },
				p = 'wrapper';
			function m(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					p,
					(0, n.Z)({}, u, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Determine the age, gender, and nationality of a user based on their name.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'name'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The name that you wish to provide'),
							),
						),
					),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, a.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, a.kt)('p', null, 'This command was made possible by the following APIs:'),
					(0, a.kt)(
						'ul',
						null,
						(0, a.kt)(
							'li',
							{ parentName: 'ul' },
							'Agify.io API (',
							(0, a.kt)('a', { parentName: 'li', href: 'https://agify.io/' }, 'Website'),
							')',
						),
						(0, a.kt)(
							'li',
							{ parentName: 'ul' },
							'Genderize.io API (',
							(0, a.kt)('a', { parentName: 'li', href: 'https://genderize.io/' }, 'Website'),
							')',
						),
						(0, a.kt)(
							'li',
							{ parentName: 'ul' },
							'Nationalize.io API (',
							(0, a.kt)('a', { parentName: 'li', href: 'https://nationalize.io' }, 'Website'),
							')',
						),
					),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', { alt: 'Guess User Command Demo Gif', src: r(418).Z, width: '1220', height: '954' }),
					),
				);
			}
			m.isMDXComponent = !0;
		},
		418: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/guess-user-a5534c10402b829358f1c35e2643ce9b.gif';
		},
	},
]);
