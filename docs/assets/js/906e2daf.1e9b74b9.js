'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[1098],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
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
			function c(e) {
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
			function i(e, t) {
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
				p = function (e) {
					var t = n.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : c(c({}, t), e)), r;
				},
				s = function (e) {
					var t = p(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				u = 'mdxType',
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
						s = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = p(r),
						d = a,
						f = u[''.concat(l, '.').concat(d)] || u[d] || m[d] || o;
					return r
						? n.createElement(f, c(c({ ref: t }, s), {}, { components: r }))
						: n.createElement(f, c({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ('string' == typeof e || a) {
					var o = r.length,
						c = new Array(o);
					c[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e), (i[u] = 'string' == typeof e ? e : a), (c[1] = i);
					for (var p = 2; p < o; p++) c[p] = r[p];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		395: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => c,
					default: () => m,
					frontMatter: () => o,
					metadata: () => i,
					toc: () => p,
				});
			var n = r(7462),
				a = (r(7294), r(4137));
			const o = { id: 'purchase', title: 'Purchase' },
				c = void 0,
				i = {
					unversionedId: 'commands/troopica/purchase',
					id: 'commands/troopica/purchase',
					title: 'Purchase',
					description: 'Overview',
					source: '@site/docs/commands/troopica/purchase.md',
					sourceDirName: 'commands/troopica',
					slug: '/commands/troopica/purchase',
					permalink: '/Urvo/commands/troopica/purchase',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'purchase', title: 'Purchase' },
					sidebar: 'docs',
					previous: { title: 'Leaderboard', permalink: '/Urvo/commands/troopica/leaderboard' },
					next: { title: 'Calculate', permalink: '/Urvo/commands/utility/calculate' },
				},
				l = {},
				p = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: p },
				u = 'wrapper';
			function m(e) {
				let { components: t, ...o } = e;
				return (0, a.kt)(
					u,
					(0, n.Z)({}, s, o, { components: t, mdxType: 'MDXLayout' }),
					(0, a.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, a.kt)('p', null, 'Purchase troops to add to your army.'),
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
									(0, a.kt)('inlineCode', { parentName: 'td' }, 'amount'),
								),
								(0, a.kt)('td', { parentName: 'tr', align: 'center' }, 'The number of troops to purchase'),
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
						(0, a.kt)('img', { alt: 'Purchase Command Demo GIF', src: r(4422).Z, width: '1220', height: '954' }),
					),
				);
			}
			m.isMDXComponent = !0;
		},
		4422: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/purchase-44a54858374f1ba6c43632d2f0758fe6.gif';
		},
	},
]);
