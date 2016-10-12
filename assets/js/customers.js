/**
*   Customers Functions
*   Date: 11/10/2016
*	Caretta Framework
*/

var Caretta = Caretta || {};

Caretta.Customers = (function () {

	/**
	* Get customers from api
	*/
	let GetCustomers = () => {
	    var xmlhttp = new XMLHttpRequest();

	    xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
	           	if (xmlhttp.status == 200) {
	               	UpdateCustomerDropdown(xmlhttp.response);
	           	} else {
	               	console.error('GetCustomers', xmlhttp.response);
	           	}
	        }
	    };

	    xmlhttp.open("GET", "http://localhost:8000/customers", true);
	    xmlhttp.send();
	},

	/**
	* Populate customers dropdown
	* response {string} 		- customers object
	*/
	UpdateCustomerDropdown = (response) => {
		let customers = JSON.parse(response),
			customersList = document.getElementById('customersList');

		customers.forEach((item, key) => {
			let li = document.createElement('LI');
				
			li.innerHTML = '<a href="http://localhost:8000/customers/' + item.id + '" target="_blank">' + item.name + '</a>';
			customersList.appendChild(li);
		});

	}

	return {
		GetCustomers: GetCustomers
    };
}());
