'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[161],
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
			function l(e, t) {
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
				m = 'mdxType',
				s = {
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
						c = e.parentName,
						u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						m = p(r),
						d = a,
						f = m[''.concat(c, '.').concat(d)] || m[d] || s[d] || o;
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
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e), (l[m] = 'string' == typeof e ? e : a), (i[1] = l);
					for (var p = 2; p < o; p++) i[p] = r[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		2392: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => c,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => o,
					metadata: () => l,
					toc: () => p,
				});
			var n = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'calculate', title: 'Calculate' },
				i = void 0,
				l = {
					unversionedId: 'commands/utility/calculate',
					id: 'commands/utility/calculate',
					title: 'Calculate',
					description: 'Overview',
					source: '@site/docs/commands/utility/calculate.md',
					sourceDirName: 'commands/utility',
					slug: '/commands/utility/calculate',
					permalink: '/Urvo/commands/utility/calculate',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'calculate', title: 'Calculate' },
					sidebar: 'docs',
					previous: { title: 'Purchase', permalink: '/Urvo/commands/troopica/purchase' },
					next: { title: 'Create Channel', permalink: '/Urvo/commands/utility/create-channel' },
				},
				c = {},
				p = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				u = { toc: p },
				m = 'wrapper';
			function s(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					m,
					(0, n.Z)({}, u, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Calculate a given mathematical expression.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'first_number'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The first number in the expression'),
							),
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'second_number'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The second number in the expression'),
							),
							(0, a.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, a.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'operation'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The operation to perform in the expression'),
							),
						),
					),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, a.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, a.kt)('p', null, 'No external APIs were used for this command.'),
					(0, a.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, a.kt)(
						'p',
						null,
						(0, a.kt)('img', { alt: 'Calculate Command Demo GIF', src: r(4263).Z, width: '1223', height: '699' }),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		4263: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/calculate-f382eb2f8593a2e56c15a94bfef8a3b8.gif';
		},
	},
]);
