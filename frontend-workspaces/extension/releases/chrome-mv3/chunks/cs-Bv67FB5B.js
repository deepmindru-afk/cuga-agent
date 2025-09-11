import{Q as f,R as y,S as M}from"./AppContainer-DlJO1h2A.js";import"./sidepanel-CYx2dhah.js";/**
* @license
* 
* (C) Copyright IBM Corp. 2017, 2025. All Rights Reserved.
* 
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
* 
* http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
* 
* @carbon/ai-chat 0.3.3
* 
* Built: Jul 11 2025 1:09 pm -04:00
* 
* 
*/function Y(u,c){return c.forEach(function(o){o&&typeof o!="string"&&!Array.isArray(o)&&Object.keys(o).forEach(function(a){if(a!=="default"&&!(a in u)){var i=Object.getOwnPropertyDescriptor(o,a);Object.defineProperty(u,a,i.get?i:{enumerable:!0,get:function(){return o[a]}})}})}),Object.freeze(u)}var d={exports:{}};(function(u,c){(function(o,a){u.exports=a(f)})(y,(function(o){function a(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=a(o);function _(t){return t>1&&t<5&&~~(t/10)!=1}function e(t,r,l,n){var s=t+" ";switch(l){case"s":return r||n?"pár sekund":"pár sekundami";case"m":return r?"minuta":n?"minutu":"minutou";case"mm":return r||n?s+(_(t)?"minuty":"minut"):s+"minutami";case"h":return r?"hodina":n?"hodinu":"hodinou";case"hh":return r||n?s+(_(t)?"hodiny":"hodin"):s+"hodinami";case"d":return r||n?"den":"dnem";case"dd":return r||n?s+(_(t)?"dny":"dní"):s+"dny";case"M":return r||n?"měsíc":"měsícem";case"MM":return r||n?s+(_(t)?"měsíce":"měsíců"):s+"měsíci";case"y":return r||n?"rok":"rokem";case"yy":return r||n?s+(_(t)?"roky":"let"):s+"lety"}}var m={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};return i.default.locale(m,null,!0),m}))})(d);var p=d.exports,h=M(p),L=Y({__proto__:null,default:h},[p]);export{L as c};
