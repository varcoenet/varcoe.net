import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_1750e325.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_6265eb83.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_932ad727.mjs');
const _page1  = () => import('./chunks/index_250c1ad4.mjs');
const _page2  = () => import('./chunks/shockhosting_8d0fbb80.mjs');
const _page3  = () => import('./chunks/hostmantis_af6662a1.mjs');
const _page4  = () => import('./chunks/speedypage_e504cfeb.mjs');
const _page5  = () => import('./chunks/streamline_fa34bae6.mjs');
const _page6  = () => import('./chunks/ggservers_af24be0a.mjs');
const _page7  = () => import('./chunks/hosthavoc_b3a1a298.mjs');
const _page8  = () => import('./chunks/pronotary_7ac9f527.mjs');
const _page9  = () => import('./chunks/moonqube_2a92e934.mjs');
const _page10  = () => import('./chunks/services_14cfbf6d.mjs');
const _page11  = () => import('./chunks/contact_debd7c49.mjs');
const _page12  = () => import('./chunks/jaxnap_d05adf2a.mjs');
const _page13  = () => import('./chunks/about_42d5ede7.mjs');
const _page14  = () => import('./chunks/oasis_cf4748a8.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/shockhosting.astro", _page2],["src/pages/hostmantis.astro", _page3],["src/pages/speedypage.astro", _page4],["src/pages/streamline.astro", _page5],["src/pages/ggservers.astro", _page6],["src/pages/hosthavoc.astro", _page7],["src/pages/pronotary.astro", _page8],["src/pages/moonqube.astro", _page9],["src/pages/services.astro", _page10],["src/pages/contact.astro", _page11],["src/pages/jaxnap.astro", _page12],["src/pages/about.astro", _page13],["src/pages/oasis.astro", _page14]]);
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
