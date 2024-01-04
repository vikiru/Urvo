'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[4010],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => m });
			var n = r(7294);
			function i(e, t, r) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								i(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: o(Object(r)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
						  });
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var r,
					n,
					i = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							i = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
						return i;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
				}
				return i;
			}
			var l = n.createContext({}),
				p = function (e) {
					var t = n.useContext(l),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
				},
				u = function (e) {
					var t = p(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				c = 'mdxType',
				f = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						i = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						u = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
						c = p(r),
						d = i,
						m = c[''.concat(l, '.').concat(d)] || c[d] || f[d] || o;
					return r
						? n.createElement(m, a(a({ ref: t }, u), {}, { components: r }))
						: n.createElement(m, a({ ref: t }, u));
				});
			function m(e, t) {
				var r = arguments,
					i = t && t.mdxType;
				if ('string' == typeof e || i) {
					var o = r.length,
						a = new Array(o);
					a[0] = d;
					var s = {};
					for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
					(s.originalType = e), (s[c] = 'string' == typeof e ? e : i), (a[1] = s);
					for (var p = 2; p < o; p++) a[p] = r[p];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		903: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => a,
					default: () => f,
					frontMatter: () => o,
					metadata: () => s,
					toc: () => p,
				});
			var n = r(7462),
				i = (r(7294), r(4137));
			const o = { slug: '/prerequisites', id: 'prereqs', title: '\ud83d\udcdd Prerequisites' },
				a = void 0,
				s = {
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
				l = {},
				p = [{ value: '\ud83d\udcdd Prerequisites', id: '-prerequisites', level: 2 }],
				u = { toc: p },
				c = 'wrapper';
			function f(e) {
				let { components: t, ...r } = e;
				return (0, i.kt)(
					c,
					(0, n.Z)({}, u, r, { components: t, mdxType: 'MDXLayout' }),
					(0, i.kt)('h2', { id: '-prerequisites' }, '\ud83d\udcdd Prerequisites'),
					(0, i.kt)(
						'p',
						null,
						'Ensure that the following dependencies are installed onto your machine by following the ',
						(0, i.kt)('a', { parentName: 'p', href: '/Urvo/setup' }, 'setup'),
						' instructions.',
					),
					(0, i.kt)(
						'ul',
						null,
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							(0, i.kt)('a', { parentName: 'li', href: 'https://nodejs.org/en/download' }, 'Node.js (v16.9.0+)'),
						),
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							(0, i.kt)('a', { parentName: 'li', href: 'https://sequelize.org/' }, 'Sequelize (v6.32.0+)'),
						),
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							(0, i.kt)('a', { parentName: 'li', href: 'https://www.npmjs.com/package/sqlite3' }, 'SQLite3 (v5.1.6+)'),
						),
						(0, i.kt)(
							'li',
							{ parentName: 'ul' },
							(0, i.kt)('a', { parentName: 'li', href: 'https://discord.js.org/' }, 'discord.js (v14.11.0)'),
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
