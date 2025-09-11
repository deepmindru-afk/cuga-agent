import{Q as u,R as i,S as m}from"./AppContainer-DlJO1h2A.js";import"./sidepanel-CYx2dhah.js";/**
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
*/function l(a,o){return o.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(t){if(t!=="default"&&!(t in a)){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(a,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})}})}),Object.freeze(a)}var d={exports:{}};(function(a,o){(function(r,t){a.exports=t(u)})(i,(function(r){function t(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var n=t(r),_={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(e){return"["+e+(e===1||e===8||e>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return n.default.locale(_,null,!0),_}))})(d);var s=d.exports,p=m(s),g=l({__proto__:null,default:p},[s]);export{g as n};
