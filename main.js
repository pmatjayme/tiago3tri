function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('Non Ecziste');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador<listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
    document.querySelector('#som_tecla_pom').pause();
    document.querySelector('#som_tecla_clap').pause();
    document.querySelector('#som_tecla_tim').pause()
    document.querySelector('#som_tecla_puff').pause();
    document.querySelector('#som_tecla_splash').pause();
    document.querySelector('#som_tecla_toim').pause();
    document.querySelector('#som_tecla_psh').pause();
    document.querySelector('#som_tecla_tic').pause();
    document.querySelector('#som_tecla_t').pause();
    document.querySelector('#som_tecla_i').pause();
    document.querySelector('#som_tecla_c').pause();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;