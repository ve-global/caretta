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
                siblingSections = this.parentNode.parentNode.getElementsByClassName('accordionItem'),
                z;

            if (this.parentNode.parentNode.getElementsByClassName('open').length === 0) {
                this.parentNode.parentNode.className = 'accordionWrapper oneVisible';
            } else {
                this.parentNode.parentNode.className = 'accordionWrapper oneVisible showHeadings';
            }

            if (sectionClasses === 'accordionItem open') {
                this.parentNode.className = 'accordionItem';
            } else {
                for (z = 0; z < siblingSections.length; z++) {
                    siblingSections[z].className = 'accordionItem';
                }
                this.parentNode.className = 'accordionItem open';
            }
        },
        initAccordions = function () {
            var accordions = document.getElementsByClassName('accordionWrapper'),
                i,
                j,
                accordionSectionsHeadings;

            for (i = 0; i < accordions.length; i++) {
                accordionSectionsHeadings = accordions[i].getElementsByClassName('accordionItemHeading');

                for (j = 0; j < accordionSectionsHeadings.length; j++) {
                    accordionSectionsHeadings[j].addEventListener('click', toggleSection, false);
                }
            }
        };

    return {
        initAccordions: initAccordions
    };
}());
