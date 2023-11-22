'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[3527],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
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
			function c(e) {
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
			function i(e, t) {
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
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						s = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = p(r),
						d = o,
						f = u[''.concat(l, '.').concat(d)] || u[d] || m[d] || a;
					return r
						? n.createElement(f, c(c({ ref: t }, s), {}, { components: r }))
						: n.createElement(f, c({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e), (i[u] = 'string' == typeof e ? e : o), (c[1] = i);
					for (var p = 2; p < a; p++) c[p] = r[p];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		89: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => c,
					default: () => m,
					frontMatter: () => a,
					metadata: () => i,
					toc: () => p,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'balance', title: 'Balance' },
				c = void 0,
				i = {
					unversionedId: 'commands/troopica/balance',
					id: 'commands/troopica/balance',
					title: 'Balance',
					description: 'Overview',
					source: '@site/docs/commands/troopica/balance.md',
					sourceDirName: 'commands/troopica',
					slug: '/commands/troopica/balance',
					permalink: '/Urvo/commands/troopica/balance',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'balance', title: 'Balance' },
					sidebar: 'docs',
					previous: { title: 'Attack', permalink: '/Urvo/commands/troopica/attack' },
					next: { title: 'Daily', permalink: '/Urvo/commands/troopica/daily' },
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
				let { components: t, ...a } = e;
				return (0, o.kt)(
					u,
					(0, n.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Retrieve your balance, including how many troops you posess.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Balance Command Demo GIF', src: r(4678).Z, width: '1220', height: '954' }),
					),
				);
			}
			m.isMDXComponent = !0;
		},
		4678: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/balance-484b9145c60cf8512dff8a34b83cee82.gif';
		},
	},
]);
