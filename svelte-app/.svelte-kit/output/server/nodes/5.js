

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/security/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CJJrucYV.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CvmLd2yw.js","_app/immutable/chunks/footer.B3EDPdDm.js"];
export const stylesheets = [];
export const fonts = [];
