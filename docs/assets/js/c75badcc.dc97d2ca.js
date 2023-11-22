'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[727],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => d, kt: () => f });
			var r = n(7294);
			function a(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function l(e, t) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? l(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						  : l(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						    });
				}
				return e;
			}
			function i(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (r = 0; r < l.length; r++)
						(n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
				}
				return a;
			}
			var c = r.createContext({}),
				p = function (e) {
					var t = r.useContext(c),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : o(o({}, t), e)), n;
				},
				d = function (e) {
					var t = p(e.components);
					return r.createElement(c.Provider, { value: t }, e.children);
				},
				m = 'mdxType',
				u = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				s = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						l = e.originalType,
						c = e.parentName,
						d = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						m = p(n),
						s = a,
						f = m[''.concat(c, '.').concat(s)] || m[s] || u[s] || l;
					return n
						? r.createElement(f, o(o({ ref: t }, d), {}, { components: n }))
						: r.createElement(f, o({ ref: t }, d));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var l = n.length,
						o = new Array(l);
					o[0] = s;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e), (i[m] = 'string' == typeof e ? e : a), (o[1] = i);
					for (var p = 2; p < l; p++) o[p] = n[p];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			s.displayName = 'MDXCreateElement';
		},
		40: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => c,
					contentTitle: () => o,
					default: () => u,
					frontMatter: () => l,
					metadata: () => i,
					toc: () => p,
				});
			var r = n(7462),
				a = (n(7294), n(4137));
			const l = { id: 'delete-channel', title: 'Delete Channel' },
				o = void 0,
				i = {
					unversionedId: 'commands/utility/delete-channel',
					id: 'commands/utility/delete-channel',
					title: 'Delete Channel',
					description: 'Overview',
					source: '@site/docs/commands/utility/delete-channel.md',
					sourceDirName: 'commands/utility',
					slug: '/commands/utility/delete-channel',
					permalink: '/Urvo/commands/utility/delete-channel',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'delete-channel', title: 'Delete Channel' },
					sidebar: 'docs',
					previous: { title: 'Create Channel', permalink: '/Urvo/commands/utility/create-channel' },
					next: { title: 'Help', permalink: '/Urvo/commands/utility/help' },
				},
				c = {},
				p = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				d = { toc: p },
				m = 'wrapper';
			function u(e) {
				let { components: t, ...l } = e;
				return (0, a.kt)(
					m,
					(0, r.Z)({}, d, l, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Deletes a mentioned channel.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'channel'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The channel to delete'),
							),
						),
					),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, a.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, a.kt)('p', null, 'No external APIs were used for this command.'),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', { alt: 'Delete Channel Command Demo GIF', src: n(4797).Z, width: '1220', height: '955' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		4797: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/delete-channel-81282aef990dbc5749e20c8223094e7d.gif';
		},
	},
]);
