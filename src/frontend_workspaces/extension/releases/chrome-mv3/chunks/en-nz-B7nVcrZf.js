import{Q as m,R as y,S as p}from"./AppContainer-DlJO1h2A.js";import"./sidepanel-CYx2dhah.js";/**
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
*/function c(a,_){return _.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(t){if(t!=="default"&&!(t in a)){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(a,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})}),Object.freeze(a)}var d={exports:{}};(function(a,_){(function(e,t){a.exports=t(m)})(y,(function(e){function t(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var n=t(e),u={name:"en-nz",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(r){var o=["th","st","nd","rd"],s=r%100;return"["+r+(o[(s-20)%10]||o[s]||o[0])+"]"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return n.default.locale(u,null,!0),u}))})(d);var i=d.exports,f=p(i),h=c({__proto__:null,default:f},[i]);export{h as e};
