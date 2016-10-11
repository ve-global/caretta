/**
*   Dropdown Functions
*   Date: 11/10/2016
*	Caretta Framework
*/

var Caretta = Caretta || {};

Caretta.Dropdown = (function () {

	/**
	* Toggle dropdown parent class
	*/
	let toggleDropdown = (e) => {
		if(e.target.parentElement.classList.contains('open')) {
			e.target.parentElement.classList.remove('open');
		} else {
			e.target.parentElement.classList.add('open');
		}
	},

	getAllDropdowns = () => {
		let dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');
		
		for(let i=0; i<dropdowns.length; i++) {
			dropdowns[i].addEventListener('click', toggleDropdown);
		}
	}

	return {
        toggleDropdown: toggleDropdown,
        getAllDropdowns: getAllDropdowns
    };
}());
