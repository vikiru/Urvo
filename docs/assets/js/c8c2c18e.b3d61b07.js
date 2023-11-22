'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[6790],
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
			function i(e, t) {
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
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						  : i(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
						    });
				}
				return e;
			}
			function a(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
				}
				return o;
			}
			var c = n.createContext({}),
				p = function (e) {
					var t = n.useContext(c),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
				},
				s = function (e) {
					var t = p(e.components);
					return n.createElement(c.Provider, { value: t }, e.children);
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
						i = e.originalType,
						c = e.parentName,
						s = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = p(r),
						d = o,
						f = u[''.concat(c, '.').concat(d)] || u[d] || m[d] || i;
					return r
						? n.createElement(f, l(l({ ref: t }, s), {}, { components: r }))
						: n.createElement(f, l({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var i = r.length,
						l = new Array(i);
					l[0] = d;
					var a = {};
					for (var c in t) hasOwnProperty.call(t, c) && (a[c] = t[c]);
					(a.originalType = e), (a[u] = 'string' == typeof e ? e : o), (l[1] = a);
					for (var p = 2; p < i; p++) l[p] = r[p];
					return n.createElement.apply(null, l);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		5119: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => c,
					contentTitle: () => l,
					default: () => m,
					frontMatter: () => i,
					metadata: () => a,
					toc: () => p,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const i = { id: 'help', title: 'Help' },
				l = void 0,
				a = {
					unversionedId: 'commands/utility/help',
					id: 'commands/utility/help',
					title: 'Help',
					description: 'Overview',
					source: '@site/docs/commands/utility/help.md',
					sourceDirName: 'commands/utility',
					slug: '/commands/utility/help',
					permalink: '/Urvo/commands/utility/help',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'help', title: 'Help' },
					sidebar: 'docs',
					previous: { title: 'Delete Channel', permalink: '/Urvo/commands/utility/delete-channel' },
					next: { title: 'Prune', permalink: '/Urvo/commands/utility/prune' },
				},
				c = {},
				p = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: p },
				u = 'wrapper';
			function m(e) {
				let { components: t, ...i } = e;
				return (0, o.kt)(
					u,
					(0, n.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Access a list of commands that can be used with Urvo.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 5 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'No external APIs were used for this command.'),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Help Command Demo GIF', src: r(4673).Z, width: '1220', height: '956' }),
					),
				);
			}
			m.isMDXComponent = !0;
		},
		4673: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/help-1eab1162d71bcda872a0f4fbe46096cf.gif';
		},
	},
]);
