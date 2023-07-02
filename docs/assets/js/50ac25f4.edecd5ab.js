'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4464],
	{
		4137: (e, r, t) => {
			t.d(r, { Zo: () => u, kt: () => d });
			var n = t(7294);
			function o(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[r] = t),
					e
				);
			}
			function i(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r &&
						(n = n.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						t.push.apply(t, n);
				}
				return t;
			}
			function a(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? i(Object(t), !0).forEach(function (r) {
								o(e, r, t[r]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
						: i(Object(t)).forEach(function (r) {
								Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
						  });
				}
				return e;
			}
			function l(e, r) {
				if (null == e) return {};
				var t,
					n,
					o = (function (e, r) {
						if (null == e) return {};
						var t,
							n,
							o = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++) (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(t = i[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
				}
				return o;
			}
			var c = n.createContext({}),
				s = function (e) {
					var r = n.useContext(c),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : a(a({}, r), e)), t;
				},
				u = function (e) {
					var r = s(e.components);
					return n.createElement(c.Provider, { value: r }, e.children);
				},
				p = 'mdxType',
				f = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				m = n.forwardRef(function (e, r) {
					var t = e.components,
						o = e.mdxType,
						i = e.originalType,
						c = e.parentName,
						u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = s(t),
						m = o,
						d = p[''.concat(c, '.').concat(m)] || p[m] || f[m] || i;
					return t
						? n.createElement(d, a(a({ ref: r }, u), {}, { components: t }))
						: n.createElement(d, a({ ref: r }, u));
				});
			function d(e, r) {
				var t = arguments,
					o = r && r.mdxType;
				if ('string' == typeof e || o) {
					var i = t.length,
						a = new Array(i);
					a[0] = m;
					var l = {};
					for (var c in r) hasOwnProperty.call(r, c) && (l[c] = r[c]);
					(l.originalType = e), (l[p] = 'string' == typeof e ? e : o), (a[1] = l);
					for (var s = 2; s < i; s++) a[s] = t[s];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, t);
			}
			m.displayName = 'MDXCreateElement';
		},
		6763: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => c,
					contentTitle: () => a,
					default: () => f,
					frontMatter: () => i,
					metadata: () => l,
					toc: () => s,
				});
			var n = t(7462),
				o = (t(7294), t(4137));
			const i = { id: 'server-info', title: 'Server Info' },
				a = void 0,
				l = {
					unversionedId: 'commands/utility/server-info',
					id: 'commands/utility/server-info',
					title: 'Server Info',
					description: 'Overview',
					source: '@site/docs/commands/utility/server-info.md',
					sourceDirName: 'commands/utility',
					slug: '/commands/utility/server-info',
					permalink: '/Urvo/commands/utility/server-info',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'server-info', title: 'Server Info' },
					sidebar: 'docs',
					previous: { title: 'Prune', permalink: '/Urvo/commands/utility/prune' },
					next: { title: 'Acknowledgements', permalink: '/Urvo/acknowledgements' },
				},
				c = {},
				s = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				u = { toc: s },
				p = 'wrapper';
			function f(e) {
				let { components: r, ...i } = e;
				return (0, o.kt)(
					p,
					(0, n.Z)({}, u, i, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Retrieve information about the server.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Server Info Command Demo GIF', src: t(6778).Z, width: '1220', height: '954' }),
					),
				);
			}
			f.isMDXComponent = !0;
		},
		6778: (e, r, t) => {
			t.d(r, { Z: () => n });
			const n = t.p + 'assets/images/server-info-59eb1f2ab351df3b4b65b1ca9138f129.gif';
		},
	},
]);
