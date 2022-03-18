// ==UserScript==
// @name         Link device restorer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Link Device button restorer
// @author       Creeperiano99
// @include      https://earnapp.com/dashboard*
// @icon         https://www.google.com/s2/favicons?domain=https://earnapp.com
// @grant        GM_addStyle
// ==/UserScript==

setTimeout((function() {$("body").append('<h3 class="ea_text ea_text_xs">By Creeperiano99</h3><script type="text/javascript"> function adddev() { var id = prompt(\'Link device\'); location.replace(\'https://earnapp.com/dashboard?link_device=\'+id+\'\'); select(); }</script>'); window.scrollTo(9999, 9999);}), 5000)
GM_addStyle("body { overflow: hidden; }");

setTimeout((function() {
const ul = document.getElementsByClassName('eadt_head');
const li = document.createElement('p');
li.className = "ea_text ea_text_xs ea_text_bold"
li.innerHTML = "<button class=\"ea_button eab_size_s eab_shape_primary eab_color_primary\" onclick=\"adddev()\"><span class=\"ea_text ea_text_xxs eab_text ea_text_bold\">Link device</span></button><\/div>"
ul[0].appendChild(li); window.scrollTo(9999, 9999);}), 5000)