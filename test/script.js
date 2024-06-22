
const initSlider = () =>{
    const imageList = document.querySelectorAll(".wrapper .list-carousel-scroll .carousel-list");
    const slideButton = document.querySelectorAll(".wrapper .nav-carousel .carousel-arrow");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    slideButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id ==="prev-slide" ? -1  :1  ;
            const scrollAmount= imageList.clientWidth * direction;
            imageList.scrollBy ({left: scrollAmount, behavior: "smooth"});
        });
    });
}
const handleSlideButtons = () => {
    slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButton[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
}
imageList.addEventListener("scroll", () => {
    handleSlideButtons();
});
window.addEventListener("load", initSlider);