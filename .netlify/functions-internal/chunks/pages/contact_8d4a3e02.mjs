import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_6265eb83.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './about_922d4fa0.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Varcoe - Get In Touch" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="contact-box"><div class="container"><div class="contact-left"><div class="main-intro text-left"><h1>Don't be shy,<br>talk to me.</h1></div><form name="contact" netlify method="POST" data-netlify="true" action="POST" data-netlify-recaptcha="true"><div class="w3-section"><label>Name</label><input class="w3-input w3-border" type="text" name="Name" required></div><div class="w3-section"><label>Email</label><input class="w3-input w3-border" type="text" name="Email" required></div><button type="submit reset" value="Send Message Reset" class="w3-button w3-block w3-black w3-margin-bottom"><div class="actions"><div class="field" data-netlify-recaptcha="true"></div></div><br><i class="fa fa-paper-plane"></i>Send Message
</button></form></div><div class="one-third"><ul><li><img src="img/email.png" alt="Email" width="48" height="48"><h4><span>Direct Email</span><a href="mailto:korey@varcoe.net">korey@varcoe.net</a></h4></li><li><img src="img/skype.png" alt="Skype" width="48" height="48"><h4><span>Skype</span><a href="skype:varcoedesign?chat">varcoedesign</a></h4></li><li><img src="img/discord.png" alt="Skype" width="48" height="48"><h4><span>Discord</span><a href="skype:varcoedesign?chat">varcoenet</a></h4></li></ul></div><div class="clearfix"></div><a href="/" class="logofooter"></a></div></section>` })}`;
}, "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/contact.astro", void 0);

const $$file = "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
