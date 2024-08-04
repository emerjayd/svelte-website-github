import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <div class="flex flex-wrap justify-center max-md:flex-col items-center text-white text-left min-width: 150px; min-height: 150px; width: 100%; height: auto" data-svelte-h="svelte-1huywgv"><div class="p-1"><div class="max-w-[400px] overflow-hidden"><div class="overflow-hidden rounded-lg"><a href="/security"><img src="/security.png" class="hover:scale-105 transition duration-700 cursor-pointer object-cover" alt="Cybersecurity"></a></div></div> <h2 class="py-1 text-2xl font-bold">Cybersecurity</h2></div> <div class="p-1"><div class="max-w-[400px] overflow-hidden"><div class="overflow-hidden rounded-lg"><a href="/cloud"><img src="/cloud.png" class="hover:scale-105 transition duration-700 cursor-pointer object-cover" alt="Cloud Services"></a></div></div> <h2 class="py-1 text-2xl font-bold">Cloud Services</h2></div> <div class="p-1"><div class="max-w-[400px] overflow-hidden"><div class="overflow-hidden rounded-lg"><a href="/software"><img src="/software.png" class="hover:scale-105 transition duration-700 cursor-pointer object-cover" alt="Software"></a></div></div> <h2 class="py-1 text-2xl font-bold">Software Development</h2></div></div> ${slots.default ? slots.default({}) : ``} `;
});
export {
  Page as default
};
