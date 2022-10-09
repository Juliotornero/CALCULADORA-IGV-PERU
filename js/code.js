
const input_subtotal = document.querySelector('.subtotal');
const input_igv = document.querySelector('.igv');
const input_total = document.querySelector('.total');

input_total.addEventListener('keyup', ()=>{
    input_subtotal.value = input_total.value/1.10;
    input_igv.value = parseFloat(input_total.value) - parseFloat(input_subtotal.value);
});

input_subtotal.addEventListener('keyup', ()=>{
    input_igv.value = input_subtotal.value*0.10;
    input_total.value = parseFloat(input_subtotal.value) + parseFloat(input_igv.value);
});
