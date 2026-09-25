import { getViteConfig } from "astro/config";

export default getViteConfig({
	test: {
		include: ["tests/**/*.test.ts"],
		server: { deps: { inline: [/astro-embed/, /lite-youtube-embed/] } },
	},
});
