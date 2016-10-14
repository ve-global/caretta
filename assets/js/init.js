var init = () => {
	Caretta.Dropdown.CloseDropdowns();
	Caretta.Dropdown.SetupSimpleDropdowns();
	Caretta.Customers.GetCustomers();
	Caretta.Tabs.initTabs();
	Caretta.Accordions.initAccordions();         
	Caretta.Modals.InitModals();
	Caretta.Modals.InitCloseModals();
}

window.onload = init;