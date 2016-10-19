/**
 *   Forms Functions
 *   Date: 18/10/2016
 *   Caretta Framework
 */
'use strict';

/* global Picker, Pikaday */

var Caretta;

Caretta = Caretta || {};

Caretta.Forms = (function () {

    /**
     * Colorpicker initialization
     */
    let initColorPicker = () => {
            let colorpickers = document.querySelectorAll('[data-toggle="colorpicker"]');

            for (let i = 0; i < colorpickers.length; i++) {
                let picker = new Picker({ parent: colorpickers[i], orientation: 'top' });

                colorpickers[i].onclick = () => {
                    picker.show();
                };

                picker.on_done = (colour) => {
                    let val = colour.rgba().toString(),
                        input = document.createElement('INPUT'),
                        colorpickerId = colorpickers[i].getAttribute('data-colorpickerId');

                    input.type = 'text';
                    input.className = 'colorpicker-input';
                    input.value = val;
                    if (colorpickerId !== null) {
                        input.id = colorpickerId;
                    }

                    colorpickers[i].style.background = val;
                    colorpickers[i].innerHTML = val;
                    colorpickers[i].appendChild(input);
                };
            }
        },

        initDatePicker = () => {
            let datepickers = document.querySelectorAll('[data-toggle="datepicker"]');

            for (let i = 0; i < datepickers.length; i++) {
                let picker = new Pikaday({ field: datepickers[i] });

                picker.getDate();
            }
        };

    return {
        initColorPicker: initColorPicker,
        initDatePicker: initDatePicker
    };
}());
