'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[7399],
	{
		4137: (e, r, t) => {
			t.d(r, { Zo: () => f, kt: () => u });
			var n = t(7294);
			function o(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
						: (e[r] = t),
					e
				);
			}
			function a(e, r) {
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
			function i(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? a(Object(t), !0).forEach(function (r) {
								o(e, r, t[r]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
						  : a(Object(t)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
						    });
				}
				return e;
			}
			function m(e, r) {
				if (null == e) return {};
				var t,
					n,
					o = (function (e, r) {
						if (null == e) return {};
						var t,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(t = a[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
				}
				return o;
			}
			var c = n.createContext({}),
				l = function (e) {
					var r = n.useContext(c),
						t = r;
					return e && (t = 'function' == typeof e ? e(r) : i(i({}, r), e)), t;
				},
				f = function (e) {
					var r = l(e.components);
					return n.createElement(c.Provider, { value: r }, e.children);
				},
				d = 'mdxType',
				s = {
					inlineCode: 'code',
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				p = n.forwardRef(function (e, r) {
					var t = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						f = m(e, ['components', 'mdxType', 'originalType', 'parentName']),
						d = l(t),
						p = o,
						u = d[''.concat(c, '.').concat(p)] || d[p] || s[p] || a;
					return t
						? n.createElement(u, i(i({ ref: r }, f), {}, { components: t }))
						: n.createElement(u, i({ ref: r }, f));
				});
			function u(e, r) {
				var t = arguments,
					o = r && r.mdxType;
				if ('string' == typeof e || o) {
					var a = t.length,
						i = new Array(a);
					i[0] = p;
					var m = {};
					for (var c in r) hasOwnProperty.call(r, c) && (m[c] = r[c]);
					(m.originalType = e), (m[d] = 'string' == typeof e ? e : o), (i[1] = m);
					for (var l = 2; l < a; l++) i[l] = t[l];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, t);
			}
			p.displayName = 'MDXCreateElement';
		},
		7635: (e, r, t) => {
			t.r(r),
				t.d(r, {
					assets: () => c,
					contentTitle: () => i,
					default: () => s,
					frontMatter: () => a,
					metadata: () => m,
					toc: () => l,
				});
			var n = t(7462),
				o = (t(7294), t(4137));
			const a = { id: 'affirmation', title: 'Random Affirmation' },
				i = void 0,
				m = {
					unversionedId: 'commands/random/affirmation',
					id: 'commands/random/affirmation',
					title: 'Random Affirmation',
					description: 'Overview',
					source: '@site/docs/commands/random/affirmations.md',
					sourceDirName: 'commands/random',
					slug: '/commands/random/affirmation',
					permalink: '/Urvo/commands/random/affirmation',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'affirmation', title: 'Random Affirmation' },
					sidebar: 'docs',
					previous: { title: 'Random Advice', permalink: '/Urvo/commands/random/advice' },
					next: { title: 'Random Anime Quote', permalink: '/Urvo/commands/random/anime-quote' },
				},
				c = {},
				l = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				f = { toc: l },
				d = 'wrapper';
			function s(e) {
				let { components: r, ...a } = e;
				return (0, o.kt)(
					d,
					(0, n.Z)({}, f, a, { components: r, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a random affirmation.'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Cooldown'), ': 10 seconds'),
					(0, o.kt)('p', null, (0, o.kt)('inlineCode', { parentName: 'p' }, 'Required User Permission'), ': None'),
					(0, o.kt)('h2', { id: 'api-reference' }, 'API Reference'),
					(0, o.kt)('p', null, 'This command was made possible by the following API:'),
					(0, o.kt)(
						'ul',
						null,
						(0, o.kt)(
							'li',
							{ parentName: 'ul' },
							'Affirmations API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://www.affirmations.dev/' }, 'API'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', {
							alt: 'Random Affirmation Command Demo GIF',
							src: t(6798).Z,
							width: '1220',
							height: '954',
						}),
					),
				);
			}
			s.isMDXComponent = !0;
		},
		6798: (e, r, t) => {
			t.d(r, { Z: () => n });
			const n = t.p + 'assets/images/affirmation-f525ea28099d060a890e206bcb67876b.gif';
		},
	},
]);
