/**
 *  VeCaretta Sections
 *  Date: 11/10/2016
 *  Caretta Framework
 */
var Caretta = Caretta || {};

Caretta.Tabs = (function() {

    var toggleActiveTab = function (event) {
        event.preventDefault();
        var actives = document.querySelectorAll('.active');
        
        for (var i = 0; i < actives.length; i++){
          actives[i].className = actives[i].className.replace('active', '');
        }

        event.target.parentElement.className += ' active';
        document.getElementById(event.target.href.split('#')[1]).className += ' active';

    }

    var initTabs = function () {
        var el = document.getElementById('nav-tab');
        el.addEventListener('click', toggleActiveTab, false);
    }

    return {
        initTabs: initTabs
    };
}());