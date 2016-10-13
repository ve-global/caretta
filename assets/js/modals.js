/**
 *  VeCaretta Modals
 *  Date: 13/10/2016
 *  Caretta Framework
 */

var Caretta = Caretta || {};

Caretta.Modals = (function() {

	/**
	* Open modal
	* e {object} 		- event
	*/
    let TriggerModal = (e) => {
        e.preventDefault();
        let modalId = e.target.getAttribute('data-modal'),
        	overlay = document.createElement('DIV');
        
        overlay.id = 'body-overlay';
        document.body.appendChild(overlay);
        document.getElementById(modalId).classList.add('open');
    },

    /**
	* Close current modal
	* e {object} 		- event
	*/
    TriggerCloseModal = (e) => {
        e.preventDefault();
        let modal = FindAncestor(e.target, 'modal'),
        	overlay = document.getElementById('body-overlay');
        
        document.body.removeChild(overlay);
        modal.classList.remove('open');
    },

    /**
	* Initialize click event for modals triggering
	*/
    InitModals = () => {
        let modals = document.querySelectorAll('[data-toggle="modal"]');
        
        for (let i = 0; i < modals.length; i++){
          	modals[i].addEventListener('click', TriggerModal);
        }
    },

    /**
	* Initialize click event for closing modals
	*/
    InitCloseModals = () => {
    	let closeModals = document.querySelectorAll('[data-dismiss="modal"]');
        
        for (let i = 0; i < closeModals.length; i++){
          	closeModals[i].addEventListener('click', TriggerCloseModal);
        }
    },

    /**
	*** HELPER FUNCTION ***
	* Get the parent with specific class
	* el {object} 		- child element
	* cls {string}		- parent class
	*/
	FindAncestor = (el, cls) => {
	    while ((el = el.parentElement) && !el.classList.contains(cls));
	    return el;
	};


    return {
        InitModals: InitModals,
        InitCloseModals: InitCloseModals
    };
}());