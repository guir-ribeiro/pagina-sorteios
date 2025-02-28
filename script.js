var add = document.querySelector("input");
var pessoas = []
var contador = 0;

function adicionarPart(){

    var nomes = add.value.split(",").map(nome => nome.trim());

    nomes.forEach((nome, index) => {
        pessoas.push(nome);

        if (index === 0 && pessoas.length === 1) {
            adicionados.innerHTML += nome;
        } else {
            adicionados.innerHTML += ", " + nome;
        }
    });

    add.value = "";

    add.focus();

}

function sortear(){
let resultado = document.getElementById("resultado");

if (pessoas.length < 2) {
    window.alert("ERRO - insira pelo menos dois elementos");
    resultado.innerHTML = " ";
} else {
    let np = pessoas.length;
    let ns = Math.floor(Math.random() * np);

    let modal = document.getElementById("modal");
    let modalContent = document.querySelector('.modal-content');

    modal.style.display = 'flex';

    // Manter o botão de fechar e só atualizar o conteúdo do sorteio
    modalContent.innerHTML = `
        <span id="closeModalBtn" class="close">&times;</span>
        <h2>Sorteado:</h2>
        <p>${pessoas[ns]}</p>
    `;

    // Adiciona a funcionalidade de fechar o modal ao "X"
    var closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    soma();

    function soma() {
        contador += 1;
    }

    console.log(`Clique de número: ${contador}, o número sorteado foi ${ns} e a pessoa foi: ${pessoas[ns]}`);
}
}



var closeModalBtn = document.getElementById("closeModalBtn");

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
