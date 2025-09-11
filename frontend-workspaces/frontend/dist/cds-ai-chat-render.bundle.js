"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["cds-ai-chat-render"],{

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/scriptRender.js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/scriptRender.js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
/* harmony import */ var _AppContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppContainer.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/AppContainer.js");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/react */ "../node_modules/.pnpm/@carbon+react@1.90.0_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1_sass@1.92.0/node_modules/@carbon/react/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../node_modules/.pnpm/react-redux@8.1.3_@types+react@18.3.24_react-dom@18.3.1_react@18.3.1__react@18.3.1_redux@4.2.1/node_modules/react-redux/es/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit/decorators.js */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/decorators.js");
/* harmony import */ var _carbon_web_components_es_custom_components_button_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_overflow_menu_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/overflow-menu/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/overflow-menu/index.js");
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/unsafe-html.js");
/* harmony import */ var _carbon_web_components_es_custom_components_data_table_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/data-table/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/data-table/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_checkbox_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/checkbox/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/checkbox/index.js");
/* harmony import */ var _carbon_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon/icons */ "../node_modules/.pnpm/@carbon+icons@11.66.0/node_modules/@carbon/icons/es/index.js");
/* harmony import */ var lit_directives_unsafe_svg_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit/directives/unsafe-svg.js */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/unsafe-svg.js");
/* harmony import */ var lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lit-html/directives/repeat.js */ "../node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/repeat.js");
/* harmony import */ var _carbon_web_components_es_custom_components_pagination_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/pagination/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/pagination/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_select_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/select/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/select/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_data_table_table_skeleton_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/data-table/table-skeleton.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/data-table/table-skeleton.js");
/* harmony import */ var _carbon_web_components_es_custom_components_slug_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/slug/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/slug/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_defs_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/defs.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/defs.js");
/* harmony import */ var _carbon_web_components_es_custom_components_popover_defs_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/popover/defs.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/popover/defs.js");
/* harmony import */ var _carbon_web_components_es_custom_components_skeleton_icon_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/skeleton-icon/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/skeleton-icon/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_ai_label_action_button_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/ai-label-action-button.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/ai-label-action-button.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_ai_label_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/ai-label.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/ai-label.js");
/* harmony import */ var _carbon_web_components_es_custom_components_inline_loading_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/inline-loading/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/inline-loading/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_textarea_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/textarea/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/textarea/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_icon_button_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/icon-button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/icon-button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_tag_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/tag/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/tag/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_chat_button_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/chat-button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/chat-button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_button_button_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/button/button.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/button/button.js");
/* harmony import */ var _carbon_web_components_es_custom_components_layer_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/layer/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/layer/index.js");
/**
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
*/





































/**
 * The CDN location for fonts keeps changing and we don't want to make our customers keep changing their CSP or their
 * CP4D configurations, so we load all fonts from our CDN.
 */
function getFontFace(baseURL) {
    baseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`;
    return `
/* IBM Fonts */
@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Cyrillic.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Pi.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Latin3.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Latin2.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Latin1.woff2') format('woff2'),
    url('${baseURL}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}`;
}

async function loadFontFace(publicConfig) {
    const versionLoaded = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_2__.g)(publicConfig);
    const cdnEndpoint = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_2__.d)(publicConfig);
    const baseURL = `${cdnEndpoint}/versions/${versionLoaded}`;
    return getFontFace(baseURL);
}
async function render({ serviceManager }) {
    const { config } = serviceManager.store.getState();
    const [applicationStyles, fontStyles] = await Promise.all([
        config.public.__ibm__?.useShadowRoot ? (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_2__.l)() : (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_2__.a)(),
        loadFontFace(config.public),
    ]);
    const container = document.createElement('div');
    serviceManager.container = container;
    if (serviceManager.customHostElement) {
        // Set container to grow to size of provided element. We don't do this sooner because "body" might be set to
        // display: flex;
        container.style.setProperty('width', '100%', 'important');
        container.style.setProperty('height', '100%', 'important');
        // Otherwise append the container to the provided element.
        serviceManager.customHostElement.appendChild(container);
    }
    else {
        // If an element was not provided, append the container to the body.
        document.body.appendChild(container);
        // When attaching the topmost element to the body, we want to make sure it doesn't interfere with the body
        // by covering anything up so we'll set it to a 0 size. The child elements use position: fixed along with
        // a size that break out of the container.
        container.style.setProperty('width', '0', 'important');
        container.style.setProperty('height', '0', 'important');
    }
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppContainer_js__WEBPACK_IMPORTED_MODULE_2__.b, { serviceManager: serviceManager, hostElement: serviceManager.customHostElement, applicationStyles: applicationStyles, fontStyles: fontStyles }), container);
}




/***/ })

}]);
//# sourceMappingURL=cds-ai-chat-render.bundle.js.map