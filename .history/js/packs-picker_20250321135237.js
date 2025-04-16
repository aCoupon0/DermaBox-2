document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector('.overlay');
    function ajustarAlturaOverlay() {
        overlay.style.height = document.body.offsetHeight + "px";
    }
    ajustarAlturaOverlay();

    let isSunscreenBaseIncluded = false;
    let isSunscreenPremiumIncluded = false;
    let isSunscreenPremiumPlusIncluded = false;

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

        document.getElementById("sunscreen1Name").textContent = `${rutinaBase[rutinaBase.length - 1].nombre} - ${rutinaBase[rutinaBase.length - 1].cantidad}ml`;
        document.getElementById("sunscreen1Description").textContent = descripciones.bloqueadores;

        document.getElementById("sunscreen2Name").textContent = `${rutinaPremium[rutinaPremium.length - 1].nombre} - ${rutinaPremium[rutinaPremium.length - 1].cantidad}ml`;
        document.getElementById("sunscreen2Description").textContent = descripciones.bloqueadores;

        document.getElementById("boosterName").textContent = `${rutinaPremiumPlus[rutinaPremiumPlus.length - 2].nombre} - ${rutinaPremiumPlus[rutinaPremiumPlus.length - 2].cantidad}ml`;
        document.getElementById("boosterDescription").textContent = descripciones.potenciador;

        const fichasBase = ["FTB1", "FTB2", "FTB3"];
        const fichasPremium = ["FTP1", "FTP2", "FTP3", "FTP4"];

        fichasBase.forEach((id, index) => {
            document.querySelector(`#${id} .fichaTecnicaTwo p`).textContent = rutinaBase[index].nombre;
            document.querySelector(`#${id} .fichaTecnicaThree p`).textContent = rutinaBase[index].descripcionClinica;
            document.querySelector(`#${id} .fichaTecnicaFour p`).textContent = rutinaBase[index].ingredientes;
        });

        fichasPremium.forEach((id, index) => {
            document.querySelector(`#${id} .fichaTecnicaTwo p`).textContent = rutinaPremiumPlus[index].nombre;
            document.querySelector(`#${id} .fichaTecnicaThree p`).textContent = rutinaPremiumPlus[index].descripcionClinica;
            document.querySelector(`#${id} .fichaTecnicaFour p`).textContent = rutinaPremiumPlus[index].ingredientes;
        });
    }

    function toggleButton(buttonId, priceId, priceBase, extraCost, isIncludedVariable, imgId, nameContainerId, rutina) {
        const button = document.getElementById(buttonId);
        const priceDiv = document.getElementById(priceId);
        const image = document.getElementById(imgId);
        const nameContainer = document.getElementById(nameContainerId);
        let firstP = button.querySelector("p:first-child");
        let secondP = button.querySelectorAll("p")[1];

        if (!button.classList.contains("included")) {
            button.classList.add("included");
            secondP.remove();
            window[isIncludedVariable] = true;
            priceDiv.textContent = `$${(priceBase + extraCost).toLocaleString()} COP`;
            firstP.textContent = "BLOQUEADOR INCLUIDO";
            image.classList.add("included");

            const newDiv = document.createElement("div");
            newDiv.classList.add("productIncludedName");
            newDiv.textContent = rutina[rutina.length - 1].nombre;
            nameContainer.appendChild(newDiv);
        } else {
            button.classList.remove("included");
            let newP = document.createElement("p");
            newP.textContent = `+${extraCost.toLocaleString()}`;
            button.appendChild(newP);
            window[isIncludedVariable] = false;
            priceDiv.textContent = `$${priceBase.toLocaleString()} COP`;
            firstP.textContent = "INCLUIR BLOQUEADOR";
            image.classList.remove("included");

            if (nameContainer.lastChild) {
                nameContainer.removeChild(nameContainer.lastChild);
            }
        }
        console.log(window[isIncludedVariable])
    }

    document.getElementById("addBase").addEventListener("click", () => {
        toggleButton("addBase", "basePrice", 80000, 30000, "isSunscreenBaseIncluded", "sunscreenImg1", "baseNames", rutinaBase);
    });

    document.getElementById("addPremium").addEventListener("click", () => {
        toggleButton("addPremium", "premiumPrice", 150000, 90000, "isSunscreenPremiumIncluded", "sunscreenImg2", "premiumNames", rutinaPremiumPlus);
    });

    document.getElementById("addPremiumPlus").addEventListener("click", () => {
        toggleButton("addPremiumPlus", "premiumPlusPrice", 250000, 90000, "isSunscreenPremiumPlusIncluded", "sunscreenImg3", "premiumPlusNames", rutinaPremiumPlus);
    });


    const modal = document.getElementById("modal");
    const openButtonBase = document.getElementById("acquireBase");
    const openButtonPremium = document.getElementById("acquirePremium");
    const openButtonPremiumPlus = document.getElementById("acquirePremiumPlus");
    const closeButton = document.getElementById("closeModal");

    const modalProductsContainer = document.getElementById("modalProductsContainer");
    const subtotalContainer = document.getElementById("subtotal");
    const deliveryContainer = document.getElementById("delivery");
    const totalContainer = document.getElementById("total");

    function openModal(rutina, isSunscreenIncluded, precioBase, precioSunscreen, envio) {
        modalProductsContainer.innerHTML = "";
    
        rutina.forEach((producto, index) => {
            // Si el protector solar NO está incluido y es el último producto, lo omitimos
            if (!isSunscreenIncluded && index === rutina.length - 1) return;
    
            const productDiv = document.createElement("div");
            productDiv.classList.add("modalProduct");
            productDiv.innerHTML = `
                <div class="modalProductPhoto">
                    <img src="assets/products/${producto.foto}.webp" alt="">
                </div>
                <div class="modalProductDescription">
                    <p>${producto.nombre}</p>
                    <p>${producto.cantidad}ml x 1</p>
                </div>
            `;
            modalProductsContainer.appendChild(productDiv);
        });
    
        const precioFinal = isSunscreenIncluded ? precioBase + precioSunscreen : precioBase;
        const envioCosto = envio === "GRATIS" ? 0 : 6000;
    
        subtotalContainer.innerHTML = `
            <p>Rutina <b>${precioBase === 80000 ? "Base" : precioBase === 150000 ? "Premium" : "Premium+"}</b></p>
            <p>$${precioFinal.toLocaleString("es-CO")} COP</p>
        `;
    
        deliveryContainer.innerHTML = `
            <p>Costo de envío</p>
            <p>${envio}</p>
        `;
    
        totalContainer.innerHTML = `
            <p>TOTAL</p>
            <p>$${(precioFinal + envioCosto).toLocaleString("es-CO")} COP</p>
        `;
    
        modal.classList.add("visible");
    }
    
    openButtonBase.addEventListener("click", () => {
        openModal(rutinaBase, isSunscreenBaseIncluded, 80000, 30000, isSunscreenBaseIncluded ? "GRATIS" : "$6.000 COP");
    });
    
    openButtonPremium.addEventListener("click", () => {
        openModal(rutinaPremium, isSunscreenPremiumIncluded, 150000, 90000, "GRATIS");
    });
    
    openButtonPremiumPlus.addEventListener("click", () => {
        openModal(rutinaPremiumPlus, isSunscreenPremiumPlusIncluded, 250000, 90000, "GRATIS");
    });
    
    closeButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });



    renderizarRutinas("basePhoto", "baseNames", rutinaBase, 1);
    renderizarRutinas("premiumPhoto", "premiumNames", rutinaPremium, 2);
    renderizarRutinas("premiumPlusPhoto", "premiumPlusNames", rutinaPremiumPlus, 3);
    renderizarDescripciones()
    window.addEventListener("resize", ajustarAlturaOverlay);
});