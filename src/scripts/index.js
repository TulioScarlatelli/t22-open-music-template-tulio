import { genrensFilter } from "./genres.js";
import { applyInputRangeStyle } from "./inputRange.js"
import { renderAlbums } from "./api.js";
import { darkMode } from "./theme.js";

function routine(){

    genrensFilter();
    applyInputRangeStyle();
    renderAlbums();
    darkMode();

    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const albumList = document.querySelectorAll('.main__albums--list--items');


    priceRange.addEventListener('input', (event) => {
        const price = event.target.value;
        priceValue.textContent = `R$ ${price}`;

        filterAlbums(price);
    });

      
    function filterAlbums(priceLimit) {
        albumList.forEach((album) => {
            const albumPrice = parseFloat(album.querySelector('.main__albums--price--valor').textContent.replace('R$ ', '').replace(',', '.'));

            if (albumPrice <= priceLimit) {
                album.style.display = 'block';
            } else {
                album.style.display = 'none';
            }
        });

        filterAlbums(priceRange.value);
    }
}

routine();

