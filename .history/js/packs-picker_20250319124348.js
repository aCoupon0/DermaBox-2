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
            cantidad: 454,
            foto: "0",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "HB",
            nombre: "Serúm de Retinol 0.5% de Vibrant Glamour",
            cantidad: 60,
            foto: "4",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "BB",
            nombre: "ISDIN Face Water +50FPS",
            cantidad: 60,
            foto: "6",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
    ]


    const rutinaPremium = [
        {
            categoria: "LP",
            nombre: "Limpiador Renewing SA de CeraVe",
            cantidad: 454,
            foto: "2",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "HP",
            nombre: "Serúm de Vitamina C Pura 10% de CeraVe",
            cantidad: 60,
            foto: "1",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "BP",
            nombre: "Eucerin Oil Control +60FPS",
            cantidad: 60,
            foto: "5",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
    ]

    const rutinaPremiumPlus = [
        {
            categoria: "LP",
            nombre: "Limpiador Renewing SA de CeraVe",
            cantidad: 454,
            foto: "2",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "HP",
            nombre: "Serúm de Vitamina C Pura 10% de CeraVe",
            cantidad: 100,
            foto: "1",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "P",
            nombre: "Tónico de Ácido Glícolico 7% de The Ordinary",
            cantidad: 60,
            foto: "3",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
        {
            categoria: "BP",
            nombre: "Eucerin Oil Control +60FPS",
            cantidad: 60,
            foto: "5",
            descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
            ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin"
        },
    ]

    const descripciones = {
        bloqueadores: "Con color natural para disimular y ocultar manchas y cicatrices.",
        potenciador: "Serúm ultra-hidratante, con Vitamina B5 y colágeno hidrolizado.",
        descripcionInicial1: ["Un limpiador hidratante", "Ideal para pieles sensibles, sin alcohol ni perfumes que puedan irritar la piel."],
        descripcionInicial2: ["Un hidratante con vitamina C", "Con antioxidantes que tratan las manchas y recuperan la barrera protector de la piel."],
        descripcionInicial3: ["", "Con ingredientes hidratantes, y un color natural y suave para disimular manchas e imperfecciones."],
        descripcionInicial4: ["", "Un serúm con extra hidratación y vitamina B5 + colágeno, para sellar la rutina."]
    }


    function renderizarRutinas(id1, id2, rutina, sunscreenId) {
        const basePhoto = document.getElementById(id1);
        const baseNames = document.getElementById(id2);
        if (!basePhoto || !baseNames) return;
        
        basePhoto.innerHTML = ""; // Limpiar contenido previo
        baseNames.innerHTML = ""; // Limpiar contenido previo
        
        const labelDiv = document.createElement("div");
        labelDiv.className = "productIncludedLabel";
        labelDiv.textContent = "Incluye:";
        baseNames.appendChild(labelDiv);
        
        rutina.forEach((producto, index) => {
            const img = document.createElement("img");
            img.src = `../assets/products/${producto.foto}.webp`;
            img.alt = producto.nombre;
            
            if (index === rutina.length - 1) {
                img.id = `sunscreenImg${sunscreenId}`;
            }
            
            basePhoto.appendChild(img);
            
            if (index !== rutina.length - 1) {
                const divNames = document.createElement("div");
                divNames.className = "productIncludedName";
                divNames.textContent = producto.nombre;
                baseNames.appendChild(divNames);
            }
        });
    }

    function renderizarDescripciones() {
        document.getElementById("description1").textContent = descripciones.descripcionInicial1[0];
        document.getElementById("description2").textContent = descripciones.descripcionInicial1[1];
        document.getElementById("description3").textContent = descripciones.descripcionInicial2[0];
        document.getElementById("description4").textContent = descripciones.descripcionInicial2[1];
        document.getElementById("description5").textContent = descripciones.descripcionInicial3[1];
        document.getElementById("description6").textContent = descripciones.descripcionInicial4[1];
    }






    renderizarRutinas("basePhoto", "baseNames", rutinaBase, 1);
    renderizarRutinas("premiumPhoto", "premiumNames", rutinaPremium, 2);
    renderizarRutinas("premiumPlusPhoto", "premiumPlusNames", rutinaPremiumPlus, 3);
    window.addEventListener("resize", ajustarAlturaOverlay);
});