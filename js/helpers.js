/**
 *  VeCaretta Helper Functions
 *  Date: 17/10/2016
 *  Caretta Framework
 */
'use strict';
/* eslint no-cond-assign: 1 */

var Caretta;

Caretta = Caretta || {};

Caretta.Helpers = (function () {

    /**
    * Get the parent with specific class
    * el {object}       - child element
    * cls {string}      - parent class
    */
    let findAncestor = (el, cls) => {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {}

        return el;
    };

    return {
        findAncestor: findAncestor
    };
}());
