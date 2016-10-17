/**
 *   Dropdown Functions
 *   Date: 11/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Dropdown = (function () {

    /**
     *** HELPER FUNCTION ***
     * Get the parent with specific class
     * el {object}      - child element
     * cls {string}     - parent class
     */
    let findAncestor = (el, cls) => {
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el;
        },

        /**
         * Close open dropdowns on click outside
         */
        closeDropdowns = () => {
            document.onclick = function (e) {
                if (findAncestor(e.target, 'simple-dropdown') === null) {
                    let simpleDropdowns = document.getElementsByClassName('simple-dropdown');

                    for (let i = 0; i < simpleDropdowns.length; i++) {
                        simpleDropdowns[i].classList.remove('open');
                    }
                }
            };
        },

        /**
         * Toggle dropdown parent class
         * e {object}       - event
         */
        toggleDropdown = (e) => {
            let simpleDropdowns = document.getElementsByClassName('simple-dropdown');

            for (let i = 0; i < simpleDropdowns.length; i++) {
                if (simpleDropdowns[i] !== findAncestor(e.target, 'simple-dropdown')) {
                    simpleDropdowns[i].classList.remove('open');
                }
            }

            if (e.target.parentElement.classList.contains('open')) {
                e.target.parentElement.classList.remove('open');
            } else {
                e.target.parentElement.classList.add('open');
            }
        },

        /**
         * Add click event to all dropdowns
         */
        setupSimpleDropdowns = () => {
            let dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');

            for (let i = 0; i < dropdowns.length; i++) {
                dropdowns[i].addEventListener('click', toggleDropdown);
            }
        };

    return {
        closeDropdowns: closeDropdowns,
        setupSimpleDropdowns: setupSimpleDropdowns
    };
}());
