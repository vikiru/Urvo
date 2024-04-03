'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9531],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => m, kt: () => f });
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
				m = function (e) {
					var t = p(e.components);
					return r.createElement(c.Provider, { value: t }, e.children);
				},
				d = 'mdxType',
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
						m = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = p(n),
						s = a,
						f = d[''.concat(c, '.').concat(s)] || d[s] || u[s] || l;
					return n
						? r.createElement(f, o(o({ ref: t }, m), {}, { components: n }))
						: r.createElement(f, o({ ref: t }, m));
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
					(i.originalType = e), (i[d] = 'string' == typeof e ? e : a), (o[1] = i);
					for (var p = 2; p < l; p++) o[p] = n[p];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			s.displayName = 'MDXCreateElement';
		},
		6719: (e, t, n) => {
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
			const l = { id: 'create-channel', title: 'Create Channel' },
				o = void 0,
				i = {
					unversionedId: 'commands/utility/create-channel',
					id: 'commands/utility/create-channel',
					title: 'Create Channel',
					description: 'Overview',
					source: '@site/docs/commands/utility/create-channel.md',
					sourceDirName: 'commands/utility',
					slug: '/commands/utility/create-channel',
					permalink: '/Urvo/commands/utility/create-channel',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'create-channel', title: 'Create Channel' },
					sidebar: 'docs',
					previous: { title: 'Calculate', permalink: '/Urvo/commands/utility/calculate' },
					next: { title: 'Delete Channel', permalink: '/Urvo/commands/utility/delete-channel' },
				},
				c = {},
				p = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				m = { toc: p },
				d = 'wrapper';
			function u(e) {
				let { components: t, ...l } = e;
				return (0, a.kt)(
					d,
					(0, r.Z)({}, m, l, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Create a new channel of the specified type.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'channel_name'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The name of the channel that will be created'),
							),
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'channel_type'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The type of the channel that will be created'),
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
						(0, a.kt)('img', { alt: 'Create Channel Command Demo GIF', src: n(500).Z, width: '1220', height: '541' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		500: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = n.p + 'assets/images/create-channel-fc553bee21065582df08aa8ae8d60d9f.gif';
		},
	},
]);
