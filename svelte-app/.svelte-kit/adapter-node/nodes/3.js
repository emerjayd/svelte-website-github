

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cloud/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BNBvbLaV.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CvmLd2yw.js","_app/immutable/chunks/footer.B3EDPdDm.js"];
export const stylesheets = [];
export const fonts = [];
