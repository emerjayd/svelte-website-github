import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col justify-center items-center text-white text-left px-4"><div class="flex flex-col justify-center items-center w-full max-w-xl mx-auto" data-svelte-h="svelte-dkg41f"><img src="/software.png" class="h-auto object-contain rounded-xl" alt="Software Development"></div> <div class="max-w-2xl mx-auto text-center"><h1 class="text-2xl md:text-3xl font-bold my-4" data-svelte-h="svelte-thfbdv">Crafting Digital Solutions Tailored for Your Success</h1> <article class="text-sm md:text-base space-y-4" data-svelte-h="svelte-1d4cnva"><p>In a world where technology is constantly evolving, having the right digital tools can make
				all the difference. That&#39;s why I&#39;m dedicated to bringing your ideas to life through custom
				software and web development.</p> <h3 class="text-xl font-bold">What I Do</h3> <p>At Encrypt, I specialize in creating bespoke software and websites. Whether you&#39;re a startup
				looking to launch your first app, a business in need of a unique software solution, or you
				want to upgrade your existing website, I&#39;m here to help.</p> <h3 class="text-xl font-bold">My Approach</h3> <p><b>Personalized Service:</b> Your vision is unique, and so should be your digital solution. I
				work closely with you to understand your needs and bring your ideas to life.</p> <p><b>Clear Communication:</b> No tech-speak or confusing jargon. I believe in keeping things simple
				and ensuring you&#39;re always in the loop.</p> <p><b>Continuous Support: </b>My job isn&#39;t done at launch. I provide ongoing support and
				updates to keep your software or website running smoothly.</p> <p></p> <h3 class="text-xl font-bold">Services Offered:</h3> <p><b>Custom Software Development:</b> From desktop applications to mobile apps, I build software
				that meets your specific needs.</p> <p><b>Web Development &amp; Design:</b> Creating beautiful, responsive, and functional websites that
				engage your audience.</p> <p><b>E-commerce Solutions:</b> Helping you sell your products or services online with a seamless
				shopping experience.</p> <p><b>Maintenance &amp; Upgrades:</b> Ensuring your digital assets stay up-to-date and secure.</p> <h3 class="text-xl font-bold">Why Choose Encrypt?</h3> <p>As a one-person team, I offer a level of dedication and personalization that big development
				firms can&#39;t match. Your project is not just another job for me; it&#39;s a passion project
				fueled by a desire to see you succeed.</p> <h3 class="text-xl font-bold">Get in Touch</h3> <p>Ready to turn your idea into a digital reality? Contact me for a free consultation, and
				let&#39;s discuss how we can create something amazing together.</p></article>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> </div>`;
});
export {
  Page as default
};
