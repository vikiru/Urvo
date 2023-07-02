'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[3278],
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
				p = function (e) {
					var t = n.useContext(c),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				u = function (e) {
					var t = p(e.components);
					return n.createElement(c.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				m = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = p(r),
						d = o,
						f = s[''.concat(c, '.').concat(d)] || s[d] || m[d] || a;
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
					i[0] = d;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e), (l[s] = 'string' == typeof e ? e : o), (i[1] = l);
					for (var p = 2; p < a; p++) i[p] = r[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		6656: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => c,
					contentTitle: () => i,
					default: () => m,
					frontMatter: () => a,
					metadata: () => l,
					toc: () => p,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'prune', title: 'Prune' },
				i = void 0,
				l = {
					unversionedId: 'commands/utility/prune',
					id: 'commands/utility/prune',
					title: 'Prune',
					description: 'Overview',
					source: '@site/docs/commands/utility/prune.md',
					sourceDirName: 'commands/utility',
					slug: '/commands/utility/prune',
					permalink: '/Urvo/commands/utility/prune',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'prune', title: 'Prune' },
					sidebar: 'docs',
					previous: { title: 'Help', permalink: '/Urvo/commands/utility/help' },
					next: { title: 'Server Info', permalink: '/Urvo/commands/utility/server-info' },
				},
				c = {},
				p = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				u = { toc: p },
				s = 'wrapper';
			function m(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					s,
					(0, n.Z)({}, u, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Deletes a specified number of messages in the given channel.'),
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
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'amount'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'The number of messages to delete'),
							),
						),
					),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Prune Command Demo GIF', src: r(3839).Z, width: '1220', height: '954' }),
					),
				);
			}
			m.isMDXComponent = !0;
		},
		3839: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/prune-295784f8a5d4c6790a2c61363d7c911c.gif';
		},
	},
]);
