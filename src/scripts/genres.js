export function genrensFilter(){

    document.addEventListener('DOMContentLoaded', () => {

        const genreItems = document.querySelectorAll('.main__genres--items');
        const allItems = document.querySelector('.main__genres--allItems');
        const albumItems = document.querySelectorAll('.main__albums--list--items');
      
        genreItems.forEach(item => {
            item.addEventListener('click', () => {
                const selectedGenre = item.textContent.trim().toLowerCase();
                filterAlbumsByGenre(selectedGenre);
            });
        });
      
        allItems.addEventListener('click', () => {
            filterAlbumsByGenre('todos'); 
        });
      
        function filterAlbumsByGenre(genre) {
            albumItems.forEach(album => {
                const albumGenre = album.querySelector('.main__albums--list--items--divisao--genero').textContent.toLowerCase();
      
                if (genre === 'todos' || albumGenre === genre) {
                    album.style.display = 'block'; 
                } else {
                    album.style.display = 'none'; 
                }
            });
        }
    });
}