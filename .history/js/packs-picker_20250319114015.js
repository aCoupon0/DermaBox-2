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


    const rutinaPremium = [
        {
            categoria: "LP",
            nombre: "Limpiador Renewing SA de CeraVe",
            foto: "2",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "HP",
            nombre: "Serúm de Vitamina C Pura 10% de CeraVe",
            foto: "1",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
    ]

    const rutinaPremiumPlus = [
        {
            categoria: "LP",
            nombre: "Limpiador Renewing SA de CeraVe",
            foto: "2",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "HP",
            nombre: "Serúm de Vitamina C Pura 10% de CeraVe",
            foto: "1",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "P",
            nombre: "Tónico de Ácido Glícolico 7% de The Ordinary",
            foto: "3",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
    ]


    function renderizarRutinas(id1, id2, rutina) {
        const basePhoto = document.getElementById(id1);
        const baseNames = document.getElementById(id2);
        if (!basePhoto || !baseNames) return;
        
        basePhoto.innerHTML = ""; // Limpiar contenido previo
        baseNames.innerHTML = ""; // Limpiar contenido previo
        
        const labelDiv = document.createElement("div");
        labelDiv.className = "productIncludedLabel";
        labelDiv.textContent = "Incluye:";
        baseNames.appendChild(labelDiv);
        
        rutina.forEach(rutina => {
            const img = document.createElement("img");
            img.src = `../assets/products/${rutina.foto}.webp`;
            img.alt = rutina.nombre;
            basePhoto.appendChild(img);
            
            const divName = document.createElement("div");
            divName.className = "productIncludedName";
            divName.textContent = rutina.nombre;
            baseNames.appendChild(divName);
        });
    }








    renderizarRutinas("basePhoto", "baseNames", rutinaBase);
    renderizarRutinas("premiumPhoto", "premiumNames", rutinaPremium);
    renderizarRutinas("premiumPlusPhoto", "premiumPlusNames", rutinaPremiumPlus);
    window.addEventListener("resize", ajustarAlturaOverlay);
});