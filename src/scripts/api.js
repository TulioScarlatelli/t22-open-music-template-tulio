import { darkMode } from "./theme.js";

async function fazerRequisicao() {
    try {
        const resposta = await fetch('https://openmusic-fake-api.onrender.com/api/musics');

        if (!resposta.ok) {
            throw new Error('Falha na requisição');
        }

        const dadosJson = await resposta.json();

        const arrayDeObjetos = dadosJson.usuarios || dadosJson;

        return arrayDeObjetos
    } catch (erro) {
        console.error('Erro na requisição:', erro);
        return [];
    }
}

const renderAlbumsApi = async () => {
    const albumListContainer = document.querySelector(".main__albums--list");
    const albumList = await fazerRequisicao();

    albumList.forEach((album) => {
        const albumItem = document.createElement("li");
        albumItem.classList.add("main__albums--list--items");

        albumItem.innerHTML = `
        <img class="main__albums--list--items--capa" src="${album.img}" alt="${album.title}">
        <h3 class="main__albums--list--items--title">${album.title}</h3>
        <div class="main__albums--list--items--divisao">
          <h4 class="main__albums--list--items--divisao--h4">${album.band}</h4>
          <p class="main__albums--list--items--divisao--genero">${album.genre}</p>
        </div>
        <div class="main__albums--price">
          <p class="main__albums--price--valor">R$ ${album.price}</p>
          <button class="main__albums--price--comprar">Comprar</button>
        </div>
      `;

        albumListContainer.appendChild(albumItem);
    });
    
    darkMode();
};

export { renderAlbumsApi }