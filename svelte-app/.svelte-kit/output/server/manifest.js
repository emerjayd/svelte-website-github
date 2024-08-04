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
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			{
				id: "/functions",
				pattern: /^\/functions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/functions/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
