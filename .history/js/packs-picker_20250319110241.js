document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector('.overlay');
    function ajustarAlturaOverlay() {
        overlay.style.height = document.body.offsetHeight + "px";
    }
    ajustarAlturaOverlay();

    const rutinaBase = [
        {
            categoria: "LB",
            nombre: "Limpiador Hidratante de CeraVe",
            foto: "0",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "HB",
            nombre: "Serúm de Retinol 0.5% de Vibrant Glamour",
            foto: "4",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
    ]


    function renderizarRutinas() {
        const basePhoto = document.getElementById("basePhoto");
        if (!basePhoto) return;
        
        basePhoto.innerHTML = ""; // Limpiar contenido previo
        
        rutinaBase.forEach(rutina => {
            const img = document.createElement("img");
            img.src = `../assets/products/${rutina.foto}.webp`;
            img.alt = rutina.nombre;
            basePhoto.appendChild(img);
        });
    }








    renderizarRutinas()
    window.addEventListener("resize", ajustarAlturaOverlay);
});