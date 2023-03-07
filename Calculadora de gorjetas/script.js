var btn = document.querySelector('#btnclc');
var rr = document.querySelector('#result')
btn.addEventListener('click', somar);

function somar() {
    var vlr = document.querySelector('#vlrc');
    var vlr = parseFloat(vlr.value)
    if (!vlr || vlr < 0) {
        alert('digite um número maior que 0')
    } else {
        var gorj = vlr / 100 * 10;
        var vlt = gorj + vlr;
        console.log(vlt.toFixed(2))
        console.log(vlr)
        rr.innerHTML = `<h6>
        ------------------------------------------<br>
        Valor Gasto:         R$${vlr.toFixed(2)}  <br>
        ------------------------------------------<br>
        Gorjeta sujerida:    R$${gorj.toFixed(2)} <br>
        ------------------------------------------<br>
        Valor Total:         R$${vlt.toFixed(2)}  <br>
        ------------------------------------------<h6>`

    }
    
}