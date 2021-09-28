const images = document.querySelectorAll('.galeria .image-container');
const modalImage = document.getElementById('modal-image');

images.forEach((image) =>{
    image.addEventListener('click', () =>{
        const rute = image.querySelector('img').src;
        modalImage.src = rute
    })
})