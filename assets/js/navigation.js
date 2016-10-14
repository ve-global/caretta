/**
*   Navigation Functions
*   Date: 14/10/2016
*	Caretta Framework
*/

var Caretta = Caretta || {};

Caretta.Navigation = (function () {

	/**
	* Get navigation list from api
	*/
	let GetNavigation = () => {
	    var xmlhttp = new XMLHttpRequest();

	    xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
	           	if (xmlhttp.status == 200) {
	               	UpdateNavigation(xmlhttp.response);
	           	} else {
	               	console.error('GetNavigation', xmlhttp.response);
	           	}
	        }
	    };

	    xmlhttp.open("GET", "http://localhost:8001/navigation", true);
	    xmlhttp.send();
	},

	/**
	* Populate navigation list
	* response {string} 		- navigation items object
	*/
	UpdateNavigation = (response) => {
		let navItems = JSON.parse(response),
			navItemsList = document.getElementById('navigationList');

		navItems.forEach((item, key) => {
			let li = document.createElement('LI');
				
			li.innerHTML = '<a href="' + item.link + '" target="_blank"><i class="zmdi ' + item.icon + '"></i>' + item.title + '</a>';
			navItemsList.appendChild(li);
		});

	}

	return {
		GetNavigation: GetNavigation
    };
}());