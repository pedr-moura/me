let primeiraTela = document.getElementById("primeiraTela")
let telaAtiva = 0

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

function exibirInfo() {
    if (foto.style.display == "block") {
        // apertando 2 vez
        foto.style.display = "none"
    } else {
        // apertando 1 vezes
        foto.style.display = "block"
        foto.style.position = "absolute"
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