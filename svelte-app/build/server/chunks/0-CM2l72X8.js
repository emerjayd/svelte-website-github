async function load$1() {
  return {};
}
const prerender$1 = true;

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1,
  prerender: prerender$1
});

async function load() {
  return {};
}
const prerender = true;

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-BuVLi6mE.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.CnGAbH7e.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CvmLd2yw.js","_app/immutable/chunks/entry.CWrrCHU_.js"];
const stylesheets = ["_app/immutable/assets/0.CXxHhfS4.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-CM2l72X8.js.map
