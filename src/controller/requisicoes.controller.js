class Requisicoes {
  static base_url = "https://demo-api-pictures.herokuapp.com/picture";

  static async pegarDados() {
    const dados = await fetch(this.base_url)
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => {
        console.log(err.message);
      });

    return dados;
  }

  static async adicionarFotos(foto) {
    await fetch(this.base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foto),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.message);
      })
      .catch((err) => console.log(err));
  }
}

export default Requisicoes;
