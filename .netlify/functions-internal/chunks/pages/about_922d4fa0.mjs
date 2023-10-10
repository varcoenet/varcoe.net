import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as renderSlot, g as renderHead, h as addAttribute } from '../astro_6265eb83.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header"><div class="container"><a href="/" class="logo"></a><nav class="main-navigation"><ul><li><a href="/">Work</a></li><li><a href="services">Services</a></li><li><a href="https://varcoe.net/blog/">Blog</a></li><li><a href="about">About</a></li><li><a href="contact">Contact</a></li></ul></nav><div class="button_container" id="toggle"><span class="top"></span><span class="middle"></span><span class="bottom"></span></div><div class="overlay" id="overlay"><a href="/" class="whitelogo"></a><nav class="overlay-menu"><ul><li><a href="/">Work</a></li><li><a href="services">Services</a></li><li><a href="https://varcoe.net/blog/">Blog</a></li><li><a href="about">About</a></li><li><a href="contact">Contact</a></li></ul></nav><div class="email"><span>SAY HELLO</span><ul><li><a href="mailto:korey@varcoe.net">korey@varcoe.net</a></li></ul></div></div></div></header>`;
}, "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/components/header.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<section class="footer"><div class="container"><h1><small>Are you ready?</small>Let's Talk.</h1><a href="contact" class="button">Contact Me</a><a href="index.php" class="logofooter"></a></div></section><footer><div class="container"><div class="left">
&copy; 2023 Varcoe.net. All Rights Reserved
</div><div class="right"><ul><li><a href="https://twitter.com/varcoetweets" class="twitter" target="_blank">Twitter</a></li><li>&nbsp; / &nbsp;</li><li><a href="https://www.facebook.com/varcoedesign" class="instagram" target="_blank">Facebook</a></li><li class="hide">&nbsp; / &nbsp;</li><li class="hide"><a href="#" class="dribble">Dribble</a></li></ul></div></div></footer><script src="/js/jquery.fancybox.js" type="text/javascript"><\/script><script src="/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" type="text/javascript"><\/script><script src="/js/main.js" type="text/javascript"><\/script><script src="/js/bootstrap.js" type="text/javascript"><\/script>`])), maybeRenderHead());
}, "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/components/footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><meta name="description" content="Varcoe is a freelance web designer and programmer located in Windsor, Ontario, Canada. Find your business a home on the web today!"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon"><link rel="stylesheet" href="/css/main.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css"><link rel="stylesheet" media="only screen and (min-width: 1px) and (max-width: 767px)" href="/css/320px.css"><link rel="stylesheet" media="only screen and (min-width: 768px) and (max-width: 1023px)" href="/css/768px.css"><link rel="stylesheet" media="only screen and (min-width: 1024px) and (max-width: 1279px)" href="/css/1024.css"><script src="/js/jquery.min.js" type="text/javascript"><\/script><link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet">', "</head><body>", "", "", "</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Varcoe - About" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", `<section class="main-intro"><div class="container"><h1>About</h1><p>Web designer and front end developer. I know how to design a website, integrate it and make it responsive.</p></div></section><section class="about-row"><div class="container"><div class="one-third"><div class="small-header"><div class="header-number">01</div>
The Story
</div></div><div class="two-thirds"><h2>The designer you've been looking for.</h2><p>As a designer I focus on designing websites with the following characteristics in mind: user friendly, modern, clean, audience oriented, beautiful typography & color scheme, simple but effective content, and layout consistency.</p><p style="padding-bottom:0px;"><strong>Formerly www.varcoedesign.com</strong></p></div><div class="clearfix"></div></div></section><section class="about-row process"><div class="container"><div class="one-third"><div class="small-header"><div class="header-number">02</div>
My Process
</div></div><div class="tabs"><div class="one-sixth"><ul class="tab-links"><li id="link1" class="active"><a href="#tab1">01.</a><div class="verticalborder" style="display:block;"></div><div class="verticaltext" style="display:block;">Wireframing</div><div class="clearfix"></div></li><li id="link2"><a href="#tab2">02.</a><div class="verticalborder"></div><div class="verticaltext">Design</div><div class="clearfix"></div></li><li id="link3"><a href="#tab3">03.</a><div class="verticalborder"></div><div class="verticaltext">Development</div><div class="clearfix"></div></li><li id="link4"><a href="#tab4">04.</a><div class="verticalborder"></div><div class="verticaltext">Launch</div><div class="clearfix"></div></li></ul></div><div class="one-half"><div class="tab-content"><div id="tab1" class="tab active"><img src="img/wireframing.png" alt="Wire Framing"><h2>Sitemap and wireframe creation</h2><p>With the scope of work well-defined, we can move onto wireframing the structural level of your website, defining how the content and features defined in scope definition will interrelate.</p><p>This helps me with the development process to establish the basic structure of a page before moving onto visual design. </p></div><div id="tab2" class="tab"><img src="img/design.png" alt="Design"><h2>Content creation and visual elements</h2><p>With the site architecture and some content in place, we can start working on the visual design of your website. I'll work my magic, constantly playing around with different design styles, elements, colors, and typography to bring your website to life. </p><p>I will remain in back and forth contact during this phase to make sure you get a website that you love! </p></div><div id="tab3" class="tab"><img src="img/development.png" alt="Development"><h2>Responsive coding and testing</h2><p>By now, you've got all your pages designed and approved, so it's time to make it all work. I'll begin by coding the website responsively, making sure everything works correctly on a variety of devices.</p><p>Than I test your website on a desktop, tablet, and mobile device by browsing manually to identify any problems, whether it's user experience issues or something as simple as a broken link. I'll than send it to you for review and if you spot anything out of place I'll get it fixed up.</p></div><div id="tab4" class="tab"><img src="img/launch.png" alt="Launch"><h2>Launch!</h2><p>Now it\u2019s time for everyone\u2019s favorite part of the web design process: When everything has been thoroughly tested, and you\u2019re happy with the site, it\u2019s time to launch. Unless agreed upon prior you will be editing the content yourself, but I'm happy to help if you run into any issues.</p><p>Don\u2019t expect this to go perfectly. There may be still some elements that need fixing after you've added your content. Web design is a fluid and ongoing process that requires constant maintenance.</p></div></div></div></div><div class="clearfix"></div></div></section><section class="about-row"><div class="container"><div class="one-third"><div class="small-header"><div class="header-number">03</div>
Core Values
</div></div><div class="two-thirds"><h2>Code of Conducts</h2><div class="core-values"><div class="one-third"><img src="img/communication.png" alt="" class="img"><img src="img/communicationhover.png" alt="" class="hoverimg"><h5>Communication</h5><p>Quick response and regular communication is the key for success.</p></div><div class="one-third"><img src="img/honesty.png" alt="" class="img"><img src="img/honestyhover.png" alt="" class="hoverimg"><h5>Honesty</h5><p>We'll be honest with our skills, deadlines, and pricing.</p></div><div class="one-third"><img src="img/trustworthy.png" alt="" class="img"><img src="img/trustworthyhover.png" alt="" class="hoverimg"><h5>Trustworthy</h5><p>You can trust me to deliver your project on time, always.</p></div></div><div class="slider-arrows" style="display:none;"><a href="#" class="arrow right"></a><a href="#" class="arrow left"></a></div></div><div class="clearfix"></div></div></section><script type="text/javascript">
        jQuery(document).ready(function() {
            jQuery('.tabs .tab-links a').on('click', function(e)  {
                var currentAttrValue = jQuery(this).attr('href');

                // Show/Hide Tabs
                jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

                // Change/remove current tab to active
                jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

                
                   //  jQuery(this).parent('.active').find('.verticaltext').slideToggle();
                   //  jQuery(this).parent('.active').find('.verticalborder').slideToggle();
                       
                e.preventDefault();
            });
            
            $(".tab-links #link2 a").click(function(){
                $('#link2 .verticalborder').slideDown();
                $('#link2 .verticaltext').slideDown();
                $('#link1 .verticalborder').slideUp();
                $('#link1 .verticaltext').slideUp();
                $('#link3 .verticalborder').slideUp();
                $('#link3 .verticaltext').slideUp();
                $('#link4 .verticalborder').slideUp();
                $('#link4 .verticaltext').slideUp();
            });
            $(".tab-links #link1 a").click(function(){
                $('#link1 .verticalborder').slideDown();
                $('#link1 .verticaltext').slideDown();
                $('#link2 .verticalborder').slideUp();
                $('#link2 .verticaltext').slideUp();
                $('#link3 .verticalborder').slideUp();
                $('#link3 .verticaltext').slideUp();
                $('#link4 .verticalborder').slideUp();
                $('#link4 .verticaltext').slideUp();
            });
            $(".tab-links #link3 a").click(function(){
                $('#link1 .verticalborder').slideUp();
                $('#link1 .verticaltext').slideUp();
                $('#link2 .verticalborder').slideUp();
                $('#link2 .verticaltext').slideUp();
                $('#link3 .verticalborder').slideDown();
                $('#link3 .verticaltext').slideDown();
                $('#link4 .verticalborder').slideUp();
                $('#link4 .verticaltext').slideUp();
            });
            $(".tab-links #link4 a").click(function(){
                $('#link1 .verticalborder').slideUp();
                $('#link1 .verticaltext').slideUp();
                $('#link2 .verticalborder').slideUp();
                $('#link2 .verticaltext').slideUp();
                $('#link3 .verticalborder').slideUp();
                $('#link3 .verticaltext').slideUp();
                $('#link4 .verticalborder').slideDown();
                $('#link4 .verticaltext').slideDown();
            });
            
        });
        <\/script>`])), maybeRenderHead()) })}`;
}, "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/about.astro", void 0);

const $$file = "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$About,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
