/**
 *  VeCaretta Tabs
 *  Date: 17/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Tabs = (function () {

    /**
     * Toggles active tab
     * event {event}      - Click event
     */
    let toggleActiveTab = (event) => {
            let actives,
                i;

            event.preventDefault();
            actives = document.querySelectorAll('.active');

            for (i = 0; i < actives.length; i++) {
                actives[i].className = actives[i].className.replace('active', '');
            }

            event.target.parentElement.className += ' active';
            document.getElementById(event.target.href.split('#')[1]).className += ' active';

        },

        /**
         * Registers event listenter
         */
        initTabs = function () {
            var el;

            el = document.getElementById('nav-tab');
            if(el) {
                el.addEventListener('click', toggleActiveTab, false);
            }
        };

    return {
        initTabs: initTabs
    };
}());
