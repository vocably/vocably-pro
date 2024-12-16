const { readdirSync, writeFileSync } = require('node:fs');
const { execSync } = require('node:child_process');

const exclude = ['index.handlebars', 'ad-creator.handlebars', 'app.handlebars'];
const pages = readdirSync('./src/pages').filter(
  (page) => !exclude.includes(page)
);

function getGitLastModifiedDate(filePath) {
  try {
    // Execute Git command to get the last commit date for the file
    const command = `git log -1 --format="%ci" -- "${filePath}"`;
    const output = execSync(command, { encoding: 'utf8' }).trim();

    return output.replace(' ', 'T').replace(' ', '') || null;
  } catch (error) {
    console.error(
      `Error fetching Git information for file "${filePath}":`,
      error.message
    );
    return null;
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>https://vocably.pro/</loc>
  <lastmod>${getGitLastModifiedDate('./src/pages/index.handlebars')}</lastmod>
  <priority>1.00</priority>
</url>
${pages
  .map(
    (page) => `
<url>
  <loc>https://vocably.pro/${page.replace('.handlebars', '.html')}</loc>
  <lastmod>${getGitLastModifiedDate(`./src/pages/${page}`)}</lastmod>
  <priority>0.80</priority>
</url>
`
  )
  .join('')}
</urlset>
`;

console.log(xml);

writeFileSync('./dist/sitemap.xml', xml);
