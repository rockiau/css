// PLAYER ROCK KIAU - KEXP RADIO

const RADIO_URL = 'https://kexp.streamguys1.com/kexp160.aac';

if(!window.rockKiauRadio){

    window.rockKiauRadio = new Audio(RADIO_URL);

    window.rockKiauRadio.preload = 'auto';
    window.rockKiauRadio.volume = 0.8;
    window.rockKiauRadio.crossOrigin = 'anonymous';

}

const radio = window.rockKiauRadio;
const btn = document.getElementById('rk-toggle');

btn.addEventListener('click', async () => {

    if(radio.paused){

        try{
            await radio.play();
            btn.innerHTML = '❚❚';
            btn.setAttribute('aria-label', 'Pausar rádio');
        }catch(error){
            console.log('O navegador bloqueou a reprodução automática:', error);
        }

    }else{

        radio.pause();
        btn.innerHTML = '▶';
        btn.setAttribute('aria-label', 'Tocar rádio');

    }

});
