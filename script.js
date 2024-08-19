const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");

const perguntas = [
    {
        enunciado: "Você costuma ouvir música todos os dias?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "Não ouve música todos os dias. "
            },
            {
                texto: "Sim é maravilhoso!",
                afirmacao: "Ouve música todos os dias."
            }
        ]
    },
    {
        enunciado: "Você tem um gosto musical, eclético?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Gosta apenas de tipos específicos de música. "
            },
            {
                texto: "Sim",
                afirmacao: "Ouve vários tipos de música."
            }
        ]
    },
    {
        enunciado: "funk é música?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "É uma poluição sonora. "
            },
            {
                texto: "Sim!",
                afirmacao: "Gosta de funk."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }
    
    function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    
    mostraPergunta();
