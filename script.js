var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
let select_animais = document.getElementById("select_animais")
// Selecionar elemento 'container' ( 1 ponto)
let container = document.getElementById("container")
// Selecionar elemento 'nome' ( 1 ponto)
let nome = document.getElementById("nome")

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select_animais.addEventListener('input', listarAnimais)
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome)
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome)

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  if (select_animais.value == "dog") {
    for (let i = 1; i <= 4; i++) {
      let imagens = document.createElement("img");
      imagens.src = `img/dog${i}.jpg`;
      imagens.alt = cachorros[i - 1].nome;
      container.appendChild(imagens);
    };
  } else if (select_animais.value == "cat") {
    // Criar elementos do tipo <img src=./img/....
    // Fazer com que os elementos img sejam filhos do elemento 'container'
    for (let i = 1; i <= 4; i++) {
      let imagens = document.createElement("img");
      imagens.src = `img/cat${i}.jpg`;
      imagens.alt = gatos[i - 1].nome;
      container.appendChild(imagens);
    };
  }


}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  if (e.target.tagName == "IMG") {
    nome.innerText = e.target.alt;
  }


}

function limparNome() {
  p.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}