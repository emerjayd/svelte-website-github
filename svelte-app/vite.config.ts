import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
export const prerender = true;

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()]
});
