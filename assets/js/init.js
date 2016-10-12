var init = () => {
	Caretta.Dropdown.CloseDropdowns();
	Caretta.Dropdown.SetupSimpleDropdowns();
	Caretta.Customers.GetCustomers();
}

window.onload = init;
