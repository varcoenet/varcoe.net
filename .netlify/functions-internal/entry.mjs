import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_e810a745.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_ba2368a1.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_222a9f1b.mjs');
const _page1  = () => import('./chunks/index_d1b3749a.mjs');
const _page2  = () => import('./chunks/shockhosting_a8e21820.mjs');
const _page3  = () => import('./chunks/hostmantis_71511f84.mjs');
const _page4  = () => import('./chunks/speedypage_81654993.mjs');
const _page5  = () => import('./chunks/streamline_d3304fd1.mjs');
const _page6  = () => import('./chunks/ggservers_6807cbad.mjs');
const _page7  = () => import('./chunks/hosthavoc_72c811f4.mjs');
const _page8  = () => import('./chunks/pronotary_7487beeb.mjs');
const _page9  = () => import('./chunks/moonqube_57e4376d.mjs');
const _page10  = () => import('./chunks/services_95b2c676.mjs');
const _page11  = () => import('./chunks/thankyou_a00af26b.mjs');
const _page12  = () => import('./chunks/contact_b533e277.mjs');
const _page13  = () => import('./chunks/jaxnap_0165acb4.mjs');
const _page14  = () => import('./chunks/about_9c3926ea.mjs');
const _page15  = () => import('./chunks/oasis_7deb7a0a.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/shockhosting.astro", _page2],["src/pages/hostmantis.astro", _page3],["src/pages/speedypage.astro", _page4],["src/pages/streamline.astro", _page5],["src/pages/ggservers.astro", _page6],["src/pages/hosthavoc.astro", _page7],["src/pages/pronotary.astro", _page8],["src/pages/moonqube.astro", _page9],["src/pages/services.astro", _page10],["src/pages/thankyou.astro", _page11],["src/pages/contact.astro", _page12],["src/pages/jaxnap.astro", _page13],["src/pages/about.astro", _page14],["src/pages/oasis.astro", _page15]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
