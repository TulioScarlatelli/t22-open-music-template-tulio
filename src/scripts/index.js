import { applyInputRangeStyle } from "./inputRange.js"
import { renderAlbums } from "./albumsDataBase.js";
import { darkMode } from "./theme.js";

function routine(){

    applyInputRangeStyle();
    renderAlbums();
    darkMode();

    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    priceRange.addEventListener('input', function() {
        priceValue.textContent = `R$ ${priceRange.value}`;
    });
}

routine();

