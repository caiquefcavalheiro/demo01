import Foto from "../models/item.js";
import Requisicoes from "./requisicoes.controller.js";

class HomePageController {
  static async listarFotos() {
    const pictures = document.querySelector(".pictures");
    pictures.innerHTML = "";

    const picturesDataBase = await Requisicoes.pegarDados();

    const ul = document.createElement("ul");
    picturesDataBase.forEach((foto) => {
      const novaFoto = new Foto(foto.titulo, foto.imagem, foto.descricao);

      const cardFoto = novaFoto.cardFoto();

      ul.append(cardFoto);
    });

    pictures.append(ul);
  }

  static async formulario() {
    const formulario = document.querySelector(".form");

    const form = document.createElement("form");
    form.addEventListener("submit", async (event) => {
      const foto = {};

      event.preventDefault();

      [...event.target].forEach((element) => {
        if (element.value !== "") {
          foto[element.name] = element.value;
        }
      });

      await Requisicoes.adicionarFotos(foto);
      await this.listarFotos();
    });

    const tituloFormulario = document.createElement("h3");
    tituloFormulario.innerText = "Adicionar uma nova foto";

    const inputTitulo = document.createElement("input");
    inputTitulo.name = "titulo";
    inputTitulo.placeholder = "Titulo";

    const inputImagem = document.createElement("input");
    inputImagem.name = "imagem";
    inputImagem.placeholder = "Url da imagem";

    const descricao = document.createElement("textarea");
    descricao.name = "descricao";
    descricao.placeholder = "Descricao";

    const button = document.createElement("button");
    button.innerText = "Adicionar imagem";
    button.type = "submit";

    form.append(tituloFormulario, inputTitulo, inputImagem, descricao, button);

    formulario.append(form);
  }
}

export default HomePageController;
