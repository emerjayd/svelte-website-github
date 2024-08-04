

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.TY4yvFsP.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CvmLd2yw.js"];
export const stylesheets = [];
export const fonts = [];
