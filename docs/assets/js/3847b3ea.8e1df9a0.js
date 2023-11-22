'use strict';
(self.webpackChunkurvo_docs = self.webpackChunkurvo_docs || []).push([
	[5581],
	{
		4137: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => h });
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
			function l(e, t) {
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
			var s = r.createContext({}),
				c = function (e) {
					var t = r.useContext(s),
						n = t;
					return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(s.Provider, { value: t }, e.children);
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
						s = e.parentName,
						p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
						u = c(n),
						m = o,
						h = u[''.concat(s, '.').concat(m)] || u[m] || d[m] || a;
					return n
						? r.createElement(h, i(i({ ref: t }, p), {}, { components: n }))
						: r.createElement(h, i({ ref: t }, p));
				});
			function h(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ('string' == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = m;
					var l = {};
					for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
					(l.originalType = e), (l[u] = 'string' == typeof e ? e : o), (i[1] = l);
					for (var c = 2; c < a; c++) i[c] = n[c];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = 'MDXCreateElement';
		},
		9844: (e, t, n) => {
			n.r(t),
				n.d(t, {
					assets: () => s,
					contentTitle: () => i,
					default: () => d,
					frontMatter: () => a,
					metadata: () => l,
					toc: () => c,
				});
			var r = n(7462),
				o = (n(7294), n(4137));
			const a = { slug: '/setup', id: 'setup', title: '\u26a1 Setup Instructions' },
				i = void 0,
				l = {
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
				s = {},
				c = [{ value: '\u26a1 Setup Instructions', id: '-setup-instructions', level: 2 }],
				p = { toc: c },
				u = 'wrapper';
			function d(e) {
				let { components: t, ...n } = e;
				return (0, o.kt)(
					u,
					(0, r.Z)({}, p, n, { components: t, mdxType: 'MDXLayout' }),
					(0, o.kt)('h2', { id: '-setup-instructions' }, '\u26a1 Setup Instructions'),
					(0, o.kt)(
						'blockquote',
						null,
						(0, o.kt)(
							'ol',
							{ parentName: 'blockquote' },
							(0, o.kt)('li', { parentName: 'ol' }, 'Clone this repository to your local machine.'),
						),
					),
					(0, o.kt)(
						'pre',
						null,
						(0, o.kt)(
							'code',
							{ parentName: 'pre', className: 'language-bash' },
							'git clone https://github.com/vikiru/Urvo.git\n',
						),
					),
					(0, o.kt)(
						'blockquote',
						null,
						(0, o.kt)(
							'ol',
							{ parentName: 'blockquote', start: 2 },
							(0, o.kt)('li', { parentName: 'ol' }, 'Download & install all dependencies.'),
						),
					),
					(0, o.kt)('pre', null, (0, o.kt)('code', { parentName: 'pre', className: 'language-bash' }, 'npm install\n')),
					(0, o.kt)(
						'blockquote',
						null,
						(0, o.kt)(
							'ol',
							{ parentName: 'blockquote', start: 3 },
							(0, o.kt)(
								'li',
								{ parentName: 'ol' },
								'Setup your ',
								(0, o.kt)('inlineCode', { parentName: 'li' }, 'config.json'),
								' file with the required values',
							),
						),
					),
					(0, o.kt)(
						'pre',
						null,
						(0, o.kt)(
							'code',
							{ parentName: 'pre', className: 'language-json' },
							'{\n    "token": "your-token-goes-here",\n    "clientId": "your-client-id-here",\n    "DB_USER": "your-user-here",\n    "DB_PASS": "your-pass-here"\n}\n',
						),
					),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'token'),
						': This is your Discord bot token, which can be found upon creating a new application via the ',
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
						': This is the id associated with your Discord bot, which can additionally be found via the ',
						(0, o.kt)(
							'a',
							{ parentName: 'p', href: 'https://discord.com/developers/docs/intro' },
							'Discord Developer Portal',
						),
						' once your application has been created.',
					),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'DB_USER'),
						": This is the username that will be used when connecting to the SQLite Database for all 'Troopica' commands, this can be set to anything such as 'username'.",
					),
					(0, o.kt)(
						'p',
						null,
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'DB_PASS'),
						": This is the password that will be used when connecting to the SQLite Database for all 'Troopica' commands, this can be set to anything.",
					),
					(0, o.kt)(
						'p',
						null,
						'Once you have finished properly setting up your ',
						(0, o.kt)('inlineCode', { parentName: 'p' }, 'config.json'),
						' file, there are still two steps left until the bot and all its commands can be utilized.',
					),
					(0, o.kt)(
						'blockquote',
						null,
						(0, o.kt)(
							'ol',
							{ parentName: 'blockquote' },
							(0, o.kt)(
								'li',
								{ parentName: 'ol' },
								'Register all commands by deploying them, this will bind them to the Discord Bot Application you have just created.',
							),
						),
					),
					(0, o.kt)(
						'pre',
						null,
						(0, o.kt)('code', { parentName: 'pre', className: 'language-bash' }, 'npm run deploy\n'),
					),
					(0, o.kt)(
						'blockquote',
						null,
						(0, o.kt)(
							'ol',
							{ parentName: 'blockquote', start: 2 },
							(0, o.kt)(
								'li',
								{ parentName: 'ol' },
								"Intialize the SQLite Database to ensure that 'Troopica' commands will work. This will create the User table within the database.",
							),
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
						'Once the above has been completed, the Discord bot can be added to servers and all commands can be used.',
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
