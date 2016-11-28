/**
 *  VeCaretta Accordion
 *  Date: 11/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Accordions = (function () {

    var toggleSection = function () {
            var sectionClasses = this.parentNode.className,
                siblingSections = this.parentNode.parentNode.getElementsByClassName('caretta-accordionItem'),
                z;

            if (this.parentNode.parentNode.getElementsByClassName('open').length === 0) {
                this.parentNode.parentNode.className = 'caretta-accordionWrapper oneVisible';
            } else {
                this.parentNode.parentNode.className = 'caretta-accordionWrapper oneVisible showHeadings';
            }

            if (sectionClasses === 'caretta-accordionItem open') {
                this.parentNode.className = 'caretta-accordionItem';
            } else {
                for (z = 0; z < siblingSections.length; z++) {
                    siblingSections[z].className = 'caretta-accordionItem';
                }
                this.parentNode.className = 'caretta-accordionItem open';
            }
        },
        initAccordions = function () {
            var accordions = document.getElementsByClassName('caretta-accordionWrapper'),
                i,
                j,
                accordionSectionsHeadings;

            for (i = 0; i < accordions.length; i++) {
                accordionSectionsHeadings = accordions[i].getElementsByClassName('caretta-accordionItemHeading');

                for (j = 0; j < accordionSectionsHeadings.length; j++) {
                    accordionSectionsHeadings[j].addEventListener('click', toggleSection, false);
                }
            }
        };

    return {
        initAccordions: initAccordions
    };
}());
