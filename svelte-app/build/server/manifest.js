const manifest = (() => {
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
			__memo(() => import('./chunks/0-CM2l72X8.js')),
			__memo(() => import('./chunks/1-deal3bmJ.js'))
		],
		routes: [
			{
				id: "/functions",
				pattern: /^\/functions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => Promise.resolve().then(function () { return _server_ts; }))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/__data.json","/cloud","/cloud/__data.json","/contact","/contact/__data.json","/security","/security/__data.json","/software","/software/__data.json"]);

const base = "";

var _server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null
});

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
