/* função para ativar o modo de scroll na tela ao clicar no botão criado via HTML e estilizado no Css */
function subirTela (){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function upbutton() {
    if(window.scrollY === 0) {
        //ocultar botão
        document.querySelector('.scroll').style.display='none'
    }else{
        //aparecer botão
        document.querySelector('.scroll').style.display='block';
    }
}

// Aqui eu coloquei um evento para monitorar o movimento do scroll na tela. Essa é a forma mais eficaz de se realizar esse tipo de dinâmica na página. Pois evita que a página fique processando dados com o setInterval(upbutton, 1000) que é outra maneira menos eficaz de realizar esse processo. 
window.addEventListener('scroll', upbutton);