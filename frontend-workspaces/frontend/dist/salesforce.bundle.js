"use strict";
(self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || []).push([["salesforce"],{

/***/ "../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/SFServiceDesk.js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@carbon+ai-chat@0.3.3_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_2d1b4ff090e346b709104e64783ade7d/node_modules/@carbon/ai-chat/dist/es/SFServiceDesk.js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SFServiceDesk: function() { return /* binding */ SFServiceDesk; }
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






































const PREFIX = '[SFServiceDesk]';
// Fields required for routing to the correct Salesforce queue.
const BUTTON_ID = 'buttonId';
const DOMAIN = 'sfDomain';
const ORGANIZATION_ID = 'organizationId';
// Retry parameters for reattempting calls to Salesforce.
const MAX_POLLING_RETRIES = 3;
const MAX_POST_RETRIES = 3;
const RETRY_DELAY = 100;
// Parameter needed to introduce delay between two Salesforce API calls
const DELAY_BETWEEN_SF_API_CALLS = 15;
// The version of Live Agent REST API.
const SF_API_VERSION = '47';
// Salesforce specific labels for information that needs to be sent on chat initiation
const SFChatTranscriptLabels = {
    IP_ADDRESS: 'Visitor IP Address',
    NETWORK: 'Network',
    LOCATION: 'Location',
    AGENT_APP_SESSION: 'x_watson_assistant_session',
    AGENT_APP_TOKEN: 'x_watson_assistant_token',
    AGENT_APP_KEY: 'x_watson_assistant_key',
};
// Salesforce automatically adds this suffix to the user defined custom field names
const SFCustomFieldNameSuffix = '__c';
// Salesforce specific transcript field names for the labels referenced above
const SFChatTranscriptFieldNames = {
    IP_ADDRESS: 'IpAddress',
    NETWORK: 'VisitorNetwork',
    LOCATION: 'Location',
    AGENT_APP_SESSION: `x_watson_assistant_session${SFCustomFieldNameSuffix}`,
    AGENT_APP_TOKEN: `x_watson_assistant_token${SFCustomFieldNameSuffix}`,
    AGENT_APP_KEY: `x_watson_assistant_key${SFCustomFieldNameSuffix}`,
};
// Salesforce specific entity names for entities that are created at the time of chat initiation by the user
var SFEntityName;
(function (SFEntityName) {
    SFEntityName["CASE"] = "Case";
    SFEntityName["CHAT_TRANSCRIPT"] = "LiveChatTranscript";
})(SFEntityName || (SFEntityName = {}));
// Salesforce specific entity types for entities that are created at the time of chat initiation by the user
var SFEntityType;
(function (SFEntityType) {
    SFEntityType["CASE_ID"] = "CaseId";
})(SFEntityType || (SFEntityType = {}));
class SFServiceDesk extends _ServiceDeskImpl_js__WEBPACK_IMPORTED_MODULE_2__.S {
    constructor(callback, serviceDeskConfig, regionHostname, serviceManager) {
        super(callback, serviceDeskConfig, serviceManager);
        /**
         * The set of routing infos to use when attempting to connect the user to an agent. This array is built when agent
         * availability is checked. Each info is checked one by one and if an info is found to have no available agents,
         * it is removed from the queue. The first info in this queue (if any) will indicate agents are available for that
         * info which can then be used to start chat. If all of those agents decline the chat, that info will be removed
         * from the queue and the next one can be checked.
         */
        this.routingInfoQueue = [];
        this.serviceManager = serviceManager;
        const { subscription } = serviceDeskConfig;
        if (!subscription?.data) {
            this.callback.setErrorStatus({
                type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                logInfo: 'The integration needs to be subscribed first to the service desk',
            });
            return;
        }
        if (!subscription.account?.id ||
            !subscription.data[BUTTON_ID] ||
            !subscription.data[DOMAIN] ||
            !subscription.data[ORGANIZATION_ID]) {
            this.callback.setErrorStatus({
                type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                logInfo: 'Mandatory service desk subscription values missing',
            });
            return;
        }
        if (!regionHostname) {
            this.callback.setErrorStatus({
                type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                logInfo: 'Unable to determine URL to call Salesforce',
            });
            return;
        }
        this.baseUrl = `https://${regionHostname}/chat/rest`;
        this.callback.updateCapabilities({ allowMultipleFileUploads: false });
    }
    /**
     * Function builds a Salesforce specific JSON object for the pre-chat information that was provided by the chat
     * visitor. This JSON object is sent to Salesforce when a user initiates a chat. For more details, please refer to
     * https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_request_bodies.htm
     */
    buildPrechatDetails(label, value, fieldName, displayToAgent) {
        const obj = {
            label,
            value,
            entityFieldMaps: [
                {
                    entityName: SFEntityName.CHAT_TRANSCRIPT,
                    fieldName: typeof fieldName === 'string' ? fieldName : fieldName[0],
                },
            ],
            transcriptFields: typeof fieldName === 'string' ? [fieldName] : fieldName,
            displayToAgent,
        };
        return obj;
    }
    /**
     * Function builds a Salesforce specific JSON object for the entities that are to be created when a chat visitor
     * begins a chat. This JSON object is sent to Salesforce when a user initiates a chat. For more details, please refer
     * to
     * https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_request_bodies.htm
     */
    buildPrechatEntities(label, fieldName) {
        return {
            entityName: SFEntityName.CHAT_TRANSCRIPT,
            showOnCreate: true,
            linkToEntityName: SFEntityName.CASE,
            linkToEntityField: SFEntityType.CASE_ID,
            saveToTranscript: SFEntityType.CASE_ID,
            entityFieldsMaps: [
                {
                    fieldName,
                    label,
                },
            ],
        };
    }
    /**
     * Function gathers all the visitor details that are to be sent to Salesforce at the time of chat initiation
     *
     * @param sessionId Session ID for the current session
     * @param authJWT Auth JWT is needed for verification purposes
     * @param sessionHistoryKey Config for agent app based on web chat
     * @param clientIpAddress Client's public IP address
     * @param location Client's location
     * @param network Client's network provider
     * @param preChat Custom Metadata coming from dialog. Note that the current structure for metadata uses Prechat interface.
     * We need Record<string, string> for backward compatibility.
     */
    getAllPrechatDetails(sessionId, authJWT, sessionHistoryKey, clientIpAddress, location, network, preChat) {
        const allPrechatDetails = [];
        const agentAppSessionDetails = this.buildPrechatDetails(SFChatTranscriptLabels.AGENT_APP_SESSION, sessionId, SFChatTranscriptFieldNames.AGENT_APP_SESSION, false);
        allPrechatDetails.push(agentAppSessionDetails);
        const agentAppTokenDetails = this.buildPrechatDetails(SFChatTranscriptLabels.AGENT_APP_TOKEN, authJWT, SFChatTranscriptFieldNames.AGENT_APP_TOKEN, false);
        allPrechatDetails.push(agentAppTokenDetails);
        const agentMetaData = this.buildPrechatDetails(SFChatTranscriptLabels.AGENT_APP_KEY, sessionHistoryKey, SFChatTranscriptFieldNames.AGENT_APP_KEY, false);
        allPrechatDetails.push(agentMetaData);
        const ipAddressDetails = this.buildPrechatDetails(SFChatTranscriptLabels.IP_ADDRESS, clientIpAddress || '', SFChatTranscriptFieldNames.IP_ADDRESS, false);
        allPrechatDetails.push(ipAddressDetails);
        const networkDetails = this.buildPrechatDetails(SFChatTranscriptLabels.NETWORK, network || '', SFChatTranscriptFieldNames.NETWORK, false);
        allPrechatDetails.push(networkDetails);
        const locationDetails = this.buildPrechatDetails(SFChatTranscriptLabels.LOCATION, location || '', SFChatTranscriptFieldNames.LOCATION, false);
        allPrechatDetails.push(locationDetails);
        if (preChat) {
            // If pre_chat object in dialog consists of details object, then we use this object to build all the prechat details.
            // If details object is not present, we assume that the pre_chat object is referring to the old structure and
            // we use key/value pairs to build details
            if (Array.isArray(preChat.details)) {
                preChat?.details.forEach((preChatDetail) => {
                    allPrechatDetails.push(this.buildPrechatDetails(preChatDetail.label, preChatDetail.value || '', preChatDetail.transcriptFields || preChatDetail.label + SFCustomFieldNameSuffix, preChatDetail.displayToAgent || false));
                });
            }
            else {
                // Backward compatibility
                Object.entries(preChat).forEach(([key, value]) => allPrechatDetails.push(this.buildPrechatDetails(key, value, key + SFCustomFieldNameSuffix, false)));
            }
        }
        return allPrechatDetails;
    }
    /**
     * Function gathers all the entities that are to be created in Salesforce at the time of chat initiation
     *
     * @param preChat Custom Metadata coming from dialog. Note that the current structure for metadata uses Prechat interface. We need Record<string, string> for backward compatibility.
     */
    getAllPrechatEntities(preChat) {
        const allPrechatEntities = [];
        const agentAppSessionEntity = this.buildPrechatEntities(SFChatTranscriptLabels.AGENT_APP_SESSION, SFChatTranscriptFieldNames.AGENT_APP_SESSION);
        allPrechatEntities.push(agentAppSessionEntity);
        const agentAppTokenEntity = this.buildPrechatEntities(SFChatTranscriptLabels.AGENT_APP_TOKEN, SFChatTranscriptFieldNames.AGENT_APP_TOKEN);
        allPrechatEntities.push(agentAppTokenEntity);
        const agentMetaDataEntity = this.buildPrechatEntities(SFChatTranscriptLabels.AGENT_APP_KEY, SFChatTranscriptFieldNames.AGENT_APP_KEY);
        allPrechatEntities.push(agentMetaDataEntity);
        const ipAddressEntity = this.buildPrechatEntities(SFChatTranscriptLabels.IP_ADDRESS, SFChatTranscriptFieldNames.IP_ADDRESS);
        allPrechatEntities.push(ipAddressEntity);
        const networkEntity = this.buildPrechatEntities(SFChatTranscriptLabels.NETWORK, SFChatTranscriptFieldNames.NETWORK);
        allPrechatEntities.push(networkEntity);
        const locationEntity = this.buildPrechatEntities(SFChatTranscriptLabels.LOCATION, SFChatTranscriptFieldNames.LOCATION);
        allPrechatEntities.push(locationEntity);
        if (preChat) {
            // If pre_chat object in dialog consists of entities object, then we use the object as is and send to Salesforce.
            // If entities object is not present but we detect a details object, then we try to build entities using the details object.
            // If neither entities and details are present, we assume that the pre_chat object is referring to the old structure and
            // we use key/value pairs to build entities
            if (Array.isArray(preChat.entities)) {
                preChat.entities.forEach((preChatEntity) => {
                    allPrechatEntities.push(preChatEntity);
                });
            }
            else if (Array.isArray(preChat.details)) {
                preChat.details.forEach((preChatDetail) => {
                    allPrechatEntities.push(this.buildPrechatEntities(preChatDetail.label, preChatDetail.transcriptFields?.length > 0
                        ? preChatDetail.transcriptFields[0]
                        : preChatDetail.label + SFCustomFieldNameSuffix));
                });
            }
            else {
                // Backward compatibility
                Object.keys(preChat).forEach(key => allPrechatEntities.push(this.buildPrechatEntities(key, key + SFCustomFieldNameSuffix)));
            }
        }
        return allPrechatEntities;
    }
    /**
     * Helper function that initializes all the variables needed to start a chat
     */
    async startChat(connectMessage, startChatOptions) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Called startChat`, connectMessage, startChatOptions);
        // The following values are initialized/reset every time user starts a new chat.
        this.connectMessage = connectMessage;
        this.startChatOptions = startChatOptions;
        this.hasAgentJoined = false;
        this.updatePersistedState({ fileUploadRequest: null });
        this.callback.updateCapabilities({ allowFileUploads: false });
        // Rebuild the routing info queues so we can start over and check the whole list again in case the agent
        // availability has changed.
        const connectItem = connectMessage.output.generic.find(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ab);
        this.buildRoutingInfos(connectItem);
        await this.startChatInternal();
    }
    /**
     * Builds the list of possible routing infos that should be checked to determine if an agent is available.
     */
    buildRoutingInfos(connectItem) {
        const { subscription } = this.config;
        const additionalRoutingInfo = connectItem?.transfer_info?.target?.salesforce
            ?.additional_routing_info;
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Building routing infos`, connectItem, subscription);
        let allRoutingInfo;
        if (additionalRoutingInfo) {
            // The connect item has specified all the routing info we need. This will override the default web chat
            // configuration settings.
            allRoutingInfo = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.e)(additionalRoutingInfo);
            allRoutingInfo.forEach(routingInfo => {
                // Fill in some default values if the routing info is not complete.
                routingInfo.org_id = routingInfo.org_id || subscription.data.organizationId;
                routingInfo.deployment_id = routingInfo.deployment_id || subscription.account.id;
                routingInfo.deployment_url = routingInfo.deployment_url || subscription.data.sfDomain;
                // Backwards compatibility for the deprecated property.
                if (routingInfo.button_ids) {
                    routingInfo.button_overrides = routingInfo.button_ids;
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.c)(`${PREFIX} The additionalRoutingInfo.button_ids property is deprecated. Use button_overrides instead.`);
                }
                // The button ID can either be provided in the routing info, it can be overridden by the connect to agent item
                // (a field available in the tooling UI), or it can come from the web chat live agent settings.
                routingInfo.button_id =
                    routingInfo.button_id ||
                        connectItem.transfer_info?.target?.salesforce?.button_id ||
                        subscription.data.buttonId;
            });
        }
        else {
            // Create a single routing info object.
            allRoutingInfo = [
                {
                    org_id: subscription.data.organizationId,
                    deployment_id: subscription.account.id,
                    deployment_url: subscription.data.sfDomain,
                    button_id: connectItem?.transfer_info?.target?.salesforce?.button_id || subscription.data.buttonId,
                },
            ];
        }
        this.routingInfoQueue = allRoutingInfo;
        if ((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ad)()) {
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Built routing infos`, (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.e)(allRoutingInfo));
        }
    }
    /**
     * Sets up a connection to Salesforce. This initiates the connection, gets the user into the queue for an agent, and
     * polls for actions from an agent if an agent accepts the chat. It is the main function for returning data in the
     * Salesforce to browser direction.
     */
    async startChatInternal() {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Starting chat`, this.startChatOptions);
        // Check the routing queue to determine which currently has any agents available. This also has the effect of
        // rechecking the info at the top of the queue to determine if agents that were previously available have since
        // become unavailable.
        await this.checkRoutingInfoQueue();
        // Attempt to start a chat using the first routing info (the one previously determined to be available).
        const routingInfo = this.routingInfoQueue[0];
        if (!routingInfo) {
            this.callback.setErrorStatus({
                type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                messageToUser: this.getIntlText('errors_noAgentsAvailable'),
            });
            return;
        }
        // First message we send to SF always starts with 1, start it at 0 as we always increment before sending.
        this.updatePersistedState({ toAgentSequence: 0 });
        // The reconnecting state starts as false.
        this.isReconnecting = false;
        this.connectItem = this.connectMessage.output.generic.find(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ab);
        // Extracts the browser information from context.integrations.chat.browser_info object.
        const browserInfo = this.connectMessage.context?.integrations?.chat?.browser_info;
        // Pre-chat data can be set inside the dialog. This data is later sent to salesforce. It can also be provided in
        // the pre:agent:startChat event.
        const preChatEvent = this.startChatOptions.preStartChatPayload?.preChat;
        const preChatContext = this.connectMessage.context?.integrations?.salesforce?.pre_chat;
        // The Record<string, string> piece is for undocumented legacy code.
        const preChat = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ae)({}, preChatContext, preChatEvent);
        if (!this.connectItem?.transfer_info?.additional_data?.jwt) {
            // This isn't actually used anymore but if the back-end removes it, existing web chats will break because of
            // this check. If we remove this check from new web chats, it'll make it easier to forget about the old ones
            // so we'll just leave this here for now.
            this.callback.setErrorStatus({
                type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                logInfo: 'Unable to connect due to missing security tokens',
            });
            return;
        }
        const authJWT = this.connectItem.transfer_info.additional_data.jwt;
        // Open a session with Salesforce, all calls will need this.
        const sessionUrl = `${this.baseUrl}/System/SessionId`;
        let sessionIdResponse;
        try {
            const headers = {
                'X-LIVEAGENT-AFFINITY': null,
                'X-LIVEAGENT-API-VERSION': SF_API_VERSION,
                'X-WATSON-TARGET-DOMAIN': routingInfo.deployment_url,
            };
            sessionIdResponse = await this.sendToSalesforce('GET', sessionUrl, null, headers);
        }
        catch (error) {
            this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING, logInfo: error });
            return;
        }
        if (!sessionIdResponse || !sessionIdResponse.ok) {
            this.callback.setErrorStatus({
                type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                logInfo: `Unable to start a live agent session: ${sessionIdResponse.status}`,
            });
            return;
        }
        try {
            const sessionData = await sessionIdResponse.json();
            this.updatePersistedState({ sessionData });
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Starting with chat session data`, sessionData);
        }
        catch (error) {
            this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING, logInfo: error });
            return;
        }
        // Programmatically mimic an end user requesting an agent.
        const buttonPressUrl = `${this.baseUrl}/Chasitor/ChasitorInit`;
        // Gets all the visitor details that we need to send over to salesforce
        // Currently, we are sending session id, auth JWT, client's IP address, location and network to Salesforce
        // Please note that prechatDetails and prechatEntities go hand-in-hand i.e. if you decide to add additional prechatDetails (or update getAllPrechatDetails),
        // then you must add corresponding preChatEntities (or update getAllPrechatEntities) as well
        // TODO : Note that last two parameters (location and network) are "undefined" for the timebeing.
        //        We need to update these two parameters with correct location and network information.
        const prechatDetails = this.getAllPrechatDetails(this.state.sessionID, authJWT, this.startChatOptions.agentAppInfo.sessionHistoryKey, browserInfo?.client_ip_address, undefined, undefined, preChat);
        // Gets all the entities that are to be created in Salesforce at the time of chat intiation
        // Please note that prechatDetails and prechatEntities go hand-in-hand i.e. if you decide to add additional prechatDetails (or update getAllPrechatDetails),
        // then you must add corresponding preChatEntities (or update getAllPrechatEntities) as well
        const prechatEntities = this.getAllPrechatEntities(preChat);
        const body = JSON.stringify({
            organizationId: routingInfo.org_id,
            deploymentId: routingInfo.deployment_id,
            buttonId: routingInfo.button_id,
            buttonOverrides: routingInfo.button_overrides,
            userAgent: navigator?.userAgent,
            language: this.state.locale ? this.state.locale : navigator?.language,
            screenResolution: `${window?.screen?.height}X${window?.screen?.width}`,
            prechatDetails,
            receiveQueueUpdates: true,
            isPost: true,
            prechatEntities,
        });
        let chasitorResponse;
        try {
            chasitorResponse = await this.sendToSalesforce('POST', buttonPressUrl, body, null);
        }
        catch (error) {
            this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING, logInfo: error });
        }
        if (!chasitorResponse || !chasitorResponse.ok) {
            this.callback.setErrorStatus({
                type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING,
                logInfo: `Unable to contact an agent: ${chasitorResponse.status}`,
            });
            return;
        }
        this.updatePersistedState({ fromAgentSequence: -1 });
        this.startPolling();
    }
    /**
     * Handles a ChatEstablished message. This occurs when an agent joins and the chat is ready for messages.
     */
    async handleChatEstablished(chatEstablished) {
        const newAgent = {
            nickname: chatEstablished.name,
            id: chatEstablished.userId,
        };
        this.callback.agentJoined(newAgent);
        this.hasAgentJoined = true;
        // Send the initial summary messages to the agent.
        const messages = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.af)(this.connectItem, 'Begin conversation');
        await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ag)(messages, async (text) => {
            // If calls to ChatMessage API are made too quickly, Salesforce tends to not process some calls on their end
            // (even though they return a 200 for those calls). Introducing a small delay ensures that calls to ChatMessage
            // API are processed correctly.
            await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.R)(DELAY_BETWEEN_SF_API_CALLS);
            await this.sendMessageToAgent((0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.p)(text), '', {});
        });
    }
    async endChat() {
        // Stop polling as we don't want to keep doing it even if we fail to tell Salesforce the chat is over. We'll
        // stop the current poller and clear this so we can get a new poller the next time we start polling.
        if (this.currentPoller) {
            this.currentPoller.stop = true;
            this.currentPoller = null;
            // We only want to tell Salesforce to end the chat if we are not in a reconnecting state, if we are, ignore this call
            // as it isn't worth telling the user we can't tell the agent the chat is over. It will time out shortly after as
            // the polling is off.
            if (!this.isReconnecting) {
                const endChatUrl = `${this.baseUrl}/Chasitor/ChatEnd`;
                const body = JSON.stringify({
                    reason: 'client',
                });
                try {
                    const response = await this.sendToSalesforce('POST', endChatUrl, body, null);
                    if (!response || !response.ok) {
                        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('Failed to end chat', response);
                    }
                }
                catch (error) {
                    (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('Unable to close chat with Salesforce agent.', error);
                }
            }
        }
    }
    async sendMessageToAgent(message, _, additionalData) {
        // If in 503 state we need to lock down sending messages to the agent. Indicate to the user that there is a problem.
        if (this.isReconnecting) {
            throw new Error('[SFServiceDesk] Message failed to send due to a reconnection in progress');
        }
        else {
            if (message.input.text) {
                const sendMessageUrl = `${this.baseUrl}/Chasitor/ChatMessage`;
                const body = JSON.stringify({
                    text: message.input.text,
                });
                const response = await this.sendToSalesforce('POST', sendMessageUrl, body, null);
                if (!response?.ok) {
                    throw new Error('[SFServiceDesk] Message failed to send');
                }
            }
            if (additionalData.filesToUpload?.length) {
                await this.doFileUpload(additionalData.filesToUpload[0]);
            }
        }
    }
    async doFileUpload(fileUpload) {
        const { fileUploadRequest } = this.persistedState();
        if (!fileUploadRequest) {
            this.callback.setFileUploadStatus(fileUpload.id, true);
        }
        else {
            const formData = new FormData();
            formData.append('file', fileUpload.file);
            const requestMessage = fileUploadRequest;
            const { sessionData } = this.persistedState();
            const url = `${requestMessage.uploadServletUrl}?orgId=${this.routingInfoQueue[0].org_id}&chatKey=${sessionData.id}&fileToken=${requestMessage.fileToken}&encoding=UTF-8`;
            const response = await this.serviceManager.fetch(url, {
                method: 'POST',
                body: formData,
            });
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got response in doFileUpload`, await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ah)(response));
            this.callback.setFileUploadStatus(fileUpload.id, !response.ok);
        }
        this.callback.updateCapabilities({ allowFileUploads: false });
        this.updatePersistedState({ fileUploadRequest: null });
    }
    userReadMessages() {
        return Promise.resolve();
    }
    async userTyping(isTyping) {
        // We only want to update Salesforce if we are not in a reconnecting state, if we are, ignore this call
        // as it isn't worth telling the user we can't update the agent about his typing status.
        if (!this.isReconnecting) {
            let response;
            let url;
            if (isTyping) {
                url = `${this.baseUrl}/Chasitor/ChasitorTyping`;
            }
            else {
                url = `${this.baseUrl}/Chasitor/ChasitorNotTyping`;
            }
            try {
                response = await this.sendToSalesforce('POST', url, '{}');
            }
            catch (error) {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`Failed calling ${url}`, error);
            }
            if (!response?.ok) {
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`Failed calling ${url}, response code: ${response.status}`);
            }
        }
    }
    /**
     * This will determine if any agents are available to connect to the user. If the message contains
     * "additional_routing_info", it will check each set of routing info to determine if any agent is available for
     * that routing info. Each info will be checked in the order provided in the message.
     *
     * After this method is complete, the "routingInfoQueue" property will be populated with the routing infos that
     * can later be used when a chat is actually started. The first info in the queue will always be info where an
     * agent is available. Additional infos in the queue represent infos that were not checked. If a chat is started
     * and all the available agents decline, the chat may attempt to start the chat with the subsequent infos.
     *
     * If no agents are available, "routingInfoQueue" will be left an empty array.
     */
    async areAnyAgentsOnline(connectMessage) {
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Called areAnyAgentsOnline`, connectMessage);
        const connectItem = connectMessage.output.generic.find(_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ab);
        this.buildRoutingInfos(connectItem);
        await this.checkRoutingInfoQueue();
        return this.routingInfoQueue.length !== 0;
    }
    /**
     * Checks the current values in the routing info queue to determine if any agents are available for any of them.
     * Any infos found to not be available will be removed from the queue. If no infos have any agents available, this
     * queue will end up as an empty array.
     *
     * SF appears to follow the following rules when connecting a user to an agent.
     *
     * 1. The /Availability check works for both agentId and buttonId but not agentId_buttonId.
     * 2. When you pass buttonOverrides to /ChasitorInit, SF will check the availability of each item in the array one
     * by one. When it finds an item that has some availability, it will assign that item to the agent or button
     * (queue).
     * 3. Once an item is assigned, if that assignment then fails (because all the agents decline or go offline), the
     * chat fails. SF does not go back to buttonOverrides and try the next item.
     * 4. If a given item has multiple agents (like a button), SF will pass the item from one agent to another agent
     * if the first agent declines. It will only fail the chat at this point if there is no one else to pass the item to.
     */
    async checkRoutingInfoQueue() {
        // Try each of the routing configurations until we find one that has something available.
        while (this.routingInfoQueue.length) {
            const anyAvailable = await this.callAgentAvailabilityAPI(this.routingInfoQueue[0]);
            if (!anyAvailable) {
                // Remove the first item from the queue and try again.
                this.routingInfoQueue.splice(0, 1);
            }
            else {
                // Found one, so return and leave it in the queue.
                return;
            }
        }
    }
    /**
     * Makes a call to Salesforce's agent availability API to determine if the given routing info contains any button
     * or agent that's available.
     *
     * @see https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Availability.htm
     */
    async callAgentAvailabilityAPI(routingInfo) {
        const { org_id, deployment_id, button_overrides, button_id } = routingInfo;
        // The list of things we want to test for are all the button IDs in the routing info, plus all the button IDs in
        // the button_overrides field.
        const idsToCheck = [];
        if (button_overrides) {
            button_overrides.forEach(id => {
                // Pull out the IDs to check. This may either be an agent ID or a button ID but it may also be a
                // "agentID_buttonID" in which case we need both.
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ai)(idsToCheck, id.split('_'));
            });
        }
        else if (button_id) {
            idsToCheck.push(button_id);
        }
        const queryParams = `?org_id=${org_id}&deployment_id=${deployment_id}&Availability.ids=[${idsToCheck}]`;
        const agentAvailabilityUrl = `${this.baseUrl}/Visitor/Availability${queryParams}`;
        try {
            const headers = {
                'X-LIVEAGENT-API-VERSION': SF_API_VERSION,
                'X-WATSON-TARGET-DOMAIN': routingInfo.deployment_url,
            };
            const response = await this.sendToSalesforce('GET', agentAvailabilityUrl, null, headers);
            const responseJSON = await response.json();
            // Look for a message of type "Availability" and then see if it has any results in it that indicate any of the
            // thing we asked about are available.
            const results = responseJSON?.messages?.find((message) => message.type === 'Availability')?.message?.results;
            return Boolean(results?.find((availability) => availability.isAvailable));
        }
        catch (error) {
            // In case of an error, we want to return false so that agent unavailability message is rendered.
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('Error in callAgentAvailabilityAPI', error);
            return false;
        }
    }
    /**
     * This function is in charge of calling the /Messages endpoint, examining the returned type(s), and taking correct
     * action based on those types (for example, sending text to the browser if the response contains a ChatMessage type).
     *
     * @param poller The object that is controlling this polling.
     * @returns Returns the sequence number from the last call to use in subsequence /Messages acks.
     */
    async getMessagesFromAgent(poller) {
        const getUpdatesUrl = `${this.baseUrl}/System/Messages?ack=${this.persistedState().fromAgentSequence}`;
        // Call the messages endpoint to get information about what the agent is doing, including possibly getting back a
        // message for the user. This returns immediately if the agent is doing something, even just typing.
        // In cases where data is returned a 200 and a JSON body is provided. If the agent is doing nothing, this call
        // will hang, in a pending state, for up to 30 seconds waiting for data to appear. This timeout may be configurable
        // in Salesforce but so far it appears not to be. After 30 seconds, a 204 will be returned with an empty body.
        const response = await this.serviceManager.fetch(getUpdatesUrl, {
            method: 'GET',
            credentials: 'include',
            headers: this.getHeaders(false),
        });
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got response in getMessagesFromAgent`, await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ah)(response));
        if (response.status === 200) {
            const parsedResponse = await response.json();
            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Parsed response`, parsedResponse);
            // Update sequence to use in future calls.
            this.updatePersistedState({ fromAgentSequence: parsedResponse.sequence });
            // If offset is provided, it is only provided for messages that have data, not most connection messages, store it
            // in case we need to reconnect due to failures.
            if (parsedResponse.offset) {
                this.updatePersistedState({ lastOffset: parsedResponse.offset });
            }
            // Process all messages that came back in a call to /Messages. Multiple can be returned in each response.
            // Full list of possible types are here: https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages_responses_overview.htm
            let gotAgentNotTyping = false;
            for (let index = 0; index < parsedResponse.messages.length; index++) {
                const element = parsedResponse.messages[index];
                switch (element.type) {
                    case 'AgentDisconnect': {
                        await this.callback.agentLeftChat();
                        break;
                    }
                    case 'AgentTyping': {
                        // If this response included both AgentTyping and AgentNotTyping, it might exemplify a bug in SF where it
                        // sends them in the wrong order (this in particular can happen during reconnect if the agent sent messages
                        // while the user was away). This can result in the typing indicator being stuck. So if we see both, ignore
                        // AgentTyping.
                        if (!gotAgentNotTyping) {
                            await this.callback.agentTyping(true);
                        }
                        break;
                    }
                    case 'AgentNotTyping': {
                        gotAgentNotTyping = true;
                        await this.callback.agentTyping(false);
                        break;
                    }
                    case 'ChasitorSessionData': {
                        // Not tested as we can't get Salesforce to send this, but this should attempt to resync state.
                        await this.resyncState();
                        break;
                    }
                    case 'ChatEnded': {
                        poller.stop = true;
                        await this.callback.agentEndedChat();
                        break;
                    }
                    case 'ChatEstablished': {
                        // This will send messages to the agent to start the chat. We don't want to wait for that process to finish
                        // so no await here.
                        this.handleChatEstablished(element.message).catch(error => {
                            (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('Error establishing chat', error);
                        });
                        break;
                    }
                    case 'ChatMessage': {
                        // Right now we only handle text from the agent. This seems to be the only type of data they can send based
                        // on our exploration of their chat console and the fact that the API calls the field data appears in text.
                        const chatMessageElement = element.message;
                        // As soon as the agent sends a message, make sure to clear the "isTyping" event for the agent.
                        await this.callback.agentTyping(false);
                        await this.callback.sendMessageToUser(chatMessageElement.text);
                        break;
                    }
                    case 'ChatRequestFail': {
                        // This can happen when trying to initiate a chat and it fails (maybe an agent isn't available) or
                        // during the chat (if the only agent goes offline).
                        const chatRequestFailElement = element.message;
                        poller.stop = true;
                        if (chatRequestFailElement.reason === 'Unavailable') {
                            if (!this.hasAgentJoined) {
                                // This occurs while waiting for an agent to join and all available agents have declined the call. To
                                // handle this, we remove the current routing info from the queue and start the process over using
                                // whatever routing infos may still be in the queue (if any).
                                this.routingInfoQueue.splice(0, 1);
                                this.startChatInternal().catch(error => (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)('Error restarting chat', error));
                            }
                            else {
                                // If the user is chatting with an agent, however the agent suddenly goes offline,
                                // then we want to send an "agent ended the chat" event to the user. We don't want to
                                // throw an error in this case because Salesforce shows "Chat session ended by the agent"
                                // on their end when an agent goes offline so we'd want to emulate the same here.
                                await this.callback.agentEndedChat();
                            }
                        }
                        break;
                    }
                    case 'ChatRequestSuccess': {
                        // Indicates that a user has successfully queued for an agent, does not indicate an agent has accepted
                        // the chat, ChatEstablished does. Does indicate agents are online to theoretically answer.
                        // If we desire we can get wait time instead of queue position.
                        // Salesforce has queue routing that does not support position and will return 0 always so ignore that.
                        const chatRequestSuccessElement = element.message;
                        if (chatRequestSuccessElement.queuePosition !== 0) {
                            const availability = {
                                position_in_queue: chatRequestSuccessElement.queuePosition + 1,
                            };
                            await this.callback.updateAgentAvailability(availability);
                        }
                        break;
                    }
                    case 'ChatTransferred': {
                        const chatTransferredElement = element.message;
                        await this.callback.beginTransferToAnotherAgent();
                        const newAgent = {
                            nickname: chatTransferredElement.name,
                            id: chatTransferredElement.userId,
                        };
                        await this.callback.agentJoined(newAgent);
                        break;
                    }
                    case 'CustomEvent': {
                        // Not implemented but perhaps defining custom events would help some use cases.
                        break;
                    }
                    case 'NewVisitorBreadcrumb': {
                        // We don't plan to make use of this case right now as there isn't really value to telling the user the
                        // page they are on but we don't want it to fall into the default bucket and trigger an unexpected error.
                        break;
                    }
                    case 'QueueUpdate': {
                        // If receiveQueueUpdates is true in the ChasitorInit call then updates will be sent as the user moves
                        // through the queue.
                        const queueUpdateElement = element.message;
                        const availability = {
                            position_in_queue: queueUpdateElement.position + 1,
                        };
                        await this.callback.updateAgentAvailability(availability);
                        break;
                    }
                    case 'FileTransfer': {
                        const request = element.message;
                        if (request.type === 'Requested') {
                            this.callback.updateCapabilities({ allowFileUploads: true });
                            this.updatePersistedState({ fileUploadRequest: element.message });
                            const messageText = this.getIntlText('fileSharing_request');
                            const message = (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.J)(messageText);
                            message.output.generic[0].agent_message_type = _customElement_js__WEBPACK_IMPORTED_MODULE_1__.A.SYSTEM;
                            await this.callback.sendMessageToUser(message);
                        }
                        else if (request.type === 'Canceled') {
                            this.callback.updateCapabilities({ allowFileUploads: false });
                            this.callback.updatePersistedState({ fileUploadRequest: null });
                        }
                        break;
                    }
                    default: {
                        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.j)(`unhandled Salesforce message: ${element.type}`);
                        break;
                    }
                }
            }
        }
        else if (response.status === _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aj.SERVICE_UNAVAILABLE) {
            await this.issueReconnect();
        }
        else if (!response.ok) {
            throw new Error(`Error polling for messages: ${response.status}`);
        }
    }
    /**
     * If any response from Salesforce is a 503 we need to call this to re-establish the connection. This
     * is the first step in reacting to a 503.
     * Step 1: After getting a 503 issue a call to issueReconnect (this function) to call the ReconnectSession endpoint.
     * Step 2: The next call to /messages will return with a ChasitorSessionData type, we can optionally process that.
     * Step 3: Call resyncState to call the ChasitorResyncState endpoint to inform Salesforce we are
     * ready to start chatting again.
     */
    async issueReconnect() {
        // Untested, SF rejects this call with a 405 in testing, presumably because it never sent a 503.
        this.isReconnecting = true;
        // Make a ReconnectSession call
        const { lastOffset } = this.persistedState();
        const reconnectSessionUrl = `${this.baseUrl}/System/ReconnectSession?ReconnectSession.offset=${lastOffset}`;
        const response = await this.serviceManager.fetch(reconnectSessionUrl, {
            method: 'GET',
            credentials: 'include',
            headers: this.getHeaders(false),
        });
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got response in issueReconnect`, await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ah)(response));
        // Check that the call is okay. After this call the next call to /Messages should return a ChasitorSessionData
        // response type and we'll continue trying to reconnect there.
        if (!response || !response.ok) {
            throw new Error(`Error reconnecting after 503 Salesforce error: ${response.status}`);
        }
        const parsedResponse = await response.json();
        if (!parsedResponse.messages || parsedResponse.messages.length < 1) {
            throw new Error(`Unexpected response when trying to reconnect: ${parsedResponse}`);
        }
        // Update the affinity as we are switching to a new Salesforce server.
        this.updatePersistedState({ sessionData: { affinityToken: parsedResponse.messages[0].message.affinityToken } });
        // Untested, doc indicates to reset the sequence number of the next request but does not say if we start from
        // scratch or if we go back in time a number or so.
        this.updatePersistedState({ fromAgentSequence: -1 });
    }
    /**
     * Makes a REST call to Salesforce
     *
     * @param type The kind of REST call to make, POST or GET
     * @param url The URL to send the data to.
     * @param body The stringified data to send.
     * @param headers Optional set of headers. If not provided it will be constructed using the most common set of
     * headers.
     * @returns Returns the fetch response object from a call to the url.
     */
    async sendToSalesforce(type, url, body, headers) {
        let retry = 0;
        let response;
        do {
            try {
                /* eslint-disable-next-line no-await-in-loop */
                response = await this.serviceManager.fetch(url, {
                    method: type,
                    credentials: 'include',
                    body,
                    headers: headers || this.getHeaders(true),
                });
                (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got response in sendToSalesforce`, await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ah)(response));
                if (response.status === _AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.aj.CONFLICT) {
                    // There is an error in the sequence number. Salesforce will respond with something like:
                    // "Out of sync Ack. Expected 498. Actual 4"
                    // This is unfortunate as the expected is wrong, it is just an echo of the sequence number we sent. The actual is
                    // the last successful ack that Salesforce received. So retry with 1 plus the reported actual number.
                    /* eslint-disable-next-line no-await-in-loop */
                    const errorMessage = await response.text();
                    const toAgentSequence = Number(errorMessage.match(/\d+$/)[0]) + 1;
                    this.updatePersistedState({ toAgentSequence });
                }
                // Retry again if there are tries left and the status was not in the 200's.
                if (!response.ok) {
                    retry++;
                }
            }
            catch (error) {
                console.error('Error occurred sending message to Salesforce', error);
                retry++;
                if (retry === MAX_POST_RETRIES) {
                    // If all retries have failed throw an error and let the caller decide how they want to handle things. This
                    // method will not set any error conditions.
                    throw error;
                }
                else {
                    /* eslint-disable-next-line no-await-in-loop */
                    await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.R)(RETRY_DELAY);
                }
            }
        } while (retry !== MAX_POST_RETRIES && !response.ok);
        return response;
    }
    /**
     * Indicates we have reacted to the ChasitorSessionData message response type and are ready to resume the chat. This
     * is the last step in reacting to a 503.
     * Step 1: After getting a 503 issue a call to issueReconnect to call the ReconnectSession endpoint.
     * Step 2: The next call to /messages will return with a ChasitorSessionData type, we can optionally process that.
     * Step 3: Call resyncState (this function) to call the ChasitorResyncState endpoint to inform Salesforce we are
     * ready to start chatting again.
     *
     * @returns Nothing to return if the call is successful, otherwise an error is thrown to start a
     * potential retry.
     */
    async resyncState() {
        const resyncUrl = `${this.baseUrl}/Chasitor/ChasitorResyncState`;
        // Do not send sequence header for this call.
        const response = await this.serviceManager.fetch(resyncUrl, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ organizationId: this.routingInfoQueue[0].org_id }),
            headers: this.getHeaders(false),
        });
        (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.f)(`${PREFIX} Got response in resyncState`, await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.ah)(response));
        if (!response || !response.ok) {
            throw new Error(`Failed to resync state: ${response.status}`);
        }
        this.isReconnecting = false;
    }
    /**
     * Poll for messages to get an agent response. Polling will continue until the chat is ended by either party,
     * a chatRequestFailure occurs, or 3 consecutive fetch failures force it to stop.
     * Polling is stopped when an event of some sort changes the isPolling flag (either side ends the chat, errors in the
     * REST API occur that are not fixed by the retry mechanisms, etc.).
     */
    async startPolling() {
        // Create a new poller object that can be used to stop this instance of polling.
        const poller = { stop: false };
        this.currentPoller = poller;
        let numFailures = 0;
        do {
            try {
                // We have until clientPollTimeout returned by the sessionId call to make a call to /Messages or a timeout will
                // occur and we'll have to reconnect. Right now we call /Messages immediately after we either get an agent response
                // or the call returns with a 204, which happens after 30 seconds of no agent activity.
                // Note that this call will continue to run after a chat has been ended until the long polling is terminated
                // by Salesforce.
                /* eslint-disable-next-line no-await-in-loop */
                await this.getMessagesFromAgent(poller);
                // Reset numFailures if we successfully got a response
                numFailures = 0;
            }
            catch (error) {
                if (++numFailures === MAX_POLLING_RETRIES) {
                    if (!poller.stop) {
                        this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.DISCONNECTED, isDisconnected: true });
                    }
                    else {
                        this.callback.setErrorStatus({ type: _customElement_js__WEBPACK_IMPORTED_MODULE_1__.E.CONNECTING });
                    }
                    poller.stop = true;
                }
                else {
                    /* eslint-disable-next-line no-await-in-loop */
                    await (0,_AppContainer_js__WEBPACK_IMPORTED_MODULE_0__.R)(RETRY_DELAY);
                }
            }
        } while (!poller.stop);
    }
    /**
     * Helper method to construct headers for a Salesforce. Most useful for POSTs as GETs sometimes require specific
     * headers.
     *
     * @param includeSequence True to include the sequence header. This will also increment the sequence before making
     * the call.
     * @returns A JSON object that can be used as the headers to a fetch call.
     */
    getHeaders(includeSequence) {
        const { sessionData, toAgentSequence } = this.persistedState();
        const headers = {
            'X-LIVEAGENT-AFFINITY': `${sessionData.affinityToken}`,
            'X-LIVEAGENT-API-VERSION': SF_API_VERSION,
            'X-LIVEAGENT-SESSION-KEY': `${sessionData.key}`,
            'X-WATSON-TARGET-DOMAIN': this.routingInfoQueue[0].deployment_url,
        };
        if (includeSequence) {
            this.updatePersistedState({ toAgentSequence: toAgentSequence + 1 });
            headers['X-LIVEAGENT-SEQUENCE'] = `${toAgentSequence + 1}`;
        }
        return headers;
    }
    async reconnect() {
        const persistedState = this.persistedState();
        if (persistedState.fromAgentSequence && persistedState.fromAgentSequence !== -1) {
            if (this.persistedState().fileUploadRequest) {
                this.callback.updateCapabilities({ allowFileUploads: true });
            }
            this.startPolling();
            return true;
        }
        return false;
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
//# sourceMappingURL=salesforce.bundle.js.map