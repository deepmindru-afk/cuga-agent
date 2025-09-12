"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["genesys"],{

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/GenesysMessengerServiceDesk.js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/GenesysMessengerServiceDesk.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenesysMessengerServiceDesk: function() { return /* binding */ GenesysMessengerServiceDesk; }
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






































/**
 * This service desk integration is an integration to the Genesys contact center using their Web Messenger
 * functionality.
 *
 * @see https://developer.genesys.cloud/commdigital/digital/webmessaging/messengersdk for their SDK documentation.
 * @see https://developer.genesys.cloud/forum for their developer forum.
 * @see https://help.mypurecloud.com/articles/get-started-with-web-messaging for getting started with web messaging.
 */
const PREFIX = '[GenesysMessengerServiceDesk]';
// The amount of time to wait for steps in the initialization process to complete before timing out.
const INIT_TIMEOUT_SECS = 10;
// The Promise that is used to load the SDK. The resolve value indicates if we are reconnecting to an existing session.
let scriptPromise;
// This is the global Genesys object that is created by their SDK.
let Genesys;
class GenesysMessengerServiceDesk extends _ServiceDeskImpl_js__WEBPACK_IMPORTED_MODULE_2__.S {
    constructor() {
        super(...arguments);
        /**
         * The maximum size of files that are allowed (if file uploads are allowed). A value of 0 indicates that file
         * uploads are not allowed.
         */
        this.maxFileSizeKB = 0;
        /**
         * Uploads the given file.
         */
        this.doFileUpload = async (upload) => {
            const transfer = new DataTransfer();
            transfer.items.add(upload.file);
            const failed = () => {
                this.callback.setFileUploadStatus(upload.id, true, this.getIntlText('fileSharing_uploadFailed'));
            };
            // Request an upload. This process will conclude when the fileUploaded event is fired. We'll resolve the upload
            // Promise when that happens.
            this.currentFileUploadID = upload.id;
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.requestUpload`, upload);
            Genesys('command', 'MessagingService.requestUpload', { file: transfer.files }, null, failed);
        };
    }
    /**
     * Instructs the service desk to start a new chat. This should be called immediately after the service desk
     * instance has been created. It will make the appropriate calls to the service desk and begin communicating back
     * to the calling code using the callback produce to the instance. This may only be called once per instance.
     */
    async startChat(connectMessage, startChatOptions) {
        this.updatePersistedState({ agentsJoined: {}, lastAgentMessageID: null }, false);
        await this.ensureGenesys(false);
        const connectItem = connectMessage.output.generic.find(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ab);
        const { preStartChatPayload } = startChatOptions;
        // Create an attribute with the session history key so the agent app can be loaded. Also add in any custom
        // attributes that may be in the pre-chat payload.
        const { sessionHistoryKey } = startChatOptions.agentAppInfo;
        const customAttributes = {
            ...preStartChatPayload?.customAttributes,
            wacSessionHistoryKey: sessionHistoryKey,
        };
        Genesys('command', 'Database.set', { messaging: { customAttributes } });
        // Send each of the default summary message texts to the agent.
        const messagesToAgent = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.af)(connectItem, 'Begin conversation');
        messagesToAgent.forEach(message => {
            Genesys('command', 'MessagingService.sendMessage', { message });
        });
    }
    /**
     * Handles an incoming MessagingService.messagesReceived event.
     */
    async handleMessagesReceived(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.messagesReceived`, event);
        const outbound = event.data.messages.filter((message) => message?.direction === 'Outbound');
        if (outbound.length) {
            this.callback.agentTyping(false);
            await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ag)(outbound, async (message) => this.handleOutboundMessage(message, true));
        }
    }
    /**
     * Handles a message.
     */
    async handleOutboundMessage(message, includeEvents) {
        // The agent info is on different properties depending on if the message came from the restored event or a live
        // message event.
        const agentInfo = message.channel?.from || message.from;
        const nickname = agentInfo?.nickname || agentInfo?.name || null;
        const profile_picture_url = agentInfo?.avatar || agentInfo?.image || null;
        const agentID = nickname || 'default-agent';
        const { isConnected } = this.serviceManager.store.getState().persistedToBrowserStorage.chatState.agentState;
        const persistedState = this.persistedState();
        if (!persistedState.agentsJoined[nickname] || !isConnected) {
            this.updatePersistedState({ agentsJoined: { [nickname]: true } });
            await this.callback.agentJoined({ id: agentID, nickname, profile_picture_url });
        }
        this.updatePersistedState({ lastAgentMessageID: message.id });
        if (message.type?.toLowerCase() === 'event') {
            if (includeEvents) {
                this.handleMessagesReceivedEvent(message);
            }
        }
        else if (message.text) {
            this.handleMessagesReceivedText(message, agentID);
        }
        else if (message.content?.length || message.files?.length) {
            this.handleFileAttachments(message, agentID);
        }
    }
    /**
     * Handles an event message. These include the co-browse requests.
     */
    async handleMessagesReceivedEvent(message) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ag)(message.events, async (event) => {
            if (event.eventType === 'CoBrowse' && event.coBrowse?.type === 'OfferingExpired') {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} The agent cancelled the co-browse request.`);
                await this.callback.screenShareEnded();
            }
            else if (event.eventType === 'CoBrowse' && event.coBrowse?.type === 'Offering') {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Requesting co-browse sharing from the user...`);
                const result = await this.callback.screenShareRequest();
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got result for the co-browse request: ${result}`);
                const { sessionId, sessionJoinToken } = event.coBrowse;
                const params = { joinCode: sessionJoinToken, sessionId };
                if (result === _customElement_js__WEBPACK_IMPORTED_MODULE_1__.S.ACCEPTED) {
                    const onSuccess = () => (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Co-browse session successfully started`);
                    const onError = (error) => (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`${PREFIX} Error starting a co-browse session`, error);
                    Genesys('command', 'CobrowseService.acceptSession', params, onSuccess, onError);
                }
                else {
                    Genesys('command', 'CobrowseService.declineSession', params);
                }
            }
        });
    }
    /**
     * Handles a message with text in it.
     */
    async handleMessagesReceivedText(message, agentID) {
        await this.callback.sendMessageToUser(message.text, agentID);
    }
    /**
     * Handles a message with content in it. These would include file links.
     */
    async handleFileAttachments(message, agentID) {
        const files = this.getFileAttachments(message);
        const items = files.map(({ filename, url }) => (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.S)({
            response_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.j.BUTTON,
            kind: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.d.LINK,
            button_type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.b.URL,
            url,
            label: filename,
        }));
        if (items.length) {
            const messageToUser = { id: null, output: { generic: items } };
            await this.callback.sendMessageToUser(messageToUser, agentID);
        }
    }
    /**
     * Extracts file download links from the given message.
     */
    getFileAttachments(message) {
        const files = [];
        // Files that come in on live messages.
        message.content
            ?.filter((content) => content?.attachment)
            .forEach(({ attachment }) => files.push({ filename: attachment.filename, url: attachment.url }));
        // Files that come in from a restored event.
        message.files?.forEach((file) => files.push({ filename: file.name, url: file.downloadUrl }));
        return files;
    }
    /**
     * Handles an incoming MessagingService.typingReceived event. This indicates that an agent is typing.
     */
    handleTypingReceived(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.typingReceived`, event);
        if (!(0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ac)(this.persistedState().agentsJoined)) {
            if (this.agentTypingTimeout) {
                clearTimeout(this.agentTypingTimeout);
            }
            const isTyping = event.data?.typing?.type === 'On';
            this.callback.agentTyping(isTyping);
            // We're supposed to get a "timeout" event to tell us when the agent has stopped typing but that event seems
            // to be inconsistent and we don't always get it. So we're just going to use our own timeout so we don't get
            // stuck with an agent permanently typing.
            if (isTyping) {
                this.agentTypingTimeout = setTimeout(() => {
                    this.callback.agentTyping(false);
                    this.agentTypingTimeout = null;
                }, event.data?.typing?.duration || 5000);
            }
        }
    }
    /**
     * Handles an incoming MessagingService.handleTypingTimeout event. This is the timout for an agent typing.
     */
    handleTypingTimeout(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.handleTypingTimeout`, event);
        this.callback.agentTyping(false);
    }
    /**
     * Handles an incoming MessagingService.fileUploaded event.
     */
    async handleFileUploaded(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.fileUploaded`, event);
        // We have to send an actual message to Genesys in order to deliver the files.
        Genesys('command', 'MessagingService.sendMessage', {
            message: this.getIntlText('fileSharing_agentMessageText'),
        });
        this.callback.setFileUploadStatus(this.currentFileUploadID);
    }
    /**
     * Handles an incoming MessagingService.fileUploadError event.
     */
    handleFileUploadError(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`${PREFIX} MessagingService.fileUploadError`, event);
        if (this.currentFileUploadID) {
            this.callback.setFileUploadStatus(this.currentFileUploadID, true, this.getIntlText('fileSharing_uploadFailed'));
        }
    }
    /**
     * Handles an incoming MessagingService.error event.
     */
    handleError(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`${PREFIX} MessagingService.error`, event);
        if (this.currentFileUploadID) {
            const errorCode = event.data?.error?.body?.errorCode;
            const errorMessage = event.data?.error?.body?.errorMessage || this.getIntlText('fileSharing_uploadFailed');
            // See https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi#error-codes
            switch (errorCode) {
                case 4001: // File type is not supported.
                case 4002: // File size is greater than 102400.
                case 4003: // Invalid file content.
                case 4004: // File name invalid.
                case 4005: // File name is too long.
                case 4008: // Attachment has expired.
                case 4010: // Attachment not successfully uploaded.
                    this.callback.setFileUploadStatus(this.currentFileUploadID, true, errorMessage);
                    break;
            }
        }
    }
    /**
     * Handles an incoming MessagingService.restored event. This occurs when the user has reconnected to an existing
     * session after reloading the page.
     */
    async handleRestored(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.restored`, event);
        const { lastAgentMessageID } = this.persistedState();
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Last agent message: ${lastAgentMessageID}`);
        // First we need to see if the agent's last message is in the list. If not, we're just going to give up and
        // assume something is not right about the history instead of just potentially repeating the whole thing.
        if (lastAgentMessageID && event.data?.messages?.length) {
            const { messages } = event.data;
            const lastIndex = messages.findIndex((message) => message.id === lastAgentMessageID);
            if (lastIndex > 0) {
                // Go backwards from the last index and handle each message.
                for (let index = lastIndex - 1; index >= 0; index--) {
                    const message = messages[index];
                    if (message.messageType === 'outbound') {
                        // eslint-disable-next-line no-await-in-loop
                        await this.handleOutboundMessage(message, false);
                    }
                }
            }
        }
    }
    /**
     * Handles an incoming MessagingService.offline event.
     */
    handleOffline(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.offline`, event);
        this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.DISCONNECTED, isDisconnected: true });
    }
    /**
     * Handles an incoming MessagingService.reconnected event.
     */
    handleReconnected(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.reconnected`, event);
        this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.DISCONNECTED, isDisconnected: false });
    }
    /**
     * Handles an incoming CobrowseService.sessionEnded event.
     */
    async handleCoBrowseEnded(event) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} CobrowseService.sessionEnded`, event);
        await this.callback.screenShareEnded();
    }
    /**
     * Tells the service desk to terminate the chat.
     */
    async endChat() {
        this.stopUserTypingInterval();
        this.updatePersistedState({ agentsJoined: {}, lastAgentMessageID: null }, false);
    }
    /**
     * Sends a message to the agent in the service desk.
     */
    async sendMessageToAgent(message, messageID, additionalData) {
        if (message.input.text) {
            Genesys('command', 'MessagingService.sendMessage', {
                message: message.input.text,
            });
        }
        if (additionalData.filesToUpload.length) {
            // If a file was provided, then upload it. The web chat service should guarantee we never get more than one.
            this.doFileUpload(additionalData.filesToUpload[0]);
        }
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
        this.stopUserTypingInterval();
        if (isTyping) {
            Genesys('command', 'MessagingService.sendTyping');
            // Genesys seems to expect us to keep sending a typing indicator while a user is typing or the indicator
            // automatically stops after 5 seconds.
            this.userTypingInterval = window.setInterval(() => {
                Genesys('command', 'MessagingService.sendTyping');
            }, 2500);
        }
    }
    /**
     * Stops and clear the interval that is used to tell Genesys that the user is typing.
     */
    stopUserTypingInterval() {
        if (this.userTypingInterval) {
            clearInterval(this.userTypingInterval);
            this.userTypingInterval = null;
        }
    }
    /**
     * Checks if any agents are online and ready to communicate with the user.
     */
    async areAnyAgentsOnline(connectMessage) {
        // Genesys doesn't provide this information.
        return true;
    }
    /**
     * Indicates that the user has selected some files to be uploaded but that the user has not yet chosen to send
     * them to the agent. This method can use this as an opportunity to perform any early validation of the files in
     * order to display an error to the user. It should not actually upload the files at this point. If the user
     * chooses to send the files to the agent, they will be included later when {@link #sendMessageToAgent} is called.
     */
    filesSelectedForUpload(uploads) {
        uploads.forEach(upload => {
            if (upload.file.size > this.maxFileSizeKB * 1024) {
                const maxSize = `${this.maxFileSizeKB}KB`;
                const errorMessage = this.instance.getIntl().formatMessage({ id: 'fileSharing_fileTooLarge' }, { maxSize });
                this.callback.setFileUploadStatus(upload.id, true, errorMessage);
            }
        });
    }
    /**
     * Tells the service desk that the user has requested to stop sharing their screen.
     */
    async screenShareStop() {
        Genesys('command', 'CobrowseService.stopSession');
    }
    /**
     * Ensures that the Genesys script is loaded.
     */
    async ensureGenesys(isReconnecting) {
        if (!scriptPromise) {
            scriptPromise = this.installGenesys(isReconnecting);
        }
        return scriptPromise;
    }
    /**
     * This installs Genesys using their embed code.
     */
    async installGenesys(isReconnecting) {
        const { environment, deploymentID, scriptURL } = this.config;
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Creating integration using config`, this.config);
        if (!this.persistedState()) {
            this.updatePersistedState({ agentsJoined: {}, lastAgentMessageID: null }, false);
        }
        else {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Retrieved previous state`, this.persistedState());
        }
        const config = { environment, deploymentId: deploymentID, debug: this.instance.getState().isDebugEnabled };
        // This code is a simplified version of the Genesys embed script and is required by their SDK.
        const windowObject = window;
        const propertyName = 'Genesys';
        windowObject._genesysJs = propertyName;
        windowObject[propertyName] = {
            t: new Date(),
            c: config,
            q: [],
        };
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.an)(scriptURL);
        Genesys = windowObject[propertyName];
        // Uncomment for debugging/development purposes.
        // this.addAllEvents();
        const serviceStartedPromise = new Promise((resolve, reject) => {
            function serviceStartedHandler(event) {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.started`, event);
                resolve(!event?.data?.newSession);
            }
            Genesys('subscribe', 'MessagingService.started', serviceStartedHandler, reject);
        });
        // Subscribe to all the events that we will need to listen to.
        Genesys('subscribe', 'MessagingService.messagesReceived', (event) => this.handleMessagesReceived(event));
        Genesys('subscribe', 'MessagingService.typingReceived', (event) => this.handleTypingReceived(event));
        Genesys('subscribe', 'MessagingService.typingTimeout', (event) => this.handleTypingTimeout(event));
        Genesys('subscribe', 'MessagingService.fileUploaded', (event) => this.handleFileUploaded(event));
        Genesys('subscribe', 'MessagingService.fileUploadError', (event) => this.handleFileUploadError(event));
        Genesys('subscribe', 'MessagingService.error', (event) => this.handleError(event));
        Genesys('subscribe', 'MessagingService.reconnected', (event) => this.handleReconnected(event));
        Genesys('subscribe', 'MessagingService.offline', (event) => this.handleOffline(event));
        Genesys('subscribe', 'MessagingService.restored', (event) => this.handleRestored(event));
        Genesys('subscribe', 'CobrowseService.sessionEnded', (event) => this.handleCoBrowseEnded(event));
        // Load the configuration data for the deployment.
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.r)(new Promise((resolve, reject) => {
            Genesys('registerPlugin', 'ConfigPlugin', (plugin) => {
                plugin
                    .command('GenesysJS.configuration')
                    .then((data) => {
                    this.genesysConfig = data;
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Received GenesysJS.configuration`, this.genesysConfig);
                    resolve();
                })
                    .catch(reject);
            });
        }), INIT_TIMEOUT_SECS * 1000, `The GenesysJS.configuration command failed to return a configuration after ${INIT_TIMEOUT_SECS} seconds.`);
        // Create the plugin that would be used when using user authentication.
        if (this.genesysConfig?.auth.enabled) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Authentication is enabled`);
            Genesys('registerPlugin', 'AuthProvider', (authProvider) => {
                authProvider.registerCommand('getAuthCode', (event) => {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} AuthProvider.getAuthCode`, event);
                    this.eventBus.fire({ type: "agent:genesysMessenger:getAuthCode" /* BusEventType.GENESYS_MESSENGER_GET_AUTH_CODE */, genesysEvent: event }, this.instance);
                });
                authProvider.registerCommand('reAuthenticate', (event) => {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} AuthProvider.reAuthenticate`, event);
                    this.eventBus.fire({ type: "agent:genesysMessenger:reAuthenticate" /* BusEventType.GENESYS_MESSENGER_REAUTHENTICATE */, genesysEvent: event }, this.instance);
                });
                authProvider.subscribe('Auth.loggedOut', (event) => {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} AuthProvider.loggedOut`, event);
                    this.eventBus.fire({ type: "agent:genesysMessenger:loggedOut" /* BusEventType.GENESYS_MESSENGER_LOGGED_OUT */, genesysEvent: event }, this.instance);
                });
                authProvider.subscribe('Auth.authError', (error) => {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} AuthProvider.authError`, error);
                    this.eventBus.fire({ type: "agent:genesysMessenger:authError" /* BusEventType.GENESYS_MESSENGER_AUTH_ERROR */, genesysError: error }, this.instance);
                });
                // Tell Messenger that your plugin is ready (mandatory).
                authProvider.ready();
                // Make the AuthProvider instance available to the client.
                this.eventBus.fire({ type: "agent:genesysMessenger:AuthProvider" /* BusEventType.GENESYS_MESSENGER_AUTH_PROVIDER */, authProvider }, this.instance);
            });
        }
        // Wait for the messaging service to become ready before completing the initialization.
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.r)(new Promise(resolve => {
            Genesys('subscribe', 'MessagingService.ready', (event) => {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} MessagingService.ready`, event);
                resolve();
            });
        }), INIT_TIMEOUT_SECS * 1000, `The Genesys MessagingService failed to report ready after ${INIT_TIMEOUT_SECS} seconds.`);
        let isNewSession = false;
        if (isReconnecting) {
            // This event only fires if reconnecting to an existing session.
            isNewSession = await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.r)(serviceStartedPromise, INIT_TIMEOUT_SECS * 1000, `The MessagingService.started event failed to fire after ${INIT_TIMEOUT_SECS} seconds.`);
        }
        // We have to look through the file upload modes to see if there are any files allowed. The docs suggest there
        // should only be one object here but the schema does use an array so let's just go through all the objects to
        // be safe. We'll collect up the unique set of mime types allowed and figure out the largest file size allowed.
        // The servers will still do their own validation.
        const mimeTypesSet = new Set();
        if (this.genesysConfig?.messenger?.fileUpload?.modes) {
            Object.values(this.genesysConfig.messenger.fileUpload.modes).forEach((mode) => {
                if (mode.maxFileSizeKB > 0) {
                    this.maxFileSizeKB = Math.max(this.maxFileSizeKB, mode.maxFileSizeKB);
                }
                mode.fileTypes?.forEach((type) => mimeTypesSet.add(type));
            });
        }
        const allowedFileUploadTypes = Array.from(mimeTypesSet).join(',') || undefined;
        this.callback.updateCapabilities({ allowFileUploads: this.maxFileSizeKB > 0, allowedFileUploadTypes });
        return isNewSession;
    }
    /**
     * This will be called when the service desk is first initialized and it is determined that the user was previously
     * connected to an agent. This function should perform whatever steps are necessary to reconnect the user. Web chat
     * will assume the user is permitted to send messages and is connected to the same agent when this function returns.
     *
     * @returns true to indicate that the reconnect was successful.
     */
    async reconnect() {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Reconnecting to agent...`);
        return this.ensureGenesys(true);
    }
    // Old code to support debugging.
    addAllEvents() {
        this.addEvent('MessagingService.ready');
        this.addEvent('MessagingService.started');
        this.addEvent('MessagingService.messagesReceived');
        this.addEvent('MessagingService.uploading');
        this.addEvent('MessagingService.uploadApproved');
        this.addEvent('MessagingService.fileUploaded');
        this.addEvent('MessagingService.fileUploadError');
        this.addEvent('MessagingService.fileUploadCancelled');
        this.addEvent('MessagingService.fileReceived');
        this.addEvent('MessagingService.messagesUpdated');
        this.addEvent('MessagingService.fileDownloaded');
        this.addEvent('MessagingService.fileDownloadError');
        this.addEvent('MessagingService.fileDeleted');
        this.addEvent('MessagingService.oldMessages');
        this.addEvent('MessagingService.historyComplete');
        this.addEvent('MessagingService.typingReceived');
        this.addEvent('MessagingService.typingTimeout');
        this.addEvent('MessagingService.typingStarted');
        this.addEvent('MessagingService.restored');
        this.addEvent('MessagingService.sessionCleared');
        this.addEvent('MessagingService.offline');
        this.addEvent('MessagingService.reconnecting');
        this.addEvent('MessagingService.reconnected');
        this.addEvent('MessagingService.conversationDisconnected');
        this.addEvent('MessagingService.readOnlyConversation');
        this.addEvent('MessagingService.conversationReset');
        this.addEvent('MessagingService.error');
    }
    addEvent(eventName) {
        Genesys('subscribe', eventName, (...args) => {
            console.log(`${PREFIX} (All) ${eventName}`, args);
        });
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
//# sourceMappingURL=genesys.bundle.js.map