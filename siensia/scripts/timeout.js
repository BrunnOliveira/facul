function mostraHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function(){ //isso é chamado de função anônima
    clearInterval(timer);
}, 5000); //faz o timer ser parado após 5 segundos

setTimeout(function(){
    console.log('zapkkkkkk')
}, 10000)