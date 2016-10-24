/**
 *  VeCaretta Alerts
 *  Date: 13/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Alerts = (function () {
    /**
     * Create alert
     * text {string}       - content of the alert
     * type {string}       - type of the alert (success, info, error, warning)
     */
    let popupAlert = (text, type) => {
            let alert = document.createElement('DIV'),
                closeBtn = document.createElement('BUTTON'),
                closeIcon = document.createElement("SPAN");

            closeIcon.setAttribute('aria-hidden', 'true');
            closeIcon.appendChild(document.createTextNode('x'));
            closeBtn.appendChild(closeIcon);
            closeBtn.setAttribute('type', 'button');
            closeBtn.setAttribute('data-dismiss', 'alert');
            closeBtn.setAttribute('aria-label', 'Close');
            closeBtn.className = 'close';
            closeBtn.addEventListener('click', triggerCloseAlert);
            alert.appendChild(document.createTextNode(text));
            alert.appendChild(closeBtn);
            alert.className = 'alert alert-' + type + ' alert-dismissible';
            alert.setAttribute('role', 'alert');
            document.body.appendChild(alert);
        },

        /**
         * Close target alert
         * e {object}       - event
         */
        triggerCloseAlert = (e) => {
            e.preventDefault();
            let alert = Caretta.Helpers.findAncestor(e.target, 'alert');

            alert.parentNode.removeChild(alert);
        },
        
        /**
         * Initialize click event for already existing alerts
         */
        initCloseAlerts = () => {
            let closeAlerts = document.querySelectorAll('[data-dismiss="alert"]');

            for (let i = 0; i < closeAlerts.length; i++) {
                closeAlerts[i].addEventListener('click', triggerCloseAlert);
            }
        };

    return {
        popupAlert: popupAlert,
        initCloseAlerts: initCloseAlerts
    };
}());
