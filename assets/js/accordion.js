/**
 *  VeCaretta Accordion
 *  Date: 11/10/2016
 *  Caretta Framework
 */

var Caretta = Caretta || {};

Caretta.Accordions = (function() {

    var initAccordions = function () {
        var accordions = document.getElementsByClassName('accordionWrapper');

        for (var i=0; i < accordions.length; i++) {
            var accordionSections = accordions[i].getElementsByClassName('accordionItem'),
                accordionSectionsHeadings = accordions[i].getElementsByClassName('accordionItemHeading');

            for (var j = 0; j < accordionSectionsHeadings.length; j++) {
                accordionSectionsHeadings[j].addEventListener('click', toggleSection, false);
            }
        }
    }

    var toggleSection = function () {
        var sectionClasses = this.parentNode.className,
            siblingSections = this.parentNode.parentNode.getElementsByClassName('accordionItem');

            if (this.parentNode.parentNode.getElementsByClassName('open').length === 0) {
                this.parentNode.parentNode.className = 'accordionWrapper oneVisible';
            } else {
                this.parentNode.parentNode.className = 'accordionWrapper oneVisible showHeadings';
            }

        if (sectionClasses === 'accordionItem open') {
            this.parentNode.className = 'accordionItem';
        } else {
            for (var z = 0; z < siblingSections.length; z++) {
                siblingSections[z].className = 'accordionItem';
            }
            this.parentNode.className = 'accordionItem open';
        }
    }


    return {
        initAccordions: initAccordions
    };
}());