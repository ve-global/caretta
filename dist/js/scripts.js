/**
 *  VeCaretta Helper Functions
 *  Date: 17/10/2016
 *  Caretta Framework
 */
'use strict';
/* eslint no-cond-assign: 1 */

var Caretta;

Caretta = Caretta || {};

Caretta.Helpers = function () {

    /**
    * Get the parent with specific class
    * el {object}       - child element
    * cls {string}      - parent class
    */
    var findAncestor = function findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {}

        return el;
    };

    return {
        findAncestor: findAncestor
    };
}();
; /**
  *  VeCaretta Accordion
  *  Date: 11/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Accordions = function () {

    var toggleSection = function toggleSection() {
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
        initAccordions = function initAccordions() {
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
}();
; /**
  *  VeCaretta Modals
  *  Date: 13/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Modals = function () {

    /**
     * Open modal
     * e {object}       - event
     */
    var triggerModal = function triggerModal(e) {
        e.preventDefault();
        var modalId = e.target.getAttribute('data-modal'),
            overlay = document.createElement('DIV');

        overlay.id = 'body-overlay';
        document.body.appendChild(overlay);
        document.getElementById(modalId).classList.add('open');
    },


    /**
     * Close current modal
     * e {object}       - event
     */
    triggerCloseModal = function triggerCloseModal(e) {
        e.preventDefault();
        var modal = Caretta.Helpers.findAncestor(e.target, 'modal'),
            overlay = document.getElementById('body-overlay');

        document.body.removeChild(overlay);
        modal.classList.remove('open');
    },


    /**
     * Initialize click event for modals triggering
     */
    initModals = function initModals() {
        var modals = document.querySelectorAll('[data-toggle="modal"]');

        for (var i = 0; i < modals.length; i++) {
            modals[i].addEventListener('click', triggerModal);
        }
    },


    /**
     * Initialize click event for closing modals
     */
    initCloseModals = function initCloseModals() {
        var closeModals = document.querySelectorAll('[data-dismiss="modal"]');

        for (var i = 0; i < closeModals.length; i++) {
            closeModals[i].addEventListener('click', triggerCloseModal);
        }
    };

    return {
        initModals: initModals,
        initCloseModals: initCloseModals
    };
}();
; /**
  *   Navigation Functions
  *   Date: 14/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Navigation = function () {

    /**
     * Toggle submenu parent class
     * e {object}       - event
     */
    var toggleSubmenu = function toggleSubmenu(e) {
        if (e.target.parentElement.classList.contains('open')) {
            e.target.parentElement.classList.remove('open');
        } else {
            e.target.parentElement.classList.add('open');
        }
    },


    /**
     * Add click event to all submenus
     */
    setupSubmenus = function setupSubmenus() {
        var submenus = document.getElementsByClassName('trigger-submenu');

        for (var i = 0; i < submenus.length; i++) {
            submenus[i].addEventListener('click', toggleSubmenu);
        }
    },


    /**
     * Populate navigation list
     * response {string}        - navigation items object
     */
    updateNavigation = function updateNavigation(response) {
        var navItems = JSON.parse(response),
            navItemsList = document.getElementById('navigationList');

        navItems.forEach(function (item) {
            var li = document.createElement('LI'),
                subItems = item.subItems;

            if (subItems) {
                (function () {
                    var subUl = document.createElement('UL');

                    subUl.classList.add('sub-menu');
                    subItems.forEach(function (item) {
                        var subLi = document.createElement('LI');

                        subLi.innerHTML = '<a href="' + item.link + '"><i class="zmdi ' + item.icon + '"></i>' + item.title + '</a>';
                        subUl.appendChild(subLi);
                    });
                    li.innerHTML = '<a href="#" class="trigger-submenu"><i class="zmdi ' + item.icon + '"></i>' + item.title + '</a>';
                    li.classList.add('has-submenu');
                    li.appendChild(subUl);
                })();
            } else {
                li.innerHTML = '<a href="' + item.link + '"><i class="zmdi ' + item.icon + '"></i>' + item.title + '</a>';
            }

            navItemsList.appendChild(li);
        });

        setupSubmenus();
    },


    /**
     * Get navigation list from api
     */
    getNavigation = function getNavigation() {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                if (xmlhttp.status === 200) {
                    updateNavigation(xmlhttp.response);
                } else {
                    console.error('getNavigation', xmlhttp.response);
                }
            }
        };

        xmlhttp.open('GET', 'http://localhost:8001/navigation', true);
        xmlhttp.send();
    };

    return {
        getNavigation: getNavigation
    };
}();
; /**
  *  VeCaretta Tabs
  *  Date: 17/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Tabs = function () {

    /**
     * Toggles active tab
     * event {event}      - Click event
     */
    var toggleActiveTab = function toggleActiveTab(event) {
        var actives = void 0,
            i = void 0;

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
    initTabs = function initTabs() {
        var el;

        el = document.getElementById('nav-tab');
        el.addEventListener('click', toggleActiveTab, false);
    };

    return {
        initTabs: initTabs
    };
}();
; /**
  *   Forms Functions
  *   Date: 18/10/2016
  *   Caretta Framework
  */
'use strict';

/* global Picker, Pikaday */

var Caretta;

Caretta = Caretta || {};

Caretta.Forms = function () {

    /**
     * Colorpicker initialization
     */
    var initColorPicker = function initColorPicker() {
        var colorpickers = document.querySelectorAll('[data-toggle="colorpicker"]');

        var _loop = function _loop(i) {
            var picker = new Picker({ parent: colorpickers[i], orientation: 'top' });

            colorpickers[i].onclick = function () {
                picker.show();
            };

            picker.on_done = function (colour) {
                var val = colour.rgba().toString(),
                    input = document.createElement('INPUT'),
                    colorpickerId = colorpickers[i].getAttribute('data-colorpickerId');

                input.type = 'text';
                input.className = 'colorpicker-input';
                input.value = val;
                if (colorpickerId !== null) {
                    input.id = colorpickerId;
                }

                colorpickers[i].style.background = val;
                colorpickers[i].innerHTML = val;
                colorpickers[i].appendChild(input);
            };
        };

        for (var i = 0; i < colorpickers.length; i++) {
            _loop(i);
        }
    },
        initDatePicker = function initDatePicker() {
        var datepickers = document.querySelectorAll('[data-toggle="datepicker"]');

        for (var i = 0; i < datepickers.length; i++) {
            var _picker = new Pikaday({ field: datepickers[i] });

            _picker.getDate();
        }
    };

    return {
        initColorPicker: initColorPicker,
        initDatePicker: initDatePicker
    };
}();
; /**
  *   Attaches event listeners
  *   Date: 17/10/2016
  *	Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Init = function () {
    Caretta.Tabs.initTabs();
    Caretta.Accordions.initAccordions();
    Caretta.Modals.initModals();
    Caretta.Modals.initCloseModals();
    Caretta.Dropdown.closeDropdowns();
    Caretta.Dropdown.setupSimpleDropdowns();
    Caretta.Navigation.getNavigation();
    Caretta.Forms.initColorPicker();
    Caretta.Forms.initDatePicker();
};

window.onload = Caretta.Init;
