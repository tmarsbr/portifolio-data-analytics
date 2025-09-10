/*
 * Generate Open Graph image (1200x630) using Puppeteer
 * Outputs: public/og-image.jpg
 */

const fs = require('fs');
const path = require('path');

async function readConfig() {
  const configPath = path.join(__dirname, '..', 'src', 'config', 'portfolio.js');
  const text = fs.readFileSync(configPath, 'utf8');

  const get = (re, fallback = '') => {
    const m = text.match(re);
    return (m && m[1]) ? m[1] : fallback;
  };

  const name = get(/\bname:\s*"([^"]+)"/);
  const title = get(/\btitle:\s*"([^"]+)"/);
  const taglineMatch = text.match(/Toler[^`\n]*dados\./i);
  const tagline = taglineMatch ? taglineMatch[0] : '';

  // Theme fallbacks
  const primary = get(/primaryColor:\s*"(#[0-9a-fA-F]{6})"/, '#1565c0');
  const secondary = get(/secondaryColor:\s*"(#[0-9a-fA-F]{6})"/, '#d32f2f');
  const bgStart = '#0f172a';
  const bgEnd = '#1e293b';

  return { name, title, tagline, primary, secondary, bgStart, bgEnd };
}

async function generate() {
  const puppeteer = require('puppeteer');
  const outPath = path.join(__dirname, '..', 'public', 'og-image.jpg');
  const { name, title, tagline, primary, secondary, bgStart, bgEnd } = await readConfig();

  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 2 },
  });
  const page = await browser.newPage();

  const html = `<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;800&display=swap" rel="stylesheet">
    <style>
      html, body { margin:0; padding:0; }
      .wrap {
        width: 1200px; height: 630px;
        background: linear-gradient(135deg, ${bgStart} 0%, ${bgEnd} 100%);
        position: relative; font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        color: #e2e8f0; overflow: hidden;
      }
      .accent {
        position: absolute; inset: -40px; background: radial-gradient(600px 600px at 90% 20%, ${primary}55, transparent 60%),
                                             radial-gradient(500px 500px at 10% 90%, ${secondary}44, transparent 55%);
        filter: blur(40px); opacity: 0.8;
      }
      .content { position: relative; z-index: 5; padding: 72px 96px; }
      .name { font-size: 72px; line-height: 1.1; font-weight: 800; margin: 0 0 8px 0; color: #f8fafc; }
      .title { font-size: 42px; font-weight: 700; margin: 0 0 24px 0; background: linear-gradient(135deg, #ffffff, #93c5fd); -webkit-background-clip: text; color: transparent; }
      .tag { font-size: 28px; max-width: 880px; color: #cbd5e1; }
      .pill { display: inline-block; font-size: 22px; font-weight: 600; color: #0b1220; background: #e0f2fe; padding: 10px 16px; border-radius: 999px; margin-top: 28px; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="accent"></div>
      <div class="content">
        <div class="pill">Portfólio</div>
        <h1 class="name">${name || 'Tiago Silva'}</h1>
        <h2 class="title">${title || 'Eng. de Dados | Data Science'}</h2>
        <div class="tag">${tagline || 'ETL/ELT (Airflow, dbt, Spark) • Analytics • SQL • Python'}</div>
      </div>
    </div>
  </body>
  </html>`;

  await page.setContent(html, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 250));
  await page.screenshot({ path: outPath, type: 'jpeg', quality: 92, captureBeyondViewport: false, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();

  console.log(`OG image generated at: ${outPath}`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
