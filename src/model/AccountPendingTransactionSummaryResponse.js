/**
 * Accounts Read API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AccountPendingTransactionSummary from './AccountPendingTransactionSummary';

/**
 * The AccountPendingTransactionSummaryResponse model module.
 * @module model/AccountPendingTransactionSummaryResponse
 * @version v1
 */
class AccountPendingTransactionSummaryResponse {
    /**
     * Constructs a new <code>AccountPendingTransactionSummaryResponse</code>.
     * @alias module:model/AccountPendingTransactionSummaryResponse
     */
    constructor() { 
        
        AccountPendingTransactionSummaryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountPendingTransactionSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountPendingTransactionSummaryResponse} obj Optional instance to populate.
     * @return {module:model/AccountPendingTransactionSummaryResponse} The populated <code>AccountPendingTransactionSummaryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountPendingTransactionSummaryResponse();

            if (data.hasOwnProperty('pageCount')) {
                obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [AccountPendingTransactionSummary]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountPendingTransactionSummaryResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountPendingTransactionSummaryResponse</code>.
     */
    static validateJSON(data) {
        if (data['result']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['result'])) {
                throw new Error("Expected the field `result` to be an array in the JSON data but got " + data['result']);
            }
            // validate the optional field `result` (array)
            for (const item of data['result']) {
                AccountPendingTransactionSummary.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} pageCount
 */
AccountPendingTransactionSummaryResponse.prototype['pageCount'] = undefined;

/**
 * @member {Array.<module:model/AccountPendingTransactionSummary>} result
 */
AccountPendingTransactionSummaryResponse.prototype['result'] = undefined;






export default AccountPendingTransactionSummaryResponse;

