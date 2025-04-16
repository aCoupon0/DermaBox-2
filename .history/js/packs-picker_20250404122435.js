document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector('.overlay');
    function ajustarAlturaOverlay() {
        overlay.style.height = document.body.offsetHeight + "px";
    }
    ajustarAlturaOverlay();

    let isSunscreenBaseIncluded = false;
    let isSunscreenPremiumIncluded = false;
    let isSunscreenPremiumPlusIncluded = false;

    let rutinaBase = []

    let rutinaPremium = []

    let rutinaPremiumPlus = []

    let descripciones = undefined

    function asignarProductos() {
        console.log("Ejecutando asignarProductos...");

        // Recuperar productos desde localStorage
        LB = JSON.parse(localStorage.getItem("LB"));
        LP = JSON.parse(localStorage.getItem("LP"));
        HB = JSON.parse(localStorage.getItem("HB"));
        HP = JSON.parse(localStorage.getItem("HP"));
        BB = JSON.parse(localStorage.getItem("BB"));
        BP = JSON.parse(localStorage.getItem("BP"));
        P = JSON.parse(localStorage.getItem("P"));

        // Reasignar valores a las rutinas existentes
        rutinaBase = [LB, HB, BB];
        rutinaPremium = [LP, HP, BP];
        rutinaPremiumPlus = [LP, HP, P, BP];

        // Recuperar y asignar descripciones
        descripciones = JSON.parse(localStorage.getItem("descripcionGlobal"));

        // Logs para verificar
        console.log("Rutina Base:", rutinaBase);
        console.log("Rutina Premium:", rutinaPremium);
        console.log("Rutina Premium Plus:", rutinaPremiumPlus);
        console.log("Descripciones:", descripciones);

        let baseCleanerPrice = rutinaBase[0].valor
        let baseMoisturizerPrice = rutinaBase[1].valor
        let baseSunscreenPrice = rutinaBase[2].valor

        let premiumCleanerPrice = rutinaPremium[0].valor
        let premiumMoisturizerPrice = rutinaPremium[1].valor
        let premiumSunscreenPrice = rutinaPremium[2].valor
        let boosterPrice = rutinaPremiumPlus[2].valor

        let baseRoutinePrice = (baseCleanerPrice + baseMoisturizerPrice)
        let premiumRoutinePrice = (premiumCleanerPrice + premiumMoisturizerPrice)
        let premiumPlusRoutinePrice = (premiumRoutinePrice + boosterPrice)

        baseRoutinePrice = Math.ceil(baseRoutinePrice / 5000) * 5000;
        premiumRoutinePrice = Math.ceil(premiumRoutinePrice / 5000) * 5000;
        premiumPlusRoutinePrice = Math.ceil(premiumPlusRoutinePrice / 5000) * 5000;

        console.log("Precio Limpiador Base:", baseCleanerPrice)
        console.log("Precio Hidratante Base:", baseMoisturizerPrice)
        console.log("Precio Bloqueador Base:", baseSunscreenPrice)

        console.log("Precio Limpiador Premium:", premiumCleanerPrice)
        console.log("Precio Hidratante Premium:", premiumMoisturizerPrice)
        console.log("Precio Bloqueador Premium:", premiumSunscreenPrice)
        console.log("Precio Potenciador:", boosterPrice)

        console.log("Precio Rutina Base:", baseRoutinePrice)
        console.log("Precio Rutina Premium:", premiumRoutinePrice)
        console.log("Precio Rutina Premium+:", premiumPlusRoutinePrice)

    }

    // Ejecutar la función al cargar el archivo
    asignarProductos();

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

    renderizarRutinas("basePhoto", "baseNames", rutinaBase, 1);
    renderizarRutinas("premiumPhoto", "premiumNames", rutinaPremium, 2);
    renderizarRutinas("premiumPlusPhoto", "premiumPlusNames", rutinaPremiumPlus, 3);

    function renderizarDescripciones() {
        console.log("Descripciones:", descripciones)
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

    function openModal(rutina, buttonId, precioBase, precioSunscreen, envio) {
        const button = document.getElementById(buttonId);
        const isSunscreenIncluded = button.classList.contains("included");

        console.log("isSunscreenIncluded:", isSunscreenIncluded); // Verificar en consola

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
        openModal(rutinaBase, "addBase", 80000, 30000, document.getElementById("addBase").classList.contains("included") ? "GRATIS" : "$6.000 COP");
    });

    openButtonPremium.addEventListener("click", () => {
        openModal(rutinaPremium, "addPremium", 150000, 90000, "GRATIS");
    });

    openButtonPremiumPlus.addEventListener("click", () => {
        openModal(rutinaPremiumPlus, "addPremiumPlus", 250000, 90000, "GRATIS");
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });


    const overlayProductList = document.querySelector(".routineDescriptionContentOverlay");
    const overlayProductButton = document.querySelector(".routineDescriptionOverlayTxt")
    const content = document.querySelector(".routineDescriptionContent");

    if (overlayProductList && content) {
        overlayProductButton.addEventListener("click", function () {
            overlayProductList.style.display = "none"; // Ocultar el overlay
            content.classList.add("active"); // Añadir la clase active al contenedor principal
        });

        overlayProductButton.addEventListener("touchstart", function () {
            overlayProductList.style.display = "none";
            content.classList.add("active");
        });
    }

    function toggleContainer(labelId, containerId) {
        const label = document.getElementById(labelId);
        const container = document.getElementById(containerId);
        if (!label || !container) return;

        label.addEventListener("click", function () {
            // Si el contenedor está abierto, lo cerramos
            if (container.classList.contains("active")) {
                container.style.height = container.scrollHeight + "px";
                container.offsetHeight; // Forzar reflow
                container.style.height = "0px";
                container.classList.remove("active");
                label.classList.remove("active");
            } else {
                // ────────────── NUEVO: CERRAR OTROS CONTENEDORES ABIERTOS ──────────────
                const allContainers = document.querySelectorAll(".routineProductsContainer.active");
                allContainers.forEach((otherContainer) => {
                    if (otherContainer !== container) {
                        // Cerrar el contenedor activo
                        otherContainer.style.height = otherContainer.scrollHeight + "px";
                        otherContainer.offsetHeight; // Forzar reflow
                        otherContainer.style.height = "0px";
                        otherContainer.classList.remove("active");

                        // Cerrar también el label asociado
                        const otherLabel = document.querySelector(
                            '.routineProductsLabel.active[id^="' + otherContainer.id.replace("RPC", "") + '"]'
                        );
                        // Si usas un naming más directo, puedes ubicar el label de forma distinta.
                        // O bien, seleccionar cualquier label con la clase .active y removerla.
                        if (otherLabel) {
                            otherLabel.classList.remove("active");
                        } else {
                            // Como alternativa más simple:
                            const activeLabel = document.querySelector(".routineProductsLabel.active");
                            if (activeLabel) activeLabel.classList.remove("active");
                        }
                    }
                });
                // ─────────────────────────────────────────────────────────────────────────

                // Ahora abrimos el contenedor actual
                container.style.height = "auto";
                const autoHeight = container.scrollHeight;
                container.style.height = "0px";
                container.offsetHeight; // Forzar reflow
                container.classList.add("active");
                label.classList.add("active");
                container.style.height = autoHeight + "px";
            }
        });

        // Al finalizar la transición, si está abierto, dejamos la altura en "auto"
        container.addEventListener("transitionend", function () {
            if (container.classList.contains("active")) {
                container.style.height = "auto";
            }
        });
    }

    // Llamadas de ejemplo
    toggleContainer("sunscreenLabel", "RPC1");
    toggleContainer("boosterLabel", "RPC2");
    toggleContainer("tecnicalLabel", "RPC3");


    const modalWhatsApp = document.getElementById("modalWhatsApp");
    const openWhatsApp = document.getElementById("confirmationButton");
    const closeWhatsApp = document.querySelector(".modalWhatsAppClose");

    if (openWhatsApp && modalWhatsApp && closeWhatsApp) {
        openWhatsApp.addEventListener("click", function () {
            modalWhatsApp.classList.add("active");
        });

        closeWhatsApp.addEventListener("click", function () {
            modalWhatsApp.classList.remove("active");
        });
    }

    const acceptWhatsApp = document.querySelector(".modalWhatsAppAccept");
    if (acceptWhatsApp) {
        acceptWhatsApp.addEventListener("click", enviarMensaje);
    }

    function generarCodigoPedido(casoP) {
        if (!Array.isArray(casoP) || casoP.length === 0) {
            return Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
        }

        if (casoP.length === 4) {
            let codigo = "";

            if (casoP[0] === "G") codigo += "1";
            else if (casoP[0] === "M") codigo += "2";
            else if (casoP[0] === "S") codigo += "3";

            if (Array.isArray(casoP[1])) {
                if (casoP[1].includes("RA")) codigo += "6";
                if (casoP[1].includes("HS")) codigo += "7";
                if (casoP[1].includes("A")) codigo += "8";
                if (casoP[1].includes("CM")) codigo += "9";
            }

            if (casoP[2] === "M") codigo += "1";
            else if (casoP[2] === "C") codigo += "2";
            else if (casoP[2] === "B") codigo += "3";

            if (casoP[3] === "S") codigo += "5";
            else if (casoP[3] === "N") codigo += "6";

            return codigo;
        }

        if (casoP.length === 2) {
            let codigo = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
            if (casoP[1] === "M") codigo += "1";
            else if (casoP[1] === "C") codigo += "2";
            else if (casoP[1] === "B") codigo += "3";

            return codigo;
        }

        return Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    }

    function enviarMensaje() {
        const numero = "+573058376094";
        const rutinaElement = document.querySelector("#subtotal p");
        let rutina = "";
        if (rutinaElement) {
            rutina = rutinaElement.innerHTML.replace(/<b>(.*?)<\/b>/g, "$1").trim();
        }

        rutina = `*${rutina}*`;

        const productos = [];
        document.querySelectorAll(".modalProduct").forEach(product => {
            const descripcion = product.querySelector(".modalProductDescription");
            if (descripcion) {
                const pElements = descripcion.querySelectorAll("p");
                if (pElements.length >= 2) {
                    const x = `*${pElements[0].textContent.trim()}*`;
                    const y = pElements[1].textContent.trim();
                    productos.push(`- ${x} ${y}`);
                }
            }
        });

        const totalElement = document.querySelector("#total p:nth-child(2)");
        const envioElement = document.querySelector("#delivery p:nth-child(2)");
        const total = totalElement ? `*${totalElement.textContent.trim()}*` : "";
        const envio = envioElement ? `*${envioElement.textContent.trim()}*` : "";

        const casoP = JSON.parse(localStorage.getItem("casoP")) || [];
        const codigoPedido = generarCodigoPedido(casoP);

        const mensaje = `Deseo confirmar el pedido de una ${rutina} con los siguientes productos:\n${productos.join("\n")}\nPor un valor de ${total} con envío ${envio}.\nEl código del pedido es *${codigoPedido}* \n*POR FAVOR ENVÍA ESTE MENSAJE* \n`;

        window.location.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    }

    console.log("Recuperando casoP...");
    const casoP = JSON.parse(localStorage.getItem("casoP")) || [];
    console.log("casoP:", casoP);



    renderizarDescripciones()
    window.addEventListener("resize", ajustarAlturaOverlay);
});