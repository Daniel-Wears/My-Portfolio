// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCoolerCredit from 'starlight-cooler-credit'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Daniel Wears',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Daniel-Wears' }],
			sidebar: [

			],
			plugins: [
				starlightCoolerCredit()
			],
		}),
	],
});
