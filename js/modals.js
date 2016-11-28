/**
 *  VeCaretta Modals
 *  Date: 13/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Modals = (function () {

    /**
     * Open modal
     * e {object}       - event
     */
    let triggerModal = (e) => {
            e.preventDefault();
            let modalId = e.target.getAttribute('data-modal'),
                overlay = document.createElement('DIV');

            overlay.id = 'body-overlay';
            document.body.appendChild(overlay);
            document.getElementById(modalId).classList.add('open');
        },

        /**
         * Close current modal
         * e {object}       - event
         */
        triggerCloseModal = (e) => {
            e.preventDefault();
            let modal = Caretta.Helpers.findAncestor(e.target, 'modal'),
                overlay = document.getElementById('body-overlay');

            document.body.removeChild(overlay);
            modal.classList.remove('open');
        },

        /**
         * Initialize click event for modals triggering
         */
        initModals = () => {
            let modals = document.querySelectorAll('[caretta-toggle="modal"]');

            for (let i = 0; i < modals.length; i++) {
                modals[i].addEventListener('click', triggerModal);
            }
        },

        /**
         * Initialize click event for closing modals
         */
        initCloseModals = () => {
            let closeModals = document.querySelectorAll('[caretta-dismiss="modal"]');

            for (let i = 0; i < closeModals.length; i++) {
                closeModals[i].addEventListener('click', triggerCloseModal);
            }
        };

    return {
        initModals: initModals,
        initCloseModals: initCloseModals
    };
}());
