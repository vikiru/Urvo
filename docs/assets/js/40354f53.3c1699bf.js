'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[1385],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => f });
			var n = r(7294);
			function o(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = r),
					e
				);
			}
			function a(e, t) {
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
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						  : a(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
						    });
				}
				return e;
			}
			function m(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
				}
				return o;
			}
			var c = n.createContext({}),
				l = function (e) {
					var t = n.useContext(c),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				u = function (e) {
					var t = l(e.components);
					return n.createElement(c.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				s = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						u = m(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = l(r),
						s = o,
						f = p[''.concat(c, '.').concat(s)] || p[s] || d[s] || a;
					return r
						? n.createElement(f, i(i({ ref: t }, u), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, u));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = s;
					var m = {};
					for (var c in t) hasOwnProperty.call(t, c) && (m[c] = t[c]);
					(m.originalType = e), (m[p] = 'string' == typeof e ? e : o), (i[1] = m);
					for (var l = 2; l < a; l++) i[l] = r[l];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			s.displayName = 'MDXCreateElement';
		},
		2495: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => c,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => m,
					toc: () => l,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'timeout', title: 'Timeout' },
				i = void 0,
				m = {
					unversionedId: 'commands/moderation/timeout',
					id: 'commands/moderation/timeout',
					title: 'Timeout',
					description: 'Overview',
					source: '@site/docs/commands/moderation/timeout.md',
					sourceDirName: 'commands/moderation',
					slug: '/commands/moderation/timeout',
					permalink: '/Urvo/commands/moderation/timeout',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'timeout', title: 'Timeout' },
					sidebar: 'docs',
					previous: { title: 'Create Role', permalink: '/Urvo/commands/moderation/create-role' },
					next: { title: 'Unban', permalink: '/Urvo/commands/moderation/unban' },
				},
				c = {},
				l = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
				],
				u = { toc: l },
				p = 'wrapper';
			function d(e) {
				let { components: t, ...r } = e;
				return (0, o.kt)(
					p,
					(0, n.Z)({}, u, r, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Timeout the mentioned user from the server.'),
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
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'user'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'The user to timeout from the server'),
							),
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'duration'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'How long the user should be timed out'),
							),
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'reason'),
								),
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									'The reason to timeout the user from the server',
								),
							),
						),
					),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'),
						': Moderate Members',
					),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
