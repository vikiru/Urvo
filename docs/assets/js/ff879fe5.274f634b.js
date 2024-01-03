'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[197],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => k });
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
			function c(e, t) {
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
			var l = n.createContext({}),
				m = function (e) {
					var t = n.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				p = function (e) {
					var t = m(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				d = {
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
						l = e.parentName,
						p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = m(r),
						u = o,
						k = s[''.concat(l, '.').concat(u)] || s[u] || d[u] || a;
					return r
						? n.createElement(k, i(i({ ref: t }, p), {}, { components: r }))
						: n.createElement(k, i({ ref: t }, p));
				});
			function k(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = u;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e), (c[s] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var m = 2; m < a; m++) i[m] = r[m];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		604: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => m,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'kick', title: 'Kick' },
				i = void 0,
				c = {
					unversionedId: 'commands/moderation/kick',
					id: 'commands/moderation/kick',
					title: 'Kick',
					description: 'Overview',
					source: '@site/docs/commands/moderation/kick.md',
					sourceDirName: 'commands/moderation',
					slug: '/commands/moderation/kick',
					permalink: '/Urvo/commands/moderation/kick',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'kick', title: 'Kick' },
					sidebar: 'docs',
					previous: { title: 'Ban', permalink: '/Urvo/commands/moderation/ban' },
					next: { title: 'Create Role', permalink: '/Urvo/commands/moderation/create-role' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
				],
				p = { toc: m },
				s = 'wrapper';
			function d(e) {
				let { components: t, ...r } = e;
				return (0, o.kt)(
					s,
					(0, n.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Kicks the mentioned user from the server.'),
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
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'The user to kick from the server'),
							),
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'reason'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'The reason to kick the user from the server'),
							),
						),
					),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'),
						': Kick Members',
					),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
