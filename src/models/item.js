class Foto {
  constructor(titulo, imagem, descricao) {
    this.titulo = titulo;
    this.imagem = imagem;
    this.descricao = descricao;
  }

  cardFoto() {
    const pictures = document.querySelector(".pictures");

    const li = document.createElement("li");
    li.classList.add("cardFoto");

    const titulo = document.createElement("h3");
    const imagem = document.createElement("img");
    const descricao = document.createElement("p");

    titulo.innerText = this.titulo;
    imagem.src = this.imagem;
    descricao.innerText = this.descricao;

    li.append(titulo, imagem, descricao);

    return li;
  }
}

export default Foto;
