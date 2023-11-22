'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[9300],
	{
		4137: (e, t, r) => {
			r.d(t, { Zo: () => c, kt: () => f });
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
			var p = n.createContext({}),
				m = function (e) {
					var t = n.useContext(p),
						r = t;
					return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
				},
				c = function (e) {
					var t = m(e.components);
					return n.createElement(p.Provider, { value: t }, e.children);
				},
				s = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						s = m(r),
						u = o,
						f = s[''.concat(p, '.').concat(u)] || s[u] || d[u] || a;
					return r
						? n.createElement(f, i(i({ ref: t }, c), {}, { components: r }))
						: n.createElement(f, i({ ref: t }, c));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = u;
					var l = {};
					for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
					(l.originalType = e), (l[s] = 'string' == typeof e ? e : o), (i[1] = l);
					for (var m = 2; m < a; m++) i[m] = r[m];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = 'MDXCreateElement';
		},
		7956: (e, t, r) => {
			r.r(t),
				r.d(t, {
					assets: () => p,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => l,
					toc: () => m,
				});
			var n = r(7462),
				o = (r(7294), r(4137));
			const a = { id: 'philosoraptor', title: 'Philosoraptor Meme' },
				i = void 0,
				l = {
					unversionedId: 'commands/memes/philosoraptor',
					id: 'commands/memes/philosoraptor',
					title: 'Philosoraptor Meme',
					description: 'Overview',
					source: '@site/docs/commands/memes/philosoraptor.md',
					sourceDirName: 'commands/memes',
					slug: '/commands/memes/philosoraptor',
					permalink: '/Urvo/commands/memes/philosoraptor',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { id: 'philosoraptor', title: 'Philosoraptor Meme' },
					sidebar: 'docs',
					previous: { title: 'One Does Not Simply Walk Into Mordor Meme', permalink: '/Urvo/commands/memes/mordor' },
					next: { title: 'Mocking Spongebob Meme', permalink: '/Urvo/commands/memes/spongebob' },
				},
				p = {},
				m = [
					{ value: 'Overview', id: 'overview', level: 2 },
					{ value: 'API Reference', id: 'api-reference', level: 2 },
					{ value: 'Demo', id: 'demo', level: 2 },
				],
				c = { toc: m },
				s = 'wrapper';
			function d(e) {
				let { components: t, ...a } = e;
				return (0, o.kt)(
					s,
					(0, n.Z)({}, c, a, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: 'overview' }, 'Overview'),
					(0, o.kt)('p', null, 'Send a Philosoraptor meme with your desired text.'),
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
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'top_text'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the top'),
							),
							(0, o.kt)(
								'tr',
								{ parentName: 'tbody' },
								(0, o.kt)(
									'td',
									{ parentName: 'tr', align: 'center' },
									(0, o.kt)('inlineCode', { parentName: 'td' }, 'bottom_text'),
								),
								(0, o.kt)('td', { parentName: 'tr', align: 'center' }, 'Text that appears on the bottom'),
							),
						),
					),
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
							'Memegen.link API (',
							(0, o.kt)('a', { parentName: 'li', href: 'https://memegen.link/' }, 'Documentation'),
							' | ',
							(0, o.kt)('a', { parentName: 'li', href: 'https://github.com/jacebrowning/memegen' }, 'GitHub Repo'),
							')',
						),
					),
					(0, o.kt)('h2', { id: 'demo' }, 'Demo'),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('img', {
							alt: 'Philosoraptor Meme Command Demo Gif',
							src: r(2083).Z,
							width: '1220',
							height: '904',
						}),
					),
				);
			}
			d.isMDXComponent = !0;
		},
		2083: (e, t, r) => {
			r.d(t, { Z: () => n });
			const n = r.p + 'assets/images/philosoraptor-f4a129ad0c826d74dc0ab9d9c55d6b5c.gif';
		},
	},
]);
