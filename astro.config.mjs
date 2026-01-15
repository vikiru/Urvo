import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidatorPlugin from 'starlight-links-validator';
import starlightThemeRapidePlugin from 'starlight-theme-rapide';
import { documentationConfig } from './docs.config.ts';

const {
  site: { title, base, siteUrl, projectDescription, documentationUrl, websiteLastModified },
  assets: { faviconFileName },
  project: { githubRepo },
} = documentationConfig;

export default defineConfig({
  base: `${base}/`,
  site: siteUrl,
  output: 'static',
  trailingSlash: 'never',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  integrations: [
    starlight({
      title,
      tagline: projectDescription,
      favicon: faviconFileName,
      logo: {
        src: './public/logo.png',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: githubRepo,
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ label: 'Introduction', link: '/' }],
        },
        {
          label: 'Commands',
          items: [
            { label: 'Category Overview', link: '/commands/category-overview' },
            {
              label: 'Images',
              autogenerate: { directory: 'commands/images' },
            },
            {
              label: 'Information',
              autogenerate: { directory: 'commands/info' },
            },
            {
              label: 'Memes',
              autogenerate: { directory: 'commands/memes' },
            },
            {
              label: 'Minigames',
              autogenerate: { directory: 'commands/minigames' },
            },
            {
              label: 'Moderation',
              autogenerate: { directory: 'commands/moderation' },
            },
            {
              label: 'Random',
              autogenerate: { directory: 'commands/random' },
            },
            {
              label: 'Troopica',
              autogenerate: { directory: 'commands/troopica' },
            },
            {
              label: 'Utility',
              autogenerate: { directory: 'commands/utility' },
            },
          ],
        },
        {
          label: 'Development',
          items: [
            { label: 'Prerequisites', link: '/development/prerequisites' },
            { label: 'Setup Instructions', link: '/development/setup' },
            { label: 'Available Scripts', link: '/development/scripts' },
            { label: 'Testing', link: '/development/test' },
          ],
        },
        {
          label: 'Conclusion',
          items: [
            { label: 'API References', link: '/conclusion/api-references' },
            { label: 'Acknowledgments', link: '/conclusion/acknowledgments' },
          ],
        },
      ],
      components: {
        Head: './src/components/Head.astro',
      },
      credits: true,
      lastUpdated: false,
      plugins: [
        starlightLinksValidatorPlugin({
          errorOnRelativeLinks: false,
        }),
        starlightThemeRapidePlugin(),
      ],
    }),
    sitemap({
      serialize(item) {
        item.lastmod = websiteLastModified.toISOString();
        item.changefreq = 'monthly';
        item.priority = item.url === documentationUrl ? 1 : 0.7;
        return item;
      },
    }),
    (await import('@playform/compress')).default({
      Image: false,
    }),
  ],
});
