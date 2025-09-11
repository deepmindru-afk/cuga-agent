"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["cds-ai-chat-haa"],{

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/HumanAgentServiceImpl.js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/HumanAgentServiceImpl.js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HumanAgentServiceImpl: function() { return /* binding */ HumanAgentServiceImpl; },
/* harmony export */   createService: function() { return /* binding */ createService; },
/* harmony export */   validateCustomServiceDesk: function() { return /* binding */ validateCustomServiceDesk; }
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





































const SESSION_HISTORY_KEY_DELIMITER = '::';
/**
 * Specifies the strict order of the fields from which the key should be generated from.
 */
const SessionHistoryKeyOrder = [
    'region',
    'version',
    'auth_code',
    'session_id',
    'integration_id',
    'service_instance_id',
    'subscription_id',
];
/**
 * Object containing utility functions for serializing and deserializing the session history key with the pattern:
 * ${ region }::${ version }::${ authCode }::${ sessionID }::${ integrationID }::${ serviceInstanceID }::${ subscriptionID }
 */
const SessionHistoryKeySerializer = {
    serialize: (sessionHistoryKey) => {
        const orderedSessionKeyValues = SessionHistoryKeyOrder.map(key => sessionHistoryKey[key]);
        return orderedSessionKeyValues.join(SESSION_HISTORY_KEY_DELIMITER);
    },
    deserialize: (serializedSessionHistoryKey) => {
        const sessionHistoryKeyParams = serializedSessionHistoryKey.split(SESSION_HISTORY_KEY_DELIMITER);
        const sessionHistoryKeyFields = {};
        SessionHistoryKeyOrder.forEach((key, index) => {
            sessionHistoryKeyFields[key] = sessionHistoryKeyParams[index];
        });
        return sessionHistoryKeyFields;
    },
};

/**
 * The amount of time to wait when a message is sent to the service desk before displaying a warning if the service
 * desk doesn't indicate the message was received.
 */
const SEND_TIMEOUT_WARNING_MS = 3000;
/**
 * The amount of time to wait when a message is sent to the service desk before displaying an error if the service
 * desk doesn't indicate the message was received.
 */
const SEND_TIMEOUT_ERROR_MS = 20000;
/**
 * The amount of time to wait before an attempt to end a chat times out, and we close it anyway.
 */
const END_CHAT_TIMEOUT_MS = 5000;
/**
 * The amount of time to wait before a check for agent availability times out if there's no answer.
 */
const AVAILABILITY_TIMEOUT_MS = 5000;
/**
 * The amount of time to wait before displaying the "bot returns" message.
 */
const BOT_RETURN_DELAY = 1500;
const { FROM_USER, RECONNECTED, DISCONNECTED, AGENT_ENDED_CHAT, AGENT_JOINED, USER_ENDED_CHAT, CHAT_WAS_ENDED, TRANSFER_TO_AGENT, AGENT_LEFT_CHAT, RELOAD_WARNING, SHARING_CANCELLED, SHARING_DECLINED, SHARING_ACCEPTED, SHARING_REQUESTED, SHARING_ENDED, } = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.A;
class HumanAgentServiceImpl {
    constructor(serviceManager) {
        /**
         * Indicates if a chat has started (the startChat function has been called). It does not necessarily mean that an
         * agent has joined and a full chat is in progress.
         */
        this.chatStarted = false;
        /**
         * Indicates if the service desk has gotten into a disconnected error state.
         */
        this.showingDisconnectedError = false;
        /**
         * Indicates if an agent is currently typing.
         */
        this.isAgentTyping = false;
        /**
         * The current set of files that are being uploaded.
         */
        this.uploadingFiles = new Set();
        /**
         * We only want to show the refresh/leave warning when the first agent joins, so we use this boolean to track if the
         * warning has been shown.
         */
        this.showLeaveWarning = true;
        this.serviceManager = serviceManager;
    }
    /**
     * If a custom service desk is configured, returns the name.
     */
    getCustomServiceDeskName() {
        return this.serviceManager.store.getState().config.public.serviceDeskFactory
            ? this.serviceDesk.getName?.()
            : undefined;
    }
    /**
     * Initializes this service. This will create the service desk instance that can be used for communicating with
     * service desks.
     */
    async initialize() {
        if (this.serviceDesk) {
            throw new Error('A service desk has already been created!');
        }
        const { store, instance } = this.serviceManager;
        const state = store.getState();
        const { config, persistedToBrowserStorage } = state;
        const serviceDeskState = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.e)(persistedToBrowserStorage.chatState.agentState.serviceDeskState);
        this.serviceDeskCallback = new ServiceDeskCallbackImpl(this.serviceManager, this);
        if (config.public.serviceDeskFactory) {
            // A custom service desk factory was provided so use that to create the service desk.
            const parameters = {
                callback: this.serviceDeskCallback,
                instance,
                persistedState: serviceDeskState,
            };
            this.serviceDesk = await config.public.serviceDeskFactory(parameters);
            validateCustomServiceDesk(this.serviceDesk);
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)('Initializing a custom service desk');
        }
        else {
            const { initConfig, mainConfig } = config.remote;
            const { serviceDesk } = config.public;
            const integrationType = serviceDesk.integrationType || initConfig.service_desk.integration_type;
            switch (integrationType) {
                case _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.B.ZENDESK: {
                    const sdConfig = mainConfig.service_desk;
                    const { ZendeskServiceDesk } = await __webpack_require__.e(/*! import() | zendesk */ "zendesk").then(__webpack_require__.bind(__webpack_require__, /*! ./ZendeskServiceDesk.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/ZendeskServiceDesk.js"));
                    this.serviceDesk = new ZendeskServiceDesk(this.serviceDeskCallback, sdConfig, this.serviceManager);
                    break;
                }
                case _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.B.SALES_FORCE: {
                    const regionHostname = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.h)(config.public);
                    const sdConfig = mainConfig.service_desk;
                    const { SFServiceDesk } = await __webpack_require__.e(/*! import() | salesforce */ "salesforce").then(__webpack_require__.bind(__webpack_require__, /*! ./SFServiceDesk.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/SFServiceDesk.js"));
                    this.serviceDesk = new SFServiceDesk(this.serviceDeskCallback, sdConfig, regionHostname, this.serviceManager);
                    break;
                }
                case _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.B.NICE_DFO: {
                    const { NiceDFOServiceDesk } = await __webpack_require__.e(/*! import() | nice */ "nice").then(__webpack_require__.bind(__webpack_require__, /*! ./NiceDFOServiceDesk.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/NiceDFOServiceDesk.js"));
                    this.serviceDesk = new NiceDFOServiceDesk(this.serviceDeskCallback, serviceDesk.niceDFO, this.serviceManager);
                    break;
                }
                case _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.B.GENESYS_MESSENGER: {
                    const sdConfig = serviceDesk.genesysMessenger;
                    const { GenesysMessengerServiceDesk } = await __webpack_require__.e(/*! import() | genesys */ "genesys").then(__webpack_require__.bind(__webpack_require__, /*! ./GenesysMessengerServiceDesk.js */ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/GenesysMessengerServiceDesk.js"));
                    this.serviceDesk = new GenesysMessengerServiceDesk(this.serviceDeskCallback, sdConfig, this.serviceManager);
                    break;
                }
                default:
                    throw new Error(`Invalid service desk type: "${integrationType}"`);
            }
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`Initializing built-in service desk ${integrationType}`);
        }
        // If the service desk supports reconnecting, we don't need to show this warning.
        this.showLeaveWarning = !this.serviceDesk?.reconnect;
    }
    /**
     * Informs the service desk of a change in the state of the web chat that is relevant to the service desks. These
     * values may change at any time.
     */
    updateState(state) {
        if (this.serviceDesk?.updateState) {
            this.serviceDesk.updateState(state);
        }
    }
    /**
     * Begins a chat between the current user and the currently configured service desk. This may not be called if
     * there is already a service desk being used.
     *
     * @param localConnectMessage The specific localMessage caused the connection to an agent. It will
     * contain specific information to send to the service desk as part of the connection. This can include things
     * like a message to display to a human agent.
     * @param originalMessage The full original message that this Connect to Agent item belongs to.
     */
    async startChat(localConnectMessage, originalMessage) {
        if (!this.serviceDesk) {
            // No service desk connected.
            throw new Error('A service desk has not been configured.');
        }
        if (this.serviceManager.store.getState().persistedToBrowserStorage.chatState.agentState.isSuspended) {
            // If the user is currently engaged in a conversation with an agent that is suspended and we start a new chat, we
            // need to end the current conversation first. We do still want to generate the "agent left" message however but
            // not the "bot return" message that occurs on a delay.
            await this.endChat(true, true, false);
        }
        if (this.chatStarted) {
            throw new Error('A chat is already running. A call to endChat must be made before a new chat can start.');
        }
        const { serviceManager } = this;
        // Track when user clicks to start a human chat.
        serviceManager.actions.track({
            eventName: 'User Clicked to Start Human Chat',
            eventDescription: 'User clicked button to start a human chat.',
        });
        try {
            this.chatStarted = true;
            this.isAgentTyping = false;
            this.uploadingFiles.clear();
            this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.u)(this.uploadingFiles.size > 0));
            // Create the public config that will be used by the web chat when it is loaded as an agent app inside the
            // service desk. Note that we want that instance of the web chat to be the same version as this instance.
            const sessionHistoryKey = replaceVersionInSessionHistoryKey(localConnectMessage);
            // Fire off the pre-start event.
            const event = {
                type: "agent:pre:startChat" /* BusEventType.AGENT_PRE_START_CHAT */,
                message: originalMessage,
                sessionHistoryKey,
            };
            await serviceManager.fire(event);
            if (event.cancelStartChat) {
                // Abort the connecting.
                this.chatStarted = false;
                await this.fireEndChat(false, true);
                serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.s)(false, null));
                serviceManager.actions.track({
                    eventName: `Human Chat Canceled By ${"agent:pre:startChat" /* BusEventType.AGENT_PRE_START_CHAT */} `,
                    eventDescription: `Human chat was canceled by ${"agent:pre:startChat" /* BusEventType.AGENT_PRE_START_CHAT */} `,
                });
                return;
            }
            const agentJoinTimeout = serviceManager.store.getState().config.public.serviceDesk?.agentJoinTimeoutSeconds;
            if (agentJoinTimeout) {
                this.waitingForAgentJoinedTimer = setTimeout(() => this.handleAgentJoinedTimeout(), agentJoinTimeout * 1000);
            }
            serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.s)(true, localConnectMessage.ui_state.id));
            await this.serviceDesk.startChat(originalMessage, {
                agentAppInfo: {
                    sessionHistoryKey,
                },
                preStartChatPayload: event.preStartChatPayload,
            });
        }
        catch (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[startChat] An error with the service desk occurred.', error);
            // If it failed to start, then stop connecting and clear the service desk.
            if (this.serviceDeskCallback) {
                await this.serviceDeskCallback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING, logInfo: error });
            }
            serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.s)(false, null));
            this.chatStarted = false;
            this.cancelAgentJoinedTimer();
            throw error;
        }
    }
    /**
     * Fires the {@link BusEventType.AGENT_PRE_END_CHAT} event. The event fired is returned which can contain information
     * added by a listener.
     */
    async firePreEndChat(endedByAgent) {
        // Before ending the chat, fire an event.
        const event = {
            type: "agent:pre:endChat" /* BusEventType.AGENT_PRE_END_CHAT */,
            endedByAgent,
            preEndChatPayload: null,
            cancelEndChat: false,
        };
        await this.serviceManager.fire(event);
        return event;
    }
    /**
     * Fires the {@link BusEventType.AGENT_END_CHAT} event.
     */
    async fireEndChat(endedByAgent, requestCancelled) {
        // Before ending the chat, fire an event.
        await this.serviceManager.fire({
            type: "agent:endChat" /* BusEventType.AGENT_END_CHAT */,
            endedByAgent,
            requestCancelled,
        });
    }
    /**
     * Tells the service desk to terminate the chat.
     *
     * @param endedByUser Indicates if the chat is being ended as a result of the user or if it was ended
     * programmatically from an instance method.
     * @param showAgentLeftMessage Indicates if the chat should show the "agent left" message.
     * @param showBotReturnMessage Indicates if the chat should show the "bot return" message.
     * @returns Returns a Promise that resolves when the service desk has successfully handled the call.
     */
    async endChat(endedByUser, showAgentLeftMessage = true, showBotReturnMessage = true) {
        if (!this.chatStarted || !this.serviceDesk) {
            // Already ended or no service desk.
            return;
        }
        // Track when user clicks to end human chat.
        const trackProps = {
            eventName: 'Human chat ended',
            eventDescription: endedByUser ? 'User ended chat' : 'Chat was ended by instance method',
        };
        this.serviceManager.actions.track(trackProps);
        const { isConnected } = this.persistedAgentState();
        let event;
        if (isConnected) {
            event = await this.firePreEndChat(false);
            if (event.cancelEndChat) {
                return;
            }
        }
        const endMessageType = endedByUser ? USER_ENDED_CHAT : CHAT_WAS_ENDED;
        await this.doEndChat(false, event?.preEndChatPayload, showAgentLeftMessage, showBotReturnMessage, endMessageType);
    }
    /**
     * This function will end the chat with a service class and clear the service state for it.
     */
    async doEndChat(endedByAgent, preEndChatPayload, showAgentLeftMessage, showBotReturnMessage, agentEndChatMessageType) {
        const { isConnected } = this.persistedAgentState();
        const wasSuspended = this.isSuspended();
        this.cancelAgentJoinedTimer();
        this.closeScreenShareRequestModal(_customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.CANCELLED);
        try {
            await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.r)(this.serviceDesk.endChat({ endedByAgent, preEndChatPayload }), END_CHAT_TIMEOUT_MS);
        }
        catch (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[doEndChat] An error with the service desk occurred.', error);
        }
        if (isConnected && showAgentLeftMessage) {
            const { agentProfile } = this.persistedAgentState();
            await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.k)(agentEndChatMessageType, agentProfile, true, wasSuspended, this.serviceManager);
        }
        this.chatStarted = false;
        this.isAgentTyping = false;
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.m)());
        await this.fireEndChat(endedByAgent, !isConnected);
        if (isConnected && showBotReturnMessage) {
            await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.n)(BOT_RETURN_DELAY, wasSuspended, this.serviceManager);
        }
    }
    /**
     * Sends a message to the agent in the service desk.
     *
     * @param text The message from the user.
     * @param uploads An optional set of files to upload.
     * @returns Returns a Promise that resolves when the service desk has successfully handled the call.
     */
    async sendMessageToAgent(text, uploads) {
        if (!this.serviceDesk || !this.chatStarted) {
            // No service desk connected.
            return;
        }
        const { serviceManager } = this;
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.o)(uploads);
        const originalMessage = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.p)(text);
        originalMessage.input.agent_message_type = FROM_USER;
        // Fire the pre:send event that will allow code to customize the message.
        await serviceManager.fire({ type: "agent:pre:send" /* BusEventType.AGENT_PRE_SEND */, data: originalMessage, files: uploads });
        // Add the outgoing message to the store immediately.
        const textMessage = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.q)(originalMessage, originalMessage.input.text);
        const localMessageID = textMessage.ui_state.id;
        const pairs = [];
        if (textMessage.item.text) {
            pairs.push((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.y)([textMessage], originalMessage));
        }
        // Add a message for each file upload.
        uploads.forEach(upload => {
            // Note that we're going to reuse the file ID for the MessageRequest and LocalMessage to make it easier to
            // locate the objects when we need to update their states.
            const uploadOriginalMessage = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.t)(upload);
            const uploadLocalMessage = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.q)(uploadOriginalMessage, uploadOriginalMessage.input.text, upload.id);
            pairs.push((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.y)([uploadLocalMessage], uploadOriginalMessage));
            this.uploadingFiles.add(upload.id);
        });
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.u)(this.uploadingFiles.size > 0));
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.v)(pairs, true, true, !this.isSuspended(), serviceManager);
        // Track when a message from the user is sent to human agent.
        const trackProps = {
            eventName: 'Human Message Received from User',
            eventDescription: 'User sends message to human agent.',
        };
        serviceManager.actions.track(trackProps);
        // Start some timeouts to display a warning or error if the service desk doesn't indicate if the message was
        // sent successfully (or it failed).
        let messageSucceeded = false;
        let messageFailed = false;
        setTimeout(() => {
            if (!messageSucceeded && !messageFailed) {
                this.setMessageErrorState(textMessage.fullMessageID, _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.M.RETRYING);
            }
        }, SEND_TIMEOUT_WARNING_MS);
        setTimeout(() => {
            if (!messageSucceeded) {
                this.setMessageErrorState(textMessage.fullMessageID, _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.M.FAILED);
            }
        }, SEND_TIMEOUT_ERROR_MS);
        const additionalData = {
            filesToUpload: uploads,
        };
        try {
            // Send the message to the service desk.
            await this.serviceDesk.sendMessageToAgent(originalMessage, localMessageID, additionalData);
            messageSucceeded = true;
            this.setMessageErrorState(textMessage.fullMessageID, _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.M.NONE);
            await serviceManager.fire({ type: "agent:send" /* BusEventType.AGENT_SEND */, data: originalMessage, files: uploads });
        }
        catch (error) {
            messageFailed = true;
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[sendMessageToAgent] An error with the service desk occurred.', error);
            this.setMessageErrorState(textMessage.fullMessageID, _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.M.FAILED);
        }
    }
    /**
     * Indicates that the user has selected some files to be uploaded but that the user has not yet chosen to send
     * them to the agent.
     */
    filesSelectedForUpload(uploads) {
        if (!this.serviceDesk || !this.chatStarted) {
            // No service desk connected.
            return;
        }
        try {
            this.serviceDesk.filesSelectedForUpload?.(uploads);
        }
        catch (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[userReadMessages] An error with the service desk occurred.', error);
        }
    }
    /**
     * Informs the service desk that the user has read all the messages that have been sent by the service desk.
     */
    async userReadMessages() {
        if (!this.serviceDesk || !this.chatStarted) {
            // No service desk connected.
            return;
        }
        try {
            await this.serviceDesk.userReadMessages();
        }
        catch (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[userReadMessages] An error with the service desk occurred.', error);
        }
    }
    /**
     * Checks if any agents are online and ready to communicate with the user. This function will time out after 5
     * seconds and will return false when that happens.
     *
     * @param connectMessage The message that contains the transfer_info object that may be used by the service desk,
     * so it can perform a more specific check.
     */
    async checkAreAnyAgentsOnline(connectMessage) {
        let resultValue;
        const initialRestartCount = this.serviceManager.restartCount;
        if (!this.serviceDesk?.areAnyAgentsOnline) {
            resultValue = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.a.UNKNOWN;
        }
        else {
            try {
                const timeoutSeconds = this.serviceManager.store.getState().config.public.serviceDesk?.availabilityTimeoutSeconds;
                const timeout = timeoutSeconds ? timeoutSeconds * 1000 : AVAILABILITY_TIMEOUT_MS;
                const result = await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.r)(this.serviceDesk.areAnyAgentsOnline(connectMessage), timeout);
                if (result === true) {
                    resultValue = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.a.ONLINE;
                }
                else if (result === false) {
                    resultValue = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.a.OFFLINE;
                }
                else {
                    // Any other value for result will return an unknown status.
                    resultValue = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.a.UNKNOWN;
                }
            }
            catch (error) {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('Error attempting to get agent availability', error);
                // If we fail to get an answer we'll just return false to indicate that no agents are available.
                resultValue = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.a.OFFLINE;
            }
        }
        if (initialRestartCount === this.serviceManager.restartCount) {
            // Don't await this since we don't want any event handlers to hold up this check.
            this.serviceManager.fire({
                type: "agent:areAnyAgentsOnline" /* BusEventType.AGENT_ARE_ANY_AGENTS_ONLINE */,
                areAnyAgentsOnline: resultValue,
            });
        }
        return resultValue;
    }
    /**
     * Tells the service desk if a user has started or stopped typing.
     *
     * @param isTyping If true, indicates that the user is typing. False indicates the user has stopped typing.
     */
    async userTyping(isTyping) {
        if (!this.serviceDesk || !this.chatStarted) {
            // No service desk connected.
            return;
        }
        try {
            await this.serviceDesk.userTyping?.(isTyping);
        }
        catch (error) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('[userTyping] An error with the service desk occurred.', error);
        }
    }
    /**
     * Sets the error state for the message with the given id.
     *
     * @param messageID The ID of the message to set the state for. This will be the ID that was passed on the service
     * desk as part of the {@link ServiceDesk#sendMessageToAgent} call.
     * @param errorState The state to set of the message.
     */
    setMessageErrorState(messageID, errorState) {
        this.serviceManager.store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.setMessageErrorState(messageID, errorState));
    }
    /**
     * This is called when an agent fails to join a chat after a given period of time.
     */
    async handleAgentJoinedTimeout() {
        // Display an error to the user.
        const message = this.serviceManager.store.getState().languagePack.errors_noAgentsJoined;
        const { originalMessage, localMessage } = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.x)(message);
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.v)([(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.y)([localMessage], originalMessage)], true, false, !this.isSuspended(), this.serviceManager);
        // End the chat.
        this.endChat(false);
    }
    /**
     * Cancels the agent joined timer if one is running.
     */
    cancelAgentJoinedTimer() {
        if (this.waitingForAgentJoinedTimer) {
            clearTimeout(this.waitingForAgentJoinedTimer);
            this.waitingForAgentJoinedTimer = null;
        }
    }
    /**
     * Informs the service desk of a change in the state of screen sharing from the user side.
     *
     * @param state The new state of the screen sharing.
     */
    async screenShareUpdateRequestState(state) {
        if (!this.persistedAgentState().isConnected) {
            // Not connected to an agent.
            return;
        }
        // Close the modal.
        this.closeScreenShareRequestModal(state);
        let agentMessageType;
        switch (state) {
            case _customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.ACCEPTED:
                agentMessageType = SHARING_ACCEPTED;
                break;
            case _customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.DECLINED:
                agentMessageType = SHARING_DECLINED;
                break;
            case _customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.CANCELLED:
                agentMessageType = SHARING_CANCELLED;
                break;
            case _customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.ENDED:
                agentMessageType = SHARING_ENDED;
                break;
            default:
                return;
        }
        // Display a message to the user.
        await this.addAgentLocalMessage(agentMessageType);
    }
    /**
     * Informs the service desk that it should stop screen sharing.
     */
    async screenShareStop() {
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.z)(false));
        await this.addAgentLocalMessage(SHARING_ENDED);
        await this.serviceDesk?.screenShareStop?.();
    }
    /**
     * Called during the hydration process to allow the service to deal with hydration.
     */
    async handleHydration(allowReconnect, allowEndChatMessages) {
        const { store } = this.serviceManager;
        let didReconnect = false;
        const { isConnected } = this.persistedAgentState();
        if (isConnected) {
            this.chatStarted = true;
            if (allowReconnect && this.serviceDesk?.reconnect) {
                // If the user was previously connected to an agent, we need to see if we can reconnect the user to the agent.
                try {
                    store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.C)(true));
                    setTimeout(this.serviceManager.appWindow.requestFocus);
                    // Let the service desk do whatever it needs to do to reconnect.
                    didReconnect = await this.serviceDesk.reconnect();
                }
                catch (error) {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`Error while trying to reconnect to an agent.`, error);
                }
            }
            store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.C)(false));
            if (!this.persistedAgentState().isConnected) {
                // The user may have disconnected while waiting for the reconnect in which case, just stop what we're doing.
                this.chatStarted = false;
                return;
            }
            setTimeout(this.serviceManager.appWindow.requestFocus);
            if (!didReconnect) {
                // If we didn't reconnected, then just end the chat.
                this.chatStarted = false;
                const wasSuspended = this.isSuspended();
                store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.m)());
                if (allowEndChatMessages) {
                    // If we didn't reconnect, then show the "end chat" messages to the user.
                    const { agentProfile } = this.persistedAgentState();
                    await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.k)(_customElement_js__WEBPACK_IMPORTED_MODULE_1__.A.CHAT_WAS_ENDED, agentProfile, false, wasSuspended, this.serviceManager);
                    await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.n)(0, wasSuspended, this.serviceManager);
                }
            }
            else {
                this.showLeaveWarning = false;
            }
        }
    }
    /**
     * Closes the screen share request modal and completes the promise waiting on it.
     */
    closeScreenShareRequestModal(state) {
        // Close the modal if it was open.
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.D)(false));
        // If someone is waiting on the Promise, then resolve it.
        if (this.screenShareRequestPromise) {
            this.screenShareRequestPromise.doResolve(state);
            this.screenShareRequestPromise = null;
        }
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.z)(state === _customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.ACCEPTED));
    }
    /**
     * Adds a local agent message.
     */
    async addAgentLocalMessage(agentMessageType, agentProfile, fireEvents = true, saveInHistory = true) {
        if (!agentProfile) {
            agentProfile = this.persistedAgentState().agentProfile;
        }
        const { localMessage, originalMessage } = await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.E)(agentMessageType, this.serviceManager, agentProfile, fireEvents);
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.v)([(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.y)([localMessage], originalMessage)], saveInHistory, false, !this.isSuspended(), this.serviceManager);
    }
    /**
     * Returns the persisted agent state from the store.
     */
    persistedAgentState() {
        return this.serviceManager.store.getState().persistedToBrowserStorage.chatState.agentState;
    }
    /**
     * Indicates if the conversation with the agent is suspended.
     */
    isSuspended() {
        return this.serviceManager.store.getState().persistedToBrowserStorage.chatState.agentState.isSuspended;
    }
}
/**
 * This class implements the callback that is passed to the service desk that it can use to send us information that
 * it produced by the service desk.
 */
class ServiceDeskCallbackImpl {
    constructor(serviceManager, service) {
        this.serviceManager = serviceManager;
        this.service = service;
    }
    /**
     * Updates web chat with the capabilities supported by the service desk. Some of these capabilities may support
     * being changed dynamically and can be updated at any time.
     *
     * @param capabilities The set of capabilities to update. Only properties that need to be changed need to be included.
     */
    updateCapabilities(capabilities) {
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.F)((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.e)(capabilities)));
    }
    /**
     * Sends updated availability information to the chat widget for a user who is waiting to be connected to an
     * agent. This may be called at any point while waiting for the connection to provide newer information.
     *
     * @param availability The availability information to display to the user.
     */
    async updateAgentAvailability(availability) {
        if (!this.service.chatStarted) {
            // The chat is no longer running.
            return;
        }
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.G)(availability));
    }
    /**
     * Informs the chat widget that the agent has read all the messages that have been sent to the service desk.
     */
    async agentJoined(profile) {
        if (!this.service.chatStarted) {
            // The chat is no longer running.
            return;
        }
        this.service.cancelAgentJoinedTimer();
        // Update the store with the current agent's profile information.
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.H)(profile));
        // Then generate a message we can display in the UI to indicate that the agent has joined.
        await this.service.addAgentLocalMessage(AGENT_JOINED, profile);
        if (this.service.showLeaveWarning) {
            await this.service.addAgentLocalMessage(RELOAD_WARNING, null, false, false);
            this.service.showLeaveWarning = false;
        }
        // Track when a human agent joins a human chat with user.
        const trackProps = {
            eventName: 'Human Chat Started',
            eventDescription: 'Human chat started and agent joined.',
        };
        this.serviceManager.actions.track(trackProps);
    }
    /**
     * Informs the chat widget that the agent has read all the messages that have been sent to the service desk.
     *
     * This functionality is not yet implemented.
     */
    async agentReadMessages() {
        if (!this.service.chatStarted) {
            // The chat is no longer running.
            return;
        }
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)('[ServiceDeskCallbackImpl] agentReadMessages');
    }
    /**
     * Tells the chat widget if an agent has started or stopped typing.
     *
     * @param isTyping If true, indicates that the agent is typing. False indicates the agent has stopped typing.
     */
    async agentTyping(isTyping) {
        if (this.persistedAgentState().isConnected && isTyping !== this.service.isAgentTyping) {
            this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.I)(isTyping));
            this.service.isAgentTyping = isTyping;
        }
    }
    /**
     * Sends a message to the chat widget from an agent.
     *
     * Note: The text response type from the standard Watson API is supported in addition to the web chat specific
     * {@link MessageResponseTypes.INLINE_ERROR} response type.
     *
     * @param message The message to display to the user. Note, the ability to pass a string for the message was added in
     * web chat 6.7.0. Earlier versions of web chat will not work if you pass just a string.
     * @param agentID The ID of the agent who is sending the message. If this is not provided, then the ID of the last
     * agent who joined the conversation will be used.
     */
    async sendMessageToUser(message, agentID) {
        if (!this.service.chatStarted || !message) {
            // The chat is no longer running or no message was actually provided.
            return;
        }
        const messageResponse = typeof message === 'string' ? (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.J)(message) : message;
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.K)(messageResponse);
        if (messageResponse.output?.generic?.length) {
            messageResponse.output.generic.forEach(messageItem => {
                if (!messageItem.agent_message_type) {
                    messageItem.agent_message_type = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.A.FROM_AGENT;
                }
            });
        }
        const { serviceManager } = this;
        // If no agent ID is provided, just use the current one.
        let agentProfile;
        if (agentID === undefined) {
            agentProfile = this.persistedAgentState().agentProfile;
        }
        else {
            agentProfile = this.persistedAgentState().agentProfiles[agentID];
            if (!agentProfile) {
                // If we don't have a profile for the agent who sent this message, we need to use the profile for the current
                // agent (if there is one).
                agentProfile = this.persistedAgentState().agentProfile;
                if (agentProfile) {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`Got agent ID ${agentID} but no agent with that ID joined the conversation. Using the current agent instead.`);
                }
            }
        }
        // Fire the pre:receive event that will allow code to customize the message.
        await serviceManager.fire({
            type: "agent:pre:receive" /* BusEventType.AGENT_PRE_RECEIVE */,
            data: messageResponse,
            agentProfile,
        });
        messageResponse.history.agent_profile = agentProfile;
        const localMessages = messageResponse.output.generic.map(item => {
            return (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.L)(item, messageResponse);
        });
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.v)([(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.y)(localMessages, messageResponse)], true, true, !this.service.isSuspended(), this.serviceManager);
        // Track when a message from a human agent is sent to the user.
        const trackProps = {
            eventName: 'Human Message Sent to User',
            eventDescription: 'Human agent sends message to user.',
        };
        serviceManager.actions.track(trackProps);
        await serviceManager.fire({
            type: "agent:receive" /* BusEventType.AGENT_RECEIVE */,
            data: messageResponse,
            agentProfile,
        });
    }
    /**
     * Informs the chat widget that a transfer to another agent is in progress. The agent profile information is
     * optional if the service desk doesn't have the information available. This message simply tells the chat widget
     * that the transfer has started. The service desk should inform the widget when the transfer is complete by
     * sending a {@link agentJoined} message later.
     */
    async beginTransferToAnotherAgent(profile) {
        if (!this.service.chatStarted) {
            // The chat is no longer running.
            return;
        }
        if (profile) {
            // Update the store with the current agent's profile information.
            this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.H)(profile));
        }
        await this.service.addAgentLocalMessage(TRANSFER_TO_AGENT, profile);
    }
    /**
     * Informs the chat widget that the current agent has left the conversation.
     */
    async agentLeftChat() {
        if (!this.service.chatStarted) {
            // The chat is no longer running.
            return;
        }
        await this.service.addAgentLocalMessage(AGENT_LEFT_CHAT);
        this.service.isAgentTyping = false;
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.N)());
    }
    /**
     * Informs the chat widget that the agent has closed the conversation.
     */
    async agentEndedChat() {
        if (!this.service.chatStarted) {
            // The chat is no longer running.
            return;
        }
        const event = await this.service.firePreEndChat(true);
        if (event.cancelEndChat) {
            return;
        }
        const trackProps = {
            eventName: 'Human chat ended',
            eventDescription: 'Agent ended chat',
        };
        this.serviceManager.actions.track(trackProps);
        await this.service.doEndChat(true, event.preEndChatPayload, true, true, AGENT_ENDED_CHAT);
    }
    /**
     * Sets the state of the given error type.
     *
     * @param errorInfo Details for the error whose state is being set.
     */
    async setErrorStatus(errorInfo) {
        if (!this.service.chatStarted) {
            // The chat is no longer running.
            return;
        }
        const { type, logInfo } = errorInfo;
        const { store } = this.serviceManager;
        const { isConnecting } = store.getState().agentState;
        if (logInfo) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`An error occurred in the service desk (type=${type})`, logInfo);
        }
        // If the service desk reports a disconnected error while we're in the middle of connecting, then handle it as a
        // connecting error instead. This avoids us sending the user a message when we never actually connected.
        if (isConnecting && errorInfo.type === _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.DISCONNECTED && errorInfo.isDisconnected) {
            errorInfo = { type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING };
        }
        switch (errorInfo.type) {
            case _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.DISCONNECTED: {
                if (errorInfo.isDisconnected) {
                    // The service desk has become disconnected so show an error and don't allow the user to send messages.
                    this.service.showingDisconnectedError = true;
                    await this.service.addAgentLocalMessage(DISCONNECTED, null, true, false);
                    store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.updateInputState({ isReadonly: true }, true));
                }
                else if (this.service.showingDisconnectedError) {
                    // The service desk says it's no longer disconnected but double check that we previously thought we were
                    // disconnected.
                    this.service.showingDisconnectedError = false;
                    await this.service.addAgentLocalMessage(RECONNECTED, null, true, false);
                    store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.updateInputState({ isReadonly: false }, true));
                }
                break;
            }
            case _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING: {
                // If we can't connect, display an inline error message on the bot view.
                const { languagePack } = this.serviceManager.store.getState();
                const message = errorInfo.messageToUser || languagePack.errors_connectingToAgent;
                const { originalMessage, localMessage } = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.x)(message);
                await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.v)([(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.y)([localMessage], originalMessage)], true, false, !this.service.isSuspended(), this.serviceManager);
                // Cancel the connecting status.
                this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.s)(false, null));
                this.service.chatStarted = false;
                this.service.cancelAgentJoinedTimer();
                await this.service.fireEndChat(false, isConnecting);
                break;
            }
            case _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.USER_MESSAGE: {
                this.service.setMessageErrorState(errorInfo.messageID, _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.M.FAILED);
                break;
            }
        }
    }
    /**
     * Updates the status of a file upload. The upload may either be successful or an error may have occurred. The
     * location of a file upload may be in one of two places. The first occurs when the user has selected a file to be
     * uploaded but has not yet sent the file. In this case, the file appears inside the web chat input area. If an
     * error is indicated on the file, the error message will be displayed along with the file and the user must
     * remove the file from the input area before a message can be sent.
     *
     * The second occurs after the user has sent the file and the service desk has begun to upload the file. In this
     * case, the file no longer appears in the input area but appears as a sent message in the message list. If an
     * error occurs during this time, an icon will appear next to the message to indicate an error occurred and an
     * error message will be added to the message list.
     *
     * @param fileID The ID of the file upload to update.
     * @param isError Indicates that the upload has an error or failed to upload.
     * @param errorMessage An error message to display along with a file in error.
     */
    async setFileUploadStatus(fileID, isError, errorMessage) {
        const { store } = this.serviceManager;
        // First we need to determine if the file upload has been sent or not. A message will exist in the store if so;
        // otherwise the file upload only exists in the input area.
        const uploadMessage = store.getState().allMessagesByID[fileID];
        if (uploadMessage) {
            // Update the value in the redux store.
            const partialMessage = {
                history: { file_upload_status: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.i.COMPLETE },
            };
            if (isError) {
                store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.setMessageHistoryProperty(fileID, 'file_upload_status', _customElement_js__WEBPACK_IMPORTED_MODULE_1__.i.COMPLETE));
                store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.setMessageHistoryProperty(fileID, 'error_state', _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.M.FAILED));
                partialMessage.history.error_state = _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.M.FAILED;
                if (errorMessage) {
                    // Generate an inline error message to show the error to the user.
                    const { originalMessage, localMessage } = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.x)(errorMessage);
                    localMessage.item.agent_message_type = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.A.INLINE_ERROR;
                    await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.v)([(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.y)([localMessage], originalMessage)], true, true, !this.service.isSuspended(), this.serviceManager);
                }
            }
            else {
                // If the upload was completed successfully, we display a temporary "success" status. This will display a
                // checkmark temporarily before fading out. Session history will store "complete" as the status.
                store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.setMessageHistoryProperty(fileID, 'file_upload_status', _customElement_js__WEBPACK_IMPORTED_MODULE_1__.i.SUCCESS));
                store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.announceMessage({ messageID: 'fileSharing_ariaAnnounceSuccess' }));
            }
            // Send an update to store the status in session history.
            await this.serviceManager.actions.sendUpdateHistoryEvent(fileID, partialMessage);
        }
        else if (isError) {
            // Update the input area.
            store.dispatch(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.w.fileUploadInputError(fileID, errorMessage, true));
        }
        this.service.uploadingFiles.delete(fileID);
        this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.u)(this.service.uploadingFiles.size > 0));
    }
    /**
     * Requests that the user share their screen with the agent. This will present a modal dialog to the user who must
     * respond before continuing the conversation. This method returns a Promise that resolves when the user has
     * responded to the request or the request times out.
     *
     * @returns Returns a Promise that will resolve with the state the of the request. This Promise will reject if no
     * chat with an agent is currently running.
     */
    async screenShareRequest() {
        if (!this.persistedAgentState().isConnected) {
            return Promise.reject(new Error('Cannot request screen sharing if no chat is in progress.'));
        }
        if (!this.service.screenShareRequestPromise) {
            this.service.screenShareRequestPromise = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.O)();
            this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.D)(true));
            await this.service.addAgentLocalMessage(SHARING_REQUESTED);
        }
        return this.service.screenShareRequestPromise;
    }
    /**
     * Informs web chat that a screen sharing session has ended or been cancelled. This may occur while waiting for a
     * screen sharing request to be accepted or while screen sharing is in progress.
     */
    async screenShareEnded() {
        const wasScreenSharing = this.serviceManager.store.getState().agentState.isScreenSharing;
        const requestPending = this.service.screenShareRequestPromise;
        this.service.closeScreenShareRequestModal(_customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.CANCELLED);
        if (wasScreenSharing) {
            this.serviceManager.store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.z)(false));
            await this.service.addAgentLocalMessage(SHARING_ENDED);
        }
        else if (requestPending) {
            await this.service.addAgentLocalMessage(SHARING_CANCELLED);
        }
    }
    /**
     * Returns the persisted agent state from the store.
     */
    persistedAgentState() {
        return this.serviceManager.store.getState().persistedToBrowserStorage.chatState.agentState;
    }
    /**
     * Returns the persisted service desk state from the store. This is the current state as updated by
     * {@link updatePersistedState}. The object returned here is frozen and may not be modified.
     */
    persistedState() {
        return this.serviceManager.store.getState().persistedToBrowserStorage.chatState.agentState
            .serviceDeskState;
    }
    /**
     * Allows the service desk to store state that may be retrieved when web chat is reloaded on a page. This information
     * is stored in browser session storage which has a total limit of 5MB per origin so the storage should be used
     * sparingly. Also, the value provided here must be JSON serializable.
     *
     * When web chat is reloaded, the data provided here will be returned to the service desk via the
     * ServiceDeskFactoryParameters.persistedState property.
     *
     * @param state The state to update.
     * @param mergeWithCurrent Indicates if the new state should be merged into the existing state. If false, then the
     * existing state will be fully replaced with the new state. Merging with existing state expects the state to be
     * an object.
     */
    updatePersistedState(state, mergeWithCurrent = true) {
        const { store } = this.serviceManager;
        let newState;
        if (mergeWithCurrent) {
            newState = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.P)({}, store.getState().persistedToBrowserStorage.chatState.agentState.serviceDeskState, state);
        }
        else {
            newState = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.e)(state);
        }
        store.dispatch((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.Q)((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.o)(newState)));
    }
}
/**
 * Returns a new instance of the service implementation.
 */
function createService(serviceManager) {
    return new HumanAgentServiceImpl(serviceManager);
}
/**
 * Performs some minimal validation of the provided custom service desk to make sure it meets the minimum
 * requirements. This simply checks that the service desk has the required properties and that those properties are
 * functions. If there are any errors, they are logged to the console.
 */
function validateCustomServiceDesk(serviceDesk) {
    if (!serviceDesk) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('The custom service desk does not appear to be valid. No service desk was provided.', serviceDesk);
    }
    else if (typeof serviceDesk !== 'object') {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`The custom service desk does not appear to be valid. The type should be "object" but is "${typeof serviceDesk}"`, serviceDesk);
    }
    else {
        const propertyNames = ['startChat', 'endChat', 'sendMessageToAgent'];
        propertyNames.forEach(propertyName => {
            const value = serviceDesk[propertyName];
            if (typeof value !== 'function') {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`The custom service desk does not appear to be valid. The type of property "${propertyName}"should be "function" but is "${typeof value}"`, value, serviceDesk);
            }
        });
        const name = serviceDesk.getName?.();
        if (!name) {
            throw Error('The custom service desk does not have a name.');
        }
        if (name && (typeof name !== 'string' || name.length > 40)) {
            throw new Error(`The custom service desk name "${name}" is not valid.`);
        }
    }
}
/**
 * Swap out "latest" for the exact version of the web chat being used so that agent app will render using same code
 * base.
 */
function replaceVersionInSessionHistoryKey(localConnectMessage) {
    const sessionHistoryKey = localConnectMessage.item.transfer_info?.session_history_key;
    if (sessionHistoryKey) {
        const sessionHistoryKeySerialized = SessionHistoryKeySerializer.deserialize(sessionHistoryKey);
        sessionHistoryKeySerialized.version = _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.V;
        return SessionHistoryKeySerializer.serialize(sessionHistoryKeySerialized);
    }
    return '';
}




/***/ })

}]);
//# sourceMappingURL=cds-ai-chat-haa.bundle.js.map