"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["cds-ai-chat-mock-sd"],{

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/mockServiceDesk.js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/mockServiceDesk.js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectInfoType: function() { return /* binding */ ConnectInfoType; },
/* harmony export */   MARKDOWN: function() { return /* binding */ MARKDOWN; },
/* harmony export */   MESSAGE_CUSTOM: function() { return /* binding */ MESSAGE_CUSTOM; },
/* harmony export */   MESSAGE_FILES: function() { return /* binding */ MESSAGE_FILES; },
/* harmony export */   MESSAGE_IMAGE: function() { return /* binding */ MESSAGE_IMAGE; },
/* harmony export */   MESSAGE_TO_AGENT_MULTIPLE: function() { return /* binding */ MESSAGE_TO_AGENT_MULTIPLE; },
/* harmony export */   MESSAGE_TO_AGENT_TEXT: function() { return /* binding */ MESSAGE_TO_AGENT_TEXT; },
/* harmony export */   MESSAGE_VIDEO: function() { return /* binding */ MESSAGE_VIDEO; },
/* harmony export */   MOCK_AGENT_PROFILE_EMPTY: function() { return /* binding */ MOCK_AGENT_PROFILE_EMPTY; },
/* harmony export */   MOCK_AGENT_PROFILE_GARRUS: function() { return /* binding */ MOCK_AGENT_PROFILE_GARRUS; },
/* harmony export */   MOCK_AGENT_PROFILE_LEGION: function() { return /* binding */ MOCK_AGENT_PROFILE_LEGION; },
/* harmony export */   MOCK_AGENT_PROFILE_SHEPARD: function() { return /* binding */ MOCK_AGENT_PROFILE_SHEPARD; },
/* harmony export */   MockServiceDesk: function() { return /* binding */ MockServiceDesk; },
/* harmony export */   TEXT_LONG: function() { return /* binding */ TEXT_LONG; },
/* harmony export */   runSteps: function() { return /* binding */ runSteps; }
/* harmony export */ });
/* harmony import */ var _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppContainer.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/AppContainer.js");
/* harmony import */ var _customElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customElement.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/customElement.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-dom */ "../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_ai_label_action_button_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/ai-label-action-button.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/ai-label-action-button.js");
/* harmony import */ var _carbon_web_components_es_custom_components_ai_label_ai_label_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/ai-label/ai-label.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/ai-label/ai-label.js");
/* harmony import */ var _carbon_web_components_es_custom_components_inline_loading_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/inline-loading/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/inline-loading/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_textarea_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/textarea/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/textarea/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_icon_button_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/icon-button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/icon-button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_tag_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/tag/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/tag/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_chat_button_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/chat-button/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/chat-button/index.js");
/* harmony import */ var _carbon_web_components_es_custom_components_button_button_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/button/button.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/button/button.js");
/* harmony import */ var _carbon_web_components_es_custom_components_layer_index_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @carbon/web-components/es-custom/components/layer/index.js */ "../node_modules/.pnpm/@carbon+web-components@2.37.0_sass@1.92.0/node_modules/@carbon/web-components/es-custom/components/layer/index.js");
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





































var ConnectInfoType;
(function (ConnectInfoType) {
    /**
     * The connecting status will not show any information.
     */
    ConnectInfoType[ConnectInfoType["NONE"] = 1] = "NONE";
    /**
     * The connecting status will show information about the user's position in a queue.
     */
    ConnectInfoType[ConnectInfoType["LINE"] = 2] = "LINE";
    /**
     * The connecting status will show information about the wait time in minutes for the user.
     */
    ConnectInfoType[ConnectInfoType["MINUTES"] = 3] = "MINUTES";
    /**
     * The connecting status will show a series of custom messages.
     */
    ConnectInfoType[ConnectInfoType["MESSAGE"] = 4] = "MESSAGE";
    /**
     * Starting a chat will result in a connecting error {@link ErrorType.CONNECTING}.
     */
    ConnectInfoType[ConnectInfoType["CONNECTING_ERROR"] = 5] = "CONNECTING_ERROR";
    /**
     * Starting a chat will just fail with the service desk throwing an error.
     */
    ConnectInfoType[ConnectInfoType["THROW_ERROR"] = 6] = "THROW_ERROR";
})(ConnectInfoType || (ConnectInfoType = {}));
const HELLO_TEXT = (userName) => `Hi${userName ? ` ${userName}` : ''}, I'm Shepard! I'm a **mock** service desk agent. Type *"help"* to see a list of messages you can mock me with. <script>alert("If you see this, it is a serious bug!");</script>`;
const TEXT_LONG = 'The biggest problem that teams encounter when dealing with coding standards is the ' +
    'variety of opinions on the subject or the introduction of new team members who are familiar with a' +
    " different standard. The first point I would make to address this is that I don't believe that what" +
    ' exactly is in your coding standard is nearly as important as having a standard and using it consistently.' +
    " It doesn't matter if you want braces to be on the following line or the same line as long as whatever you" +
    ' do is consistent.\n\nBut those who don\'t agree to a specific point are likely to feel that it\'s "wrong"' +
    ' and not just "different." Over my career I have worked on a lot of different projects with a wide range' +
    ' of coding standards and in my experience, it takes relatively little time to adopt a new standard once' +
    ' you\'ve set aside your resistance to it. You may feel that putting braces on the same line is "wrong"' +
    ' but I bet that if you try it, in just a few days you will begin to feel that the new style is "right"' +
    ' and it\'s now your old style that\'s "wrong".\n\nAs an example, I spent 20 years of my life believing that' +
    ' you were supposed to end a sentence with two spaces instead of one. Then one day I started to notice in ' +
    'javadoc comments that other members of my team used just one. I decided to go look up the best practices for ' +
    "this and concluded that the two spaces were outdated and it's now generally accepted to use just one. I made a " +
    'few weak attempts to change but I just found it hard to switch a habit that I had had for so long. One day I ' +
    'finally decided to practice what I preach and made a serious attempt to relegate that extra space to history ' +
    'and sure enough, within a couple of days I no longer had any difficulty typing one space instead of two and in ' +
    'not much time after that, I found myself occasionally noticing the two spaces in old code of mine and found that ' +
    'it did indeed look odd now...\n\n' +
    '[More](https://medium.com/@damon.lundin/on-coding-standards-4420e3fa281f)\n\n<script>alert("If you see this, it is a serious bug!")</script>';
const PROFILE_URL_PREFIX = 'https://web-chat.assistant.test.watson.cloud.ibm.com';
const MOCK_AGENT_PROFILE_SHEPARD = {
    id: 'CommanderShepard-id',
    nickname: 'Shepard',
    profile_picture_url: `${PROFILE_URL_PREFIX}/assets/example_avatar_1.png`,
};
const MOCK_AGENT_PROFILE_GARRUS = {
    id: 'GarrusVakarian-id',
    nickname: 'Garrus',
    profile_picture_url: `${PROFILE_URL_PREFIX}/assets/example_avatar_2.png`,
};
const MOCK_AGENT_PROFILE_LEGION = {
    id: 'Legion-id',
    nickname: 'Legion',
    profile_picture_url: `${PROFILE_URL_PREFIX}/assets/example_avatar_missing.png`,
};
const MOCK_AGENT_PROFILE_EMPTY = {
    id: null,
    nickname: null,
};
// The agent we're currently talking to.
class MockServiceDesk {
    constructor(parameters) {
        /**
         * The current internal state for the mock service desk. This object is exported by this module and these values may
         * be controlled by external code.
         */
        this.mockState = {
            connectDelayFactor: 1,
            connectInfoType: ConnectInfoType.LINE,
            agentAvailabilityDelay: 0,
            agentAvailability: true,
            showStateChanges: false,
            currentAgent: MOCK_AGENT_PROFILE_SHEPARD,
        };
        console.log('Creating MockServiceDesk');
        this.factoryParameters = parameters;
        this.chatInstance = parameters.instance;
        this.callback = parameters.callback;
        this.callback.updateCapabilities({
            allowFileUploads: true,
            allowedFileUploadTypes: 'image/*,.txt',
            allowMultipleFileUploads: true,
        });
        window.watsonAssistantChat = window.watsonAssistantChat || {};
        window.watsonAssistantChat.mockServiceDesk = this;
    }
    getName() {
        return 'wac mock service desk';
    }
    updateState(state) {
        this.state = state;
        if (this.hasStarted && this.mockState.showStateChanges) {
            runSteps(this, STATE_CHANGED(state));
        }
    }
    startChat(connectMessage, startChatOptions) {
        console.log(`MockServiceDesk [startChat]: connectMessage`, connectMessage);
        console.log(`MockServiceDesk [startChat]: startChatOptions`, startChatOptions);
        this.preStartChatPayload = startChatOptions.preStartChatPayload || {};
        if (this.mockState.connectInfoType === ConnectInfoType.CONNECTING_ERROR) {
            return runSteps(this, START_CHAT_CONNECT_ERROR(this.mockState));
        }
        if (this.mockState.connectInfoType === ConnectInfoType.THROW_ERROR) {
            throw new Error('The mock service desk threw an error during startChat!');
        }
        if (this.mockState.connectDelayFactor === 0) {
            return runSteps(this, START_CHAT_IMMEDIATELY(this.preStartChatPayload.userName));
        }
        if (this.mockState.connectInfoType === ConnectInfoType.NONE) {
            return runSteps(this, START_CHAT_NO_INFO(this.preStartChatPayload.userName, this.mockState));
        }
        this.hasStarted = true;
        return runSteps(this, START_CHAT(this.preStartChatPayload.userName, this.mockState));
    }
    endChat(info) {
        console.log(`MockServiceDesk [endChat]`, info);
        let surveyResponse;
        if (info.preEndChatPayload?.wasAgentHelpful === true) {
            surveyResponse = 'We understand that you found the agent helpful. He will be given a cookie!';
        }
        else if (info.preEndChatPayload?.wasAgentHelpful === false) {
            surveyResponse = 'We are sorry that the agent was not helpful. He will be reassigned to Siberia.';
        }
        if (surveyResponse) {
            const text = `Thank you for responding to our survey. ${surveyResponse}`;
            this.sendMessageToUser((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.J)(text), this.mockState.currentAgent.id);
        }
        return Promise.resolve();
    }
    userTyping(isTyping) {
        console.log(`MockServiceDesk [userTyping]: isTyping=${isTyping}`);
        return Promise.resolve();
    }
    sendMessageToAgent(message, _messageID, additionalData) {
        console.log(`MockServiceDesk [sendMessageToAgent]`, message, additionalData);
        const { text } = message.input;
        // Send a message back whenever we get a message from the user.
        let steps;
        if (!text) ;
        else {
            const textLower = text.toLowerCase();
            if (textLower.includes('help')) {
                steps = MESSAGE_TO_AGENT_HELP();
            }
            else if (textLower.includes('blank')) {
                steps = null;
            }
            else if (textLower.includes('joke')) {
                steps = MESSAGE_TO_AGENT_JOKE();
            }
            else if (textLower.includes('someone else')) {
                if (this.mockState.currentAgent === MOCK_AGENT_PROFILE_SHEPARD ||
                    this.mockState.currentAgent === MOCK_AGENT_PROFILE_EMPTY) {
                    steps = TRANSFER_TO_GARRUS();
                }
                else if (this.mockState.currentAgent === MOCK_AGENT_PROFILE_GARRUS) {
                    steps = TRANSFER_TO_LEGION();
                }
                else {
                    steps = TRANSFER_TO_EMPTY();
                }
            }
            else if (textLower.includes('text long')) {
                steps = MESSAGE_TO_AGENT_TEXT(TEXT_LONG);
            }
            else if (textLower.includes('text medium')) {
                steps = MESSAGE_TO_AGENT_TEXT("Thanks for being so interesting! I'm sure we're going to have a *wonderful* conversation. Let's get started...");
            }
            else if (textLower.includes('markdown')) {
                steps = MESSAGE_TO_AGENT_TEXT(MARKDOWN);
            }
            else if (textLower.includes('multiple')) {
                steps = MESSAGE_TO_AGENT_MULTIPLE();
            }
            else if (textLower.includes('hide')) {
                steps = MESSAGE_TO_AGENT_TEXT('Session history will hide this message!');
            }
            else if (textLower.includes('secret')) {
                steps = MESSAGE_TO_AGENT_TEXT("I'm afraid I don't know any secrets!");
            }
            else if (textLower.includes('version')) {
                steps = MESSAGE_TO_AGENT_TEXT(`Web chat version: ${this.factoryParameters.instance.getWidgetVersion()}`);
            }
            else if (textLower.includes('intl')) {
                const message = this.factoryParameters.instance.getIntl().formatMessage({ id: 'input_placeholder' });
                steps = MESSAGE_TO_AGENT_TEXT(`Intl string (input_placeholder): *${message}*`);
            }
            else if (textLower.includes('leave')) {
                steps = MESSAGE_TO_AGENT_LEAVE_CHAT();
            }
            else if (textLower.includes('text')) {
                steps = MESSAGE_TO_AGENT_TEXT("TypeScript is awesome! I don't know how anyone can live without it. Seriously?!");
            }
            else if (textLower.includes('upload')) {
                steps = MESSAGE_TO_AGENT_TEXT('Alright, you can upload some files. But only .png files please.', 0, false);
            }
            else if (textLower.includes('message throw')) {
                steps = MESSAGE_THROW();
            }
            else if (textLower.includes('image')) {
                steps = MESSAGE_IMAGE();
            }
            else if (textLower.includes('files')) {
                steps = MESSAGE_FILES();
            }
            else if (textLower.includes('video')) {
                steps = MESSAGE_VIDEO();
            }
            else if (textLower.includes('custom')) {
                steps = MESSAGE_CUSTOM();
            }
            else if (textLower.includes('hang')) {
                steps = HANG_MESSAGE();
            }
            else {
                steps = MESSAGE_TO_AGENT_TEXT('If you say so. Type *"help"* for a list of other things you can say.');
            }
        }
        // Handle any file uploads we may have.
        if (additionalData.filesToUpload) {
            additionalData.filesToUpload.forEach(file => {
                // Use a setTimeout to simulate a random amount of time it takes to upload a file.
                setTimeout(() => {
                    let errorMessage;
                    if (!file.file.name.endsWith('.png')) {
                        errorMessage = 'Only .png files may be uploaded.';
                    }
                    this.callback.setFileUploadStatus(file.id, Boolean(errorMessage), errorMessage);
                }, Math.random() * 5000 + 1);
            });
        }
        return runSteps(this, steps);
    }
    filesSelectedForUpload(uploads) {
        console.log(`MockServiceDesk [filesSelectedForUpload]`, uploads);
        uploads.forEach(file => {
            if (file.file.name.toLowerCase().startsWith('a')) {
                this.callback.setFileUploadStatus(file.id, true, 'You may not upload files that start with the letter "A"! Duh.');
            }
        });
    }
    userReadMessages() {
        console.log(`MockServiceDesk [userReadMessages]`);
        return Promise.resolve();
    }
    sendMessageToUser(message, agentID) {
        // As soon as the agent sends a message, make sure to clear the "isTyping" event for the agent.
        this.callback.agentTyping(false);
        this.callback.sendMessageToUser(message, agentID);
    }
    async areAnyAgentsOnline() {
        if (this.mockState.agentAvailabilityDelay) {
            await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.R)(this.mockState.agentAvailabilityDelay * 1000);
        }
        return this.mockState.agentAvailability;
    }
    async screenShareStop() {
        this.callback.sendMessageToUser('Alright, you have stopped sharing your screen.', this.mockState.currentAgent.id);
    }
    async reconnect() {
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.R)(2000);
        this.hasStarted = true;
        return true;
    }
}
/**
 * This function will run a series of steps to simulate some interaction between the agent and a user.
 */
function runSteps(instance, steps) {
    if (steps) {
        let totalTime = 0;
        steps.forEach(step => {
            totalTime += step.delay || 0;
            setTimeout(() => {
                step.callback(instance);
            }, totalTime);
        });
        const lastStep = steps[steps.length - 1];
        // If the last step has some extra work to do in a Promise, then return that Promise. Otherwise, return a no-op.
        return lastStep.returnPromise || Promise.resolve();
    }
    return Promise.resolve();
}
// Immediately start a chat with no delays.
function START_CHAT_IMMEDIATELY(userName) {
    return [
        {
            delay: 0,
            callback: (instance) => {
                instance.mockState.currentAgent = MOCK_AGENT_PROFILE_SHEPARD;
                instance.callback.agentJoined(MOCK_AGENT_PROFILE_SHEPARD);
                instance.sendMessageToUser(HELLO_TEXT(userName), instance.mockState.currentAgent.id);
            },
        },
    ];
}
function START_CHAT_NO_INFO(userName, mockState) {
    return [
        {
            delay: 1000 * mockState.connectDelayFactor,
            callback: (instance) => {
                mockState.currentAgent = MOCK_AGENT_PROFILE_SHEPARD;
                instance.callback.agentJoined(MOCK_AGENT_PROFILE_SHEPARD);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.callback.agentTyping(true);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.sendMessageToUser(HELLO_TEXT(userName), MOCK_AGENT_PROFILE_SHEPARD.id);
            },
        },
    ];
}
function START_CHAT_CONNECT_ERROR(mockState) {
    return [
        {
            delay: 1000 * mockState.connectDelayFactor,
            callback: (instance) => {
                mockState.currentAgent = MOCK_AGENT_PROFILE_SHEPARD;
                instance.callback.setErrorStatus({
                    type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                    logInfo: 'Error!',
                    messageToUser: 'Apparently all our agents are taking naps',
                });
            },
        },
    ];
}
// Starts a chat with a standard sequence of events with low delays on them.
function START_CHAT(userName, mockState) {
    let availability;
    switch (mockState?.connectInfoType) {
        case ConnectInfoType.MESSAGE: {
            availability = [
                { message: 'Agent getting on a *plane*...' },
                { message: 'Agent getting on a *train*...' },
                { message: 'Agent getting into a *car*...' },
            ];
            break;
        }
        case ConnectInfoType.MINUTES: {
            availability = [{ estimated_wait_time: 30 }, { estimated_wait_time: 2 }, { estimated_wait_time: 1 }];
            break;
        }
        default: {
            availability = [{ position_in_queue: 30 }, { position_in_queue: 2 }, { position_in_queue: 1 }];
            break;
        }
    }
    return [
        {
            delay: 1000,
            callback: (instance) => {
                instance.callback.updateAgentAvailability(availability[0]);
            },
        },
        {
            delay: 500 * mockState.connectDelayFactor,
            callback: (instance) => {
                instance.callback.updateAgentAvailability(availability[1]);
            },
        },
        {
            delay: 1000 * mockState.connectDelayFactor,
            callback: (instance) => {
                instance.callback.updateAgentAvailability(availability[2]);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                mockState.currentAgent = MOCK_AGENT_PROFILE_SHEPARD;
                instance.callback.agentJoined(MOCK_AGENT_PROFILE_SHEPARD);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.callback.agentTyping(true);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.sendMessageToUser(HELLO_TEXT(userName), mockState.currentAgent.id);
            },
        },
    ];
}
// Help messages
const HELP_TEXT = `You can send me the messages below to get a specific response from me.\n\n
**text**: I will say something pithy.
**text medium**: I will send you a few lines of text.
**text long**: I will bore you with a treatise on coding standards.
**joke**: I will tell you a joke with after a longer pause with multiple pauses in between messages.
**someone else**: I will transfer you to someone not as nice as I am.
**multiple**: I will output a response with multiple items in it.
**version**: I will output the version of web chat being used.
**intl**: I will output the current value for a translatable string.
**message throw**: This will throw an error while sending this message.
**hang**: The service desk will never respond to this message.
**leave**: I will leave the chat without ending it.
**hide**: I will send a message that should get hidden from session history.
**hide this message**: The user message should be hidden from session history.
**secret**: I will send you a message with the word "secret" in it.
**image**: I will insert an image response.
**files**: I will insert some file responses.
**video**: I will insert a video response.
**custom**: I will insert a custom response.
**markdown**: I will insert some markdown.`;
function MESSAGE_TO_AGENT_HELP() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                instance.sendMessageToUser('***These messages must be sent to an agent and not to the bot.***', instance.mockState.currentAgent.id);
                instance.sendMessageToUser(HELP_TEXT, instance.mockState.currentAgent.id);
            },
        },
    ];
}
// A message to the agent to respond with some simple text.
function MESSAGE_TO_AGENT_TEXT(text, delay = 1000, showTyping = true) {
    const steps = [];
    if (showTyping) {
        steps.push({
            delay,
            callback: (instance) => {
                instance.callback.agentReadMessages();
                instance.callback.agentTyping(true);
            },
        });
    }
    steps.push({
        delay,
        callback: (instance) => {
            instance.sendMessageToUser(text, instance.mockState.currentAgent.id);
        },
    });
    return steps;
}
// A response to talk to someone else.
function TRANSFER_TO_GARRUS() {
    return [
        {
            delay: 1000,
            callback: (instance) => {
                instance.callback.agentReadMessages();
                instance.callback.agentTyping(true);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.sendMessageToUser('Noooooo! I thought we were getting along so well!', instance.mockState.currentAgent.id);
            },
        },
        {
            delay: 500,
            callback: (instance) => {
                instance.callback.agentReadMessages();
                instance.callback.agentTyping(true);
            },
        },
        {
            delay: 500,
            callback: (instance) => {
                instance.sendMessageToUser("Okay, I'll find **someone else** you can talk to.", instance.mockState.currentAgent.id);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.callback.beginTransferToAnotherAgent();
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.mockState.currentAgent = MOCK_AGENT_PROFILE_GARRUS;
                instance.callback.agentJoined(MOCK_AGENT_PROFILE_GARRUS);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.callback.agentReadMessages();
                instance.callback.agentTyping(true);
            },
        },
        {
            delay: 500,
            callback: (instance) => {
                instance.sendMessageToUser("Hi! I'm **Garrus** and I'm nicer than **Shepard**!", instance.mockState.currentAgent.id);
            },
        },
    ];
}
// A response to talk to a third agent.
function TRANSFER_TO_LEGION() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                instance.sendMessageToUser("You'll regret this.", instance.mockState.currentAgent.id);
            },
        },
        {
            delay: 0,
            callback: (instance) => {
                instance.callback.agentReadMessages();
                instance.callback.agentTyping(true);
            },
        },
        {
            delay: 1000,
            callback: (instance) => {
                instance.mockState.currentAgent = MOCK_AGENT_PROFILE_LEGION;
                instance.callback.beginTransferToAnotherAgent(MOCK_AGENT_PROFILE_LEGION);
                instance.callback.agentJoined(MOCK_AGENT_PROFILE_LEGION);
            },
        },
        {
            delay: 0,
            callback: (instance) => {
                instance.sendMessageToUser('Shepard-Commander.', instance.mockState.currentAgent.id);
            },
        },
    ];
}
// A response to trigger the agent leaving the chat.
function MESSAGE_TO_AGENT_LEAVE_CHAT() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                instance.sendMessageToUser('I am leaving now!', instance.mockState.currentAgent.id);
                instance.callback.agentLeftChat();
            },
        },
    ];
}
// A response to talk to an agent with no name.
function TRANSFER_TO_EMPTY() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                instance.sendMessageToUser('Transferring you to a no-name.', instance.mockState.currentAgent.id);
                instance.mockState.currentAgent = MOCK_AGENT_PROFILE_EMPTY;
                instance.callback.agentJoined(MOCK_AGENT_PROFILE_EMPTY);
                instance.sendMessageToUser('Hi.', instance.mockState.currentAgent.id);
            },
        },
    ];
}
// A message from the user that fails.
function MESSAGE_THROW() {
    return [
        {
            delay: 0,
            callback: () => { },
            returnPromise: Promise.reject(),
        },
    ];
}
function MESSAGE_IMAGE() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                const message = {
                    id: null,
                    output: {
                        generic: [
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.IMAGE,
                                source: 'https://web-chat.global.assistant.test.watson.appdomain.cloud/assets/cat-1950632_1280.jpg',
                                title: 'Grump cat',
                            }),
                        ],
                    },
                };
                instance.sendMessageToUser(message, instance.mockState.currentAgent.id);
            },
        },
    ];
}
function MESSAGE_FILES() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                const message = {
                    id: null,
                    output: {
                        generic: [
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.BUTTON,
                                kind: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.d.LINK,
                                button_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.b.URL,
                                url: 'https://web-chat.global.assistant.test.watson.appdomain.cloud/assets/cat-1950632_1280.jpg',
                                label: 'Grump Cat.png',
                                target: '_blank',
                            }),
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.BUTTON,
                                kind: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.d.LINK,
                                button_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.b.URL,
                                url: 'https://web-chat.global.assistant.test.watson.appdomain.cloud/assets/maine-coon-694730_1280.jpg',
                                target: '_blank',
                            }),
                        ],
                    },
                };
                instance.sendMessageToUser(message, instance.mockState.currentAgent.id);
            },
        },
    ];
}
function MESSAGE_VIDEO() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                const message = {
                    id: null,
                    output: {
                        generic: [
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.VIDEO,
                                title: 'The video title',
                                source: 'https://web-chat.global.assistant.test.watson.appdomain.cloud/assets/lake%20(720p).mp4',
                                alt_text: 'The video alternate text',
                                description: 'The video description',
                            }),
                        ],
                    },
                };
                instance.sendMessageToUser(message, instance.mockState.currentAgent.id);
            },
        },
    ];
}
// A custom response.
function MESSAGE_CUSTOM() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                const message = {
                    id: null,
                    output: {
                        generic: [
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.TEXT,
                                text: 'Below is a custom response but you may not see it if no handler has been created.',
                            }),
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.USER_DEFINED,
                                user_defined: { user_defined_type: 'agent_custom' },
                            }),
                        ],
                    },
                };
                instance.sendMessageToUser(message, instance.mockState.currentAgent.id);
            },
        },
    ];
}
function MESSAGE_TO_AGENT_MULTIPLE() {
    return [
        {
            delay: 0,
            callback: (instance) => {
                const message = {
                    id: null,
                    output: {
                        generic: [
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.TEXT,
                                text: 'This is a text item in this response.',
                            }),
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.TEXT,
                                text: 'This is a second text item.',
                            }),
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
                                response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.IMAGE,
                                source: 'https://web-chat.global.assistant.test.watson.appdomain.cloud/assets/cat-1950632_1280.jpg',
                            }),
                        ],
                    },
                };
                instance.sendMessageToUser(message, instance.mockState.currentAgent.id);
            },
        },
    ];
}
// A message from the user that hangs.
function HANG_MESSAGE() {
    return [
        {
            delay: 0,
            callback: () => { },
            returnPromise: new Promise(() => { }),
        },
    ];
}
// A response to a user asking for a joke.
function MESSAGE_TO_AGENT_JOKE() {
    return [
        {
            delay: 1000,
            callback: (instance) => {
                instance.callback.agentReadMessages();
                instance.callback.agentTyping(true);
            },
        },
        {
            delay: 5000,
            callback: (instance) => {
                instance.sendMessageToUser("One atom says to another atom: I think I've lost an electron.", instance.mockState.currentAgent.id);
            },
        },
        {
            delay: 2000,
            callback: (instance) => {
                instance.sendMessageToUser('The second atom says: are you sure?', instance.mockState.currentAgent.id);
            },
        },
        {
            delay: 2000,
            callback: (instance) => {
                instance.sendMessageToUser("The first atom says: I'm positive.", instance.mockState.currentAgent.id);
            },
        },
    ];
}
// A message from the user that fails.
function STATE_CHANGED(state) {
    return [
        {
            delay: 0,
            callback: (instance) => {
                instance.sendMessageToUser(`The web chat state has changed: ${JSON.stringify(state)}`, instance.mockState.currentAgent.id);
            },
        },
    ];
}
const FENCE_BLOCK = `
\`\`\`
const example = {
  value: true,
};
\`\`\`
`;
// Note, blockquote is not supported. Our HTML sanitization turns the ">" into "&gt;" which prevents the markdown
// library from turning it into a blockquote.
const MARKDOWN = `
This is **bold**, ***bold and italics***, **bold *italics inside***, *italics **bold inside***, and ~~strikethrough~~.

# H1
H1 Text
## H2
H2 Text

1. Ordered List 1 
2. Ordered List 2 

- Unordered List 1 
- Unordered List 2

\`Inline code\`

${FENCE_BLOCK}

| Header 1 | Header 2 |
| ----------- | ----------- |
| Text 1 | Text 2 |
| Text 3 | Text 4 |

---

[IBM's HomePage 1 (new tab)](https://ibm.com)

[IBM's HomePage 1 (same tab)](https://ibm.com){{target=_self}}

ibm.com (autolink, new tab)

![Cute kitten!](https://web-chat.global.assistant.test.watson.appdomain.cloud/assets/cat-1950632_1280.jpg)
`;




/***/ })

}]);
//# sourceMappingURL=cds-ai-chat-mock-sd.bundle.js.map