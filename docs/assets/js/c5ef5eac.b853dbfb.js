'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[5089],
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
			function c(e, t) {
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
				m = function (e) {
					var t = r.useContext(l),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				p = function (e) {
					var t = m(e.components);
					return r.createElement(l.Provider, { value: t }, e.children);
				},
				u = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				s = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = m(n),
						s = a,
						f = u[''.concat(l, '.').concat(s)] || u[s] || d[s] || o;
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
					i[0] = s;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e), (c[u] = 'string' == typeof e ? e : a), (i[1] = c);
					for (var m = 2; m < o; m++) i[m] = n[m];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			s.displayName = 'MDXCreateElement';
		},
		8513: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => o,
					metadata: () => c,
					toc: () => m,
				});
			var r = n(7462),
				a = (n(7294), n(4137));
			const o = { id: 'unban', title: 'Unban' },
				i = void 0,
				c = {
					unversionedId: 'commands/moderation/unban',
					id: 'commands/moderation/unban',
					title: 'Unban',
					description: 'Overview',
					source: '@site/docs/commands/moderation/unban.md',
					sourceDirName: 'commands/moderation',
					slug: '/commands/moderation/unban',
					permalink: '/Urvo/commands/moderation/unban',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'unban', title: 'Unban' },
					sidebar: 'docs',
					previous: { title: 'Timeout', permalink: '/Urvo/commands/moderation/timeout' },
					next: { title: 'Random Advice', permalink: '/Urvo/commands/random/advice' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
				],
				p = { toc: m },
				u = 'wrapper';
			function d(e) {
				let { components: t, ...n } = e;
				return (0, a.kt)(
					u,
					(0, r.Z)({}, p, n, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Unban the mentioned user from the server.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'user'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The user to unban from the server'),
							),
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'reason'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The reason to unban the user from the server'),
							),
						),
					),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'),
						': Ban Members',
					),
					(0, a.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, a.kt)('p', null, 'No external APIs were used for this command.'),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
