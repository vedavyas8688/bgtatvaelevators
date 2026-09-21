import { writeFile } from 'node:fs/promises'
import { seoPages, siteSeo } from '../src/data/seoData.js'

const publicFile = (name) => new URL(`../public/${name}`, import.meta.url)
const escapeXml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const urls = Object.values(seoPages).map((page) => {
  const location = new URL(page.path, `${siteSeo.siteUrl}/`).toString()

  return [
    '  <url>',
    `    <loc>${escapeXml(location)}</loc>`,
    `    <lastmod>${siteSeo.lastModified}</lastmod>`,
    `    <changefreq>${page.changeFrequency}</changefreq>`,
    `    <priority>${page.priority.toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n')
})

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  '</urlset>',
  '',
].join('\n')

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  `Sitemap: ${siteSeo.siteUrl}/sitemap.xml`,
  '',
].join('\n')

await Promise.all([
  writeFile(publicFile('sitemap.xml'), sitemap, 'utf8'),
  writeFile(publicFile('robots.txt'), robots, 'utf8'),
])

console.log(`Generated sitemap.xml and robots.txt for ${siteSeo.siteUrl}`)
