var init = () => {
	Caretta.Tabs.initTabs();

	Caretta.Accordions.initAccordions();

	Caretta.Modals.InitModals();
	Caretta.Modals.InitCloseModals();

	Caretta.Dropdown.CloseDropdowns();
	Caretta.Dropdown.SetupSimpleDropdowns();
}

window.onload = init;
