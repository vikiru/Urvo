'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4010],
	{
		4137: (e, r, t) => {
			t.d(r, { Zo: () => l, kt: () => m });
			var n = t(7294);
			function i(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[r] = t),
					e
				);
			}
			function o(e, r) {
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
			function s(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? o(Object(t), !0).forEach(function (r) {
								i(e, r, t[r]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
						  : o(Object(t)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
						    });
				}
				return e;
			}
			function a(e, r) {
				if (null == e) return {};
				var t,
					n,
					i = (function (e, r) {
						if (null == e) return {};
						var t,
							n,
							i = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++) (t = o[n]), r.indexOf(t) >= 0 || (i[t] = e[t]);
						return i;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(t = o[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
				}
				return i;
			}
			var u = n.createContext({}),
				p = function (e) {
					var r = n.useContext(u),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : s(s({}, r), e)), t;
				},
				l = function (e) {
					var r = p(e.components);
					return n.createElement(u.Provider, { value: r }, e.children);
				},
				c = 'mdxType',
				f = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				d = n.forwardRef(function (e, r) {
					var t = e.components,
						i = e.mdxType,
						o = e.originalType,
						u = e.parentName,
						l = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
						c = p(t),
						d = i,
						m = c[''.concat(u, '.').concat(d)] || c[d] || f[d] || o;
					return t
						? n.createElement(m, s(s({ ref: r }, l), {}, { components: t }))
						: n.createElement(m, s({ ref: r }, l));
				});
			function m(e, r) {
				var t = arguments,
					i = r && r.mdxType;
				if ('string' == typeof e || i) {
					var o = t.length,
						s = new Array(o);
					s[0] = d;
					var a = {};
					for (var u in r) hasOwnProperty.call(r, u) && (a[u] = r[u]);
					(a.originalType = e), (a[c] = 'string' == typeof e ? e : i), (s[1] = a);
					for (var p = 2; p < o; p++) s[p] = t[p];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, t);
			}
			d.displayName = 'MDXCreateElement';
		},
		903: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => u,
					contentTitle: () => s,
					default: () => f,
					frontMatter: () => o,
					metadata: () => a,
					toc: () => p,
				});
			var n = t(7462),
				i = (t(7294), t(4137));
			const o = { slug: '/prerequisites', id: 'prereqs', title: '\ud83d\udcdd Prerequisites' },
				s = void 0,
				a = {
					unversionedId: 'prereqs',
					id: 'prereqs',
					title: '\ud83d\udcdd Prerequisites',
					description: '\ud83d\udcdd Prerequisites',
					source: '@site/docs/prerequisites.md',
					sourceDirName: '.',
					slug: '/prerequisites',
					permalink: '/Urvo/prerequisites',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { slug: '/prerequisites', id: 'prereqs', title: '\ud83d\udcdd Prerequisites' },
					sidebar: 'docs',
					previous: { title: '\ud83d\udcd6 Introduction', permalink: '/Urvo/' },
					next: { title: '\u26a1 Setup Instructions', permalink: '/Urvo/setup' },
				},
				u = {},
				p = [{ value: '\ud83d\udcdd Prerequisites', id: '-prerequisites', level: 2 }],
				l = { toc: p },
				c = 'wrapper';
			function f(e) {
				let { components: r, ...t } = e;
				return (0, i.kt)(
					c,
					(0, n.Z)({}, l, t, { components: r, mdxType: 'MDXLayout' }),
					(0, i.kt)('h2', { id: '-prerequisites' }, '\ud83d\udcdd Prerequisites'),
					(0, i.kt)(
						'ul',
						null,
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							(0, i.kt)('a', { parentName: 'li', href: 'https://nodejs.org/en/download' }, 'Node.js v16.9.0+'),
						),
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							(0, i.kt)('a', { parentName: 'li', href: 'https://sequelize.org/' }, 'Sequelize v6'),
						),
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							(0, i.kt)('a', { parentName: 'li', href: 'https://discord.js.org/' }, 'discord.js v14.0.0+'),
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
