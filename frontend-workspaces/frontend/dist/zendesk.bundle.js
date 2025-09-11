"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["zendesk"],{

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




/***/ }),

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ZendeskServiceDesk.js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ZendeskServiceDesk.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZendeskServiceDesk: function() { return /* binding */ ZendeskServiceDesk; }
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






































var CHAT_EVENT_TYPES;
(function (CHAT_EVENT_TYPES) {
    // Chat message incoming from an agent.
    CHAT_EVENT_TYPES["MESSAGE"] = "chat.msg";
    // Agent is typing.
    CHAT_EVENT_TYPES["TYPING"] = "typing";
    // A visitor is in the wait queue.
    CHAT_EVENT_TYPES["WAIT_QUEUE"] = "chat.wait_queue";
    // A visitor is in a specific position in the wait queue.
    CHAT_EVENT_TYPES["QUEUE_POSITION"] = "chat.queue_position";
    // An agent or visitor has joined the chat.
    CHAT_EVENT_TYPES["MEMBER_JOIN"] = "chat.memberjoin";
    // An agent or visitor has left the chat.
    CHAT_EVENT_TYPES["MEMBER_LEAVE"] = "chat.memberleave";
    // Agent has read a message.
    CHAT_EVENT_TYPES["LAST_READ"] = "last_read";
    // An agent or visitor sends a chat comment.
    CHAT_EVENT_TYPES["COMMENT"] = "chat.comment";
})(CHAT_EVENT_TYPES || (CHAT_EVENT_TYPES = {}));
/**
 * Account status that denotes whether Zendesk account is valid and has available agents.
 */
var ACCOUNT_STATUS;
(function (ACCOUNT_STATUS) {
    ACCOUNT_STATUS["ONLINE"] = "online";
    ACCOUNT_STATUS["AWAY"] = "away";
    ACCOUNT_STATUS["OFFLINE"] = "offline";
})(ACCOUNT_STATUS || (ACCOUNT_STATUS = {}));
/**
 * Connection status event types that Zendesk sends after we call init().
 */
var CONNECTION_STATUS;
(function (CONNECTION_STATUS) {
    CONNECTION_STATUS["CLOSED"] = "closed";
    CONNECTION_STATUS["CONNECTED"] = "connected";
    CONNECTION_STATUS["CONNECTING"] = "connecting";
})(CONNECTION_STATUS || (CONNECTION_STATUS = {}));
// Number of retries we attempt when Zendesk Web SDK calls fail.
const NUM_RETRIES = 5;
// Sleep interval in milliseconds before the next retry.
const RETRY_INTERVAL = 1000;
// Zendesk Web SDK source script URL.
const ZENDESK_WEB_SDK_URL = 'https://dev.zopim.com/web-sdk/latest/web-sdk.js';
// Nickname prefix for agents.
const NICKNAME_PREFIX_AGENT = 'agent:';
// Nickname prefix for visitors, AKA the chat widget user. (visitor prefix does NOT have an appended colon)
const NICKNAME_PREFIX_VISITOR = 'visitor';
// Prefix we use for denoting a tag used to store a session variable in for agent app.
const TAG_WA_SESSION_PREFIX = 'x-watson-assistant-session_';
// Prefix we use for denoting a tag used to store a session variable in our agent app. This is a newer version that is
// compatible with ZenDesk Support, which removes special characters more aggressively than ZenDesk Chat.
const TAG_WA_SESSION_PREFIX_SUPPORT = 'x-watson-assistant-session-support_';
// Error denoting Zendesk account is not online or has no online agents.
const ERROR_ACCOUNT_NOT_ONLINE = `${_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aa} Zendesk account is not online`;
// Error denoting a connection attempt was made but with no initial message.
const ERROR_NO_AGENT_MESSAGE = `${_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aa} A message to the agent is required to initiate a connection to the service desk.`;
// Error denoting the Zendesk account connection is not initialized and is not ready to be called.
const ERROR_NOT_INITIALIZED = `${_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aa} Zendesk Web SDK is not initialized.`;
// Error denoting that we do not support a structured message without an initialed message string.
const ERROR_STRUCTURED_MSG_NOT_SUPPORTED = `${_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aa} Received a structured message without a string message from agent and this is not supported.`;
// Warning denoting we received a structured_msg event type that we don't currently support.
const WARNING_EVENT_TYPE_NOT_SUPPORTED = (type) => `${_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aa} Event type ${type} not currently supported.`;
// Warning denoting we received an options array event type that we don't currently support.
const WARNING_MESSAGE_OPTIONS_NOT_SENT = `${_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aa} Received options attached to the message and the options will not be displayed to the user.`;
// Warning denoting that we received a structured message with a string, and that we will strip out the structured msg.
const WARNING_STRUCTURED_MSG_NOT_SUPPORTED = `${_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aa} Received a structured message from agent and this is not supported. Only the string message will be sent.`;

/**
 * Zendesk Integration type name - used externally for routing purposes
 */
const ZENDESK_INTEGRATION_NAME = 'zendesk';
/**
 * Boolean indicating if Zendesk's SDK is already loaded on the DOM as a script. If it is, then ZendeskServiceDesk will
 * skip loading another identical script onto the DOM.
 */
global.zendeskScriptLoaded = false;
class ZendeskServiceDesk extends _ServiceDeskImpl_js__WEBPACK_IMPORTED_MODULE_2__.S {
    constructor(callback, config, serviceManager) {
        super(callback, config, serviceManager);
        /**
         * Indicates if we are currently connected to the service desk. This may flip to false at any point as the result
         * of the connection getting dropped in the middle of a conversation.
         */
        this.isConnected = false;
        this.account_key = config && config.subscription && config.subscription.account && config.subscription.account.id;
        if (!this.account_key) {
            throw new Error('Zendesk account key is not found in definition config.');
        }
        this.isChatStarted = false;
    }
    /**
     * If not already initialized, this will load the zendesk module from the ZENDESK_WEB_SDK_URL source and then inject
     * the module into the webpage's DOM. When the module load is complete, the returned Promise will resolve.
     */
    async ensureZendeskModuleLoadedAndConnected() {
        // If Zendesk SDK is already loaded, simply set the SDK and SDK-promise objects.
        // Otherwise, load the Zendesk SDK onto the DOM.
        if (global.zendeskScriptLoaded) {
            this.sdk = window.zChat;
            this.loadingSDKPromise = Promise.resolve();
        }
        else if (!this.loadingSDKPromise && !this.sdk) {
            this.loadingSDKPromise = new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = ZENDESK_WEB_SDK_URL;
                script.onerror = (error) => {
                    reject(error);
                };
                script.onload = () => {
                    this.loadingSDKPromise = null;
                    this.sdk = window.zChat;
                    const params = {
                        account_key: this.account_key,
                        suppress_console_error: true,
                    };
                    // If JWT is available, then call the Zendesk jwt_fn
                    // to make sure calls are routed to Zendesk through the auth route
                    if (this.authJWT) {
                        params.authentication = {
                            jwt_fn: (callback) => {
                                // The JWT is immediately available so call the callback right away
                                callback(this.authJWT);
                            },
                        };
                    }
                    this.sdk.init(params);
                    this.sdk.on('chat', (event_data) => {
                        if (this.isAccountOnline()) {
                            this.handleChatEvent(event_data);
                        }
                    });
                    // This event fires only when an agent joins or an existing agent's information has changed.
                    this.sdk.on('agent_update', (event_data) => {
                        if (this.isAccountOnline()) {
                            this.handleChatAgentUpdateEvent(event_data);
                        }
                    });
                    this.sdk.on('error', (error) => {
                        const { context } = error;
                        if (context === 'init') {
                            this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING, logInfo: error.message });
                        }
                    });
                    // Documentation on connection_update events: https://api.zopim.com/web-sdk/#zchat-getaccountstatus.
                    this.sdk.on('connection_update', (status) => {
                        switch (status) {
                            case CONNECTION_STATUS.CONNECTED: {
                                this.isConnected = true;
                                this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.DISCONNECTED, isDisconnected: false });
                                // Resolve the initial promise that may be waiting on the connection to happen. This may occur
                                // multiple times during the chat but it's okay to do this more than once.
                                resolve(undefined);
                                break;
                            }
                            case CONNECTION_STATUS.CONNECTING:
                            case CONNECTION_STATUS.CLOSED: {
                                // CONNECTION_STATUS.CONNECTING can occur if the connection with the service desk is temporarily lost in the middle of a
                                // conversation. CONNECTION_STATUS.CLOSED can occur if the connection has been closed due to various reasons.
                                const wasConnected = this.isConnected;
                                this.isConnected = false;
                                if (wasConnected) {
                                    this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.DISCONNECTED, isDisconnected: true });
                                }
                                break;
                            }
                        }
                    });
                };
                document.getElementsByTagName('head')[0].appendChild(script);
                global.zendeskScriptLoaded = true;
            });
        }
        return this.loadingSDKPromise;
    }
    async startChat(connectMessage, startChatOptions) {
        // The connect info is contained on the first "connect_to_agent" response we got from dialog.
        const connectInfo = connectMessage.output.generic.find(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ab);
        this.authJWT = connectInfo.transfer_info?.additional_data?.jwt;
        await this.ensureZendeskModuleLoadedAndConnected();
        if (this.isChatStarted) {
            return;
        }
        if (this.isAccountOnline()) {
            // If the visitor does not have a JWT associated with it (aka not authenticated), then
            // set her display name to the display name generated by the webchat.
            // If the visitor is authenticated, then Zendesk will automatically compile her details
            // from her JWT payload.
            if (!this.authJWT) {
                this.sdk.setVisitorInfo({
                    display_name: this.state.userID || 'Unknown Visitor',
                    email: '',
                    phone: '',
                });
            }
            // Clearing the department before the chat is required, otherwise the conversation retains the existing
            // department information (despite having already requested to clear the department in endChat).
            await this.clearChatDepartment();
            // Gather info about all online departments and the target routing department name.
            // Then figure if the target route department is online, and if so then perform the routing.
            const routeDepartmentName = connectInfo.transfer_info?.target?.[ZENDESK_INTEGRATION_NAME]?.department;
            const routeDepartment = routeDepartmentName &&
                this.sdk
                    .getAllDepartments()
                    .find((department) => department.name === routeDepartmentName && department.status === ACCOUNT_STATUS.ONLINE);
            if (routeDepartment) {
                await this.setChatDepartment(routeDepartment.id);
            }
            // In order to load the agent app inside the Zendesk application, we need to pass the session history key to
            // Zendesk. We do that by passing the key as a tag. There are two different versions of Zendesk: Zendesk Chat
            // and Zendesk Support. Each uses its own format for tags so we need to pass two tags to support either system.
            const addSessionTagExecutor = () => new Promise(resolve => {
                const tags = [];
                // A string that is separated by AGENT_APP_KEY_SEPARATOR that can be used to create a PublicConfig. It
                // includes base connect info like integrationID, etc., and by pass JWT security
                // with a one time auth code. It is formatted as JSON as
                // {
                //     "sessionHistoryKey":"dev::6.9.0::425169::f4d26c16-8607-49ce-8d71-70f1c2de5feb::6a755ee2-b094-4b9b-ada3-482295647f17::6435434b-b3e1-4f70-8eff-7149d43d938b::0fcc042c5b45414b99850fbd38840ad9"
                // }
                // We must stringify it for ZenDesk Chat.
                const metadata_for_chat = JSON.stringify(startChatOptions.agentAppInfo);
                // There might already be tags on the account, so we include Date.now here to make sure we grab most recent.
                tags.push(`${TAG_WA_SESSION_PREFIX}${this.state.sessionID}_${Date.now()}_${metadata_for_chat}`);
                // Zendesk Support only allows alphanumeric, dash and underscore characters in their tags.
                // They say they support / but it is a lie and it is stripped.
                // They also say they support all UTF-8 characters... (see https://www.w3schools.com/charsets/ref_utf_basic_latin.asp)
                // But they don't really. But they do support the Latin ones below.
                // They also change everything to lowercase. I blame a designer I hate for that one.
                // See https://support.zendesk.com/hc/en-us/articles/4408835059482-Working-with-ticket-tags
                // This means we need to send the data in an alternate format.
                // We have to send both versions to account for folks with a version of the agent app prior to web chat version 7.1.
                // We could, in the future, force folks to upgrade their agent app when moving to a future major version of web chat
                // and remove the TAG_WA_SESSION_PREFIX tag and only use this tag.
                const metadata_for_support = startChatOptions.agentAppInfo.sessionHistoryKey
                    .replace(/\./g, 'ä') // replace all periods with ä
                    .replace(/_/g, 'â') // replace all underscores with â, we don't want things to get confused when we split on _ later.
                    .replace(/::/g, 'à'); // replace all '::' with 'à'
                // The ZenDesk agent app will reverse all these replacements when they are able to grab the tags; this
                // happens in iframe.html.
                // There might already be tags on the account, so we include Date.now here to make sure we grab most recent.
                tags.push(`${TAG_WA_SESSION_PREFIX_SUPPORT}${this.state.sessionID}_${Date.now()}_${metadata_for_support}`);
                this.sdk.addTags(tags, (error) => resolve(this.handleError(error)));
            });
            await this.doWithRetry(0, addSessionTagExecutor);
            // Add any tags that are specified in the dialog pre-chat context variables.
            const preChat = connectMessage.context?.integrations?.zendesk?.pre_chat;
            if (typeof preChat === 'object' && !(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ac)(preChat)) {
                const preChatTags = Object.entries(preChat).map(([key, value]) => `${key}_${value}`);
                const addContextTagsExecutor = () => new Promise(resolve => {
                    this.sdk.addTags(preChatTags, (error) => resolve(this.handleError(error)));
                });
                await this.doWithRetry(0, addContextTagsExecutor);
            }
            // Send the messages provided by the connect_to_agent object intended to be sent to the agent. If the array doesn't
            // exist, the connection should fail because an initial message is required to establish the websocket connection.
            if (connectInfo.transfer_info && Array.isArray(connectInfo.transfer_info.summary_message_to_agent)) {
                connectInfo.transfer_info.summary_message_to_agent.forEach(agentMessage => {
                    if (agentMessage.response_type === _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.TEXT) {
                        this.sdk.sendChatMsg(agentMessage.text, (error) => {
                            if (error) {
                                throw Error(error);
                            }
                        });
                    }
                });
            }
            else {
                throw Error(ERROR_NO_AGENT_MESSAGE);
            }
            // Check if the agent is already in the chat room. This happens when the Zendesk agent clicks on Continue Chat
            // after the web chat user has ended the chat.
            const existingAgents = this.sdk.getServingAgentsInfo();
            if (Array.isArray(existingAgents) && existingAgents.length > 0) {
                const { nick, display_name } = existingAgents[0];
                const agent = {
                    id: nick,
                    nickname: display_name, // nickname is a misnomer in Zendesk, using display_name instead
                };
                this.currentAgent = agent;
                this.callback.agentJoined(agent);
            }
            this.isChatStarted = true;
        }
        else {
            throw Error(ERROR_ACCOUNT_NOT_ONLINE);
        }
    }
    async endChat() {
        await this.ensureZendeskModuleLoadedAndConnected();
        this.assertChatStarted();
        const executor = () => new Promise(resolve => {
            // End chat while clearing the conversation's default department.
            // Otherwise, changing the conversation's department will not work.
            this.sdk.endChat({
                clear_dept_id_on_chat_ended: true,
            }, (error) => {
                if (error) {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[ZendeskServiceDesk]', error);
                    resolve(false);
                }
                else {
                    this.isChatStarted = false;
                    this.currentAgent = undefined;
                    resolve(true);
                }
            });
        });
        await this.doWithRetry(0, executor);
    }
    async sendMessageToAgent(message, messageID) {
        await this.ensureZendeskModuleLoadedAndConnected();
        this.assertChatStarted();
        const { text } = message.input;
        if (this.isAccountOnline()) {
            const executor = () => new Promise(resolve => {
                this.sdk.sendChatMsg(text, (error) => {
                    if (error) {
                        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[ZendeskServiceDesk] Error sending message', error);
                        resolve(false);
                    }
                    else {
                        this.sdk.sendTyping(false);
                        resolve(true);
                    }
                });
            });
            await this.doWithRetry(0, executor);
        }
        else {
            throw Error(ERROR_ACCOUNT_NOT_ONLINE);
        }
    }
    async userReadMessages() {
        await this.ensureZendeskModuleLoadedAndConnected();
        this.assertChatStarted();
        this.sdk.markAsRead();
    }
    async userTyping(isTyping) {
        await this.ensureZendeskModuleLoadedAndConnected();
        this.assertChatStarted();
        this.sdk.sendTyping(isTyping);
    }
    async areAnyAgentsOnline(connectMessage) {
        const connectInfo = connectMessage.output.generic.find(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ab);
        this.authJWT = connectInfo?.transfer_info?.additional_data?.jwt;
        await this.ensureZendeskModuleLoadedAndConnected();
        return this.isAccountOnline();
    }
    /**
     * Routes the event to the correct handler method based on the event type.
     */
    handleChatEvent(event) {
        switch (event.type) {
            case CHAT_EVENT_TYPES.MESSAGE: {
                this.handleChatMessageEvent(event);
                break;
            }
            case CHAT_EVENT_TYPES.TYPING: {
                this.handleChatTypingEvent(event);
                break;
            }
            case CHAT_EVENT_TYPES.WAIT_QUEUE: {
                const queuePositionEvent = {
                    type: CHAT_EVENT_TYPES.QUEUE_POSITION,
                    nick: event.nick,
                    queue_position: event.wait_queue,
                };
                this.handleChatQueuePositionEvent(queuePositionEvent);
                break;
            }
            case CHAT_EVENT_TYPES.QUEUE_POSITION: {
                this.handleChatQueuePositionEvent(event);
                break;
            }
            case CHAT_EVENT_TYPES.MEMBER_JOIN: {
                // nothing goes here because the member join feature is being handled by the 'agent_update' event
                break;
            }
            case CHAT_EVENT_TYPES.MEMBER_LEAVE: {
                this.handleChatAgentLeaveEvent(event);
                break;
            }
            case CHAT_EVENT_TYPES.LAST_READ: {
                this.handleChatAgentLastReadEvent(event);
                break;
            }
            case CHAT_EVENT_TYPES.COMMENT: {
                this.handleChatComment(event);
                break;
            }
            default: {
                console.warn(WARNING_EVENT_TYPE_NOT_SUPPORTED(event.type));
                this.handleEventNotSupported(event);
                break;
            }
        }
    }
    /**
     * Handles event when the agent sends a message.
     */
    async handleChatMessageEvent(event) {
        const { msg, structured_msg, options } = event;
        if (this.isAgentMessage(event)) {
            // We currently cannot support structured messages, so we treat them like regular string messages.
            // Options array might exist and contain no elements even in a pure text message event.
            if (structured_msg || (Array.isArray(options) && options.length > 0)) {
                // If the structured message has no initial string, then we cannot treat this like a single string message and
                // must throw an error.
                if (!msg) {
                    throw Error(ERROR_STRUCTURED_MSG_NOT_SUPPORTED);
                }
                // Warning message depends on whether the structured message or options was filled.
                const warningMsg = structured_msg ? WARNING_STRUCTURED_MSG_NOT_SUPPORTED : WARNING_MESSAGE_OPTIONS_NOT_SENT;
                console.warn(warningMsg);
                const executor = () => new Promise(resolve => this.sdk.sendChatComment(warningMsg, (error) => resolve(this.handleError(error))));
                await this.doWithRetry(0, executor);
            }
            const agentId = this.currentAgent ? this.currentAgent.id : null;
            const messageResponse = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.J)(msg);
            // As soon as the agent sends a message, make sure to clear the "isTyping" event for the agent.
            this.callback.agentTyping(false);
            this.callback.sendMessageToUser(messageResponse, agentId);
        }
    }
    /**
     * Handles event when the agent is typing.
     */
    handleChatTypingEvent(event) {
        const { typing } = event;
        if (this.isAgentMessage(event)) {
            this.callback.agentTyping(typing);
        }
    }
    /**
     * Handles event when the visitor/chat user enters the agent wait queue.
     */
    handleChatQueuePositionEvent(event) {
        const { queue_position } = event;
        const availability = {
            position_in_queue: queue_position,
        };
        this.callback.updateAgentAvailability(availability);
    }
    /**
     * Handles event when an agent joins, is transferred, or has updated his/her information.
     */
    handleChatAgentUpdateEvent(event) {
        // Check if the chat has not started (or more actually, has already ended) and ignore if so.
        if (!this.isChatStarted) {
            return;
        }
        const { nick, display_name } = event;
        const agent = {
            id: nick,
            nickname: display_name,
            profile_picture_url: event.avatar_path ? event.avatar_path : undefined,
        };
        // If an agent already exists and the agent IDs do not match, then an agent transfer is occurring.
        if (this.currentAgent && this.currentAgent.id !== agent.id) {
            this.callback.beginTransferToAnotherAgent(agent);
            this.callback.agentJoined(agent);
        }
        else if (!this.currentAgent) {
            // New agent has joined, and no agent had previously joined.
            this.callback.agentJoined(agent);
        }
        this.currentAgent = agent;
    }
    /**
     * Handles event when an agent leaves the chat.
     */
    handleChatAgentLeaveEvent(event) {
        const { nick } = event;
        if (this.isAgentMessage(event)) {
            // If the current agent leaves, then end the chat.
            // TO DO: When we support multiple agents, we need to track which agents have come and gone.
            if (nick === this.currentAgent.id) {
                this.callback.agentLeftChat();
                this.currentAgent = null;
            }
        }
    }
    /**
     * Handles event when an agent has read a message.
     */
    handleChatAgentLastReadEvent(event) {
        if (this.isAgentMessage(event)) {
            this.callback.agentReadMessages();
        }
    }
    /**
     * Handles event when an agent or visitor sends a chat comment. Sending a chat comment is akin to sending a chat
     * status to the agent.
     */
    async handleChatComment(event) {
        if (this.isVisitorMessage(event)) {
            // This is the expected case, and we ignore chat comment events that we send on the visitor's behalf.
            return;
        }
        // If the agent sends a comment, let the agent know we don't know how to send that to the visitor.
        this.handleEventNotSupported(event);
    }
    /**
     * Handles events that we do not currently support by sending a chat comment to the agent the message was not sent.
     */
    async handleEventNotSupported(event) {
        const executor = () => new Promise(resolve => this.sdk.sendChatComment(WARNING_EVENT_TYPE_NOT_SUPPORTED(event.type), (error) => resolve(this.handleError(error))));
        await this.doWithRetry(0, executor);
    }
    /**
     * Returns true if the event is a message with agent as the source.
     */
    isAgentMessage(event) {
        return typeof event.nick === 'string' && event.nick.startsWith(NICKNAME_PREFIX_AGENT);
    }
    /**
     * Returns true if the event is a message with visitor as the source.
     */
    isVisitorMessage(event) {
        return typeof event.nick === 'string' && event.nick.startsWith(NICKNAME_PREFIX_VISITOR);
    }
    /**
     * Returns true if the account is online and there are online agents.
     */
    isAccountOnline() {
        return this.sdk?.getAccountStatus() === ACCOUNT_STATUS.ONLINE;
    }
    /**
     * Asserts that the chat has initialized and has started.
     */
    assertChatStarted() {
        if (!this.isChatStarted) {
            throw Error(ERROR_NOT_INITIALIZED);
        }
    }
    /**
     * Sets the routing department of the chat conversation.
     *
     * @param departmentId The ID of the department to route to.
     */
    async setChatDepartment(departmentId) {
        const executor = () => new Promise(resolve => this.sdk.setVisitorDefaultDepartment(departmentId, (error) => resolve(this.handleError(error))));
        await this.doWithRetry(0, executor);
    }
    /**
     * Clear the routing department of the chat conversation.
     */
    async clearChatDepartment() {
        const executor = () => new Promise(resolve => this.sdk.clearVisitorDefaultDepartment((error) => resolve(this.handleError(error))));
        await this.doWithRetry(0, executor);
    }
    /**
     * Calls the executor method and retries the call a number of times if the executor fails.
     */
    async doWithRetry(numRetriesAttempted, executor) {
        if (numRetriesAttempted > NUM_RETRIES) {
            return false;
        }
        try {
            const result = await executor();
            if (result) {
                return true;
            }
        }
        catch (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('Error in ZendeskServiceDesk.doWithRetry', error);
        }
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.R)(RETRY_INTERVAL);
        return this.doWithRetry(numRetriesAttempted + 1, executor);
    }
    /**
     * Takes an optional error and, if not null, prints the error onto the browser console.
     * Then returns whether an error was found.
     *
     * @param error The error to investigate (can be undefined).
     */
    handleError(error) {
        if (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[ZendeskServiceDesk]', error);
            return false;
        }
        return true;
    }
}




/***/ })

}]);
//# sourceMappingURL=zendesk.bundle.js.map