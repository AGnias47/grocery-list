/**
 * General module for grocery-list project
 *
 * @module general
 */

const fs = require("fs");

'use strict';

module.exports = {
  /**
   * Reads a text file into an array, where each line of the file denotes an element in the array
   * @param {string} fileName Path to file
   * @returns {string[]} File contents as an array
   */
  readFileIntoArray: function(fileName) {
    return fs.readFileSync(fileName).toString().split("\n");
  }
};