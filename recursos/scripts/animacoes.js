
// TELAS
let primeiraTela = document.getElementById("primeiraTela")
let telaInfo = document.getElementById('telaInfo')
let telaJobs = document.getElementById('telaJobs')
let telaSkills = document.getElementById('telaSkills')
let telaContact = document.getElementById('telaContact')

let telaAtiva = 0

// LIMPAR TELAS
function limparTelas() {
    telaInfo.style.display = "none"
    telaJobs.style.display = "none"
    telaSkills.style.display = "none"
    telaContact.style.display = "none"
}

function ocultarPrimeiraTela() {
    if (telaAtiva == 0) {
        if (primeiraTela.style.display == 'none') {
            primeiraTela.style.display = 'block'
            fundofake.style.display = "block"
        } else {
            primeiraTela.style.display = 'none'  
            fundofake.style.display = "none"
        }
    }else{
        primeiraTela.style.display = 'none'
        
    }
}

// FLUXO DO INFO

let foto = document.getElementById('perfil')
let semfundo = document.getElementById('semfundo')
let fundofake = document.getElementById('fundofake')

foto.style.display = "none"

function exibirTela(tela) {
    if (tela.style.display == "block") {
        tela.style.display = "none"
    } else {
        limparTelas()
        tela.style.display = "block"
    }
}

// FLUXO BOTOES
let botaoinfo = document.getElementById("botaoinfo")
let botaojobs = document.getElementById("botaojobs")
let botaoskills = document.getElementById("botaoskills")
let botaocontact = document.getElementById("botaocontact")

function limparBotoes() {
   botaoinfo.classList.remove("pressionado")
   botaojobs.classList.remove("pressionado")
   botaoskills.classList.remove("pressionado")
   botaocontact.classList.remove("pressionado")
}

function selecionarBotao(botao) {
    
    if (botao.classList.contains("pressionado")) {
        limparBotoes()
        telaAtiva = 0
    }else{
        limparBotoes()
        botao.classList.add("pressionado")
        telaAtiva = 1
        
    }
    ocultarPrimeiraTela()
}

let legendainfo = document.getElementById("legendainfo")
legendainfo.value = "Sobre mim"
let legendajobs = document.getElementById("legendajobs")
legendajobs.value = "Trabalhos"
let legendaskills = document.getElementById("legendaskills")
legendaskills.value = "Formações"
let legendacontact = document.getElementById("legendacontact")
legendacontact.value = "Contato"

function ocultarLegendas() {
    legendainfo.style.display = "none"
    legendajobs.style.display = "none"
    legendaskills.style.display = "none"
    legendacontact.style.display = "none"
}
ocultarLegendas()

function exibirLegenda(legenda) {
    if (legenda.style.display == "none") {
        ocultarLegendas()
         legenda.style.display = "block"
         legenda.innerHTML = legenda.value
    }else{
        ocultarLegendas()
    }
}

// CARROSSEL

let currentIndex = 0;

function moveCarousel(direction) {
    const cardsContainer = document.getElementById('cardsContainer');
    const totalCards = cardsContainer.children.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = Math.ceil(totalCards / 2) - 1; 
    } else if (currentIndex >= Math.ceil(totalCards / 2)) {
        currentIndex = 0; 
    }

    const offset = -currentIndex * 340; 
    cardsContainer.style.transform = `translateX(${offset}px)`;

    updateDots(); // Atualiza as bolinhas
}

function updateDots() {
    const totalCards = document.getElementById('cardsContainer').children.length;
    const dotsContainer = document.getElementById('dotsContainer');
    
    // Limpa as bolinhas existentes
    dotsContainer.innerHTML = '';

    for (let i = 0; i < Math.ceil(totalCards / 2); i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentIndex) {
            dot.classList.add('active'); // Marca o ativo
        }
        dot.onclick = () => {
            currentIndex = i; // Muda o índice ao clicar na bolinha
            moveCarousel(0); // Atualiza a posição
        };
        dotsContainer.appendChild(dot);
    }
}

// Inicializa as bolinhas ao carregar
document.addEventListener('DOMContentLoaded', updateDots);


