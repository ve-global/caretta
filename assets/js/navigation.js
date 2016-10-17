/**
 *   Navigation Functions
 *   Date: 14/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Navigation = (function () {

    /**
     * Toggle submenu parent class
     * e {object}       - event
     */
    let toggleSubmenu = (e) => {
            if (e.target.parentElement.classList.contains('open')) {
                e.target.parentElement.classList.remove('open');
            } else {
                e.target.parentElement.classList.add('open');
            }
        },

        /**
         * Add click event to all submenus
         */
        setupSubmenus = () => {
            let submenus = document.getElementsByClassName('trigger-submenu');

            for (let i = 0; i < submenus.length; i++) {
                submenus[i].addEventListener('click', toggleSubmenu);
            }
        },

        /**
         * Populate navigation list
         * response {string}        - navigation items object
         */
        updateNavigation = (response) => {
            let navItems = JSON.parse(response),
                navItemsList = document.getElementById('navigationList');

            navItems.forEach((item) => {
                let li = document.createElement('LI'),
                    subItems = item.subItems;

                if (subItems) {
                    let subUl = document.createElement('UL');

                    subUl.classList.add('sub-menu');
                    subItems.forEach((item) => {
                        let subLi = document.createElement('LI');

                        subLi.innerHTML = '<a href="' + item.link + '"><i class="zmdi ' + item.icon + '"></i>' + item.title + '</a>';
                        subUl.appendChild(subLi);
                    });
                    li.innerHTML = '<a href="#" class="trigger-submenu"><i class="zmdi ' + item.icon + '"></i>' + item.title + '</a>';
                    li.classList.add('has-submenu');
                    li.appendChild(subUl);
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
        getNavigation = () => {
            let xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = () => {
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
}());
