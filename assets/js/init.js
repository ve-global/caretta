var init = function () {
	console.log('loaded');
	Caretta.Tabs.initTabs();
	
	Caretta.Modals.InitModals();
	Caretta.Modals.InitCloseModals();
}

window.onload = init;