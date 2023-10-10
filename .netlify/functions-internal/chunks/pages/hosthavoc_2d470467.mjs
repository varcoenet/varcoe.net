import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_6265eb83.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './about_922d4fa0.mjs';
import { $ as $$WorkPreview } from './ggservers_6147da69.mjs';

const $$Astro = createAstro();
const $$Hosthavoc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hosthavoc;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Varcoe - Host Havoc" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="casestudy" style="background:#0096FF;"><div class="container"><div class="hero-center"><img src="img/hosthavoc/logo.svg" alt="Host Havoc"><h1>Wrecking Havoc with this website design!</h1><img src="img/hosthavoc/threepreviews.png" alt="" class="hero-center-img"></div><div class="clearfix"></div></div></section><section class="casestudy-main"><div class="container"><div class="casestudy-main-left"><h1>HostHavoc</h1><h2>A leading Game Server Provider</h2><p>Having done their website in the past they reached out to me looking for a more modernized version of their existing website. They sell mostly game servers but also dedicated & virtual servers, along with web hosting. They wanted to keep an emphasis on gaming and that's what I did. </p><a href="http://hosthavoc.com" class="button" target="_blank">Visit Website</a></div><div class="casestudy-main-right"><ul><li>Platform</li><li>Desktop</li><li>Mobile</li></ul><ul><li>Services</li><li>Website Design</li><li>Responsive Coding</li></ul></div><div class="clearfix"></div></div></section><section class="casestudy-preview"><div class="container"><ul class="nav nav-tabs" id="myTab"><li class="active"><a data-target="#colors" data-toggle="tab">Colors</a></li><li><a data-target="#typo" data-toggle="tab">Typography</a></li><li><a data-target="#icons" data-toggle="tab">Icons</a></li></ul><h2>Colors, Typography, and Icons.</h2><div class="tab-content"><div class="tab-pane active" id="colors"><div class="colorbox" style="background:#1EA2FF;"><h3>Primary<br>Color</h3><span>#1EA2FF</span></div><div class="colorbox" style="background:#6AEB34;"><h3>Secondary<br>Color</h3><span>#6AEB34</span></div><div class="colorbox" style="background:#FF1616;"><h3>Tertiary<br>Color</h3><span>#FF1616</span></div><div class="colorbox" style="background:#FFFFFF;color:#ced2db;"><h3 style="color:#afb4c1;">Header<br>Text</h3><span>#FFFFFF</span></div><div class="colorbox" style="background:#CFCFD5;"><h3>Body<br>Text</h3><span>#CFCFD5</span></div></div><div class="tab-pane" id="typo"><div class="one-half"><h1><small>Proxima Nova</small>The quick fox jumps over the lazy dog.</h1></div><div class="one-half"><h1><small>Proxima Nova</small></h1><p style="font-size:30px;line-height:36px;padding-top:16px;font-weight:400;">The quick fox jumps over the lazy dog.</p><p style="font-size:24px;line-height:30px;font-weight:400;">The quick fox jumps over the lazy dog.</p><p style="font-size:20px;line-height:26px;font-weight:400;">The quick fox jumps over the lazy dog.</p></div></div><div class="tab-pane" id="icons"><p>
I decided on <a href="https://fontawesome.com/v6/" target="_blank">Font Awesome v6</a> for this project, along with these other icons:
</p></div></div></div><div class="clearfix"></div></section><section class="cs-preview"><div class="container"><div class="small-header centered">
The Design
</div><h2>The new look</h2><div class="clickanywhere">Click any preview below to view in full<br>screen and additional pages</div><div class="one-third"><a data-fancybox="gallery" href="img/hosthavoc/two-big.png" class="fancybox"><img src="img/hosthavoc/two.png"></a></div><div class="one-third"><a data-fancybox="gallery" href="img/hosthavoc/one-big.png" class="fancybox"><img src="img/hosthavoc/one.png"></a></div><div class="one-third"><a data-fancybox="gallery" href="img/hosthavoc/three-big.png" class="fancybox"><img src="img/hosthavoc/three.png"></a></div><div class="one-third" style="display:none;"><a data-fancybox="gallery" href="img/hosthavoc/four-big.png" class="fancybox"><img src="img/hosthavoc/four-big.png"></a></div><div class="one-third" style="display:none;"><a data-fancybox="gallery" href="img/hosthavoc/five-big.png" class="fancybox"><img src="img/hosthavoc/five-big.png"></a></div><div class="one-third" style="display:none;"><a data-fancybox="gallery" href="img/hosthavoc/six-big.png" class="fancybox"><img src="img/hosthavoc/six-big.png"></a></div><div class="one-third" style="display:none;"><a data-fancybox="gallery" href="img/hosthavoc/seven-big.png" class="fancybox"><img src="img/hosthavoc/seven-big.png"></a></div><div class="one-third" style="display:none;"><a data-fancybox="gallery" href="img/hosthavoc/eight-big.png" class="fancybox"><img src="img/hosthavoc/eight-big.png"></a></div><div class="clearfix"></div></div></section><div class="inner-pagination work"><div class="jaxnap one-half left">${renderComponent($$result2, "WorkPreview", $$WorkPreview, { "title": "A realism design for a real cool company", "imglink": "img/jaxnap/logo.png", "link": "jaxnap", "services": "WEB DESIGN / CODING", "type": "Datacenter" })}</div><div class="pronotary one-half right has-new">${renderComponent($$result2, "WorkPreview", $$WorkPreview, { "title": "Seamless Notarization. Anytime, Anywhere.", "imglink": "img/pronotary/logo.svg", "link": "pronotary", "services": "WEB DESIGN / CODING", "type": "Software Company" })}</div></div><div class="clearfix"></div>` })}`;
}, "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/hosthavoc.astro", void 0);

const $$file = "/Applications/MAMP/htdocs/varcoenew/varcoe.net/src/pages/hosthavoc.astro";
const $$url = "/hosthavoc";

export { $$Hosthavoc as default, $$file as file, $$url as url };