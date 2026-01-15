import type { DocumentationConfig } from '@/types/Config';

export const documentationConfig: DocumentationConfig = {
  site: {
    title: 'Urvo Documentation',
    description:
      'Documentation for Urvo - A multi-purpose discord bot with over 65 commands spanning across 8 categories!',
    projectDescription:
      'A multi-purpose discord bot with over 65 commands spanning across 8 categories!',
    siteUrl: 'https://vikiru.github.io',
    base: '/Urvo',
    documentationUrl: 'https://vikiru.github.io/Urvo',
    websiteLastModified: new Date(),
  },
  author: {
    name: 'Visakan Kirubakaran',
    alternateName: 'Vis Kirubakaran',
    firstName: 'Visakan',
    lastName: 'Kirubakaran',
    jobTitle: 'Software Developer',
    portfolioWebsite: 'https://vikiru.vercel.app',
    githubProfile: 'https://github.com/vikiru',
    linkedinProfile: 'https://linkedin.com/in/viskirubakaran',
    universityName: 'Carleton University',
    universityLogo: 'https://carleton.ca/favicon.ico',
    universityUrl: 'https://carleton.ca/',
  },
  project: {
    name: 'Urvo',
    githubRepo: 'https://github.com/vikiru/Urvo',
    liveDemoUrl: '',
    version: '2.0.0',
    startDate: '2021-01-07',
    endDate: '2023-02-01',
    programmingLanguage: 'JavaScript',
    keywords: ['Urvo', 'discord', 'bot', 'discord.js', 'sqlite', 'sequelize'],
    license: 'https://opensource.org/licenses/MIT',
  },
  assets: {
    themeColor: '#000',
    logoFileName: 'logo.png',
    faviconFileName: 'favicon.ico',
  },
};