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

/**
 * The Receipt model module.
 * @module model/Receipt
 * @version v1
 */
class Receipt {
    /**
     * Constructs a new <code>Receipt</code>.
     * @alias module:model/Receipt
     */
    constructor() { 
        
        Receipt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Receipt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Receipt} obj Optional instance to populate.
     * @return {module:model/Receipt} The populated <code>Receipt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Receipt();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], Object);
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], Object);
            }
            if (data.hasOwnProperty('cumulativeGasUsed')) {
                obj['cumulativeGasUsed'] = ApiClient.convertToType(data['cumulativeGasUsed'], Object);
            }
            if (data.hasOwnProperty('effectiveGasPrice')) {
                obj['effectiveGasPrice'] = ApiClient.convertToType(data['effectiveGasPrice'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Receipt</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Receipt</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contractAddress'] && !(typeof data['contractAddress'] === 'string' || data['contractAddress'] instanceof String)) {
            throw new Error("Expected the field `contractAddress` to be a primitive type in the JSON string but got " + data['contractAddress']);
        }

        return true;
    }


}



/**
 * @member {Object} type
 */
Receipt.prototype['type'] = undefined;

/**
 * @member {Object} status
 */
Receipt.prototype['status'] = undefined;

/**
 * @member {String} contractAddress
 */
Receipt.prototype['contractAddress'] = undefined;

/**
 * @member {Object} gasUsed
 */
Receipt.prototype['gasUsed'] = undefined;

/**
 * @member {Object} cumulativeGasUsed
 */
Receipt.prototype['cumulativeGasUsed'] = undefined;

/**
 * @member {Object} effectiveGasPrice
 */
Receipt.prototype['effectiveGasPrice'] = undefined;






export default Receipt;

