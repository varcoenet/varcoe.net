import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_6265eb83.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './about_922d4fa0.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Varcoe - Services" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", `<section class="main-intro"><div class="container"><h1>Services</h1><p>The services available at Varcoe. Every project is different so if you need some work done, <a href="contact">contact me</a> for a quote!</p></div></section><section id="accordion"><div class="container"><div class="service-group"><input id="acrd1-item1" name="accordion1" type="radio" checked="checked"><label class="accordion-toggle" for="acrd1-item1"><div class="left">
Website Design
</div><div class="right rotate"><img src="img/plus.png" alt=""></div><div class="left description"><p>
Bring your ideas to life, in website form, with Varcoe!
</p></div><div class="clearfix"></div></label><div class="accordion-content default"><p>Do you have a business and need a website, or maybe just a "new look"? We'll work with you to create your ideal website, fusing your ideas with our design knowledge and style. Looking for a content management system? Let me build your next website powered by Wordpress or eCommerce. </p><strong>What you can expect:</strong><ul><li>Each page will be designed in photoshop, with you approving all pages.</li><li>Revisions will follow after each update, as many times as it takes to get it right. </li></ul><a href="contact" class="textlink">Order Web Design</a></div></div><div class="service-group"><input id="acrd1-item2" name="accordion1" type="radio"><label class="accordion-toggle" for="acrd1-item2"><div class="left">
Responsive Coding
</div><div class="right rotate"><img src="img/plus.png" alt=""></div><div class="left description"><p>
Make your website available on all mobile devices.
</p></div><div class="clearfix"></div></label><div class="accordion-content"><p>It's 2017. Nearly half of your visitors will be using a mobile device when browsing your website. Put yourself in the visitors shoes and think what you would do if you opened up your phone and came across a website that wasn't mobile friendly. What would you do? Leave? Probably. Let me help!</p><strong>What you can expect:</strong><ul><li>Well organized and up to WC3 standards HTML and CSS coding.</li><li>Manually tested on over 10 of today's most popular mobile devices.</li><li>Your website in mobile will be the same as desktop, with only minor changes.</li></ul><a href="contact" class="textlink">Go Responsive</a></div></div><div class="service-group"><input id="acrd1-item3" name="accordion1" type="radio"><label class="accordion-toggle" for="acrd1-item3"><div class="left">
eCommerce
</div><div class="right rotate"><img src="img/plus.png" alt=""></div><div class="left description"><p>
Do you have a product to sell online?
</p></div><div class="clearfix"></div></label><div class="accordion-content"><p>Are you a small business with a product or service to sell? Ecommerce is the perfect solution for you, allowing you to list multiple products with different prices. If your selling products locally without an online presence, your making a huge mistake!</p><strong>What you can expect:</strong><ul><li>Track your orders, shipping, revenue, and profit in the admin section.</li><li>We will match your website to your brand/products.</li><li>eCommerce software is really easy to use, we'll even show you how to use it.</li></ul><a href="contact" class="textlink">Create a Shop</a></div></div><div class="service-group"><input id="acrd1-item4" name="accordion1" type="radio"><label class="accordion-toggle" for="acrd1-item4"><div class="left">
Script Integrations
</div><div class="right rotate"><img src="img/plus.png" alt=""></div><div class="left description"><p>
Need WordPress, WHMCS, Joomla, or other scripts on your website?
</p></div><div class="clearfix"></div></label><div class="accordion-content"><p>Make your life a whole lot easier when editing your website by adding a content management system. Whether it's a script we've integrated before or not, chances are we can handle the integration, or we'll atleast try.</p><strong>What you can expect:</strong><ul><li>Script integrations for many popular content management systems.</li><li>Your integration will function just like the original script, but in your websites design.</li><li>We can include a script integration in a web design or coding package.</li></ul><a href="contact" class="textlink">Inquire Now</a></div></div></div></section><script type="text/javascript">
        $(document).ready(function($) {
          $('#accordion').find('.accordion-toggle').click(function(){

            //Expand or collapse this panel
            $(this).next().slideToggle('fast');

            //Hide the other panels
            $(".accordion-content").not($(this).next()).slideUp('fast');

          });
        });
      <\/script>`])), maybeRenderHead()) })}`;
}, "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/services.astro", void 0);

const $$file = "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
