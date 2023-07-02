'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[1735],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => d, kt: () => f });
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
			function l(e, t) {
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
				m = function (e) {
					var t = n.useContext(c),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				d = function (e) {
					var t = m(e.components);
					return n.createElement(c.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						d = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = m(r),
						u = o,
						f = p[''.concat(c, '.').concat(u)] || p[u] || s[u] || a;
					return r
						? n.createElement(f, i(i({ ref: t }, d), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, d));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = u;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e), (l[p] = 'string' == typeof e ? e : o), (i[1] = l);
					for (var m = 2; m < a; m++) i[m] = r[m];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		2041: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => c,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => a,
					metadata: () => l,
					toc: () => m,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'create-role', title: 'Create Role' },
				i = void 0,
				l = {
					unversionedId: 'commands/moderation/create-role',
					id: 'commands/moderation/create-role',
					title: 'Create Role',
					description: 'Overview',
					source: '@site/docs/commands/moderation/role.md',
					sourceDirName: 'commands/moderation',
					slug: '/commands/moderation/create-role',
					permalink: '/Urvo/commands/moderation/create-role',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'create-role', title: 'Create Role' },
					sidebar: 'docs',
					previous: { title: 'Kick', permalink: '/Urvo/commands/moderation/kick' },
					next: { title: 'Timeout', permalink: '/Urvo/commands/moderation/timeout' },
				},
				c = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				d = { toc: m },
				p = 'wrapper';
			function s(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					p,
					(0, n.Z)({}, d, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Creates a new role based on the inputted name and colour.'),
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
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'role_name'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'The name of the role to create'),
							),
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'colour'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'The colour of the role to create'),
							),
						),
					),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'),
						': Manage Roles',
					),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Create Role Command Demo GIF', src: r(4251).Z, width: '1220', height: '954' }),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		4251: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/role-7d5070b903afb871e3400ecebccc5fe7.gif';
		},
	},
]);
