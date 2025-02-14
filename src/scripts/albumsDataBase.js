const albumList = [
  {
    title: "Acabou o Chorare",
    genre: "MPB",
    band: "Novos Baianos",
    price: "137.91",
    img: "./src/assets/imgs/cover-1.jpg",
  },
  {
    title: "The Wall",
    genre: "Rock",
    band: "Pink Floyd",
    price: "123.56",
    img: "./src/assets/imgs/cover-2.jpg",
  },
  {
    title: "To Pimp a Butterfly",
    genre: "Rap",
    band: "Kendrick Lamar",
    price: "102.66",
    img: "./src/assets/imgs/cover-3.jpg",
  },
  {
    title: "Thriller",
    genre: "Pop",
    band: "Michael Jackson",
    price: "142.32",
    img: "./src/assets/imgs/cover-4.jpg",
  },
  {
    title: "All Eyez on Me",
    genre: "Hip-Hop",
    band: "2Pac",
    price: "50.13",
    img: "./src/assets/imgs/cover-5.jpg",
  },
  {
    title: "Dom de Sambar",
    genre: "Samba",
    band: "Turma do Pagode",
    price: "51.67",
    img: "./src/assets/imgs/cover-6.jpg",
  },
];

const renderAlbums = () => {
    const albumListContainer = document.getElementById("albumListContainer");
  
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
  };
  
  // Chama a função para renderizar os álbuns
  renderAlbums();