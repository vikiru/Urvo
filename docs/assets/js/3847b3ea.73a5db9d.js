'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[5581],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => f });
			var r = n(7294);
			function o(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function a(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: a(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
				}
				return o;
			}
			var l = r.createContext({}),
				p = function (e) {
					var t = r.useContext(l),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				c = function (e) {
					var t = p(e.components);
					return r.createElement(l.Provider, { value: t }, e.children);
				},
				u = 'mdxType',
				d = {
					inlineCode: 'code',
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						c = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = p(n),
						m = o,
						f = u[''.concat(l, '.').concat(m)] || u[m] || d[m] || a;
					return n
						? r.createElement(f, i(i({ ref: t }, c), {}, { components: n }))
						: r.createElement(f, i({ ref: t }, c));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = m;
					var s = {};
					for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
					(s.originalType = e), (s[u] = 'string' == typeof e ? e : o), (i[1] = s);
					for (var p = 2; p < a; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = 'MDXCreateElement';
		},
		9844: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => l,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => s,
					toc: () => p,
				});
			var r = n(7462),
				o = (n(7294), n(4137));
			const a = { slug: '/setup', id: 'setup', title: '\u26a1 Setup Instructions' },
				i = void 0,
				s = {
					unversionedId: 'setup',
					id: 'setup',
					title: '\u26a1 Setup Instructions',
					description: '\u26a1 Setup Instructions',
					source: '@site/docs/setup.md',
					sourceDirName: '.',
					slug: '/setup',
					permalink: '/Urvo/setup',
					draft: !1,
					tags: [],
					version: 'current',
					frontMatter: { slug: '/setup', id: 'setup', title: '\u26a1 Setup Instructions' },
					sidebar: 'docs',
					previous: { title: '\ud83d\udcdd Prerequisites', permalink: '/Urvo/prerequisites' },
					next: { title: 'Category Overview', permalink: '/Urvo/commands/category-overview' },
				},
				l = {},
				p = [{ value: '\u26a1 Setup Instructions', id: '-setup-instructions', level: 2 }],
				c = { toc: p },
				u = 'wrapper';
			function d(e) {
				let { components: t, ...n } = e;
				return (0, o.kt)(
					u,
					(0, r.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: '-setup-instructions' }, '\u26a1 Setup Instructions'),
					(0, o.kt)('ol', null, (0, o.kt)('li', { parentName: 'ol' }, 'Clone this repository to your local machine.')),
					(0, o.kt)(
						'pre',
						null,
						(0, o.kt)(
							'code',
							{ parentName: 'pre', className: 'language-bash' },
							'git clone https://github.com/vikiru/Urvo.git\ncd Urvo\n',
						),
					),
					(0, o.kt)('ol', { start: 2 }, (0, o.kt)('li', { parentName: 'ol' }, 'Download & install all dependencies.')),
					(0, o.kt)('pre', null, (0, o.kt)('code', { parentName: 'pre', className: 'language-bash' }, 'npm install\n')),
					(0, o.kt)(
						'ol',
						{ start: 3 },
						(0, o.kt)(
							'li',
							{ parentName: 'ol' },
							'Setup your ',
							(0, o.kt)('inlineCode', { parentName: 'li' }, 'config.json'),
							' file with the required values.',
						),
					),
					(0, o.kt)(
						'pre',
						null,
						(0, o.kt)(
							'code',
							{ parentName: 'pre', className: 'language-json' },
							'{\n"token": "your-token-goes-here",\n"clientId": "your-client-id-here",\n"DB_USER": "your-user-here",\n"DB_PASS": "your-pass-here"\n}\n',
						),
					),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'token'),
						': This is the token for your Discord bot, retrievable upon the creation of a new application via the ',
						(0, o.kt)(
							'a',
							{ parentName: 'p', href: 'https://discord.com/developers/docs/intro' },
							'Discord Developer Portal',
						),
						'.',
					),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'clientId'),
						': This is the ID associated with your Discord bot, also accessible via the ',
						(0, o.kt)(
							'a',
							{ parentName: 'p', href: 'https://discord.com/developers/docs/intro' },
							'Discord Developer Portal',
						),
						' post-application creation.',
					),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'DB_USER'),
						": This is the username utilized when connecting to the SQLite Database for all 'Troopica' commands. This can be customized as per your preference.",
					),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'DB_PASS'),
						": This is the password used when connecting to the SQLite Database for all 'Troopica' commands. This can be set to any secure string.",
					),
					(0, o.kt)(
						'ol',
						{ start: 4 },
						(0, o.kt)(
							'li',
							{ parentName: 'ol' },
							"Deploy all commands, binding them to the Discord Bot application you've created previously.",
						),
					),
					(0, o.kt)(
						'pre',
						null,
						(0, o.kt)('code', { parentName: 'pre', className: 'language-bash' }, 'npm run deploy\n'),
					),
					(0, o.kt)(
						'ol',
						{ start: 5 },
						(0, o.kt)(
							'li',
							{ parentName: 'ol' },
							"Ensure functionality of 'Troopica' commands by initializing the SQLite database.",
						),
					),
					(0, o.kt)(
						'pre',
						null,
						(0, o.kt)('code', { parentName: 'pre', className: 'language-bash' }, 'node initializeDatabase.js\n'),
					),
					(0, o.kt)(
						'p',
						null,
						'Upon completion of these steps, the Discord bot can be added to servers and all commands will be operational \ud83c\udf89',
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
