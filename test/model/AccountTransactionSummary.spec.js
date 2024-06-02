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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AccountsReadApi);
  }
}(this, function(expect, AccountsReadApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AccountsReadApi.AccountTransactionSummary();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountTransactionSummary', function() {
    it('should create an instance of AccountTransactionSummary', function() {
      // uncomment below and update the code to test AccountTransactionSummary
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be.a(AccountsReadApi.AccountTransactionSummary);
    });

    it('should have the property hash (base name: "hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property blockNumber (base name: "blockNumber")', function() {
      // uncomment below and update the code to test the property blockNumber
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property blockHash (base name: "blockHash")', function() {
      // uncomment below and update the code to test the property blockHash
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property gas (base name: "gas")', function() {
      // uncomment below and update the code to test the property gas
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property gasPrice (base name: "gasPrice")', function() {
      // uncomment below and update the code to test the property gasPrice
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property receipt (base name: "receipt")', function() {
      // uncomment below and update the code to test the property receipt
      //var instance = new AccountsReadApi.AccountTransactionSummary();
      //expect(instance).to.be();
    });

  });

}));
