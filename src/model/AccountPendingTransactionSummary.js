/**
 * QC Read API
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
import Receipt from './Receipt';
import TransactionType from './TransactionType';

/**
 * The AccountPendingTransactionSummary model module.
 * @module model/AccountPendingTransactionSummary
 * @version v1
 */
class AccountPendingTransactionSummary {
    /**
     * Constructs a new <code>AccountPendingTransactionSummary</code>.
     * @alias module:model/AccountPendingTransactionSummary
     */
    constructor() { 
        
        AccountPendingTransactionSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountPendingTransactionSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountPendingTransactionSummary} obj Optional instance to populate.
     * @return {module:model/AccountPendingTransactionSummary} The populated <code>AccountPendingTransactionSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountPendingTransactionSummary();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('blockNumber')) {
                obj['blockNumber'] = ApiClient.convertToType(data['blockNumber'], 'Number');
            }
            if (data.hasOwnProperty('blockHash')) {
                obj['blockHash'] = ApiClient.convertToType(data['blockHash'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], Object);
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
            if (data.hasOwnProperty('gas')) {
                obj['gas'] = ApiClient.convertToType(data['gas'], Object);
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ApiClient.convertToType(data['gasPrice'], Object);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = TransactionType.constructFromObject(data['transactionType']);
            }
            if (data.hasOwnProperty('receipt')) {
                obj['receipt'] = Receipt.constructFromObject(data['receipt']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountPendingTransactionSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountPendingTransactionSummary</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['hash'] && !(typeof data['hash'] === 'string' || data['hash'] instanceof String)) {
            throw new Error("Expected the field `hash` to be a primitive type in the JSON string but got " + data['hash']);
        }
        // ensure the json data is a string
        if (data['blockHash'] && !(typeof data['blockHash'] === 'string' || data['blockHash'] instanceof String)) {
            throw new Error("Expected the field `blockHash` to be a primitive type in the JSON string but got " + data['blockHash']);
        }
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }
        // validate the optional field `receipt`
        if (data['receipt']) { // data not null
          Receipt.validateJSON(data['receipt']);
        }

        return true;
    }


}



/**
 * @member {String} hash
 */
AccountPendingTransactionSummary.prototype['hash'] = undefined;

/**
 * @member {Number} blockNumber
 */
AccountPendingTransactionSummary.prototype['blockNumber'] = undefined;

/**
 * @member {String} blockHash
 */
AccountPendingTransactionSummary.prototype['blockHash'] = undefined;

/**
 * @member {Date} createdAt
 */
AccountPendingTransactionSummary.prototype['createdAt'] = undefined;

/**
 * @member {Object} nonce
 */
AccountPendingTransactionSummary.prototype['nonce'] = undefined;

/**
 * @member {String} from
 */
AccountPendingTransactionSummary.prototype['from'] = undefined;

/**
 * @member {String} to
 */
AccountPendingTransactionSummary.prototype['to'] = undefined;

/**
 * @member {Object} value
 */
AccountPendingTransactionSummary.prototype['value'] = undefined;

/**
 * @member {Object} gas
 */
AccountPendingTransactionSummary.prototype['gas'] = undefined;

/**
 * @member {Object} gasPrice
 */
AccountPendingTransactionSummary.prototype['gasPrice'] = undefined;

/**
 * @member {module:model/TransactionType} transactionType
 */
AccountPendingTransactionSummary.prototype['transactionType'] = undefined;

/**
 * @member {module:model/Receipt} receipt
 */
AccountPendingTransactionSummary.prototype['receipt'] = undefined;






export default AccountPendingTransactionSummary;
