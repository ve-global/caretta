/**
 *  VeCaretta SidePanels
 *  Date: 17/10/2017
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.SidePanels = (function () {

        initSidePanels = () => {
            let sidePanels = document.querySelectorAll('[caretta-toggle="sidePanel"]');
            for (let i = 0; i < sidePanels.length; i++) {
                sidePanels[i].addEventListener('click', triggerSidePanel);
            }

            let closeSidePanels = document.querySelectorAll('[caretta-dismiss="sidePanel"]');
            for (let i = 0; i < closeSidePanels.length; i++) {
                closeSidePanels[i].addEventListener('click', triggerCloseSidePanel);
            }
        },

        triggerSidePanel = (e) => {
            e.preventDefault();
            let sidePanelId = e.target.getAttribute('data-side-panel');
            let title = e.target.getAttribute('data-title');
            
            let overlay = document.createElement('DIV');
            overlay.id = 'body-overlay';
            
            let existingOverlays = document.getElementById('body-overlay');
            if (!existingOverlays) {
                document.body.appendChild(overlay);
            }
            
            let sidePanelTitle = document.getElementById('sidePanelTitle');
            sidePanelTitle.innerText = title;
            
            let sidePanel = document.getElementById(sidePanelId);
            let sidePanelWrapper = sidePanel.parentElement;
            sidePanelWrapper.classList.add('inactive');
            sidePanelWrapper.classList.remove('right-hide');
            sidePanelWrapper.style.zIndex = "101";
            sidePanel.classList.remove('right-hide');
        },

        triggerCloseSidePanel = (e) => {
            e.preventDefault();            
            let sidePanelId = e.target.getAttribute('data-side-panel');
            let sidePanel = document.getElementById(sidePanelId);
            let sidePanelWrapper = sidePanel.parentElement;
            let overlay = document.getElementById('body-overlay');

            document.body.removeChild(overlay);
            sidePanelWrapper.classList.remove('inactive');
            sidePanelWrapper.classList.add('right-hide');
            sidePanel.classList.add('right-hide');
        };

    return {
        initSidePanels: initSidePanels,
        triggerSidePanel: triggerSidePanel,
        triggerCloseSidePanel: triggerCloseSidePanel,
    };
}());
