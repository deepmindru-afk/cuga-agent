"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["nice"],{

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/NiceDFOServiceDesk.js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/NiceDFOServiceDesk.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NiceDFOServiceDesk: function() { return /* binding */ NiceDFOServiceDesk; }
/* harmony export */ });
/* harmony import */ var _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppContainer.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/AppContainer.js");
/* harmony import */ var _customElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customElement.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/customElement.js");
/* harmony import */ var _ServiceDeskImpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceDeskImpl.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ServiceDeskImpl.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/react */ "../node_modules/.pnpm/@carbon+react@1.90.0_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1_sass@1.92.0/node_modules/@carbon/react/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../node_modules/.pnpm/react-redux@8.1.3_@types+react@18.3.24_react-dom@18.3.1_react@18.3.1__react@18.3.1_redux@4.2.1/node_modules/react-redux/es/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit/decorators.js */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/decorators.js");
/* harmony import */ var _carbon_web_components_es_custom_components_button_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_overflow_menu_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/overflow-menu/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/overflow-menu/index.js");
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/unsafe-html.js");
/* harmony import */ var _carbon_web_components_es_custom_components_data_table_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/data-table/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/data-table/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_checkbox_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/checkbox/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/checkbox/index.js");
/* harmony import */ var _carbon_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @carbon/icons */ "../node_modules/.pnpm/@carbon+icons@11.66.0/node_modules/@carbon/icons/es/index.js");
/* harmony import */ var lit_directives_unsafe_svg_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lit/directives/unsafe-svg.js */ "../node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/unsafe-svg.js");
/* harmony import */ var lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lit-html/directives/repeat.js */ "../node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/repeat.js");
/* harmony import */ var _carbon_web_components_es_custom_components_pagination_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/pagination/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/pagination/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_select_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/select/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/select/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_data_table_table_skeleton_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/data-table/table-skeleton.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/data-table/table-skeleton.js");
/* harmony import */ var _carbon_web_components_es_custom_components_slug_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/slug/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/slug/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_defs_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/defs.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/defs.js");
/* harmony import */ var _carbon_web_components_es_custom_components_popover_defs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/popover/defs.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/popover/defs.js");
/* harmony import */ var _carbon_web_components_es_custom_components_skeleton_icon_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/skeleton-icon/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/skeleton-icon/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-dom */ "../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_ai_label_action_button_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/ai-label-action-button.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/ai-label-action-button.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_ai_label_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/ai-label.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/ai-label.js");
/* harmony import */ var _carbon_web_components_es_custom_components_inline_loading_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/inline-loading/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/inline-loading/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_textarea_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/textarea/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/textarea/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_icon_button_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/icon-button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/icon-button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_tag_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/tag/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/tag/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_chat_button_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/chat-button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/chat-button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_button_button_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/button/button.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/button/button.js");
/* harmony import */ var _carbon_web_components_es_custom_components_layer_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/layer/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/layer/index.js");
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






































var niceCxoneChatWebSdk = {exports: {}};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || stringify(b);
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL$1 = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35 (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL$1;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var v3 = v35('v3', 0x30, md5);

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var v5 = v35('v5', 0x50, sha1);

var nil = '00000000-0000-0000-0000-000000000000';

function version(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var esmBrowser = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NIL: nil,
  parse: parse,
  stringify: stringify,
  v1: v1,
  v3: v3,
  v4: v4,
  v5: v5,
  validate: validate,
  version: version
});

var uaParser = {exports: {}};

var hasRequiredUaParser;

function requireUaParser () {
	if (hasRequiredUaParser) return uaParser.exports;
	hasRequiredUaParser = 1;
	(function (module, exports) {
		/////////////////////////////////////////////////////////////////////////////////
		/* UAParser.js v1.0.37
		   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
		   MIT License *//*
		   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
		   Supports browser & node.js environment. 
		   Demo   : https://faisalman.github.io/ua-parser-js
		   Source : https://github.com/faisalman/ua-parser-js */
		/////////////////////////////////////////////////////////////////////////////////

		(function (window, undefined$1) {

		    //////////////
		    // Constants
		    /////////////


		    var LIBVERSION  = '1.0.37',
		        EMPTY       = '',
		        UNKNOWN     = '?',
		        FUNC_TYPE   = 'function',
		        UNDEF_TYPE  = 'undefined',
		        OBJ_TYPE    = 'object',
		        STR_TYPE    = 'string',
		        MAJOR       = 'major',
		        MODEL       = 'model',
		        NAME        = 'name',
		        TYPE        = 'type',
		        VENDOR      = 'vendor',
		        VERSION     = 'version',
		        ARCHITECTURE= 'architecture',
		        CONSOLE     = 'console',
		        MOBILE      = 'mobile',
		        TABLET      = 'tablet',
		        SMARTTV     = 'smarttv',
		        WEARABLE    = 'wearable',
		        EMBEDDED    = 'embedded',
		        UA_MAX_LENGTH = 500;

		    var AMAZON  = 'Amazon',
		        APPLE   = 'Apple',
		        ASUS    = 'ASUS',
		        BLACKBERRY = 'BlackBerry',
		        BROWSER = 'Browser',
		        CHROME  = 'Chrome',
		        EDGE    = 'Edge',
		        FIREFOX = 'Firefox',
		        GOOGLE  = 'Google',
		        HUAWEI  = 'Huawei',
		        LG      = 'LG',
		        MICROSOFT = 'Microsoft',
		        MOTOROLA  = 'Motorola',
		        OPERA   = 'Opera',
		        SAMSUNG = 'Samsung',
		        SHARP   = 'Sharp',
		        SONY    = 'Sony',
		        XIAOMI  = 'Xiaomi',
		        ZEBRA   = 'Zebra',
		        FACEBOOK    = 'Facebook',
		        CHROMIUM_OS = 'Chromium OS',
		        MAC_OS  = 'Mac OS';

		    ///////////
		    // Helper
		    //////////

		    var extend = function (regexes, extensions) {
		            var mergedRegexes = {};
		            for (var i in regexes) {
		                if (extensions[i] && extensions[i].length % 2 === 0) {
		                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
		                } else {
		                    mergedRegexes[i] = regexes[i];
		                }
		            }
		            return mergedRegexes;
		        },
		        enumerize = function (arr) {
		            var enums = {};
		            for (var i=0; i<arr.length; i++) {
		                enums[arr[i].toUpperCase()] = arr[i];
		            }
		            return enums;
		        },
		        has = function (str1, str2) {
		            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
		        },
		        lowerize = function (str) {
		            return str.toLowerCase();
		        },
		        majorize = function (version) {
		            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined$1;
		        },
		        trim = function (str, len) {
		            if (typeof(str) === STR_TYPE) {
		                str = str.replace(/^\s\s*/, EMPTY);
		                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
		            }
		    };

		    ///////////////
		    // Map helper
		    //////////////

		    var rgxMapper = function (ua, arrays) {

		            var i = 0, j, k, p, q, matches, match;

		            // loop through all regexes maps
		            while (i < arrays.length && !matches) {

		                var regex = arrays[i],       // even sequence (0,2,4,..)
		                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
		                j = k = 0;

		                // try matching uastring with regexes
		                while (j < regex.length && !matches) {

		                    if (!regex[j]) { break; }
		                    matches = regex[j++].exec(ua);

		                    if (!!matches) {
		                        for (p = 0; p < props.length; p++) {
		                            match = matches[++k];
		                            q = props[p];
		                            // check if given property is actually array
		                            if (typeof q === OBJ_TYPE && q.length > 0) {
		                                if (q.length === 2) {
		                                    if (typeof q[1] == FUNC_TYPE) {
		                                        // assign modified match
		                                        this[q[0]] = q[1].call(this, match);
		                                    } else {
		                                        // assign given value, ignore regex match
		                                        this[q[0]] = q[1];
		                                    }
		                                } else if (q.length === 3) {
		                                    // check whether function or regex
		                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
		                                        // call function (usually string mapper)
		                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
		                                    } else {
		                                        // sanitize match using given regex
		                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
		                                    }
		                                } else if (q.length === 4) {
		                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
		                                }
		                            } else {
		                                this[q] = match ? match : undefined$1;
		                            }
		                        }
		                    }
		                }
		                i += 2;
		            }
		        },

		        strMapper = function (str, map) {

		            for (var i in map) {
		                // check if current value is array
		                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
		                    for (var j = 0; j < map[i].length; j++) {
		                        if (has(map[i][j], str)) {
		                            return (i === UNKNOWN) ? undefined$1 : i;
		                        }
		                    }
		                } else if (has(map[i], str)) {
		                    return (i === UNKNOWN) ? undefined$1 : i;
		                }
		            }
		            return str;
		    };

		    ///////////////
		    // String map
		    //////////////

		    // Safari < 3.0
		    var oldSafariMap = {
		            '1.0'   : '/8',
		            '1.2'   : '/1',
		            '1.3'   : '/3',
		            '2.0'   : '/412',
		            '2.0.2' : '/416',
		            '2.0.3' : '/417',
		            '2.0.4' : '/419',
		            '?'     : '/'
		        },
		        windowsVersionMap = {
		            'ME'        : '4.90',
		            'NT 3.11'   : 'NT3.51',
		            'NT 4.0'    : 'NT4.0',
		            '2000'      : 'NT 5.0',
		            'XP'        : ['NT 5.1', 'NT 5.2'],
		            'Vista'     : 'NT 6.0',
		            '7'         : 'NT 6.1',
		            '8'         : 'NT 6.2',
		            '8.1'       : 'NT 6.3',
		            '10'        : ['NT 6.4', 'NT 10.0'],
		            'RT'        : 'ARM'
		    };

		    //////////////
		    // Regex map
		    /////////////

		    var regexes = {

		        browser : [[

		            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
		            ], [VERSION, [NAME, 'Chrome']], [
		            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
		            ], [VERSION, [NAME, 'Edge']], [

		            // Presto based
		            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
		            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
		            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
		            ], [NAME, VERSION], [
		            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
		            ], [VERSION, [NAME, OPERA+' Mini']], [
		            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
		            ], [VERSION, [NAME, OPERA]], [

		            // Mixed
		            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i            // Baidu
		            ], [VERSION, [NAME, 'Baidu']], [
		            /(kindle)\/([\w\.]+)/i,                                             // Kindle
		            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
		            // Trident based
		            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,             // Avant/IEMobile/SlimBrowser
		            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

		            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
		            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
		                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
		            /(heytap|ovi)browser\/([\d\.]+)/i,                                  // Heytap/Ovi
		            /(weibo)__([\d\.]+)/i                                               // Weibo
		            ], [NAME, VERSION], [
		            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
		            ], [VERSION, [NAME, 'UC'+BROWSER]], [
		            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
		            /\bqbcore\/([\w\.]+).+microm/i,
		            /micromessenger\/([\w\.]+)/i                                        // WeChat
		            ], [VERSION, [NAME, 'WeChat']], [
		            /konqueror\/([\w\.]+)/i                                             // Konqueror
		            ], [VERSION, [NAME, 'Konqueror']], [
		            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
		            ], [VERSION, [NAME, 'IE']], [
		            /ya(?:search)?browser\/([\w\.]+)/i                                  // Yandex
		            ], [VERSION, [NAME, 'Yandex']], [
		            /slbrowser\/([\w\.]+)/i                                             // Smart Lenovo Browser
		            ], [VERSION, [NAME, 'Smart Lenovo '+BROWSER]], [
		            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
		            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
		            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
		            ], [VERSION, [NAME, FIREFOX+' Focus']], [
		            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
		            ], [VERSION, [NAME, OPERA+' Touch']], [
		            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
		            ], [VERSION, [NAME, 'Coc Coc']], [
		            /dolfin\/([\w\.]+)/i                                                // Dolphin
		            ], [VERSION, [NAME, 'Dolphin']], [
		            /coast\/([\w\.]+)/i                                                 // Opera Coast
		            ], [VERSION, [NAME, OPERA+' Coast']], [
		            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
		            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
		            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
		            ], [VERSION, [NAME, FIREFOX]], [
		            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
		            ], [[NAME, '360 ' + BROWSER]], [
		            /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
		            ], [[NAME, /(.+)/, '$1 ' + BROWSER], VERSION], [                    // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
		            /samsungbrowser\/([\w\.]+)/i                                        // Samsung Internet
		            ], [VERSION, [NAME, SAMSUNG + ' Internet']], [
		            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
		            ], [[NAME, /_/g, ' '], VERSION], [
		            /metasr[\/ ]?([\d\.]+)/i                                            // Sogou Explorer
		            ], [VERSION, [NAME, 'Sogou Explorer']], [
		            /(sogou)mo\w+\/([\d\.]+)/i                                          // Sogou Mobile
		            ], [[NAME, 'Sogou Mobile'], VERSION], [
		            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
		            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
		            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i                        // QQBrowser/2345 Browser
		            ], [NAME, VERSION], [
		            /(lbbrowser)/i,                                                     // LieBao Browser
		            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
		            ], [NAME], [

		            // WebView
		            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
		            ], [[NAME, FACEBOOK], VERSION], [
		            /(Klarna)\/([\w\.]+)/i,                                             // Klarna Shopping Browser for iOS & Android
		            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,                             // Kakao App
		            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,                                  // Naver InApp
		            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
		            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
		            /(alipay)client\/([\w\.]+)/i,                                       // Alipay
		            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i                     // Chromium/Instagram/Snapchat
		            ], [NAME, VERSION], [
		            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
		            ], [VERSION, [NAME, 'GSA']], [
		            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i                        // TikTok
		            ], [VERSION, [NAME, 'TikTok']], [

		            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
		            ], [VERSION, [NAME, CHROME+' Headless']], [

		            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
		            ], [[NAME, CHROME+' WebView'], VERSION], [

		            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
		            ], [VERSION, [NAME, 'Android '+BROWSER]], [

		            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
		            ], [NAME, VERSION], [

		            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
		            ], [VERSION, [NAME, 'Mobile Safari']], [
		            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
		            ], [VERSION, NAME], [
		            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
		            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

		            /(webkit|khtml)\/([\w\.]+)/i
		            ], [NAME, VERSION], [

		            // Gecko based
		            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
		            ], [[NAME, 'Netscape'], VERSION], [
		            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
		            ], [VERSION, [NAME, FIREFOX+' Reality']], [
		            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
		            /(swiftfox)/i,                                                      // Swiftfox
		            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
		                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
		            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
		                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
		            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
		            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

		            // Other
		            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
		                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
		            /(links) \(([\w\.]+)/i,                                             // Links
		            /panasonic;(viera)/i                                                // Panasonic Viera
		            ], [NAME, VERSION], [
		            
		            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
		            ], [NAME, [VERSION, /master.|lts./, ""]]
		        ],

		        cpu : [[

		            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
		            ], [[ARCHITECTURE, 'amd64']], [

		            /(ia32(?=;))/i                                                      // IA32 (quicktime)
		            ], [[ARCHITECTURE, lowerize]], [

		            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
		            ], [[ARCHITECTURE, 'ia32']], [

		            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
		            ], [[ARCHITECTURE, 'arm64']], [

		            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
		            ], [[ARCHITECTURE, 'armhf']], [

		            // PocketPC mistakenly identified as PowerPC
		            /windows (ce|mobile); ppc;/i
		            ], [[ARCHITECTURE, 'arm']], [

		            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
		            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

		            /(sun4\w)[;\)]/i                                                    // SPARC
		            ], [[ARCHITECTURE, 'sparc']], [

		            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
		                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
		            ], [[ARCHITECTURE, lowerize]]
		        ],

		        device : [[

		            //////////////////////////
		            // MOBILES & TABLETS
		            /////////////////////////

		            // Samsung
		            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
		            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
		            /samsung[- ]([-\w]+)/i,
		            /sec-(sgh\w+)/i
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

		            // Apple
		            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i                          // iPod/iPhone
		            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
		            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
		            /applecoremedia\/[\w\.]+ \((ipad)/i,
		            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
		            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
		            /(macintosh);/i
		            ], [MODEL, [VENDOR, APPLE]], [

		            // Sharp
		            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
		            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

		            // Huawei
		            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
		            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
		            /(?:huawei|honor)([-\w ]+)[;\)]/i,
		            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
		            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

		            // Xiaomi
		            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,                  // Xiaomi POCO
		            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
		            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
		            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
		            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,        // Xiaomi Redmi 'numeric' models
		            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
		            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
		            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,                     // Redmi Pad
		            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
		            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

		            // OPPO
		            /; (\w+) bui.+ oppo/i,
		            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
		            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

		            // Vivo
		            /vivo (\w+)(?: bui|\))/i,
		            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
		            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

		            // Realme
		            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
		            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

		            // Motorola
		            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
		            /\bmot(?:orola)?[- ](\w*)/i,
		            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
		            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

		            // LG
		            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
		            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
		            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
		            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
		            /\blg-?([\d\w]+) bui/i
		            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

		            // Lenovo
		            /(ideatab[-\w ]+)/i,
		            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
		            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

		            // Nokia
		            /(?:maemo|nokia).*(n900|lumia \d+)/i,
		            /nokia[-_ ]?([-\w\.]*)/i
		            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

		            // Google
		            /(pixel c)\b/i                                                      // Google Pixel C
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
		            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

		            // Sony
		            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
		            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
		            /sony tablet [ps]/i,
		            /\b(?:sony)?sgp\w+(?: bui|\))/i
		            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

		            // OnePlus
		            / (kb2005|in20[12]5|be20[12][59])\b/i,
		            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
		            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

		            // Amazon
		            /(alexa)webm/i,
		            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,                             // Kindle Fire without Silk / Echo Show
		            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
		            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
		            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

		            // BlackBerry
		            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
		            ], [MODEL, VENDOR, [TYPE, TABLET]], [
		            /\b((?:bb[a-f]|st[hv])100-\d)/i,
		            /\(bb10; (\w+)/i                                                    // BlackBerry 10
		            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

		            // Asus
		            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
		            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
		            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
		            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

		            // HTC
		            /(nexus 9)/i                                                        // HTC Nexus 9
		            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
		            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

		            // ZTE
		            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
		            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
		            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

		            // Acer
		            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
		            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

		            // Meizu
		            /droid.+; (m[1-5] note) bui/i,
		            /\bmz-([-\w]{2,})/i
		            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
		                
		            // Ulefone
		            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Ulefone'], [TYPE, MOBILE]], [

		            // MIXED
		            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
		                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
		            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
		            /(asus)-?(\w+)/i,                                                   // Asus
		            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
		            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
		            /(jolla)/i,                                                         // Jolla
		            /(oppo) ?([\w ]+) bui/i                                             // OPPO
		            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

		            /(kobo)\s(ereader|touch)/i,                                         // Kobo
		            /(archos) (gamepad2?)/i,                                            // Archos
		            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
		            /(kindle)\/([\w\.]+)/i,                                             // Kindle
		            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
		            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
		            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
		            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
		            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
		            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
		            ], [VENDOR, MODEL, [TYPE, TABLET]], [

		            /(surface duo)/i                                                    // Surface Duo
		            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
		            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
		            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
		            /(u304aa)/i                                                         // AT&T
		            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
		            /\bsie-(\w*)/i                                                      // Siemens
		            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
		            /\b(rct\w+) b/i                                                     // RCA Tablets
		            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
		            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
		            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
		            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
		            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
		            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
		            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
		            /\b(tm\d{3}\w+) b/i
		            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
		            /\b(k88) b/i                                                        // ZTE K Series Tablet
		            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
		            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
		            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
		            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
		            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
		            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
		            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
		            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
		            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
		            /\b([yr]\d{2}) b/i,
		            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
		            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
		            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
		            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
		            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
		            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
		            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
		            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
		            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
		            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
		            /\b(ph-1) /i                                                        // Essential PH-1
		            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
		            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
		            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
		            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
		            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
		            /\btu_(1491) b/i                                                    // Rotor Tablets
		            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
		            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
		            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
		            /(sprint) (\w+)/i                                                   // Sprint Phones
		            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
		            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
		            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
		            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
		            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

		            ///////////////////
		            // SMARTTVS
		            ///////////////////

		            /smart-tv.+(samsung)/i                                              // Samsung
		            ], [VENDOR, [TYPE, SMARTTV]], [
		            /hbbtv.+maple;(\d+)/i
		            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
		            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
		            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
		            /(apple) ?tv/i                                                      // Apple TV
		            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
		            /crkey/i                                                            // Google Chromecast
		            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /droid.+aft(\w+)( bui|\))/i                                         // Fire TV
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
		            /\(dtv[\);].+(aquos)/i,
		            /(aquos-tv[\w ]+)\)/i                                               // Sharp
		            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
		            /(bravia[\w ]+)( bui|\))/i                                              // Sony
		            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
		            /(mitv-\w{5}) bui/i                                                 // Xiaomi
		            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
		            /Hbbtv.*(technisat) (.*);/i                                         // TechniSAT
		            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
		            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
		            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i         // HbbTV devices
		            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
		            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
		            ], [[TYPE, SMARTTV]], [

		            ///////////////////
		            // CONSOLES
		            ///////////////////

		            /(ouya)/i,                                                          // Ouya
		            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
		            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
		            /droid.+; (shield) bui/i                                            // Nvidia
		            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
		            /(playstation [345portablevi]+)/i                                   // Playstation
		            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
		            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
		            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

		            ///////////////////
		            // WEARABLES
		            ///////////////////

		            /((pebble))app/i                                                    // Pebble
		            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
		            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i                              // Apple Watch
		            ], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [
		            /droid.+; (glass) \d/i                                              // Google Glass
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
		            /droid.+; (wt63?0{2,3})\)/i
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
		            /(quest( 2| pro)?)/i                                                // Oculus Quest
		            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

		            ///////////////////
		            // EMBEDDED
		            ///////////////////

		            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
		            ], [VENDOR, [TYPE, EMBEDDED]], [
		            /(aeobc)\b/i                                                        // Echo Dot
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [

		            ////////////////////
		            // MIXED (GENERIC)
		            ///////////////////

		            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i    // Android Phones from Unidentified Vendors
		            ], [MODEL, [TYPE, MOBILE]], [
		            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
		            ], [MODEL, [TYPE, TABLET]], [
		            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
		            ], [[TYPE, TABLET]], [
		            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
		            ], [[TYPE, MOBILE]], [
		            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
		            ], [MODEL, [VENDOR, 'Generic']]
		        ],

		        engine : [[

		            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
		            ], [VERSION, [NAME, EDGE+'HTML']], [

		            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
		            ], [VERSION, [NAME, 'Blink']], [

		            /(presto)\/([\w\.]+)/i,                                             // Presto
		            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
		            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
		            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
		            /(icab)[\/ ]([23]\.[\d\.]+)/i,                                      // iCab
		            /\b(libweb)/i
		            ], [NAME, VERSION], [

		            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
		            ], [VERSION, NAME]
		        ],

		        os : [[

		            // Windows
		            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
		            ], [NAME, VERSION], [
		            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i             // Windows Phone
		            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
		            /windows nt 6\.2; (arm)/i,                                        // Windows RT
		            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
		            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
		            ], [[VERSION, strMapper, windowsVersionMap], [NAME, 'Windows']], [

		            // iOS/macOS
		            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
		            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
		            /cfnetwork\/.+darwin/i
		            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
		            /(mac os x) ?([\w\. ]*)/i,
		            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
		            ], [[NAME, MAC_OS], [VERSION, /_/g, '.']], [

		            // Mobile OSes
		            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
		            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
		            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
		            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
		            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
		            /\((series40);/i                                                    // Series 40
		            ], [NAME, VERSION], [
		            /\(bb(10);/i                                                        // BlackBerry 10
		            ], [VERSION, [NAME, BLACKBERRY]], [
		            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
		            ], [VERSION, [NAME, 'Symbian']], [
		            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
		            ], [VERSION, [NAME, FIREFOX+' OS']], [
		            /web0s;.+rt(tv)/i,
		            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
		            ], [VERSION, [NAME, 'webOS']], [
		            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i                              // watchOS
		            ], [VERSION, [NAME, 'watchOS']], [

		            // Google Chromecast
		            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
		            ], [VERSION, [NAME, CHROME+'cast']], [
		            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i                                  // Chromium OS
		            ], [[NAME, CHROMIUM_OS], VERSION],[

		            // Smart TVs
		            /panasonic;(viera)/i,                                               // Panasonic Viera
		            /(netrange)mmh/i,                                                   // Netrange
		            /(nettv)\/(\d+\.[\w\.]+)/i,                                         // NetTV

		            // Console
		            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
		            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

		            // Other
		            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
		            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
		            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
		            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
		                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
		            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
		            /(gnu) ?([\w\.]*)/i,                                                // GNU
		            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
		            /(haiku) (\w+)/i                                                    // Haiku
		            ], [NAME, VERSION], [
		            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
		            ], [[NAME, 'Solaris'], VERSION], [
		            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
		            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
		            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
		            /(unix) ?([\w\.]*)/i                                                // UNIX
		            ], [NAME, VERSION]
		        ]
		    };

		    /////////////////
		    // Constructor
		    ////////////////

		    var UAParser = function (ua, extensions) {

		        if (typeof ua === OBJ_TYPE) {
		            extensions = ua;
		            ua = undefined$1;
		        }

		        if (!(this instanceof UAParser)) {
		            return new UAParser(ua, extensions).getResult();
		        }

		        var _navigator = (typeof window !== UNDEF_TYPE && window.navigator) ? window.navigator : undefined$1;
		        var _ua = ua || ((_navigator && _navigator.userAgent) ? _navigator.userAgent : EMPTY);
		        var _uach = (_navigator && _navigator.userAgentData) ? _navigator.userAgentData : undefined$1;
		        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
		        var _isSelfNav = _navigator && _navigator.userAgent == _ua;

		        this.getBrowser = function () {
		            var _browser = {};
		            _browser[NAME] = undefined$1;
		            _browser[VERSION] = undefined$1;
		            rgxMapper.call(_browser, _ua, _rgxmap.browser);
		            _browser[MAJOR] = majorize(_browser[VERSION]);
		            // Brave-specific detection
		            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
		                _browser[NAME] = 'Brave';
		            }
		            return _browser;
		        };
		        this.getCPU = function () {
		            var _cpu = {};
		            _cpu[ARCHITECTURE] = undefined$1;
		            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
		            return _cpu;
		        };
		        this.getDevice = function () {
		            var _device = {};
		            _device[VENDOR] = undefined$1;
		            _device[MODEL] = undefined$1;
		            _device[TYPE] = undefined$1;
		            rgxMapper.call(_device, _ua, _rgxmap.device);
		            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
		                _device[TYPE] = MOBILE;
		            }
		            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
		            if (_isSelfNav && _device[MODEL] == 'Macintosh' && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
		                _device[MODEL] = 'iPad';
		                _device[TYPE] = TABLET;
		            }
		            return _device;
		        };
		        this.getEngine = function () {
		            var _engine = {};
		            _engine[NAME] = undefined$1;
		            _engine[VERSION] = undefined$1;
		            rgxMapper.call(_engine, _ua, _rgxmap.engine);
		            return _engine;
		        };
		        this.getOS = function () {
		            var _os = {};
		            _os[NAME] = undefined$1;
		            _os[VERSION] = undefined$1;
		            rgxMapper.call(_os, _ua, _rgxmap.os);
		            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != 'Unknown') {
		                _os[NAME] = _uach.platform  
		                                    .replace(/chrome os/i, CHROMIUM_OS)
		                                    .replace(/macos/i, MAC_OS);           // backward compatibility
		            }
		            return _os;
		        };
		        this.getResult = function () {
		            return {
		                ua      : this.getUA(),
		                browser : this.getBrowser(),
		                engine  : this.getEngine(),
		                os      : this.getOS(),
		                device  : this.getDevice(),
		                cpu     : this.getCPU()
		            };
		        };
		        this.getUA = function () {
		            return _ua;
		        };
		        this.setUA = function (ua) {
		            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
		            return this;
		        };
		        this.setUA(_ua);
		        return this;
		    };

		    UAParser.VERSION = LIBVERSION;
		    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
		    UAParser.CPU = enumerize([ARCHITECTURE]);
		    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
		    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

		    ///////////
		    // Export
		    //////////

		    // check js environment
		    {
		        // nodejs env
		        if (module.exports) {
		            exports = module.exports = UAParser;
		        }
		        exports.UAParser = UAParser;
		    }

		    // jQuery/Zepto specific (optional)
		    // Note:
		    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
		    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
		    //   and we should catch that.
		    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
		    if ($ && !$.ua) {
		        var parser = new UAParser();
		        $.ua = parser.getResult();
		        $.ua.get = function () {
		            return parser.getUA();
		        };
		        $.ua.set = function (ua) {
		            parser.setUA(ua);
		            var result = parser.getResult();
		            for (var prop in result) {
		                $.ua[prop] = result[prop];
		            }
		        };
		    }

		})(typeof window === 'object' ? window : _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.W); 
	} (uaParser, uaParser.exports));
	return uaParser.exports;
}

/*! For license information please see index.js.LICENSE.txt */
niceCxoneChatWebSdk.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(esmBrowser,requireUaParser());}(self,((e,t)=>(()=>{var n={910:(e,t,n)=>{t.Nf=void 0;n(151),n(749);t.Nf=function(e){var t=Date.parse(e);return isNaN(t)&&(t=function(e){var t,n=/^(\d{4}-\d\d-\d\d([tT][\d:.]*)?)([zZ]|([+-])(\d\d):?(\d\d))?$/.exec(e)||[];if(n[1]){if((t=n[1].split(/\D/).map((function(e){return parseInt(e,10)||0})))[1]-=1,!(t=new Date(Date.UTC.apply(Date,t))).getDate())return NaN;if(n[5]){var o=60*parseInt(n[5],10);n[6]&&(o+=parseInt(n[6],10)),"+"===n[4]&&(o*=-1),o&&t.setUTCMinutes(t.getUTCMinutes()+o);}return t.getTime()}return NaN}(e)),new Date(t)};},749:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeInMinutes=t.getTimeInMilliseconds=t.getTimeInSeconds=t.padDateTimeUnit=void 0,t.padDateTimeUnit=function(e){var t=Math.abs(Math.floor("string"==typeof e?Number(e):e));return (t<10?"0":"")+t},t.getTimeInSeconds=function(e){var t=e.hours,n=void 0===t?0:t,o=e.minutes,r=void 0===o?0:o,s=e.seconds;return 60*n*60+60*r+(void 0===s?0:s)},t.getTimeInMilliseconds=function(e){var n=e.hours,o=void 0===n?0:n,r=e.minutes,s=void 0===r?0:r,i=e.seconds,a=void 0===i?0:i,c=e.milliseconds,u=void 0===c?0:c;return 1e3*(0, t.getTimeInSeconds)({hours:o,minutes:s,seconds:a})+u},t.getTimeInMinutes=function(e){var n=e.hours,o=void 0===n?0:n,r=e.minutes,s=void 0===r?0:r,i=e.seconds,a=void 0===i?0:i;return (0, t.getTimeInSeconds)({hours:o,minutes:s,seconds:a})/60};},151:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTimezoneISOOffset=void 0;var o=n(749);t.getTimezoneISOOffset=function(e){void 0===e&&(e=new Date);var t=e.getTimezoneOffset();return "".concat(t>0?"-":"+").concat((0, o.padDateTimeUnit)(t/60),":").concat((0, o.padDateTimeUnit)(t%60))};},893:(e,t)=>{t.P=void 0,t.P=function(e){return Object.keys(e).filter((function(t){return null!==e[t]})).map((function(t){return [t,e[t]].map(encodeURIComponent).join("=")})).join("&")};},282:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LogLevels=void 0,(n=t.LogLevels||(t.LogLevels={})).ERROR="error",n.INFO="info",n.WARN="warn";},996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EventTargetPolyfill=void 0;var n=function(){function e(){this.listeners={};}return e.prototype.addEventListener=function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t);},e.prototype.removeEventListener=function(e,t){if(e in this.listeners)for(var n=this.listeners[e],o=0,r=n.length;o<r;o++)if(n[o]===t)return void n.splice(o,1)},e.prototype.dispatchEvent=function(e){if(!(e.type in this.listeners))return !0;for(var t=this.listeners[e.type].slice(),n=0,o=t.length;n<o;n++)t[n].call(this,e);return !e.defaultPrevented},e}();t.EventTargetPolyfill=n;},455:(e,t,n)=>{t.xT=void 0;n(546),n(996),n(846);var o=n(982);Object.defineProperty(t,"xT",{enumerable:!0,get:function(){return o.WebSocketClientEvent}});},415:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.getPushUpdateWebSocket=t.setupSocketConnection=void 0;var s=n(846),i=n(982),a=null,c={forceSecureProtocol:!1,heartbeatAfterAuthorize:!1,maxRetries:20,maxReconnectionDelay:1e3};t.setupSocketConnection=function(e,t){if(void 0===t&&(t={}),"object"!=typeof t)throw new TypeError("Options parameter must be an object not a "+typeof t);var n=o(o({},c),t),u=n.forceSecureProtocol,l=n.heartbeatAfterAuthorize,d=r(n,["forceSecureProtocol","heartbeatAfterAuthorize"]),E=function(e,t){return t?"wss://"+e:("https:"===window.location.protocol?"wss:":"ws:")+"//"+e}(e,u);return a=new s.WebSocketClient(E,void 0,d),l?a.addEventListener(i.WebSocketClientEvent.MESSAGE,(function(e){"authorized"===JSON.parse(e.detail.data)&&(null==a||a.startHeartBeat());})):a.startHeartBeat(),a},t.getPushUpdateWebSocket=function(){return a};},546:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.HeartBeatState=void 0,(n=t.HeartBeatState||(t.HeartBeatState={})).DIED="died",n.DYING="dying",n.LIVING="living";},846:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);},o(e,t)},function(e,t){function n(){this.constructor=e;}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}),s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WebSocketClient=t.HEART_BEAT_CHECK_TIMEOUT=t.HEART_BEAT_INTERVAL=void 0;var i=n(282),a=s(n(864)),c=n(996),u=n(546),l=n(982);t.HEART_BEAT_INTERVAL=15e3,t.HEART_BEAT_CHECK_TIMEOUT=3*t.HEART_BEAT_INTERVAL;var d=function(e){function n(n,o,r){var s=e.call(this)||this;return s.heartBeatTimeout=null,s.heartBeatCheckTimeout=null,s.enableDebugMode=function(){s.debugMode||s.log(i.LogLevels.INFO,"websocket-push-updates--loggerEnabled"),s.debugMode=!0;},s.disableDebugMode=function(){s.debugMode=!1;},s.log=function(e,t,n){s.debugMode&&s.logger&&s.logger[e](t,n);},s.sendHeartBeat=function(){s.log(i.LogLevels.INFO,"websocket-push-updates--sendHeartBeat"),s.send(JSON.stringify({action:"heartbeat"}));},s.handleHeartBeatResponse=function(){s.heartBeatState===u.HeartBeatState.DYING&&(s.heartBeatState=u.HeartBeatState.LIVING,s.dispatchHeartBeatState()),s.setHeartBeatCheckTimeout();},s.setHeartBeatCheckTimeout=function(){null!==s.heartBeatCheckTimeout&&clearTimeout(s.heartBeatCheckTimeout),s.heartBeatCheckTimeout=setTimeout((function(){s.heartBeatState=u.HeartBeatState.DYING,s.dispatchHeartBeatState();}),t.HEART_BEAT_CHECK_TIMEOUT);},s.dispatchHeartBeatState=function(){s.log(i.LogLevels.INFO,"websocket-push-updates--dispatchHeartBeatState",[{hearbeatState:s.heartBeatState}]),null!==s.heartBeatState&&s.dispatchEvent(new CustomEvent(s.heartBeatState));},s.isHeartBeatActive=function(){return null!==s.heartBeatState},s.heartBeatState=null,s.debugMode=!1,s.socket=new a.default(n,o,r),s.socket.onopen=function(){s.dispatchEvent(new CustomEvent(l.WebSocketClientEvent.OPEN));},(null==r?void 0:r.logger)&&(s.logger=r.logger),s.socket.onclose=function(e){s.socket.retryCount===(null==r?void 0:r.maxRetries)?s.heartBeatState=u.HeartBeatState.DIED:s.heartBeatState=u.HeartBeatState.DYING,s.dispatchHeartBeatState(),s.dispatchEvent(new CustomEvent(l.WebSocketClientEvent.CLOSE,{detail:e}));},s.socket.onmessage=function(e){s.handleHeartBeatResponse(),"pong"!==JSON.parse(e.data)&&(s.log(i.LogLevels.INFO,"websocket-push-updates--onmessage",[e]),s.dispatchEvent(new CustomEvent(l.WebSocketClientEvent.MESSAGE,{detail:e})));},s.socket.onerror=function(e){s.log(i.LogLevels.ERROR,"websocket-push-updates--onError",[e]),s.dispatchEvent(new CustomEvent(l.WebSocketClientEvent.ERROR,{detail:e}));},s}return r(n,e),n.prototype.send=function(e){this.socket.send(e);},n.prototype.startHeartBeat=function(){var e=this;this.log(i.LogLevels.INFO,"websocket-push-updates--startHeartBeat",[{interval:t.HEART_BEAT_INTERVAL}]);var n=function(){e.log(i.LogLevels.INFO,"websocket-push-updates--heartBeatCallback"),e.sendHeartBeat(),e.heartBeatTimeout=setTimeout(n,t.HEART_BEAT_INTERVAL);};this.setHeartBeatCheckTimeout(),n(),this.heartBeatState=u.HeartBeatState.LIVING;},n.prototype.stopHeartBeat=function(){this.log(i.LogLevels.INFO,"websocket-push-updates--stopHeartBeat"),null!==this.heartBeatTimeout&&clearTimeout(this.heartBeatTimeout),null!==this.heartBeatCheckTimeout&&clearTimeout(this.heartBeatCheckTimeout),this.heartBeatState=null;},n}(c.EventTargetPolyfill);t.WebSocketClient=d;},982:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.WebSocketClientEvent=void 0,(n=t.WebSocketClientEvent||(t.WebSocketClientEvent={})).CLOSE="close",n.ERROR="error",n.MESSAGE="message",n.OPEN="open";},864:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);},o(e,t)};function r(e,t){function n(){this.constructor=e;}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,s=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=s.next()).done;)i.push(o.value);}catch(e){r={error:e};}finally{try{o&&!o.done&&(n=s.return)&&n.call(s);}finally{if(r)throw r.error}}return i}function i(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}var a=function(e,t){this.target=t,this.type=e;},c=function(e){function t(t,n){var o=e.call(this,"error",n)||this;return o.message=t.message,o.error=t,o}return r(t,e),t}(a),u=function(e){function t(t,n,o){void 0===t&&(t=1e3),void 0===n&&(n="");var r=e.call(this,"close",o)||this;return r.wasClean=!0,r.code=t,r.reason=n,r}return r(t,e),t}(a),l=function(){if("undefined"!=typeof WebSocket)return WebSocket},d={maxReconnectionDelay:1e4,minReconnectionDelay:1e3+4e3*Math.random(),minUptime:5e3,reconnectionDelayGrowFactor:1.3,connectionTimeout:4e3,maxRetries:1/0,maxEnqueuedMessages:1/0,startClosed:!1,debug:!1};const E=function(){function e(e,t,n){var o=this;void 0===n&&(n={}),this._listeners={error:[],message:[],open:[],close:[]},this._retryCount=-1,this._shouldReconnect=!0,this._connectLock=!1,this._binaryType="blob",this._closeCalled=!1,this._messageQueue=[],this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this._handleOpen=function(e){o._debug("open event");var t=o._options.minUptime,n=void 0===t?d.minUptime:t;clearTimeout(o._connectTimeout),o._uptimeTimeout=setTimeout((function(){return o._acceptOpen()}),n),o._ws.binaryType=o._binaryType,o._messageQueue.forEach((function(e){var t;return null===(t=o._ws)||void 0===t?void 0:t.send(e)})),o._messageQueue=[],o.onopen&&o.onopen(e),o._listeners.open.forEach((function(t){return o._callEventListener(e,t)}));},this._handleMessage=function(e){o._debug("message event"),o.onmessage&&o.onmessage(e),o._listeners.message.forEach((function(t){return o._callEventListener(e,t)}));},this._handleError=function(e){o._debug("error event",e.message),o._disconnect(void 0,"TIMEOUT"===e.message?"timeout":void 0),o.onerror&&o.onerror(e),o._debug("exec error listeners"),o._listeners.error.forEach((function(t){return o._callEventListener(e,t)})),o._connect();},this._handleClose=function(e){o._debug("close event"),o._clearTimeouts(),o._shouldReconnect&&o._connect(),o.onclose&&o.onclose(e),o._listeners.close.forEach((function(t){return o._callEventListener(e,t)}));},this._url=e,this._protocols=t,this._options=n,this._options.startClosed&&(this._shouldReconnect=!1),this._connect();}return Object.defineProperty(e,"CONNECTING",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(e,"OPEN",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSING",{get:function(){return 2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSED",{get:function(){return 3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CONNECTING",{get:function(){return e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"OPEN",{get:function(){return e.OPEN},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSING",{get:function(){return e.CLOSING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSED",{get:function(){return e.CLOSED},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"binaryType",{get:function(){return this._ws?this._ws.binaryType:this._binaryType},set:function(e){this._binaryType=e,this._ws&&(this._ws.binaryType=e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"retryCount",{get:function(){return Math.max(this._retryCount,0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){return this._messageQueue.reduce((function(e,t){return "string"==typeof t?e+=t.length:t instanceof Blob?e+=t.size:e+=t.byteLength,e}),0)+(this._ws?this._ws.bufferedAmount:0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this._ws?this._ws.extensions:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this._ws?this._ws.protocol:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this._ws?this._ws.readyState:this._options.startClosed?e.CLOSED:e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._ws?this._ws.url:""},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){void 0===e&&(e=1e3),this._closeCalled=!0,this._shouldReconnect=!1,this._clearTimeouts(),this._ws?this._ws.readyState!==this.CLOSED?this._ws.close(e,t):this._debug("close: already closed"):this._debug("close enqueued: no ws instance");},e.prototype.reconnect=function(e,t){this._shouldReconnect=!0,this._closeCalled=!1,this._retryCount=-1,this._ws&&this._ws.readyState!==this.CLOSED?(this._disconnect(e,t),this._connect()):this._connect();},e.prototype.send=function(e){if(this._ws&&this._ws.readyState===this.OPEN)this._debug("send",e),this._ws.send(e);else {var t=this._options.maxEnqueuedMessages,n=void 0===t?d.maxEnqueuedMessages:t;this._messageQueue.length<n&&(this._debug("enqueue",e),this._messageQueue.push(e));}},e.prototype.addEventListener=function(e,t){this._listeners[e]&&this._listeners[e].push(t);},e.prototype.dispatchEvent=function(e){var t,n,o=this._listeners[e.type];if(o)try{for(var r=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}(o),s=r.next();!s.done;s=r.next()){var i=s.value;this._callEventListener(e,i);}}catch(e){t={error:e};}finally{try{s&&!s.done&&(n=r.return)&&n.call(r);}finally{if(t)throw t.error}}return !0},e.prototype.removeEventListener=function(e,t){this._listeners[e]&&(this._listeners[e]=this._listeners[e].filter((function(e){return e!==t})));},e.prototype._debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._options.debug&&console.log.apply(console,i(["RWS>"],e));},e.prototype._getNextDelay=function(){var e=this._options,t=e.reconnectionDelayGrowFactor,n=void 0===t?d.reconnectionDelayGrowFactor:t,o=e.minReconnectionDelay,r=void 0===o?d.minReconnectionDelay:o,s=e.maxReconnectionDelay,i=void 0===s?d.maxReconnectionDelay:s,a=0;return this._retryCount>0&&(a=r*Math.pow(n,this._retryCount-1))>i&&(a=i),this._debug("next delay",a),a},e.prototype._wait=function(){var e=this;return new Promise((function(t){setTimeout(t,e._getNextDelay());}))},e.prototype._getNextUrl=function(e){if("string"==typeof e)return Promise.resolve(e);if("function"==typeof e){var t=e();if("string"==typeof t)return Promise.resolve(t);if(t.then)return t}throw Error("Invalid URL")},e.prototype._connect=function(){var e=this;if(!this._connectLock&&this._shouldReconnect){this._connectLock=!0;var t=this._options,n=t.maxRetries,o=void 0===n?d.maxRetries:n,r=t.connectionTimeout,s=void 0===r?d.connectionTimeout:r,i=t.WebSocket,a=void 0===i?l():i;if(this._retryCount>=o)this._debug("max retries reached",this._retryCount,">=",o);else {if(this._retryCount++,this._debug("connect",this._retryCount),this._removeListeners(),void 0===(u=a)||!u||2!==u.CLOSING)throw Error("No valid WebSocket class provided");var u;this._wait().then((function(){return e._getNextUrl(e._url)})).then((function(t){e._closeCalled?e._connectLock=!1:(e._debug("connect",{url:t,protocols:e._protocols}),e._ws=e._protocols?new a(t,e._protocols):new a(t),e._ws.binaryType=e._binaryType,e._connectLock=!1,e._addListeners(),e._connectTimeout=setTimeout((function(){return e._handleTimeout()}),s));})).catch((function(t){e._connectLock=!1,e._handleError(new c(Error(t.message),e));}));}}},e.prototype._handleTimeout=function(){this._debug("timeout event"),this._handleError(new c(Error("TIMEOUT"),this));},e.prototype._disconnect=function(e,t){if(void 0===e&&(e=1e3),this._clearTimeouts(),this._ws){this._removeListeners();try{this._ws.close(e,t),this._handleClose(new u(e,t,this));}catch(e){}}},e.prototype._acceptOpen=function(){this._debug("accept open"),this._retryCount=0;},e.prototype._callEventListener=function(e,t){"handleEvent"in t?t.handleEvent(e):t(e);},e.prototype._removeListeners=function(){this._ws&&(this._debug("removeListeners"),this._ws.removeEventListener("open",this._handleOpen),this._ws.removeEventListener("close",this._handleClose),this._ws.removeEventListener("message",this._handleMessage),this._ws.removeEventListener("error",this._handleError));},e.prototype._addListeners=function(){this._ws&&(this._debug("addListeners"),this._ws.addEventListener("open",this._handleOpen),this._ws.addEventListener("close",this._handleClose),this._ws.addEventListener("message",this._handleMessage),this._ws.addEventListener("error",this._handleError));},e.prototype._clearTimeouts=function(){clearTimeout(this._connectTimeout),clearTimeout(this._uptimeTimeout);},e}();},441:(e,t)=>{var n;(n=t.p||(t.p={})).CHAT_WINDOW_EVENT="chatWindowEvent",n.REGISTER="register";},154:(e,t)=>{var n,o;(o=t.YU||(t.YU={})).SENDER_TYPING_STARTED="SenderTypingStarted",o.SENDER_TYPING_ENDED="SenderTypingEnded",o.LOAD_MORE_MESSAGES="LoadMoreMessages",o.RECOVER_LIVECHAT="RecoverLivechat",o.RECOVER_THREAD="RecoverThread",o.SEND_MESSAGE="SendMessage",o.SEND_OUTBOUND="SendOutbound",o.SEND_OFFLINE_MESSAGE="SendOfflineMessage",o.SEND_PAGE_VIEWS="SendPageViews",o.SEND_CONSUMER_CUSTOM_FIELDS="SetConsumerCustomFields",o.SET_CONSUMER_CONTACT_CUSTOM_FIELD="SetConsumerContactCustomFields",o.MESSAGE_SEEN="MessageSeenByConsumer",o.SEND_TRANSCRIPT="SendTranscript",o.FETCH_THREAD_LIST="FetchThreadList",o.END_CONTACT="EndContact",o.EXECUTE_TRIGGER="ExecuteTrigger",o.AUTHORIZE_CONSUMER="AuthorizeConsumer",o.AUTHORIZE_CUSTOMER="AuthorizeCustomer",o.RECONNECT_CONSUMER="ReconnectConsumer",o.UPDATE_THREAD="UpdateThread",o.ARCHIVE_THREAD="ArchiveThread",o.LOAD_THREAD_METADATA="LoadThreadMetadata",o.REFRESH_TOKEN="RefreshToken",o.STORE_VISITOR="StoreVisitor",o.STORE_VISITOR_EVENTS="StoreVisitorEvents",o.CREATE_GROUP_CHAT_INVITE="CreateInvitationToGroupChat",o.SEND_EMAIL_INVITE_TO_GROUP_CHAT="SendEmailInvitationToGroupChat",o.JOIN_GROUP_CHAT="JoinGroupChat",o.LEAVE_GROUP_CHAT="LeaveGroupChat",o.GENERATE_AUTHORIZATION_TOKEN="GenerateAuthorizationToken",o.ADD_VISITOR_TAGS="AddVisitorTags",o.REMOVE_VISITOR_TAGS="RemoveVisitorTags",o.SEND_MESSAGE_PREVIEW="SendMessagePreview",(n=t.Ne||(t.Ne={})).LIVECHAT_RECOVERED="LivechatRecovered",n.MORE_MESSAGES_LOADED="MoreMessagesLoaded",n.OFFLINE_MESSAGE_SENT="OfflineMessageSent",n.THREAD_LIST_FETCHED="ThreadListFetched",n.THREAD_RECOVERED="ThreadRecovered",n.TRANSCRIPT_SENT="TranscriptSent",n.CONSUMER_AUTHORIZED="ConsumerAuthorized",n.THREAD_METADATA_LOADED="ThreadMetadataLoaded",n.SET_POSITION_IN_QUEUE="SetPositionInQueue",n.GROUP_CHAT_INVITE_CREATED="InvitationToGroupChatCreated",n.GROUP_CHAT_INVITE_SENT="EmailInvitationToGroupChatSent",n.GROUP_CHAT_JOINED="GroupChatJoined",n.TOKEN_REFRESHED="TokenRefreshed",n.AUTHORIZATION_TOKEN_GENERATED="AuthorizationTokenGenerated",n.THREAD_ARCHIVED="ThreadArchived";},58:(e,t)=>{var n;(n=t.Yi||(t.Yi={})).DESKTOP="desktop",n.MOBILE="mobile",n.OTHER="other",n.TABLET="tablet",(t.vQ||(t.vQ={})).BROWSER="browser";},880:(e,t,n)=>{var o=n(256);t.P=o.CaseStatus;},354:(e,t)=>{t.GO="X-Caller-Service-ID";},510:(e,t)=>{var n;(n=t.T||(t.T={})).INBOUND="inbound",n.OUTBOUND="outbound";},115:(e,t)=>{var n;(n=t.C||(t.C={})).TEXT="TEXT",n.FILE="FILE",n.FORM="FORM",n.PLUGIN="PLUGIN",n.POSTBACK="POSTBACK",n.QUICK_REPLIES="QUICK_REPLIES",n.RICH_LINK="RICH_LINK",n.LIST_PICKER="LIST_PICKER",n.ADAPTIVE_CARD="ADAPTIVE_CARD",n.TIME_PICKER="TIME_PICKER";},256:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),(n=t.CaseStatus||(t.CaseStatus={})).NEW="new",n.OPEN="open",n.PENDING="pending",n.ESCALATED="escalated",n.RESOLVED="resolved",n.CLOSED="closed",n.TRASHED="trashed";},403:(e,t)=>{var n;(n=t.m||(t.m={})).AUTHORIZE_CONSUMER="AuthorizeConsumer",n.CASE_CREATED="CaseCreated",n.CASE_INBOX_ASSIGNEE_CHANGED="CaseInboxAssigneeChanged",n.CASE_STATUS_CHANGED="CaseStatusChanged",n.CASE_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED="CaseToRoutingQueueAssignmentChanged",n.CONTACT_CREATED="CaseCreated",n.ASSIGNED_AGENT_CHANGED="CaseInboxAssigneeChanged",n.CONTACT_STATUS_CHANGED="CaseStatusChanged",n.CONTACT_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED="CaseToRoutingQueueAssignmentChanged",n.CONTACT_PREFERRED_USER_CHANGED="ContactPreferredUserChanged",n.CONTACT_PROFICIENCY_CHANGED="ContactProficiencyChanged",n.CONTACT_PRIORITY_CHANGED="ContactPriorityChanged",n.CONTACT_SYNC="ContactSync",n.CHANNEL_CREATED="ChannelCreated",n.CHANNEL_DELETED="ChannelDeleted",n.CHANNEL_UPDATED="ChannelUpdated",n.MESSAGE_ADDED_INTO_CASE="MessageAddedIntoCase",n.MESSAGE_CREATED="MessageCreated",n.MESSAGE_DELIVERED_TO_END_USER="MessageDeliveredToEndUser",n.MESSAGE_DELIVERED_TO_USER="MessageDeliveredToUser",n.MESSAGE_NOTE_CREATED="MessageNoteCreated",n.MESSAGE_NOTE_UPDATED="MessageNoteUpdated",n.MESSAGE_NOTE_DELETED="MessageNoteDeleted",n.MESSAGE_READ_CHANGED="MessageReadChanged",n.MESSAGE_SEEN_BY_END_USER="MessageSeenByEndUser",n.MESSAGE_SEEN_BY_USER="MessageSeenByUser",n.MESSAGE_SENT="MessageSent",n.MESSAGE_UPDATED="MessageUpdated",n.PAGE_VIEW_CREATED="PageViewCreated",n.ROUTING_QUEUE_CREATED="RoutingQueueCreated",n.ROUTING_QUEUE_DELETED="RoutingQueueDeleted",n.ROUTING_QUEUE_UPDATED="RoutingQueueUpdated",n.SUBQUEUE_ASSIGNED_TO_ROUTING_QUEUE="SubqueueAssignedToRoutingQueue",n.SUBQUEUE_UNASSIGNED_TO_ROUTING_QUEUE="SubqueueUnassignedFromRoutingQueue",n.USER_ASSIGNED_TO_ROUTING_QUEUE="UserAssignedToRoutingQueue",n.USER_STATUS_CHANGED="UserStatusChanged",n.USER_UNASSIGNED_FROM_ROUTING_QUEUE="UserUnassignedFromRoutingQueue",n.AGENT_CONTACT_STARTED="AgentContactStarted",n.AGENT_CONTACT_ENDED="AgentContactEnded",n.SENDER_TYPING_STARTED="SenderTypingStarted",n.SENDER_TYPING_ENDED="SenderTypingEnded",n.FIRE_PROACTIVE="FireProactiveAction",n.CONTACT_INBOX_PRE_ASSIGNEE_CHANGED="ConsumerContactInboxPreAssigneeChanged",n.CONTACT_RECIPIENTS_CHANGED="ContactRecipientsChanged",n.MESSAGE_PREVIEW_CREATED="MessagePreviewCreated",n.EVENT_IN_S3="EventInS3";},585:e=>{e.exports=t;},459:t=>{t.exports=e;}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={exports:{}};return n[e].call(s.exports,s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]});},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});};var s={};return (()=>{r.r(s),r.d(s,{AbortError:()=>Xt,AbortablePromise:()=>Zt,AuthorizationError:()=>d,ChatEvent:()=>Ze,ChatSdk:()=>qt,ContactStatus:()=>Tt.P,Customer:()=>ke,EnvironmentName:()=>Je,LivechatThread:()=>Wt,MessageType:()=>dt.C,SendMessageFailedError:()=>lt,Thread:()=>Vt,ThreadRecoverFailedError:()=>Bt,UploadAttachmentError:()=>St,WebSocketClientError:()=>_t,WebSocketClientEvent:()=>t.xT,createCreateInvitationToGroupChatPayloadData:()=>En,createJoinGroupChatPayloadData:()=>vn,createLeaveGroupChatPayloadData:()=>fn,createReconnectPayloadData:()=>We,createSendEmailInvitationToGroupChatPayloadData:()=>Cn,default:()=>On,generateId:()=>E.v4,getAuthor:()=>rn,isAgentTypingEndedEvent:()=>nn,isAgentTypingStartedEvent:()=>tn,isAssignedAgentChangedEvent:()=>en,isAuthSuccessEvent:()=>$e,isContactCreatedEvent:()=>It,isContactRecipientsChangedEvent:()=>Rt,isContactStatusChangedEvent:()=>Nt,isContactToRoutingQueueAssignmentChangedEvent:()=>wt,isCustomerReconnectSuccessPayloadData:()=>An,isLoadMetadataSuccessPayload:()=>jt,isMessage:()=>sn,isMessageCreatedEvent:()=>an,isMessageReadChangedEvent:()=>un,isMessageSentEvent:()=>cn,isMoreMessagesLoadedEvent:()=>Pt,isRecoverSuccessEvent:()=>kt,isSetPositionInQueueEvent:()=>ln,isThreadArchivedSuccessPayload:()=>Lt,isThreadListFetchedPostbackData:()=>Qt,isTokenRefreshedSuccessResponse:()=>Ke,sendChatEvent:()=>Ye,sendCreateInvitationToGroupChatEvent:()=>hn,sendEmailInvitationToGroupChatEvent:()=>gn,sendJoinGroupChatEvent:()=>Tn,sendLeaveGroupChatEvent:()=>pn,splitName:()=>Pe});var e,t=r(455),n=r(441),o=r(154);!function(e){e.ACCESS_TOKEN="ACCESS_TOKEN",e.ACCESS_TOKEN_EXPIRES_IN="ACCESS_TOKEN_EXPIRES_IN",e.APP_NAME="APP_NAME",e.APP_VERSION="APP_VERSION",e.AUTHORIZATION_CODE="AUTHORIZATION_CODE",e.BRAND_ID="BRAND_ID",e.CHANNEL_ID="CHANNEL_ID",e.CUSTOMER_ID="CUSTOMER_ID",e.CUSTOMER_IMAGE="CUSTOMER_IMAGE",e.CUSTOMER_NAME="CUSTOMER_NAME",e.ENDPOINT_CHAT="ENDPOINT_CHAT",e.ENDPOINT_GATEWAY="ENDPOINT_GATEWAY",e.THREAD_DATA="THREAD_DATA";}(e||(e={}));const i=new class{constructor(){this._vars={};}set(e,t){this._vars[e]=t;}get(e,t){var n;return null!==(n=this._vars[e])&&void 0!==n?n:t}list(){return Object.keys(this._vars)}clear(){this._vars={};}},a=function(e){return null===e};function c(t){i.set(e.ACCESS_TOKEN,t.token),i.set(e.ACCESS_TOKEN_EXPIRES_IN,String(t.expiresIn));}function u(){const t=i.get(e.ACCESS_TOKEN,null),n=i.get(e.ACCESS_TOKEN_EXPIRES_IN,null);return a(t)||a(n)?null:{token:t,expiresIn:Number(n)}}class l extends Error{constructor(e,t){super(),this.name="ChatSDKError",this.message=`[ChatSDKError]: ${this._getErrorMessage(e)}`,this.data=t;}_getErrorMessage(e){return e instanceof Error?e.message:"string"==typeof e?e:JSON.stringify(e)}}class d extends l{constructor(e,t){super(e,t),void 0!==t&&(this.message=`${e} because of (${t.errorMessage})`);}}var E=r(459);function h(e){return {visitor:{id:e}}}var _=Object.prototype;const v=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||_)},T=(f=Object.keys,p=Object,function(e){return f(p(e))});var f,p,m=Object.prototype.hasOwnProperty;const C="object"==typeof _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.W&&_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.W&&_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.W.Object===Object&&_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.W;var g="object"==typeof self&&self&&self.Object===Object&&self;const A=C||g||Function("return this")(),O=A.Symbol;var y=Object.prototype,S=y.hasOwnProperty,b=y.toString,N=O?O.toStringTag:void 0;var I=Object.prototype.toString;var w=O?O.toStringTag:void 0;const R=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?function(e){var t=S.call(e,N),n=e[N];try{e[N]=void 0;var o=!0;}catch(e){}var r=b.call(e);return o&&(t?e[N]=n:delete e[N]),r}(e):function(e){return I.call(e)}(e)},D=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=function(e){if(!D(e))return !1;var t=R(e);return "[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},U=A["__core-js_shared__"];var M,G=(M=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var j=Function.prototype.toString;const k=function(e){if(null!=e){try{return j.call(e)}catch(e){}try{return e+""}catch(e){}}return ""};var L=/^\[object .+?Constructor\]$/,H=Function.prototype,x=Object.prototype,F=H.toString,B=x.hasOwnProperty,V=RegExp("^"+F.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Y=function(e){return !(!D(e)||function(e){return !!G&&G in e}(e))&&(P(e)?V:L).test(k(e))},W=function(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return Y(n)?n:void 0},Q=W(A,"DataView"),z=W(A,"Map"),$=W(A,"Promise"),K=W(A,"Set"),J=W(A,"WeakMap");var X="[object Map]",Z="[object Promise]",q="[object Set]",ee="[object WeakMap]",te="[object DataView]",ne=k(Q),oe=k(z),re=k($),se=k(K),ie=k(J),ae=R;(Q&&ae(new Q(new ArrayBuffer(1)))!=te||z&&ae(new z)!=X||$&&ae($.resolve())!=Z||K&&ae(new K)!=q||J&&ae(new J)!=ee)&&(ae=function(e){var t=R(e),n="[object Object]"==t?e.constructor:void 0,o=n?k(n):"";if(o)switch(o){case ne:return te;case oe:return X;case re:return Z;case se:return q;case ie:return ee}return t});const ce=ae,ue=function(e){return null!=e&&"object"==typeof e},le=function(e){return ue(e)&&"[object Arguments]"==R(e)};var de=Object.prototype,Ee=de.hasOwnProperty,he=de.propertyIsEnumerable;const _e=le(function(){return arguments}())?le:function(e){return ue(e)&&Ee.call(e,"callee")&&!he.call(e,"callee")},ve=Array.isArray,Te=function(e){return "number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var fe=exports&&!exports.nodeType&&exports,pe=fe&&"object"=='object'&&module&&!module.nodeType&&module,me=pe&&pe.exports===fe?A.Buffer:void 0;const Ce=(me?me.isBuffer:void 0)||function(){return !1};var ge={};ge["[object Float32Array]"]=ge["[object Float64Array]"]=ge["[object Int8Array]"]=ge["[object Int16Array]"]=ge["[object Int32Array]"]=ge["[object Uint8Array]"]=ge["[object Uint8ClampedArray]"]=ge["[object Uint16Array]"]=ge["[object Uint32Array]"]=!0,ge["[object Arguments]"]=ge["[object Array]"]=ge["[object ArrayBuffer]"]=ge["[object Boolean]"]=ge["[object DataView]"]=ge["[object Date]"]=ge["[object Error]"]=ge["[object Function]"]=ge["[object Map]"]=ge["[object Number]"]=ge["[object Object]"]=ge["[object RegExp]"]=ge["[object Set]"]=ge["[object String]"]=ge["[object WeakMap]"]=!1;var Ae=exports&&!exports.nodeType&&exports,Oe=Ae&&"object"=='object'&&module&&!module.nodeType&&module,ye=Oe&&Oe.exports===Ae&&C.process,Se=function(){try{return Oe&&Oe.require&&Oe.require("util").types||ye&&ye.binding&&ye.binding("util")}catch(e){}}(),be=Se&&Se.isTypedArray;const Ne=be?function(e){return function(t){return e(t)}}(be):function(e){return ue(e)&&Te(e.length)&&!!ge[R(e)]};var Ie=Object.prototype.hasOwnProperty;const we=function(e){if(null==e)return !0;if(function(e){return null!=e&&Te(e.length)&&!P(e)}(e)&&(ve(e)||"string"==typeof e||"function"==typeof e.splice||Ce(e)||Ne(e)||_e(e)))return !e.length;var t=ce(e);if("[object Map]"==t||"[object Set]"==t)return !e.size;if(v(e))return !function(e){if(!v(e))return T(e);var t=[];for(var n in Object(e))m.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e).length;for(var n in e)if(Ie.call(e,n))return !1;return !0},Re=new Map,De=async(e,t)=>{if(a(t))throw new l("WebSocketClient is not initialized");return we(e.eventId)&&(e.eventId=(0, E.v4)()),new Promise((n=>{Re.set(e.eventId,n),null==t||t.send(e);}))};function Pe(e){const[t,...n]=e.split(" ");return [t,n.join(" ")]}function Ue(e,t={}){for(const n of Object.keys(t))e.set(n,t[n]);}function Me(e,t=[]){for(const{ident:n,value:o}of t)e.set(n,o);}function Ge(e){return Object.fromEntries(e)}function je(e){return Array.from(e).map((([e,t])=>({ident:e,value:t})))}class ke{constructor(e,t,n,o){this._customFields=new Map,this._exists=!1,this._websocketClient=o,ke.setId(e),ke.setName(t),n&&ke.setImage(n);}static setId(t){i.set(e.CUSTOMER_ID,t);}static getId(){return i.get(e.CUSTOMER_ID,null)}static getName(){return i.get(e.CUSTOMER_NAME)}static setName(t){i.set(e.CUSTOMER_NAME,t);}static getIdOrCreateNewOne(){let e=this.getId();return e||(e=(0, E.v4)(),this.setId(e)),e}static getImage(){return i.get(e.CUSTOMER_IMAGE)}static setImage(t){i.set(e.CUSTOMER_IMAGE,t);}getId(){return ke.getIdOrCreateNewOne()}getName(){return ke.getName()}setName(e){ke.setName(e);}setImage(e){ke.setImage(e);}setExists(e){this._exists=e;}setCustomField(e,t){return this.setCustomFields({[e]:t})}setCustomFields(e){if(Ue(this._customFields,e),this._exists)return this.sendCustomFields()}getCustomFields(){return Ge(this._customFields)}setCustomFieldsFromArray(e){Me(this._customFields,e);}getCustomFieldsArray(){return je(this._customFields)}async sendCustomFields(){var e;return Ye((e=je(this._customFields),{eventType:o.YU.SEND_CONSUMER_CUSTOM_FIELDS,data:{customFields:e}}),this._websocketClient)}}function Le(e,t){const n=ke.getName(),o=ke.getImage();let r={};if("string"==typeof n&&n.length>0){const[e,t]=Pe(n);r={firstName:e,lastName:t};}return o&&(r.image=o),Object.assign({idOnExternalPlatform:ke.getIdOrCreateNewOne()},r)}const He=function(e){return null==e};function xe(){const t=parseInt(i.get(e.BRAND_ID)),n=i.get(e.CHANNEL_ID);if(He(t)||isNaN(t)||He(n))throw new l(`Cannot get BrandId and ChannelId from SDKVariableStorage \n      brandId (${t}) |\n      channelId (${n})`);return {brandId:t,channelId:n}}const Fe=function(e){return void 0===e};function Be(e){const{eventType:t,data:n,consumerIdentity:o=Le(),destination:r={},visitor:s={}}=e,{brandId:i,channelId:a}=xe();if(Fe(t))throw new l(`Cannot create an event payload because of missing eventType (${t})`);return {eventType:t,brand:{id:Number(i)},channel:{id:a},consumerIdentity:o,data:n,destination:r,visitor:s}}function Ve(e,t=(0, E.v4)(),o=n.p.CHAT_WINDOW_EVENT){return {action:o,eventId:t,payload:e}}async function Ye(e,t){const n=Ve(Be(e));return De(n,t)}function We(e,t){return Object.assign(Object.assign(Object.assign({},h(t)),Le()),{eventType:o.YU.RECONNECT_CONSUMER,data:{accessToken:{token:e.token}}})}let Qe=null;function ze(e,t){null!==Qe&&clearTimeout(Qe),Qe=setTimeout(t,1e3*function(e){const t=Math.round(.9*e);return t<20?20:t}(e.expiresIn));}const $e=e=>{var t;const n=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.status;return (null==e?void 0:e.type)===o.Ne.CONSUMER_AUTHORIZED&&"success"===n};function Ke(e){var t,n;return (null==e?void 0:e.type)===o.Ne.TOKEN_REFRESHED&&void 0!==(null===(n=null===(t=e.data)||void 0===t?void 0:t.accessToken)||void 0===n?void 0:n.token)}var Je;!function(e){e.AU1="AU1",e.CA1="CA1",e.EU1="EU1",e.JP1="JP1",e.NA1="NA1",e.UK1="UK1",e.custom="custom";}(Je||(Je={}));var Xe=r(403);const Ze=Object.assign(Object.assign(Object.assign({},Xe.m),o.Ne),{AGENT_TYPING_STARTED:"AgentTypingStarted",AGENT_TYPING_ENDED:"AgentTypingEnded",ASSIGNED_AGENT_CHANGED:"AssignedAgentChanged",CONTACT_CREATED:"ContactCreated",CONTACT_STATUS_CHANGED:"ContactStatusChanged",CONTACT_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED:"ContactToRoutingQueueAssignmentChanged"});class qe extends CustomEvent{}class et{constructor(){this.middlewares=[];}register(e){this.middlewares.push(e);}process(e){if(He(e))return null;let t=e;for(const e of this.middlewares){if(null===t)return null;t=e(t);}return t}}const tt=EventTarget;function nt(e){return !He(null==e?void 0:e.user)}var ot=r(910),rt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);}return n};const st={id:"",data:null,type:void 0,createdAt:new Date};function it(e){var t;if(!(e=>"eventId"in e)(e))return st;if((e=>"error"in e)(e))return {createdAt:(0, ot.Nf)(null!==(t=e.createdAt)&&void 0!==t?t:(new Date).toString()),data:null,error:e.error,id:e.eventId};const n=(e=>"eventType"in e)(e)?e.eventType:void 0;if((e=>"data"in e)(e))return {createdAt:(0, ot.Nf)(e.createdAt),context:e.context,data:e.data,id:e.eventId,type:n};if((e=>{const t=null==e?void 0:e.postback;return !1===we(t)})(e)){const{postback:{data:t,eventType:n},eventId:o}=e,r=rt(e,["postback","eventId"]);return {type:n,data:Object.assign(Object.assign({},r),t),createdAt:(0, ot.Nf)(e.createdAt),id:o}}const{eventId:o}=e,r=rt(e,["eventId"]);return Object.assign(Object.assign({data:void 0},r),{id:o,type:n,createdAt:(0, ot.Nf)(e.createdAt)})}const at={[Ze.SENDER_TYPING_STARTED]:function(e){return nt(e.data)?Object.assign(Object.assign({},e),{type:Ze.AGENT_TYPING_STARTED}):e},[Ze.SENDER_TYPING_ENDED]:function(e){return nt(e.data)?Object.assign(Object.assign({},e),{type:Ze.AGENT_TYPING_ENDED}):e},[Ze.CASE_INBOX_ASSIGNEE_CHANGED]:function(e){return Object.assign(Object.assign({},e),{type:Ze.ASSIGNED_AGENT_CHANGED})},[Ze.CASE_CREATED]:function(e){return Object.assign(Object.assign({},e),{type:Ze.CONTACT_CREATED})},[Ze.CASE_STATUS_CHANGED]:function(e){return Object.assign(Object.assign({},e),{type:Ze.CONTACT_STATUS_CHANGED})},[Ze.CASE_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED]:function(e){return Object.assign(Object.assign({},e),{type:Ze.CONTACT_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED})},[Ze.LIVECHAT_RECOVERED]:function(e){const t=e.data.contactHistory.map(it);return Object.assign(Object.assign({},e),{data:Object.assign(Object.assign({},e.data),{contactHistory:t})})},[Ze.THREAD_RECOVERED]:function(e){const t=e.data.contactHistory.map(it);return Object.assign(Object.assign({},e),{data:Object.assign(Object.assign({},e.data),{contactHistory:t})})}};function ct(e){return e.type&&void 0!==at[e.type]?at[e.type](e):e}function ut(e){const t=!1===Fe(null==e?void 0:e.id);return !1==(!1===Fe(e.error))&&t}class lt extends l{}var dt=r(115);var Et=r(893),ht=r(415);class _t extends Error{constructor(e,t=""){super(`[WebSocketClientError]: ${e}${t?` (${t})`:""}`),this.name="WebSocketClientError";}}class vt{constructor(e,t,n,o,r){this.brandId=e,this.channelId=t,this.customerId=n,this.options=o,this.onError=r,this._connection=null,this.connect();}connect(){var n,o,r,s,a,c,u,l,d,E,h,_;const v=(null===(n=this.options)||void 0===n?void 0:n.port)?`:${null===(o=this.options)||void 0===o?void 0:o.port}`:"",T=(null===(r=this.options)||void 0===r?void 0:r.host)?`${null===(s=this.options)||void 0===s?void 0:s.host}${v}`:"",f=null!==(c=null===(a=this.options)||void 0===a?void 0:a.prefix)&&void 0!==c?c:"",p=null===(l=null===(u=this.options)||void 0===u?void 0:u.forceSecureProtocol)||void 0===l||l,m=function(t,n,o,r,s){const a={brandId:o,channelId:r,consumerId:s,v:i.get(e.APP_VERSION)};return `${t}/${n}?${(0, Et.P)(a)}`}(T,f,this.brandId,this.channelId,this.customerId);this._connection=(0, ht.setupSocketConnection)(m,{startClosed:!0,forceSecureProtocol:p});const C=this._errorHandler.bind(this);null===(d=this._connection)||void 0===d||d.addEventListener(t.xT.CLOSE,C),null===(E=this._connection)||void 0===E||E.addEventListener(t.xT.ERROR,C),null===(_=null===(h=this._connection)||void 0===h?void 0:h.socket)||void 0===_||_.reconnect();}disconnect(){var e;null===(e=this._connection)||void 0===e||e.socket.close();}reconnect(){var e;null===(e=this._connection)||void 0===e||e.socket.reconnect();}send(e){var t;const n=JSON.stringify(e);null===(t=this._connection)||void 0===t||t.send(n);}on(e,t){var n;null===(n=this._connection)||void 0===n||n.addEventListener(e,t);}off(e,t){var n;null===(n=this._connection)||void 0===n||n.removeEventListener(e,t);}_errorHandler(e){const t=e.detail;let n;if(t instanceof ErrorEvent&&(n=new _t("Connection error",t.message)),t instanceof CloseEvent&&(n=new _t("Connection closed",t.reason)),void 0===n&&(n=new _t("Unknown error",t.type)),"function"!=typeof this.onError)throw n;this.onError(n);}}var Tt=r(880),ft=r(585),pt=r.n(ft),mt=r(58);const Ct=()=>navigator.language,gt=()=>Intl.DateTimeFormat().resolvedOptions().timeZone;function At(e){switch(e){case"mobile":return mt.Yi.MOBILE;case"tablet":return mt.Yi.TABLET;default:return mt.Yi.DESKTOP}}const Ot=(e={})=>{var t,n,o,r;const s=new(pt())(navigator.userAgent),{country:i="",location:a=gt(),language:c=Ct(),ip:u=null}=e;return {browser:null!==(t=s.getBrowser().name)&&void 0!==t?t:null,browserVersion:null!==(n=s.getBrowser().version)&&void 0!==n?n:null,country:i,ip:u,language:c,location:a,os:null!==(o=s.getOS().name)&&void 0!==o?o:null,osVersion:null!==(r=s.getOS().version)&&void 0!==r?r:null,deviceType:At(s.getDevice().type),applicationType:mt.vQ.BROWSER}};var yt=r(354);class St extends l{}const bt=async(t,n,o)=>{const r=await(async e=>{const t=await function(e){return new Promise(((t,n)=>{const o=new FileReader;o.onloadend=()=>{t(o);},o.onerror=e=>{var t,o;return n(null===(o=null===(t=e.target)||void 0===t?void 0:t.error)||void 0===o?void 0:o.message)},o.readAsDataURL(e);}))}(e);if(null!==t.error)throw new l(`Cannot create payload for attachment upload because of error (${t.error.message})`);if("string"!=typeof t.result)throw new l(`Cannot create payload for attachment upload because of missing:\n      reader result (${t.result})`);return {url:t.result,name:e.name,mimeType:e.type}})(t),s=await async function(t,n,o){const r=i.get(e.ENDPOINT_CHAT),{url:s,name:a,mimeType:c}=o,u={content:s.split(";base64,")[1],fileName:a,mimeType:c},d=await fetch(`${r}/chat/1.0/brand/${t}/channel/${n}/attachment`,{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json",[yt.GO]:i.get(e.APP_NAME)}});if(!d.ok)throw new l(`Failed to upload Attachments. Status (${d.status})`);return d.json()}(n,o,r);if(!1===Fe(null==(a=s)?void 0:a.fileUrl))return {url:s.fileUrl,friendlyName:r.name};var a;if(function(e){return !1===Fe(null==e?void 0:e.allowedFileSize)}(s))throw new St("Upload attachment failed",s);throw new l(`Unknown file upload response (${s})`)};function Nt(e){var t,n;return e.type===Ze.CONTACT_STATUS_CHANGED&&void 0!==(null===(n=null===(t=e.data)||void 0===t?void 0:t.case)||void 0===n?void 0:n.id)}function It(e){var t,n;return e.type===Ze.CONTACT_CREATED&&void 0!==(null===(n=null===(t=e.data)||void 0===t?void 0:t.case)||void 0===n?void 0:n.id)}function wt(e){var t,n;return e.type===Ze.CONTACT_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED&&void 0!==(null===(n=null===(t=e.data)||void 0===t?void 0:t.case)||void 0===n?void 0:n.id)}function Rt(e){return e.type===Xe.m.CONTACT_RECIPIENTS_CHANGED}const Dt=(e,t,n,o=Ot())=>({messageContent:e,browserFingerprint:o,idOnExternalPlatform:t,thread:{idOnExternalPlatform:n},consumer:{customFields:[]},consumerContact:{customFields:[]},attachments:[]});function Pt(e){var t;return e.type===o.Ne.MORE_MESSAGES_LOADED&&void 0!==(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.messages)}const Ut=e=>({eventType:o.YU.LOAD_MORE_MESSAGES,data:e});class Mt extends l{}class Gt extends l{}const jt=e=>e.type===o.Ne.THREAD_METADATA_LOADED&&void 0!==e.data.lastMessage,kt=e=>{const t=e.data,n=!1===Fe(t),r=!1===Fe(null==t?void 0:t.messages),s=e.type===o.Ne.THREAD_RECOVERED||e.type===o.Ne.LIVECHAT_RECOVERED,i=Fe(e.error);return n&&r&&i&&s};function Lt(e){return e.type===o.Ne.THREAD_ARCHIVED}class Ht extends l{}function xt(e){const t={eventType:o.YU.RECOVER_THREAD,data:{}};return void 0===e?t:Object.assign(Object.assign({},t),{data:{thread:{idOnExternalPlatform:e}}})}class Ft extends l{}class Bt extends l{}class Vt{constructor(e,t,n,o,r={},s=!1){this._exists=!1,this._typingTimeoutID=void 0,this._isAuthorizationEnabled=!1,this._customFields=new Map,this._typingPreviewText="",this.idOnExternalPlatform=e,this._websocketClient=t,this._messageEmitter=n,this._customer=o,this._isAuthorizationEnabled=s,Ue(this._customFields,r),this._registerEventHandlers();}async recover(){const e=await Ye(xt(this.idOnExternalPlatform),this._websocketClient);if(kt(e)){const t=e.data,{contact:n,consumerContact:o}=t,r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);}return n}(t,["contact","consumerContact"]);return Object.assign(Object.assign({},r),{contact:null!=n?n:o})}throw new Bt("Thread recover fail",e)}async sendMessage(e){return (async(e,t)=>{const n=(r=e,{eventType:o.YU.SEND_MESSAGE,data:r});var r;const s=await Ye(n,t);if(ut(s))return s;throw new lt("Send message failed",s)})(this._mergeCustomFieldsAndAccessTokenWithMessageData(e,!1),this._websocketClient)}async sendTextMessage(e,t={}){const{messageId:n=(0, E.v4)(),browserFingerprint:o=Ot()}=t,r=function(e){return {payload:{text:e},type:dt.C.TEXT}}(e),s=Dt(r,n,this.idOnExternalPlatform,o);return this.sendMessage(s)}async sendPostbackMessage(e,t,n={}){const{messageId:o=(0, E.v4)(),browserFingerprint:r=Ot()}=n,s=function(e,t){return {payload:{text:t,postback:e},postback:e,type:dt.C.TEXT}}(e,t),i=Dt(s,o,this.idOnExternalPlatform,r);return this.sendMessage(i)}async sendOutboundMessage(e){return (async(e,t)=>{const n=(r=e,{eventType:o.YU.SEND_OUTBOUND,data:r});var r;const s=await Ye(n,t);if(ut(s))return s;throw new lt("Send Outbound message failed",s)})(this._mergeCustomFieldsAndAccessTokenWithMessageData(e,!0),this._websocketClient)}async loadMoreMessages(){var t;const{scrollToken:n,oldestMessageDatetime:o}=null!==(t=JSON.parse(i.get(e.THREAD_DATA,"{}")))&&void 0!==t?t:{};if(we(n))return null;const r={scrollToken:n,oldestMessageDatetime:o,thread:{idOnExternalPlatform:this.idOnExternalPlatform}},s=await Ye(Ut(r),this._websocketClient);if(Pt(s))return s;throw new Ht("Load more messages failed",s)}async lastMessageSeen(){var e;return Ye((e=this.idOnExternalPlatform,{eventType:o.YU.MESSAGE_SEEN,data:{thread:{idOnExternalPlatform:e}}}),this._websocketClient)}async sendAttachments(e,t={}){if(Fe(e)||0===e.length)throw new l("FileList must be provided to sendAttachment method");const n=await(async(e,t,n={})=>{const{brandId:o,channelId:r}=xe();try{const s=await Promise.all(Array.from(e).map((async e=>bt(e,o,r)))),{messageId:i=(0,E.v4)(),browserFingerprint:a=Ot()}=n;return {messageContent:{type:dt.C.TEXT,payload:{text:""}},attachments:s,browserFingerprint:a,thread:{idOnExternalPlatform:t},idOnExternalPlatform:i,consumer:{customFields:[]},consumerContact:{customFields:[]}}}catch(e){if(e instanceof St)throw e;if(e instanceof Error)throw new l(`Send attachment failed because of (${e.message})`);throw new l("Unknown error during file upload")}})(e,this.idOnExternalPlatform,t);return this.sendMessage(n)}keystroke(e=1e3,t){var n;this._typingTimeoutID||Ye((n=this.idOnExternalPlatform,{eventType:o.YU.SENDER_TYPING_STARTED,data:{thread:{idOnExternalPlatform:n}}}),this._websocketClient),clearTimeout(this._typingTimeoutID),this._typingTimeoutID=setTimeout((()=>{this._stopTypingCallback(t);}),e);}stopTyping(){this._stopTypingCallback();}_stopTypingCallback(e){var t;clearTimeout(this._typingTimeoutID),this._typingTimeoutID=void 0,Ye((t=this.idOnExternalPlatform,{eventType:o.YU.SENDER_TYPING_ENDED,data:{thread:{idOnExternalPlatform:t}}}),this._websocketClient),"function"==typeof e&&e();}keystrokeForPreview(e,t=1250){this._typingPreviewText=e,this._typingForPreviewTimeoutID||(this._typingForPreviewTimeoutID=setTimeout((()=>{this.stopTypingForPreview();}),t));}stopTypingForPreview(e=!0){clearTimeout(this._typingForPreviewTimeoutID),this._typingForPreviewTimeoutID=void 0;const t=this._typingPreviewText;this._typingPreviewText="",!1!==e&&this.sendMessagePreview(t);}async getMetadata(){const e=await Ye((t=this.idOnExternalPlatform,{eventType:o.YU.LOAD_THREAD_METADATA,data:{thread:{idOnExternalPlatform:t}}}),this._websocketClient);var t;if(jt(e))return e;throw new Gt("Get metadata failed",e)}onThreadEvent(e,t){const n=((e,t)=>n=>{(e=>{var t,n,o,r,s,i,a;const c=e;return null!==(i=null!==(r=null!==(n=null===(t=null==c?void 0:c.thread)||void 0===t?void 0:t.idOnExternalPlatform)&&void 0!==n?n:null===(o=null==c?void 0:c.case)||void 0===o?void 0:o.threadIdOnExternalPlatform)&&void 0!==r?r:null===(s=null==c?void 0:c.message)||void 0===s?void 0:s.threadIdOnExternalPlatform)&&void 0!==i?i:null===(a=null==c?void 0:c.messagePreview)||void 0===a?void 0:a.threadIdOnExternalPlatform})(n.detail.data)===e&&t(n);})(this.idOnExternalPlatform,t);return this._messageEmitter.addEventListener(e,n),()=>{this._messageEmitter.removeEventListener(e,n);}}async sendCustomFields(){var e,t;return Ye((e=je(this._customFields),t=this.idOnExternalPlatform,{eventType:o.YU.SET_CONSUMER_CONTACT_CUSTOM_FIELD,data:{customFields:e,thread:{idOnExternalPlatform:t}}}),this._websocketClient)}async setCustomFields(e){Ue(this._customFields,e),!1!==this._exists&&await this.sendCustomFields();}setCustomField(e,t){return this.setCustomFields({[e]:t})}async archive(){const e=await Ye((t=this.idOnExternalPlatform,{eventType:o.YU.ARCHIVE_THREAD,data:{thread:{idOnExternalPlatform:t}}}),this._websocketClient);var t;if(Lt(e))return !0;throw new Mt("Archive Thread failed",e)}async setName(e){const t=(n=this.idOnExternalPlatform,r=e,{eventType:o.YU.UPDATE_THREAD,data:{thread:{idOnExternalPlatform:n,threadName:r}}});var n,r;const s=await Ye(t,this._websocketClient);if(function(e){return Fe(e.error)}(s))return !0;throw new Ft("Set Thread name failed",s)}async sendMessagePreview(e){const t=((e,t)=>({eventType:o.YU.SEND_MESSAGE_PREVIEW,data:{thread:{idOnExternalPlatform:e},messageContent:{payload:{text:t},type:dt.C.TEXT}}}))(this.idOnExternalPlatform,e);await Ye(t,this._websocketClient);}async sendTranscript(e,t){const n=((e,t)=>({eventType:o.YU.SEND_TRANSCRIPT,data:{consumerContact:{id:e},consumerRecipients:[{idOnExternalPlatform:t}]}}))(e,t);return Ye(n,this._websocketClient)}_setThreadAndCustomerExists(){var e;this._exists=!0,null===(e=this._customer)||void 0===e||e.setExists(!0);}_clearCustomFieldsOnContactStatusChangedToClosed(e){const t=e.detail;Nt(t)&&t.data.case.status===Tt.P.CLOSED&&this._customFields.clear();}_mergeCustomFieldsAndAccessTokenWithMessageData(e,t){var n,o,r,s,i,a;let c;const l=null!==(n=this._isAuthorizationEnabled&&u())&&void 0!==n&&n;!1!==l&&(c={token:l.token}),Me(this._customFields,e.consumerContact.customFields);const d={customFields:je(this._customFields)};let E;return t||(null===(o=this._customer)||void 0===o||o.setCustomFieldsFromArray(null!==(s=null===(r=e.consumer)||void 0===r?void 0:r.customFields)&&void 0!==s?s:[]),E={customFields:null!==(a=null===(i=this._customer)||void 0===i?void 0:i.getCustomFieldsArray())&&void 0!==a?a:[]}),Object.assign(Object.assign({},e),{accessToken:c,consumer:E,consumerContact:d})}_registerEventHandlers(){this.onThreadEvent(Ze.CASE_CREATED,(()=>this._setThreadAndCustomerExists())),this.onThreadEvent(Ze.CONTACT_CREATED,(()=>this._setThreadAndCustomerExists())),this.onThreadEvent(Ze.THREAD_RECOVERED,(()=>this._setThreadAndCustomerExists())),this.onThreadEvent(Ze.CONTACT_STATUS_CHANGED,(e=>this._clearCustomFieldsOnContactStatusChangedToClosed(e)));}}function Yt(e){const t={eventType:o.YU.RECOVER_LIVECHAT,data:{}};return void 0===e?t:Object.assign(Object.assign({},t),{data:{thread:{idOnExternalPlatform:e}}})}class Wt extends Vt{constructor(e,t,n,o,r={},s=!1){super(e,t,n,o,r,s),this._isInitialized=!1,this._canSendMessage=!0,this._registerLivechatEventHandlers();}async recover(){const e=await Ye(Yt(this.idOnExternalPlatform),this._websocketClient);if(kt(e)){const t=e.data,{contact:n,consumerContact:o}=t,r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);}return n}(t,["contact","consumerContact"]);return Object.assign(Object.assign({},r),{contact:null!=n?n:o})}throw new Bt("Thread recover fail",e)}async sendMessage(e){if(!1===this._canSendMessage)throw new l("Cannot send more messages to Contact");return super.sendMessage(e)}async startChat(e="Begin conversation"){if(this._isInitialized)throw new l("Chat is already initialized");try{const t=await this.sendTextMessage(e);return this._isInitialized=!0,t}catch(e){if(e instanceof Error)throw new l(`Sending initial message failed because of (${e.message})`);return}}async endChat(){const t=i.get(e.THREAD_DATA,"{}"),n=JSON.parse(t),r=null==n?void 0:n.contactId;if(Fe(r))throw new l("Cannot end Chat because of missing ContactId in the storage");await Ye(function(e,t){return {eventType:o.YU.END_CONTACT,data:{thread:{idOnExternalPlatform:e},contact:{id:t}}}}(this.idOnExternalPlatform,r),this._websocketClient);}async loadMoreMessages(){var t;const{scrollToken:n,oldestMessageDatetime:o,contactId:r}=null!==(t=JSON.parse(i.get(e.THREAD_DATA,"{}")))&&void 0!==t?t:{};if(we(n)||we(r))return null;const s={scrollToken:n,oldestMessageDatetime:o,thread:{idOnExternalPlatform:this.idOnExternalPlatform},contact:{id:r}},a=await Ye(Ut(s),this._websocketClient);if(Pt(a))return a;throw new Ht("Load more messages failed",a)}_registerLivechatEventHandlers(){this.onThreadEvent(Ze.LIVECHAT_RECOVERED,(e=>{kt(e.detail)&&this._setThreadAndCustomerExists();}));}}const Qt=e=>!a(e)&&"threads"in e;function zt(t){const n=i.get(e.THREAD_DATA,"{}"),o=JSON.parse(n)||{};i.set(e.THREAD_DATA,JSON.stringify(Object.assign(Object.assign({},o),{contactId:t})));}function $t(e){var t,n,o;return It(e)&&zt(e.data.case.id),kt(e)&&zt(null!==(n=null===(t=e.data.consumerContact)||void 0===t?void 0:t.caseId)&&void 0!==n?n:null===(o=e.data.contact)||void 0===o?void 0:o.id),e}function Kt(t){var n;const o=null===(a=t.messages,n=(c=null==a?0:a.length)?a[c-1]:void 0)||void 0===n?void 0:n.createdAt,r=i.get(e.THREAD_DATA,"{}"),s=JSON.parse(r)||{};var a,c;i.set(e.THREAD_DATA,JSON.stringify(Object.assign(Object.assign({},s),{scrollToken:t.scrollToken,oldestMessageDatetime:Fe(o)?"":o})));}function Jt(e){if(kt(e)){const{messages:t,messagesScrollToken:n}=e.data;Kt({messages:t,scrollToken:n});}if(Pt(e)){const{scrollToken:t,messages:n}=e.data;Kt({scrollToken:t,messages:n});}return e}class Xt extends Error{constructor(e="Aborted"){super(e),this.name="AbortError";}}class Zt extends Promise{constructor(e){const t=new AbortController,n=t.signal;super(((t,o)=>{n.addEventListener("abort",(()=>{o(new Xt(this.abortReason));})),null==e||e(t,o,n);})),this.abort=e=>{this._abortReason=null!=e?e:"Aborted",t.abort();};}get abortReason(){return this._abortReason}}Zt.from=e=>e instanceof Zt?e:new Zt(((t,n)=>{e.then(t).catch(n);}));class qt{constructor(t){var n,r;if(this.isLivechat=!1,this.channelId="",this.websocketClient=null,this.customer=null,this._incomingChatEventMiddleware=new et,this.isAuthorizationEnabled=!1,this._threadCache=new Map,this._contactCustomFieldsQueue=new Map,this._sendRefreshTokenEvent=async()=>{const e=u();if(a(e))return;const t=await Ye((n=e.token,{eventType:o.YU.REFRESH_TOKEN,data:{accessToken:{token:n}}}),this.websocketClient);var n;if(Ke(t))return c(t.data.accessToken),void ze(t.data.accessToken,this._sendRefreshTokenEvent);throw new d("An error occurred while refreshing the access token",t.error)},void 0===t)throw new l("No options was provided for initialization of ChatSdk");i.set(e.AUTHORIZATION_CODE,t.authorizationCode),i.set(e.BRAND_ID,`${t.brandId}`),i.set(e.CHANNEL_ID,t.channelId),i.set(e.APP_NAME,null!==(n=t.appName)&&void 0!==n?n:"chat-web-sdk"),i.set(e.APP_VERSION,`${null!==(r=t.appVersion)&&void 0!==r?r:0}`);const{brandId:s,channelId:E}=xe();this.onError=t.onError,this.onRawEvent=t.onRawEvent,this._incomingChatEventMiddleware.register(ct),this._incomingChatEventMiddleware.register(Jt),this._incomingChatEventMiddleware.register($t),this._messageEmitter=new tt;try{if(isNaN(s))throw new Error("Missing BrandID");if(void 0===E)throw new Error("Missing ChannelId");if(void 0===t.customerId)throw new Error("Missing CustomerId");this._initEnvironment(t),this._initWS(s,E,t.customerId),this.customer=new ke(t.customerId,t.customerName,t.customerImage,this.websocketClient),this.channelId=E;}catch(e){this.onErrorHandler(e);}}onErrorHandler(e){if("function"!=typeof this.onError)throw new l(e);this.onError(new l(e));}async authorize(t,r){var s,a,_,v,T,f,p;const m=u();if(null!==m)try{const e=await async function(e,t,n,o){const r=We(n,o),s=await Ye(r,e);if(void 0!==s.error)throw new d("Authorization reconnect failed",s.error);return ze(n,t),{reconnected:!0}}(this.websocketClient,this._sendRefreshTokenEvent,m,r);return e}catch(e){}const C=function(e,t=(0, E.v4)()){return Object.assign({eventType:o.YU.AUTHORIZE_CUSTOMER,data:{authorization:{authorizationCode:e}}},h(t))}(null!=t?t:i.get(e.AUTHORIZATION_CODE,null),r),g=Ve(Be(C),(0, E.v4)(),n.p.REGISTER),A=await De(g,this.websocketClient);if(!$e(A))throw null===(s=this.websocketClient)||void 0===s||s.disconnect(),new d("Authorization failed",A.error);const{consumerIdentity:O,customer:y,channel:S,contact:b}=A.data,N=null==O?void 0:O.idOnExternalPlatform;if(He(I=N)||""===I)throw null===(a=this.websocketClient)||void 0===a||a.disconnect(),new l("Invalid customer identity");var I;ke.setId(N),void 0===O.firstName&&void 0===O.lastName||ke.setName(`${O.firstName} ${O.lastName}`);const w=O.image;return void 0!==w&&ke.setImage(w),(null==y?void 0:y.customFields)&&(null===(_=this.customer)||void 0===_||_.setCustomFieldsFromArray(y.customFields)),(null==b?void 0:b.customFields)&&Me(this._contactCustomFieldsQueue,b.customFields),this.isLivechat=null!==(T=null===(v=null==S?void 0:S.settings)||void 0===v?void 0:v.isLivechat)&&void 0!==T&&T,this.isAuthorizationEnabled=null!==(f=null==S?void 0:S.settings.isAuthorizationEnabled)&&void 0!==f&&f,void 0!==(null===(p=A.data.accessToken)||void 0===p?void 0:p.token)&&(c(A.data.accessToken),ze(A.data.accessToken,this._sendRefreshTokenEvent)),A.data}async generateAuthorizationToken(e,t){const n=await Ye(function(e,t){return {eventType:o.YU.GENERATE_AUTHORIZATION_TOKEN,data:{thread:{idOnExternalPlatform:e},url:t}}}(e,t),this.websocketClient);if(!("authorizationToken"in n.data))throw new l("Invalid response from generate authorization token (generateAuthorizationToken)");const{authorizationToken:r}=n.data;return r}onChatEvent(e,t){return this._messageEmitter.addEventListener(e,t),()=>{this._messageEmitter.removeEventListener(e,t);}}getCustomer(){return this.customer}getThread(e){if(a(this.websocketClient))throw new l("Cannot get thread because websocket is disconnected");if(He(e))throw new l("Cannot get thread because id is undefined");const t=this._threadCache.get(e);if(!Fe(t))return t;if(this.isLivechat){const t=new Wt(e,this.websocketClient,this._messageEmitter,this.customer,this._getContactCustomFieldsFromQueue(),this.isAuthorizationEnabled);return this._threadCache.set(e,t),t}const n=new Vt(e,this.websocketClient,this._messageEmitter,this.customer,this._getContactCustomFieldsFromQueue(),this.isAuthorizationEnabled);return this._threadCache.set(e,n),n}async getThreadList(){if(a(this.websocketClient))throw new l("Cannot get thread list because websocket is disconnected");const e={eventType:o.YU.FETCH_THREAD_LIST,data:{}},t=await Ye(e,this.websocketClient);if(!Qt(t.data))throw new l("Invalid response from fetch thread list (getThreadList)");return t.data.threads}getWebsocketClient(){return this.websocketClient}async sendOfflineMessage(e){return (async(e,t)=>{const n=(e=>{const[t,...n]=e.name.split(" ").reverse(),r=n.reverse().join(" "),s={idOnExternalPlatform:e.email,firstName:r,lastName:t},i={messageContent:{type:dt.C.TEXT,payload:{text:e.message}}};return {eventType:o.YU.SEND_OFFLINE_MESSAGE,consumerIdentity:s,data:i}})(e),r=await Ye(n,t);if(ut(r))return r;throw new lt("Send offline message failed",r)})(e,this.websocketClient)}recoverThreadData(e){return new Zt((async(t,n)=>{const o=xt(e),r=await Ye(o,this.websocketClient);kt(r)?t(r):n(new l("Invalid response from recover livechat thread"));}))}recoverLivechatThreadData(e){return new Zt((async(t,n)=>{const o=Yt(e),r=await Ye(o,this.websocketClient);kt(r)?t(r):n(new l("Invalid response from recover livechat thread"));}))}_getContactCustomFieldsFromQueue(){if(this._contactCustomFieldsQueue.size>0){const e=Ge(this._contactCustomFieldsQueue);return this._contactCustomFieldsQueue.clear(),e}return {}}_initEnvironment(t){var n,o;if(t.environment===Je.custom){if(we(t.customEnvironment))throw new l('customEnvironment must be provided when environment is set to "custom"');return i.set(e.ENDPOINT_GATEWAY,null===(n=t.customEnvironment)||void 0===n?void 0:n.gateway),void i.set(e.ENDPOINT_CHAT,null===(o=t.customEnvironment)||void 0===o?void 0:o.chat)}const{gateway:r,chat:s}=function(e){const t="{ENV}",n="https://channels-de-{ENV}.niceincontact.com",o="wss://chat-gateway-de-{ENV}.niceincontact.com";switch(e){case Je.AU1:return {chat:n.replace(t,"au1"),name:"Australia",gateway:o.replace(t,"au1")};case Je.CA1:return {chat:n.replace(t,"ca1"),name:"Canada",gateway:o.replace(t,"ca1")};case Je.EU1:return {chat:n.replace(t,"eu1"),name:"Europe",gateway:o.replace(t,"eu1")};case Je.JP1:return {chat:n.replace(t,"jp1"),name:"Japan",gateway:o.replace(t,"jp1")};case Je.NA1:return {chat:n.replace(t,"na1"),name:"North America",gateway:o.replace(t,"na1")};case Je.UK1:return {chat:n.replace(t,"uk1"),name:"United Kingdom",gateway:o.replace(t,"uk1")};case Je.custom:return {chat:"",name:"Custom",gateway:""};default:throw new l(`Unknown environment: ${e}`)}}(t.environment);i.set(e.ENDPOINT_GATEWAY,r),i.set(e.ENDPOINT_CHAT,s);}_initWS(n,o,r){const s=i.get(e.ENDPOINT_GATEWAY);!function(e){if(null==e)throw Error(`Expected non-nullish value, got ${e}`)}(s);const a=new URL(s),c=a.protocol,u={host:a.hostname,port:a.port,prefix:a.pathname.substring(1),forceSecureProtocol:"wss:"===c};this.websocketClient=new vt(n,o,r,u,this.onError),this.websocketClient.on(t.xT.MESSAGE,(async e=>{try{"function"==typeof this.onRawEvent&&this.onRawEvent(e);const t=await(async e=>{if(He(e))return null;if(e.type!==Xe.m.EVENT_IN_S3)return e;const t=e.data.s3Object.url,n=await fetch(t);if(n.ok)return it(await n.json());throw new l("Failed to fetch S3 event data")})((e=>{const t=null==e?void 0:e.detail;if(!t)return;let n;try{n=JSON.parse(t.data);}catch(e){return}return it(n)})(e)),n=this._incomingChatEventMiddleware.process(t);if(!He(n)){const{type:e}=n;(e=>{const{id:t}=e;if(Re.has(t)){const n=Re.get(t);"function"==typeof n&&n(e),Re.delete(t);}})(n),this._messageEmitter.dispatchEvent(new qe(null!=e?e:"",{detail:n}));}}catch(e){this.onErrorHandler(e);}}));}}function en(e){var t,n;return e.type===Ze.ASSIGNED_AGENT_CHANGED&&void 0!==(null===(n=null===(t=e.data)||void 0===t?void 0:t.case)||void 0===n?void 0:n.id)}function tn(e){var t,n;return e.type===Ze.AGENT_TYPING_STARTED&&void 0!==(null===(n=null===(t=e.data)||void 0===t?void 0:t.thread)||void 0===n?void 0:n.idOnExternalPlatform)}function nn(e){var t,n;return e.type===Ze.AGENT_TYPING_ENDED&&void 0!==(null===(n=null===(t=e.data)||void 0===t?void 0:t.thread)||void 0===n?void 0:n.idOnExternalPlatform)}var on=r(510);const rn=e=>{var t,n,o,r,s,i;return e.direction===on.T.INBOUND?null!==(n=null===(t=e.authorEndUserIdentity)||void 0===t?void 0:t.fullName)&&void 0!==n?n:"":`${null!==(r=null===(o=e.authorUser)||void 0===o?void 0:o.firstName)&&void 0!==r?r:""} ${null!==(i=null===(s=e.authorUser)||void 0===s?void 0:s.surname)&&void 0!==i?i:""}`.trim()};function sn(e){const t=!1===Fe(e.id),n=!1===Fe(e.direction),o=!1===Fe(e.messageContent);return t&&n&&o}function an(e){return e.type===Xe.m.MESSAGE_CREATED}function cn(e){return e.type===Xe.m.MESSAGE_SENT}function un(e){return e.type===Xe.m.MESSAGE_READ_CHANGED}const ln=e=>{const t=e;return Number.isInteger(null==t?void 0:t.data.positionInQueue)&&!1===we(null==t?void 0:t.id)&&(null==t?void 0:t.type)===o.Ne.SET_POSITION_IN_QUEUE};class dn extends l{}function En(e){return {eventType:o.YU.CREATE_GROUP_CHAT_INVITE,data:{contact:{id:e}}}}async function hn(e,t){const n=await Ye(e,t);if(function(e){return e.type===Ze.GROUP_CHAT_INVITE_CREATED}(n))return n;throw new dn("Create invitation failed",n)}class _n extends l{}function vn(e){return {eventType:o.YU.JOIN_GROUP_CHAT,data:{invitation:{code:e}}}}async function Tn(e,t){const n=await Ye(e,t);if(function(e){return e.type===Ze.GROUP_CHAT_JOINED}(n))return n;throw new _n("Join Group chat failed",n)}function fn(e){return {eventType:o.YU.LEAVE_GROUP_CHAT,data:{contact:{id:e}}}}async function pn(e,t){return Ye(e,t)}class mn extends l{}function Cn(e,t,n){return {eventType:o.YU.SEND_EMAIL_INVITE_TO_GROUP_CHAT,data:{contact:{id:e},invitation:{code:t},recipients:[{idOnExternalPlatform:n}]}}}async function gn(e,t){const n=await Ye(e,t);if(function(e){return e.type===Ze.GROUP_CHAT_INVITE_SENT}(n))return n;throw new mn("Send Email Invitation failed",n)}function An(e){return "object"==typeof e&&null!==e&&"reconnected"in e&&!0===e.reconnected}const On=qt;})(),s})())); 
} (niceCxoneChatWebSdk, niceCxoneChatWebSdk.exports));

var niceCxoneChatWebSdkExports = niceCxoneChatWebSdk.exports;
var ChatSdk = /*@__PURE__*/(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.T)(niceCxoneChatWebSdkExports);

function isUploadFailResponse(data) {
    return Boolean(data.allowedFileSize && data.allowedFileTypes);
}

/**
 * This service desk integration is an integration to the Nice CXone contact center using their Digital First
 * Omnichannel (DFO) functionality.
 *
 * @see https://help.nice-incontact.com/content/acd/digital/chatsdk/chatwebsdk.htm for their SDK documentation.
 * @see https://github.com/nice-devone/nice-cxone-chat-web-sdk for the SDK repo (distribution code only, no source).
 * @see https://github.com/nice-devone/nice-cxone-chat-web-sample for a working sample implementation.
 * @see https://help.nice-incontact.com/content/acd/digital/chat/setuplivechat.htm for information on how to set up
 * a live chat channel.
 */
const PREFIX = '[NiceDFOServiceDesk]';
// The amount of time to wait for steps in the initialization process to complete before timing out.
const INIT_TIMEOUT_MS = 10 * 1000;
class NiceDFOServiceDesk extends _ServiceDeskImpl_js__WEBPACK_IMPORTED_MODULE_2__.S {
    constructor() {
        super(...arguments);
        /**
         * Indicates if any agents are available.
         */
        this.isChannelOnline = false;
        // Old code to support debugging.
        // addEvents() {
        //   this.addChatEvent(ChatEvent.AGENT_TYPING_STARTED);
        //   this.addChatEvent(ChatEvent.AGENT_TYPING_ENDED);
        //   this.addChatEvent(ChatEvent.ASSIGNED_AGENT_CHANGED);
        //   this.addChatEvent(ChatEvent.CONTACT_CREATED);
        //   this.addChatEvent(ChatEvent.CONTACT_STATUS_CHANGED);
        //   this.addChatEvent(ChatEvent.CONTACT_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED);
        //   this.addChatEvent(ChatEvent.LIVECHAT_RECOVERED);
        //   this.addChatEvent(ChatEvent.MORE_MESSAGES_LOADED);
        //   this.addChatEvent(ChatEvent.OFFLINE_MESSAGE_SENT);
        //   this.addChatEvent(ChatEvent.THREAD_LIST_FETCHED);
        //   this.addChatEvent(ChatEvent.THREAD_RECOVERED);
        //   this.addChatEvent(ChatEvent.TRANSCRIPT_SENT);
        //   this.addChatEvent(ChatEvent.CONSUMER_AUTHORIZED);
        //   this.addChatEvent(ChatEvent.THREAD_METADATA_LOADED);
        //   this.addChatEvent(ChatEvent.SET_POSITION_IN_QUEUE);
        //   this.addChatEvent(ChatEvent.GROUP_CHAT_INVITE_CREATED);
        //   this.addChatEvent(ChatEvent.GROUP_CHAT_INVITE_SENT);
        //   this.addChatEvent(ChatEvent.GROUP_CHAT_JOINED);
        //   this.addChatEvent(ChatEvent.TOKEN_REFRESHED);
        //   this.addChatEvent(ChatEvent.AUTHORIZATION_TOKEN_GENERATED);
        //   this.addChatEvent(ChatEvent.THREAD_ARCHIVED);
        //   this.addChatEvent(ChatEvent.AUTHORIZE_CONSUMER);
        //   this.addChatEvent(ChatEvent.CASE_CREATED);
        //   this.addChatEvent(ChatEvent.CASE_INBOX_ASSIGNEE_CHANGED);
        //   this.addChatEvent(ChatEvent.CASE_STATUS_CHANGED);
        //   this.addChatEvent(ChatEvent.CASE_TO_ROUTING_QUEUE_ASSIGNMENT_CHANGED);
        //   this.addChatEvent(ChatEvent.CONTACT_PREFERRED_USER_CHANGED);
        //   this.addChatEvent(ChatEvent.CONTACT_SYNC);
        //   this.addChatEvent(ChatEvent.CHANNEL_CREATED);
        //   this.addChatEvent(ChatEvent.CHANNEL_DELETED);
        //   this.addChatEvent(ChatEvent.CHANNEL_UPDATED);
        //   this.addChatEvent(ChatEvent.MESSAGE_ADDED_INTO_CASE);
        //   this.addChatEvent(ChatEvent.MESSAGE_CREATED);
        //   this.addChatEvent(ChatEvent.MESSAGE_DELIVERED_TO_END_USER);
        //   this.addChatEvent(ChatEvent.MESSAGE_DELIVERED_TO_USER);
        //   this.addChatEvent(ChatEvent.MESSAGE_NOTE_CREATED);
        //   this.addChatEvent(ChatEvent.MESSAGE_NOTE_UPDATED);
        //   this.addChatEvent(ChatEvent.MESSAGE_NOTE_DELETED);
        //   this.addChatEvent(ChatEvent.MESSAGE_READ_CHANGED);
        //   this.addChatEvent(ChatEvent.MESSAGE_SEEN_BY_END_USER);
        //   this.addChatEvent(ChatEvent.MESSAGE_SEEN_BY_USER);
        //   this.addChatEvent(ChatEvent.MESSAGE_UPDATED);
        //   this.addChatEvent(ChatEvent.PAGE_VIEW_CREATED);
        //   this.addChatEvent(ChatEvent.ROUTING_QUEUE_CREATED);
        //   this.addChatEvent(ChatEvent.ROUTING_QUEUE_DELETED);
        //   this.addChatEvent(ChatEvent.ROUTING_QUEUE_UPDATED);
        //   this.addChatEvent(ChatEvent.SUBQUEUE_ASSIGNED_TO_ROUTING_QUEUE);
        //   this.addChatEvent(ChatEvent.SUBQUEUE_UNASSIGNED_TO_ROUTING_QUEUE);
        //   this.addChatEvent(ChatEvent.USER_ASSIGNED_TO_ROUTING_QUEUE);
        //   this.addChatEvent(ChatEvent.USER_STATUS_CHANGED);
        //   this.addChatEvent(ChatEvent.USER_UNASSIGNED_FROM_ROUTING_QUEUE);
        //   this.addChatEvent(ChatEvent.AGENT_CONTACT_STARTED);
        //   this.addChatEvent(ChatEvent.AGENT_CONTACT_ENDED);
        //   this.addChatEvent(ChatEvent.SENDER_TYPING_STARTED);
        //   this.addChatEvent(ChatEvent.SENDER_TYPING_ENDED);
        //   this.addChatEvent(ChatEvent.FIRE_PROACTIVE);
        //   this.addChatEvent(ChatEvent.CONTACT_INBOX_PRE_ASSIGNEE_CHANGED);
        //   this.addChatEvent(ChatEvent.CONTACT_RECIPIENTS_CHANGED);
        //   this.addChatEvent(ChatEvent.MESSAGE_PREVIEW_CREATED);
        // }
        //
        // addChatEvent(eventType: any) {
        //   this.sdk.onChatEvent(eventType, (event: any) => {
        //     debugLog(`${PREFIX} (All) ${eventType}`, event);
        //   });
        // }
    }
    /**
     * Ensures that the SDK is loaded and the user is authorized to access Nice. This will also determine if agents are
     * available.
     */
    async ensureSDK() {
        if (this.sdk) {
            return;
        }
        if (!this.persistedState()) {
            this.updatePersistedState({ customerID: null, lastAgentMessageID: null, contactID: null, threadID: null }, false);
        }
        else {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Retrieved previous state`, this.persistedState());
        }
        const configData = this.config;
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Creating integration using config`, configData);
        let { customerID } = this.persistedState();
        if (!customerID) {
            if (configData.useWebChatUserID === true) {
                customerID = this.state.userID;
            }
            else if (configData.useWebChatUserID === false || this.state.userID.startsWith(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ak)) {
                customerID = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.al)(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.am.MISCELLANEOUS);
            }
            else {
                customerID = this.state.userID;
            }
            this.updatePersistedState({ customerID });
        }
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Using customer ID "${customerID}"`);
        const options = {
            brandId: configData.brandID,
            channelId: configData.channelID,
            environment: configData.environment,
            customerId: customerID,
        };
        // this.fixEnvironment(options);
        // Fire an event to get an auth code for the case where authentication is enabled for the channel. These
        // properties are optional if authentication is not enabled. The two properties will be filled in by any event
        // handlers that are configured.
        const getAuthCodeEvent = {
            type: "agent:niceDFO:getAuthCode" /* BusEventType.NICE_DFO_GET_AUTH_CODE */,
            authCode: null,
            visitorID: null,
        };
        await this.eventBus.fire(getAuthCodeEvent, this.instance);
        this.sdk = new ChatSdk(options);
        // this.addEvents();
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Authorizing...`);
        const authResponse = (await this.sdk.authorize(getAuthCodeEvent.authCode, getAuthCodeEvent.visitorID));
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Authorize complete`, authResponse);
        this.isChannelOnline = authResponse.channel?.availability?.status === 'online';
        this.sdk.onChatEvent(niceCxoneChatWebSdkExports.ChatEvent.SET_POSITION_IN_QUEUE, event => this.handlePositionInQueue(event));
        this.sdk.onChatEvent(niceCxoneChatWebSdkExports.ChatEvent.ASSIGNED_AGENT_CHANGED, event => this.handleAgentChanged(event));
        this.sdk.onChatEvent(niceCxoneChatWebSdkExports.ChatEvent.CONTACT_STATUS_CHANGED, event => this.handleContactStatusChanged(event));
        this.sdk.onChatEvent(niceCxoneChatWebSdkExports.ChatEvent.CONTACT_CREATED, event => this.handleContactCreated(event));
        this.callback.updateCapabilities({ allowFileUploads: true, allowMultipleFileUploads: true });
    }
    /**
     * Attempts to recover an existing thread from a previous instance.
     */
    async recoverThread() {
        const { threadID } = this.persistedState();
        if (threadID) {
            try {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Using existing thread ${threadID}`, this.thread);
                // If we had a previous thread, then use that and try to recover it.
                this.thread = this.sdk.getThread(threadID);
                const recovered = await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.r)(this.thread.recover(), INIT_TIMEOUT_MS, 'recover timed out');
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Recovered thread ${threadID}`, recovered);
                await this.handleRecover(recovered);
                this.addThreadListeners();
                return true;
            }
            catch (error) {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`${PREFIX} Error getting existing thread`, error);
                this.updatePersistedState({ threadID: null, contactID: null });
            }
        }
        return false;
    }
    /**
     * Adds the listener to the current thread.
     */
    addThreadListeners() {
        this.thread.onThreadEvent(niceCxoneChatWebSdkExports.ChatEvent.MESSAGE_CREATED, event => this.handleMessageCreated(event));
        this.thread.onThreadEvent(niceCxoneChatWebSdkExports.ChatEvent.AGENT_TYPING_STARTED, event => this.handleAgentTyping(event, true));
        this.thread.onThreadEvent(niceCxoneChatWebSdkExports.ChatEvent.AGENT_TYPING_ENDED, event => this.handleAgentTyping(event, false));
    }
    /**
     * Instructs the service desk to start a new chat. This should be called immediately after the service desk
     * instance has been created. It will make the appropriate calls to the service desk and begin communicating back
     * to the calling code using the callback produce to the instance. This may only be called once per instance.
     */
    async startChat(connectMessage, startChatOptions) {
        await this.ensureSDK();
        const connectItem = connectMessage.output.generic.find(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ab);
        const { preStartChatPayload } = startChatOptions;
        // Create a new thread.
        const threadID = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.al)(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.am.MISCELLANEOUS);
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Creating new thread ${threadID}`);
        this.thread = this.sdk.getThread(threadID);
        this.addThreadListeners();
        if (preStartChatPayload?.customerName) {
            this.sdk.getCustomer().setName(preStartChatPayload.customerName);
        }
        this.newContactPromise = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.O)();
        // Set any custom fields from the pre-chat handler.
        if (preStartChatPayload?.consumerContact?.customFields?.length) {
            const customFields = {};
            preStartChatPayload?.consumerContact.customFields.forEach(field => {
                customFields[field.ident] = field.value;
            });
            this.thread.setCustomFields(customFields);
        }
        const messagesToAgent = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.af)(connectItem, 'Begin conversation');
        await this.thread.startChat(messagesToAgent.join('\n'));
        // Sending the messages above should result in a new contact being created.
        const contactID = await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.r)(this.newContactPromise, INIT_TIMEOUT_MS, 'A new chat timed out waiting for a contact to be created.');
        this.updatePersistedState({ threadID, contactID });
        this.newContactPromise = null;
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Started chat with contact ${contactID}`);
    }
    /**
     * Handles a ChatEvent.MESSAGE_CREATED event from Nice.
     */
    async handleMessageCreated(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} ${event.type}`, event);
        const eventData = event.detail.data;
        const { message, agentContact } = eventData;
        await this.handleMessage(message, true, agentContact?.user);
    }
    /**
     * Handles the results of a recovered thread. This will look for any undelivered messages from an agent and will
     * display them to the user.
     */
    async handleRecover(recovered) {
        const { lastAgentMessageID } = this.persistedState();
        const { messages } = recovered;
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Last agent message: ${lastAgentMessageID}`);
        const lastIndex = messages.findIndex((message) => message.id === lastAgentMessageID);
        if (lastIndex > 0) {
            // Go backwards from the last index and handle each message.
            for (let index = lastIndex - 1; index >= 0; index--) {
                const message = messages[index];
                // eslint-disable-next-line no-await-in-loop
                this.handleMessage(message, false, recovered.ownerAssignee);
            }
        }
    }
    /**
     * Handles a message. This may either be a live message delivered from an agent or it may be a recovered message
     * that was sent while web chat was unloaded and not previously delivered
     */
    async handleMessage(message, allowAgentJoined, agentInfo) {
        if (message.direction === 'outbound') {
            const threadID = message.threadIdOnExternalPlatform;
            const currentThreadID = this.persistedState().threadID;
            if (!threadID || threadID !== currentThreadID) {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got message for thread ${threadID} but the current thread is ${currentThreadID}.`);
                return;
            }
            const { isConnected } = this.serviceManager.store.getState().persistedToBrowserStorage.chatState.agentState;
            if (allowAgentJoined && !isConnected) {
                // If we've received a message but an agent has not yet joined, then treat this as an agent joining. This
                // occurs when we've recovered a previous conversation where the agent is already assigned to the contact.
                await this.doAgentJoined(agentInfo);
            }
            const messageItems = [];
            if (message.messageContent?.text) {
                messageItems.push((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                    response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.TEXT,
                    text: message.messageContent.text,
                }));
            }
            if (message.attachments?.length) {
                message.attachments.forEach((attachment) => {
                    messageItems.push((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                        response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.BUTTON,
                        kind: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.d.LINK,
                        button_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.b.URL,
                        url: attachment.url,
                        label: attachment.friendlyName || attachment.fileName || attachment.filename,
                    }));
                });
            }
            if (messageItems.length) {
                const messageToUser = { id: null, output: { generic: messageItems } };
                // Nice seems to send the "typing off" after a delay after the agent has sent the message which is stupid.
                await this.callback.agentTyping(false);
                await this.callback.sendMessageToUser(messageToUser, agentInfo?.id);
                this.updatePersistedState({ lastAgentMessageID: message.id });
            }
        }
    }
    /**
     * Handles a ChatEvent.AGENT_TYPING_STARTED or ChatEvent.AGENT_TYPING_ENDED event from Nice.
     */
    async handleAgentTyping(event, isTyping) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} ${event.type}`, event);
        await this.callback.agentTyping(isTyping);
    }
    /**
     * Handles a ChatEvent.CONTACT_STATUS_CHANGED event from Nice.
     */
    async handleContactStatusChanged(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} ${event.type}`, event);
        const eventData = event.detail.data;
        const contactID = eventData.case.id;
        const currentContactID = this.persistedState().contactID;
        if (!contactID || contactID !== currentContactID) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got contact ${contactID} status change but the current contact is ${currentContactID}.`);
            return;
        }
        if (eventData.case?.status === 'closed') {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Agent closed contact ${contactID}`, event);
            await this.callback.agentEndedChat();
        }
    }
    /**
     * Handles a ChatEvent.CONTACT_CREATED event from Nice.
     */
    async handleContactCreated(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} ${event.type}`, event);
        if (this.newContactPromise) {
            this.newContactPromise.doResolve(event.detail.data?.case?.id);
        }
        else {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got a new contact but wasn't expecting one.`, event);
        }
    }
    /**
     * Handles a ChatEvent.ASSIGNED_AGENT_CHANGED event from Nice.
     */
    async handleAgentChanged(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} ${event.type}`, event);
        const eventData = event.detail.data;
        const contactID = eventData.case.id;
        const currentContactID = this.persistedState().contactID;
        if (!contactID || contactID !== currentContactID) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got contact ${contactID} status change but the current contact is ${currentContactID}.`);
            return;
        }
        const { inboxAssignee, previousInboxAssignee } = eventData;
        if (!inboxAssignee) {
            await this.callback.agentLeftChat();
        }
        else {
            if (previousInboxAssignee) {
                await this.callback.beginTransferToAnotherAgent();
            }
            await this.doAgentJoined(inboxAssignee);
        }
    }
    /**
     * Handles a ChatEvent.SET_POSITION_IN_QUEUE event from Nice.
     */
    async handlePositionInQueue(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} ${event.type}`, event);
        const eventDetail = event.detail;
        await this.callback.updateAgentAvailability({ position_in_queue: eventDetail.data.positionInQueue || 1 });
    }
    /**
     * Generates an agentJoined call using the given agent information.
     */
    async doAgentJoined(agentInfo) {
        const nickname = agentInfo?.nickname || `${agentInfo?.firstName || ''} ${agentInfo?.surname || ''}`.trim() || null;
        const newAgent = {
            id: agentInfo?.id,
            nickname,
            profile_picture_url: agentInfo?.imageUrl,
        };
        await this.callback.agentJoined(newAgent);
    }
    /**
     * Tells the service desk to terminate the chat.
     */
    async endChat(info) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Ended chat`);
        this.updatePersistedState({ threadID: null, contactID: null });
        if (!info.endedByAgent) {
            // Note: This Promise doesn't seem to ever resolve which is a bug in the Nice SDK so we're not going to await it.
            // We only call this if triggered from an agent because this will cause the contact to be closed and there's a
            // bug in the Nice SDK that can close the wrong contact if the user happens to have more than one open.
            this.thread?.endChat();
        }
        this.thread = null;
    }
    /**
     * Sends a message to the agent in the service desk.
     */
    async sendMessageToAgent(message, messageID, additionalData) {
        // Send any message that's text.
        if (message.input.text) {
            const messageText = message.input.text;
            try {
                await this.thread.sendTextMessage(messageText);
            }
            catch (error) {
                this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.USER_MESSAGE, messageID });
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`${PREFIX} Error sending message to agent`, error);
            }
        }
        // Send any file uploads that were included.
        if (additionalData.filesToUpload.length) {
            // Note, we're not waiting for the uploads to finish to complete the send request.
            this.doFileUploads(additionalData.filesToUpload);
        }
    }
    /**
     * Uploads the requested files.
     */
    async doFileUploads(uploads) {
        const transfer = new DataTransfer();
        uploads.forEach(upload => transfer.items.add(upload.file));
        let errorMessage;
        try {
            const result = await this.thread.sendAttachments(transfer.files);
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got sendAttachments result`, result);
            if (isUploadFailResponse(result)) {
                // The SDK types say this is supposed to be returned from sendAttachments but in testing, it seems that it is
                // thrown instead so this is here just in case.
                errorMessage = this.formatUploadErrorMessage(result);
            }
        }
        catch (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`${PREFIX} Error sending files to agent`, error);
            errorMessage = this.formatUploadErrorMessage(error);
        }
        // The uploads either all succeed or they all fail. Only display the error message on the first file.
        uploads.forEach((upload, index) => {
            this.callback.setFileUploadStatus(upload.id, Boolean(errorMessage), index === 0 ? errorMessage : null);
        });
    }
    /**
     * Returns an error message suitable for reporting on a failed file upload or a generic error message if the
     * necessary information is not contained in the given object.
     */
    formatUploadErrorMessage(error) {
        if (isUploadFailResponse(error)) {
            const allowedTypes = error.allowedFileTypes.map(({ mimeType }) => mimeType).join(', ');
            const intl = this.instance.getIntl();
            return intl.formatMessage({ id: 'serviceDesk_niceDFO_fileUploadError' }, { allowedTypes, fileSize: error.allowedFileSize });
        }
        return this.getIntlText('fileSharing_uploadFailed');
    }
    /**
     * Informs the service desk that the user has read all the messages that have been sent by the service desk.
     *
     * @returns Returns a Promise that resolves when the service desk has successfully handled the call.
     */
    async userReadMessages() {
        // Not supported in this integration.
    }
    /**
     * Tells the service desk if a user has started or stopped typing.
     */
    async userTyping(isTyping) {
        if (isTyping) {
            // We need some time value here or the typing indicator immediately disappears for the agent.
            this.thread?.keystroke(5000);
        }
        else {
            this.thread?.stopTyping();
        }
    }
    /**
     * Checks if any agents are online and ready to communicate with the user.
     */
    async areAnyAgentsOnline(connectMessage) {
        await this.ensureSDK();
        return this.isChannelOnline;
    }
    /**
     * This will be called when the service desk is first initialized and it is determined that the user was previously
     * connected to an agent. This function should perform whatever steps are necessary to reconnect the user. Web chat
     * will assume the user is permitted to send messages and is connected to the same agent when this function resolves.
     *
     * @returns true to indicate that the reconnect was successful.
     */
    async reconnect() {
        await this.ensureSDK();
        // We only allow a reconnect if we were able to recover the previous thread and we didn't create a new thread.
        return this.recoverThread();
    }
}




/***/ }),

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ServiceDeskImpl.js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ServiceDeskImpl.js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ ServiceDeskImpl; }
/* harmony export */ });
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

class ServiceDeskImpl {
    constructor(callback, config, serviceManager) {
        this.callback = callback;
        this.serviceManager = serviceManager;
        this.config = config;
        this.eventBus = serviceManager?.eventBus;
        this.instance = serviceManager?.instance;
    }
    /**
     * Returns the language translation text for the given key.
     */
    getIntlText(key) {
        return this.serviceManager.intl.formatMessage({ id: key });
    }
    /**
     * Informs the service desk of a change in the state of the web chat that is relevant to the service desks. These
     * values may change at any time.
     */
    updateState(state) {
        this.state = state;
    }
    /**
     * Returns the persisted service desk state object.
     */
    persistedState() {
        return this.callback.persistedState();
    }
    /**
     * Sets the persisted state to the given object.
     */
    updatePersistedState(state, mergeWithCurrent = true) {
        this.callback.updatePersistedState(state, mergeWithCurrent);
    }
}




/***/ })

}]);
//# sourceMappingURL=nice.bundle.js.map