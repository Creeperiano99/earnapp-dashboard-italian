// ==UserScript==
// @name         Link device restorer + Devices Online Counter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Devices Online Counter and Link Device button restored
// @author       Creeperiano99
// @include      https://earnapp.com/dashboard*
// @icon         https://www.google.com/s2/favicons?domain=https://earnapp.com
// @grant        GM_addStyle
// ==/UserScript==

setTimeout((function() {$("body").append('<h3 class="ea_text ea_text_xs">By Creeperiano99</h3><script type="text/javascript"> function adddev() { var id = prompt(\'Link device\'); location.replace(\'https://earnapp.com/dashboard?link_device=\'+id+\'\'); select(); }</script>'); window.scrollTo(9999, 9999);}), 5000)
GM_addStyle("body { overflow: hidden; }");

setTimeout((function() {
const temp = $("*").html();
const online = temp.match(/easd_dot_online/gi).length
const offline = temp.match(/easd_dot_offline/gi).length
const ul = document.getElementsByClassName('ead_brick ead_brick_balance');
const li = document.createElement('p');
li.className = "ea_text ea_text_xs ea_text_bold"
li.innerHTML = "<br><br><div class=\"ea_panel eap_elevated ead_brick_row\"><h3 class=\"ea_text ea_text_m\">Devices online status</h3><br>Online devices: " + online + "<br>Offline devices: " + offline + "<br><\/div>"
ul[0].appendChild(li); window.scrollTo(9999, 9999);}), 5000);

setTimeout((function() {
const ul = document.getElementsByClassName('eadt_head');
const li = document.createElement('p');
li.className = "ea_text ea_text_xs ea_text_bold"
li.innerHTML = "<button class=\"ea_button eab_size_s eab_shape_primary eab_color_primary\" onclick=\"adddev()\"><span class=\"ea_text ea_text_xxs eab_text ea_text_bold\">Link device</span></button><\/div>"
ul[0].appendChild(li); window.scrollTo(9999, 9999);}), 5000)