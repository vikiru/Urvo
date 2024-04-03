'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[7529],
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
				s = function (e) {
					var t = m(e.components);
					return n.createElement(l.Provider, { value: t }, e.children);
				},
				p = 'mdxType',
				u = {
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
						s = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
						p = m(r),
						d = o,
						f = p[''.concat(l, '.').concat(d)] || p[d] || u[d] || a;
					return r
						? n.createElement(f, i(i({ ref: t }, s), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = d;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e), (c[p] = 'string' == typeof e ? e : o), (i[1] = c);
					for (var m = 2; m < a; m++) i[m] = r[m];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = 'MDXCreateElement';
		},
		9146: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => u,
					frontMatter: () => a,
					metadata: () => c,
					toc: () => m,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'fox', title: 'Fox' },
				i = void 0,
				c = {
					unversionedId: 'commands/images/fox',
					id: 'commands/images/fox',
					title: 'Fox',
					description: 'Overview',
					source: '@site/docs/commands/images/fox.md',
					sourceDirName: 'commands/images',
					slug: '/commands/images/fox',
					permalink: '/Urvo/commands/images/fox',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'fox', title: 'Fox' },
				},
				l = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				s = { toc: m },
				p = 'wrapper';
			function u(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					p,
					(0, n.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random image and fact of a fox into the server via an embed.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permissions'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'This command was made possible by the following API:'),
					(0, o.kt)(
						'ul',
						null,
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							'Some Random API (',
							(0, o.kt)(
								'a',
								{ parentName: 'li', href: 'https://some-random-api.com/docs/welcome/introduction' },
								'Documentation',
							),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', { alt: 'Fox Command Demo GIF', src: r(8490).Z, width: '1220', height: '954' }),
					),
				);
			}
			u.isMDXComponent = !0;
		},
		8490: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/fox-7663b27650a83330ce61498f839b9d28.gif';
		},
	},
]);
