"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["media-player"],{

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ReactPlayer.js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ReactPlayer.js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LazyReactPlayer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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



function LazyReactPlayer(props) {
    const [Player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Dynamically import react-player
        __webpack_require__.e(/*! import() */ "vendors-node_modules_pnpm_react-player_2_16_1_react_18_3_1_node_modules_react-player_lib_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-player */ "../node_modules/.pnpm/react-player@2.16.1_react@18.3.1/node_modules/react-player/lib/index.js", 19)).then(playerModule => {
            // Check for nested default
            const PlayerComponent = playerModule.default?.default || playerModule.default;
            setPlayer(() => PlayerComponent);
        });
    }, []);
    if (!Player) {
        return null;
    } // Optionally render a loading component here
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Player, { ...props });
}




/***/ })

}]);
//# sourceMappingURL=media-player.bundle.js.map