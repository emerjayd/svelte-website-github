export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cloud.png","favicon.png","security.png","software.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bq_vj8m2.js","app":"_app/immutable/entry/app.BBLGEUWX.js","imports":["_app/immutable/entry/start.Bq_vj8m2.js","_app/immutable/chunks/entry.CWrrCHU_.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/entry/app.BBLGEUWX.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CvmLd2yw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cloud",
				pattern: /^\/cloud\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/functions",
				pattern: /^\/functions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/functions/_server.ts.js'))
			},
			{
				id: "/security",
				pattern: /^\/security\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/software",
				pattern: /^\/software\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
