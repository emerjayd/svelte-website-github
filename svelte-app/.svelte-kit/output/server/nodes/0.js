import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CnGAbH7e.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CvmLd2yw.js","_app/immutable/chunks/entry.CWrrCHU_.js"];
export const stylesheets = ["_app/immutable/assets/0.CXxHhfS4.css"];
export const fonts = [];
