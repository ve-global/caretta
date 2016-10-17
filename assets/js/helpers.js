/**
*   Helpers Functions
*   Date: 17/10/2016
*	Caretta Framework
*/
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Helpers = (function () {

	/**
	* Get the parent with specific class
	* el {object} 		- child element
	* cls {string}		- parent class
	*/
    let FindAncestor = (el, cls) => {
        while (!el.classList.contains(cls)) {
            el = el.parentElement;
        }

        return el;
    };

    return {
        FindAncestor: FindAncestor
    };
}());
