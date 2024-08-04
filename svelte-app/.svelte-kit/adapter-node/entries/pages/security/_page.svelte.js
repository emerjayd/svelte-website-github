import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col justify-center items-center text-white text-left w-full px-4"><figure class="flex flex-col justify-center items-center w-full max-w-xl mx-auto" data-svelte-h="svelte-1dnu7i"><img src="/security.png" class="h-auto object-contain rounded-lg" alt="Cybersecurity"></figure> <div class="max-w-2xl mx-auto text-center"><h1 class="text-2xl md:text-3xl font-bold my-4" data-svelte-h="svelte-1xhaqnw">Keeping You Safe in the Digital World</h1> <article class="text-sm md:text-base space-y-4" data-svelte-h="svelte-y36vej"><p>In this digital age, where our lives intertwine with the internet, cybersecurity is not just
				a fancy term; it&#39;s a necessity. That&#39;s where I come in.</p> <h3 class="text-xl font-bold">What I Do</h3> <p>I provide personalized cybersecurity services. Think of me as your digital guardian,
				ensuring your online safety while you focus on what you do best. Whether you&#39;re a small
				business owner, a freelancer, or just someone who values their online privacy, I&#39;m here to
				help.</p> <h3 class="text-xl font-bold">My Approach</h3> <p><b>Simple and Straightforward:</b> No jargon, no complicated processes. I believe in making cybersecurity
				accessible to everyone.</p> <p><b>Customized Solutions:</b> Your needs are unique. I offer tailored services that fit your specific
				situation.</p> <p><b>Friendly and Approachable:</b> Have questions? Need advice? I&#39;m just an email or phone call
				away.</p> <h3 class="text-xl font-bold">Services Offered:</h3> <p><b>Website Security:</b> Protecting your website from unwanted intrusions.</p> <p><b>Data Protection:</b> Ensuring your sensitive information stays private and secure. that engage
				your audience.</p> <p><b>Safe Online Practices Education:</b> Teaching you and your team how to stay safe online. Emergency
				Response: Quick help if you suspect a security breach.</p> <p><b>Emergency Response:</b> Quick help if you suspect a security breach.</p> <h3 class="text-xl font-bold">Why Choose Encrypt?</h3> <p>As a one-person operation, I provide a level of personal attention larger companies can&#39;t
				match. Your security is my top priority, and I&#39;m dedicated to providing the best service
				possible.</p> <h3 class="text-xl font-bold">Get in Touch</h3> <p>Ready to secure your digital presence? Contact me today for a free consultation. Let&#39;s make
				your online world a safer place together.</p></article>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> </div>`;
});
export {
  Page as default
};
