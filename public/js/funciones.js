const inputs = document.querySelectorAll('.boletas input');
const totalVotado = document.querySelector('#votado');
const btnVotar = document.querySelector('#btnVotar');
const mail = document.querySelector('#email');
const mail2 = document.querySelector('#email2');


//función para contar votos cada vez que cambia algún input
function sumarVotos(){
    let conteo = 0;
    for(let input of inputs) {
        conteo += parseInt(input.value);
    }
    totalVotado.innerText  = `${conteo}`;

    if(totalVotado.textContent == "100" && mail.value == mail2.value && mail.value != ""){
        btnVotar.removeAttribute('disabled');

    } else {
        btnVotar.setAttribute('disabled', 'true');
    }
}



//cargo el evento change en todos los inputs de boletas
function aplicarEvents(inputs){
    for(let input of inputs){
        input.addEventListener('change', sumarVotos);
    }
    mail.addEventListener('change', sumarVotos);
    mail.addEventListener('change', sumarVotos);
};




aplicarEvents(inputs);














