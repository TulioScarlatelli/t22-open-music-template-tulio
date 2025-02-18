export function darkMode() {

    document.addEventListener('DOMContentLoaded', function(){
            
        const icon = document.querySelector(".header__button--icon")
        const button = document.querySelector(".header__button");
        const body = document.querySelector(".body");
        const header = document.querySelector(".header");
        const headerTitle = document.querySelector(".header__title");
        const headerButton = document.querySelector(".header__button");
        const mainGenresTitle = document.querySelector(".main__genres--title");
        const mainGenresAll = document.querySelector(".main__genres--allItems");
        const mainGenresItems = document.querySelectorAll(".main__genres--items");
        const mainPrice = document.querySelector(".main__price--divisao");
        const mainAlbums = document.querySelector(".main__albums--divisao--title");
        const mainAlbumsList = document.querySelectorAll(".main__albums--list--items");
        const mainAlbumsItems = document.querySelector(".main__albums--list--items--title");
        const mainAlbumsDiv = document.querySelectorAll(".main__albums--list--items--divisao");
        const mainAlbumsPrice = document.querySelectorAll(".main__albums--price--valor");

        button.addEventListener('click', function(){

            body.classList.toggle("body--dark-mode");
            header.classList.toggle("header--dark-mode");
            headerTitle.classList.toggle("header__title--dark-mode");
            headerButton.classList.toggle("header__button--dark-mode");
            mainGenresTitle.classList.toggle("main__genres--title--dark-mode");
            mainGenresAll.classList.toggle("main__genres--allItems--dark-mode")
            mainGenresItems.forEach(item => {
                item.classList.toggle("main__genres--items--dark-mode")
            });
            mainPrice.classList.toggle("main__price--divisao--dark-mode");
            mainAlbums.classList.toggle("main__albums--divisao--title--dark-mode");
            mainAlbumsList.forEach(item => {
                item.classList.toggle("main__albums--list--items--dark-mode")
            });
            mainAlbumsItems.classList.toggle("main__albums--list--items--title--dark-mode");
            mainAlbumsDiv.forEach(item => {
                item.classList.toggle("main__albums--list--items--divisao--dark-mode");
            });
            mainAlbumsPrice.forEach(item => {
                item.classList.toggle("main__albums--price--valor--dark-mode")
            })

            if (body.classList.contains("body--dark-mode")) {
                icon.src= "/src/assets/icons/sun-icon.svg" 
                icon.alt = "dark mode"
            } else {
                icon.src= "/src/assets/icons/moon-icon.svg" 
                icon.alt = "light mode"
            }

        })
    })
}
