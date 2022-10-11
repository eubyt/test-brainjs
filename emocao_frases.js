const brain = require("brain.js");

const trainingData = [
  {
    input: "você é um lixo",
    output: "toxic",
  },
  {
    input: "seu lixo, eu vou tirar sua vida",
    output: "toxic",
  },
  {
    input: "vai ser enforcado",
    output: "toxic",
  },
  {
    input: "seu putasso",
    output: "toxic",
  },
  {
    input: "você é horrível",
    output: "toxic",
  },
  {
    input: "seu merdinha",
    output: "toxic",
  },
  {
    input: "você é muito ruim",
    output: "toxic",
  },
  {
    input: "qual o seu problema?",
    output: "toxic",
  },
  {
    input: "odio de você",
    output: "toxic",
  },
  {
    input: "eu te odeio",
    output: "toxic",
  },
  {
    input: "eu odeio você",
    output: "toxic",
  },
  {
    input: "você é estupido",
    output: "toxic",
  },
  {
    input: "eu não gosto de vocês",
    output: "toxic",
  },
  {
    input: "morra",
    output: "toxic",
  },
  {
    input: "muito bom",
    output: "happy",
  },
  {
    input: "muito feliz",
    output: "happy",
  },
  {
    input: "gosto de você",
    output: "happy",
  },
  {
    input: "eu gosto de vocês",
    output: "happy",
  },
  {
    input: "vamos sair",
    output: "perda de tempo",
  },
  {
    input: "vamos sair hoje",
    output: "perda de tempo",
  },
  {
    input: "vamos sair",
    output: "perda de tempo",
  },
];

const net = new brain.recurrent.LSTM();

net.train(trainingData, { log: true, iterations: 3000 });

const fraseTeste = "Oi, vamos sair hoje para o cinema?";
const result = net.run(fraseTeste);

console.log(`A frase : "${fraseTeste}" eu diria que é ${result}`);
