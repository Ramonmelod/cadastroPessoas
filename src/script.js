class pessoa {
  constructor(pnome, pidade) {
    this.nome = pnome;
    this.idade = pidade;
  }

  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }

  setNome(nome) {
    this.nome = nome;
  }
  setIdade(idade) {
    this.idade = idade;
  }
  infoPessoa() {
    console.log(`Informações: ${this.nome}`);
    console.log("");
    console.log(`Modelo: --------------- ${this.idade}`);
    console.log("----------------------------------");
    console.log("");
  }
}

const campoNome = document.querySelector(".nome");
const campoIdade = document.querySelector(".idade");
let arrayPessoas = [];

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const nome = campoNome.value;
    const idade = campoIdade.value;
    let p = new pessoa(nome, idade);
    arrayPessoas.push(p);
    campoNome.value = "";
    campoIdade.value = "";
    console.log(arrayPessoas);
  }
});
