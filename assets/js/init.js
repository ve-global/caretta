/**
 *   Attaches event listeners
 *   Date: 17/10/2016
 *	Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Init = () => {
    Caretta.Tabs.initTabs();
    Caretta.Accordions.initAccordions();
    Caretta.Modals.initModals();
    Caretta.Modals.initCloseModals();
    Caretta.Dropdown.closeDropdowns();
    Caretta.Dropdown.setupSimpleDropdowns();
    Caretta.Navigation.getNavigation();
    Caretta.Helpers.equalHeights('equal-heights');
};

window.onload = Caretta.Init;
