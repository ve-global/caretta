/**
 *  VeCaretta Helper Functions
 *  Date: 17/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Helpers = (function() {
    /**
     * Toggles active tab
     * event {event}      - Click event
     */
    let equalHeights = (className) => {
        let findClass = document.getElementsByClassName(className),
        tallest = 0,
        el,
        eleHeight;

        for (let i = 0; i < findClass.length; i++) {
            el = findClass[i];
            eleHeight = el.offsetHeight;
            tallest = (eleHeight > tallest ? eleHeight : tallest); /* look up ternary operator if you dont know what this is */
        }
        for (let i = 0; i < findClass.length; i++) {
            findClass[i].style.height = tallest + "px";
        }
    };

    return {
        equalHeights: equalHeights
    };
}());
