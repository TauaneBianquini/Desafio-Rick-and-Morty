
const nomeUm = document.querySelector('#nomeUm');
const nomeDois = document.querySelector('#nomeDois');
const nomeTres = document.querySelector('#nomeTres');
const nomeQuatro = document.querySelector('#nomeQuatro');
const imgUm = document.querySelector('#imgUm');
const imgDois = document.querySelector('#imgDois');
const imgTres = document.querySelector('#imgTres');
const imgQuatro = document.querySelector('#imgQuatro');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
  };
  
  pegarPersonagemUm = () => {
    let numeroAleatorio = gerarValorAleatorio();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,  {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    }).then((response) => response.json()).then((data) => {
        imgUm.src = data.image;
        imgUm.alt = data.name;
        nomeUm.innerHTML = data.name;

      });   
  }

  pegarPersonagemDois = () => {
    let numeroAleatorio = gerarValorAleatorio();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,  {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    }).then((response) => response.json()).then((data) => {
        imgDois.src = data.image;
        imgDois.alt = data.name;
        nomeDois.innerHTML = data.name;

      });  
  }
  
  pegarPersonagemTres = () => {
    let numeroAleatorio = gerarValorAleatorio();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,  {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    }).then((response) => response.json()).then((data) => {
        imgTres.src = data.image;
        imgTres.alt = data.name;
        nomeTres.innerHTML = data.name;

      });
      
  }
  pegarPersonagemQuatro = () => {
    let numeroAleatorio = gerarValorAleatorio();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,  {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    }).then((response) => response.json()).then((data) => {
        imgQuatro.src = data.image;
        imgQuatro.alt = data.name;
        nomeQuatro.innerHTML = data.name;

      });
      
  }

  window.onload =   pegarPersonagemUm();
                    pegarPersonagemDois();
                    pegarPersonagemTres();
                    pegarPersonagemQuatro();
