/**
*   Helpers Functions
*   Date: 17/10/2016
*	Caretta Framework
*/

var Caretta = Caretta || {};

Caretta.Helpers = (function () {

	/**
	* Get the parent with specific class
	* el {object} 		- child element
	* cls {string}		- parent class
	*/
	let FindAncestor = (el, cls) => {
	    while ((el = el.parentElement) && !el.classList.contains(cls));
	    return el;
	};

	return {
		FindAncestor: FindAncestor
    };
}());