const galeria = document.getElementById("galeria");

const carousel = (direccion) => {
    const config = {
        root: document.querySelector(".galeria__carousel"),
        rootMargin: "0px",
        threshold: 0.9,
    }
    const observer = new IntersectionObserver((entradas) => {
        const slidesVisibles = entradas.filter((entrada) => {
            if(entrada.isIntersecting){
                return entrada;
            }
        });

        if(direccion === "anterior"){
            const primerSlide = slidesVisibles[0];
            const primerIndex = entradas.indexOf(primerSlide);

            if(entradas[primerIndex - 1]){
                entradas[primerIndex - 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                });
            }
        }else if(direccion === "siguiente"){
            const ultimoSlide = slidesVisibles[slidesVisibles.length -1];
            const ultimoIndex = entradas.indexOf(ultimoSlide);
            if(entradas[ultimoIndex + 1]){
                entradas[ultimoIndex + 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                });
            }
        }

        const slides = galeria.querySelectorAll(".galeria__carousel-slide");
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, config);

    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
        observer.observe(slide);
    });
};

export default carousel;
