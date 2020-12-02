import IMask from 'imask';

var items = document.querySelectorAll('.input_mask_phone');
Array.prototype.forEach.call(items, function(element) {
    new IMask(element, {
        mask: '+{7} (000) 000-00-00',
        placeholder: {
            show: 'always'
        }
    });
});