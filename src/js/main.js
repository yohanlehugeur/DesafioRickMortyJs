const personagemMasc = 47; 
const personagemFem = 344;

function criarDiv(idNumber){

    fetch(`https://rickandmortyapi.com/api/character/` + idNumber,{
        method: 'GET'
    })
    .then(response => response.json())
    .then(function(data){
                    console.log(data);
                    //identifica a div que vai receber as informações
                    const container = document.querySelector('.container');
                    //Adiciona uma div com as informaçoes do personagem
                    container.innerHTML+= `
                    <div class="personagens" id=` + data.id + `>
                    <h2> Nome: ` + data.name +` </h2>
                    <div class="imagemPersonagem"> <img src=`+ data.image +`></div>
                    <p>Status do personagem: `+ data.status +`</p>
                    <p>Planeta de origem: `+ data.origin.name +`</p>
                    </div>
                    `;
                    let epNome = fetch(data.episode[0])
                    .then(response => response.json())
                    .then(function (episodio){
                        const test = document.getElementById(data.id).innerHTML+=`
                        <p> Primeiro episodio: ` + episodio.name + `</p>
                        `;
                        
                    })

    })
    
}

criarDiv(personagemMasc)
criarDiv(personagemFem)