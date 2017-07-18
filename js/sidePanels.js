/**
 *  VeCaretta SidePanels
 *  Date: 17/10/2017
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.SidePanels = (function () {
    /**
    * Opens panel/ Add overlay/ Disables links
    */
    let openSidePanel = () => {
            $('#uploadFontPanelWrapper').addClass('inactive');
            $('#uploadFontPanel').removeClass('right-hide').parent().removeClass('right-hide').css('z-index', 101);
            $('.left-panel').css('z-index', 7);
            $('a').bind('click.disableNav', function () {
                return false;
            });
        },

        /**
        * Closes panel/ Remove overlay/ Re-enables links
        */
        closeSidePanel = () => {
            $('a').unbind('click.disableNav');
            $('#uploadFontPanel').addClass('right-hide').parent().addClass('right-hide');
            setTimeout(function () {
                $('#uploadFontPanel').parent().css('z-index', 1);
            }, 600);
            $('.left-panel').css('z-index', 9);
            $('#uploadFontPanelWrapper').removeClass('inactive');
        },

        /**
        * Right hand side panel init
        */
        initSidePanel = () => {
            if ($('#preContent').hasClass('invalid-form')) {
                openPanel();
            }

            $('#uploadFont').on('click', function (e) {
                e.preventDefault();
                openPanel();
                e.stopPropagation();
            });

            $('#uploadFontPanel h3 i').on('click', function () {
                closePanel();
            });
        },

        /** ------------------------------------------------------------------------------------------- */

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
        },

        initSidePanels = () => {
            let sidePanels = document.querySelectorAll('[caretta-toggle="sidePanel"]');

            for (let i = 0; i < sidePanels.length; i++) {
                sidePanels[i].addEventListener('click', triggerSidePanel);
            }
        },
        
        initCloseSidePanels = () => {
            let closeSidePanels = document.querySelectorAll('[caretta-dismiss="sidePanel"]');

            for (let i = 0; i < closeSidePanels.length; i++) {
                closeSidePanels[i].addEventListener('click', triggerCloseSidePanel);
            }
        };

    return {
        // initSidePanel: initSidePanel,
        // openSidePanel: openSidePanel,
        // closeSidePanel: closeSidePanel,
        triggerSidePanel: triggerSidePanel,
        triggerCloseSidePanel: triggerCloseSidePanel,
        initSidePanels: initSidePanels,
        initCloseSidePanels: initCloseSidePanels
    };
}());
