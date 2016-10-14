var init = () => {
	Caretta.Tabs.initTabs();

	Caretta.Accordions.initAccordions();

	Caretta.Modals.InitModals();
	Caretta.Modals.InitCloseModals();

	Caretta.Dropdown.CloseDropdowns();
	Caretta.Dropdown.SetupSimpleDropdowns();

	Caretta.Customers.GetCustomers();
}

window.onload = init;
