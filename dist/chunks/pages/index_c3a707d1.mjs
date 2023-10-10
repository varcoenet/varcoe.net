import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro_b5149b62.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           */
const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header"><div class="container"><a href="/" class="logo"></a><nav class="main-navigation"><ul><li>Work</li><li>Services</li><li><a href="https://varcoe.net/blog/">Blog</a></li><li">About
<li><a href="contact">Contact</a></li></li"></ul></nav><div class="button_container" id="toggle"><span class="top"></span><span class="middle"></span><span class="bottom"></span></div><div class="overlay" id="overlay"><a href="/" class="whitelogo"></a><nav class="overlay-menu"><ul><li><a href="index">Work</a></li><li><a href="services">Services</a></li><li><a href="https://varcoe.net/blog/">Blog</a></li><li><a href="about">About</a></li><li><a href="contact">Contact</a></li></ul></nav><div class="email"><span>SAY HELLO</span><ul><li><a href="mailto:korey@varcoe.net">korey@varcoe.net</a></li></ul></div></div></div></header>`;
}, "/Applications/MAMP/htdocs/varcoenew/src/components/header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(["", `<section class="footer"><div class="container"><h1><small>Are you ready?</small>Let's Talk.</h1><a href="contact" class="button">Contact Me</a><a href="index.php" class="logofooter"></a></div></section><footer><div class="container"><div class="left">
&copy; 2020 Varcoe.net. All Rights Reserved
</div><div class="right"><ul><li><a href="https://twitter.com/varcoetweets" class="twitter" target="_blank">Twitter</a></li><li>&nbsp; / &nbsp;</li><li><a href="https://www.facebook.com/varcoedesign" class="instagram" target="_blank">Facebook</a></li><li class="hide">&nbsp; / &nbsp;</li><li class="hide"><a href="#" class="dribble">Dribble</a></li></ul></div></div></footer><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-117572317-1"><\/script>`])), maybeRenderHead());
}, "/Applications/MAMP/htdocs/varcoenew/src/components/footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description" content="Varcoe is a freelance web designer and programmer located in Windsor, Ontario, Canada. Find your business a home on the web today!"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"><link rel="stylesheet" href="css/normalize.css"><link rel="stylesheet" href="css/main.css"><link rel="stylesheet" media="only screen and (min-width: 1px) and (max-width: 767px)" href="css/320px.css"><link rel="stylesheet" media="only screen and (min-width: 768px) and (max-width: 1023px)" href="css/768px.css"><link rel="stylesheet" media="only screen and (min-width: 1024px) and (max-width: 1279px)" href="css/1024.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css"><link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet">${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Applications/MAMP/htdocs/varcoenew/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5><a${addAttribute(href, "href")} data-astro-cid-dohjnao5><h2 data-astro-cid-dohjnao5>${title}<span data-astro-cid-dohjnao5>&rarr;</span></h2><p data-astro-cid-dohjnao5>${body}</p></a></li>`;
}, "/Applications/MAMP/htdocs/varcoenew/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6><svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6><path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-j7pv25f6></path><defs data-astro-cid-j7pv25f6><linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6><stop stop-opacity="0.9" data-astro-cid-j7pv25f6></stop><stop offset="1" stop-opacity="0.2" data-astro-cid-j7pv25f6></stop></linearGradient></defs></svg><h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Astro</span></h1><p class="instructions" data-astro-cid-j7pv25f6>
To get started, open the directory <code data-astro-cid-j7pv25f6>src/pages</code> in your project.<br data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
</p><ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "data-astro-cid-j7pv25f6": true })}</ul></main>` })}`;
}, "/Applications/MAMP/htdocs/varcoenew/src/pages/index.astro", void 0);

const $$file = "/Applications/MAMP/htdocs/varcoenew/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
