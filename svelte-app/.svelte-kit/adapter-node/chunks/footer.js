import { c as create_ssr_component } from "./ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="py-6 flex justify-center items-center gap-2" data-svelte-h="svelte-q30xi3"><a class="flex justify-center items-center rounded bg-dark text-white border-white border hover:bg-gray-400 duration-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" style="width: 80px; height: 35px;" href="/contact">Contact</a></div>`;
});
export {
  Footer as F
};
