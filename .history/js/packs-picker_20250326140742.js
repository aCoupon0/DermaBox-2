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

    function renderizarDescripciones() {
        document.getElementById("description1").textContent = descripciones.descripcionInicial1[0];
        document.getElementById("description2").textContent = descripciones.descripcionInicial1[1];
        document.getElementById("description3").textContent = descripciones.descripcionInicial2[0];
        document.getElementById("description4").textContent = descripciones.descripcionInicial2[1];
        document.getElementById("description5").textContent = descripciones.descripcionInicial3[1];
        document.getElementById("description6").textContent = descripciones.descripcionInicial4[1];

        document.getElementById("sunscreen1Img").innerHTML = `<img src="../assets/products/${rutinaBase[rutinaBase.length - 1].foto}.webp" alt="${rutinaBase[rutinaBase.length - 1].nombre}">`;
        document.getElementById("sunscreen1Name").textContent = `${rutinaBase[rutinaBase.length - 1].nombre} - ${rutinaBase[rutinaBase.length - 1].cantidad}ml`;
        document.getElementById("sunscreen1Description").textContent = descripciones.bloqueadores;

        document.getElementById("sunscreen2Img").innerHTML = `<img src="../assets/products/${rutinaPremium[rutinaPremium.length - 1].foto}.webp" alt="${rutinaPremium[rutinaPremium.length - 1].nombre}">`;
        document.getElementById("sunscreen2Name").textContent = `${rutinaPremium[rutinaPremium.length - 1].nombre} - ${rutinaPremium[rutinaPremium.length - 1].cantidad}ml`;
        document.getElementById("sunscreen2Description").textContent = descripciones.bloqueadores;

        document.getElementById("boosterImg").innerHTML = `<img src="../assets/products/${rutinaPremiumPlus[rutinaPremiumPlus.length - 2].foto}.webp" alt="${rutinaPremiumPlus[rutinaPremiumPlus.length - 2].nombre}">`;
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

    const acceptWhatsApp = document.querySelector(".modalWhatsAppAcCept");
    if (acceptWhatsApp) {
        acceptWhatsApp.addEventListener("click", enviarMensaje);
    }

    function enviarMensaje() {
        alert("HOLA")
    }
    

    renderizarRutinas("basePhoto", "baseNames", rutinaBase, 1);
    renderizarRutinas("premiumPhoto", "premiumNames", rutinaPremium, 2);
    renderizarRutinas("premiumPlusPhoto", "premiumPlusNames", rutinaPremiumPlus, 3);
    renderizarDescripciones()
    window.addEventListener("resize", ajustarAlturaOverlay);
});