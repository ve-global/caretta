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
    Caretta.Alerts.initCloseAlerts();
    Caretta.Alerts.initDynamicCloseAlerts();
    Caretta.Modals.initModals();
    Caretta.Modals.initCloseModals();
    Caretta.Modals.setupDynamicAddedModals();
    Caretta.Modals.setupDynamicAddedCloseModals();
    Caretta.SidePanels.initSidePanels();
    Caretta.SidePanels.initCloseSidePanels();
    Caretta.Dropdown.closeDropdowns();
    Caretta.Dropdown.setupSimpleDropdowns();
    Caretta.Dropdown.setupDynamicAddedSimpleDropdowns();
    Caretta.Forms.initColorPicker();
    Caretta.Forms.initDatePicker();
};

window.onload = Caretta.Init;
