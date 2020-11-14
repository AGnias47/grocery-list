/**
 * General module for grocery-list project
 *
 * @module general
 */

const fs = require("fs");
const TC = require("title-case");


'use strict';

module.exports = {
  /**
   * Reads a text file into an array, where each line of the file denotes an element in the array
   * @param {string} fileName Path to file
   * @returns {string[]} File contents as an array
   */
  readFileIntoArray: function(fileName) {
    return fs.readFileSync(fileName).toString().split("\n");
  },

  /**
   * Filters duplicate values in two Objects. If an object already exists in the original
   * Object, the value is concatenated to the existing value
   *
   * @param existing_object {Object}
   * @param new_object {Object}
   * @returns {Object}
   */
  concatObjectMerge: function(existing_object, new_object) {
    for (const property in new_object) {
      const properKey = TC.titleCase(property);
      if (properKey in existing_object) {
        existing_object[properKey] += new_object[property];
      } else {
        existing_object[properKey] = new_object[property];
      }
    }
    return existing_object;
  }
};