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
* Enum class TransactionType.
* @enum {}
* @readonly
*/
export default class TransactionType {
    
        /**
         * value: "CoinTransfer"
         * @const
         */
        "CoinTransfer" = "CoinTransfer";

    
        /**
         * value: "NewToken"
         * @const
         */
        "NewToken" = "NewToken";

    
        /**
         * value: "TokenTransfer"
         * @const
         */
        "TokenTransfer" = "TokenTransfer";

    
        /**
         * value: "NewSmartContract"
         * @const
         */
        "NewSmartContract" = "NewSmartContract";

    
        /**
         * value: "SmartContract"
         * @const
         */
        "SmartContract" = "SmartContract";

    

    /**
    * Returns a <code>TransactionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransactionType} The enum <code>TransactionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

