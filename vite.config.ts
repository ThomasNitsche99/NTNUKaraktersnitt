import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()], 
	server: {
		host: '0.0.0.0',  // Listen on all network interfaces
		port: 3000,       // Default port for SvelteKit
	  }
});