/**
 * Post-build script: restructure the Astro adapter's Worker output
 * into a Cloudflare Pages-compatible layout.
 *
 * The @astrojs/cloudflare adapter outputs:
 *   dist/client/  (static HTML, CSS, JS, images)
 *   dist/server/  (Worker entry.mjs + chunks + wrangler.json)
 *
 * Pages expects:
 *   dist/         (static files + optional _worker.js in same directory)
 *
 * This script copies the server Worker code into dist/client/ as _worker.js
 * so Pages can serve both static assets and the SSR Worker from one directory.
 */
import { readFileSync, writeFileSync, cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const CLIENT = 'dist/client';
const SERVER = 'dist/server';

// Copy server chunks to client directory so _worker.js can import them
const chunksDir = join(CLIENT, 'chunks');
if (!existsSync(chunksDir)) mkdirSync(chunksDir, { recursive: true });
cpSync(join(SERVER, 'chunks'), chunksDir, { recursive: true });

// Copy the middleware
const middleware = join(SERVER, 'virtual_astro_middleware.mjs');
if (existsSync(middleware)) {
  cpSync(middleware, join(CLIENT, 'virtual_astro_middleware.mjs'));
}

// Create _worker.js that re-exports the server entry
const entryContent = readFileSync(join(SERVER, 'entry.mjs'), 'utf-8');
writeFileSync(join(CLIENT, '_worker.js'), entryContent);

// Replace the server wrangler.json with a minimal Pages-compatible config.
const cfgPath = join(SERVER, 'wrangler.json');
writeFileSync(cfgPath, JSON.stringify({
  name: 'serenitas-coaching',
  compatibility_date: '2026-04-12',
  pages_build_output_dir: '../client',
}));

console.log('Pages restructured: _worker.js + chunks copied to dist/client/');
