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

    let baseCleanerPrice = undefined
    let baseMoisturizerPrice = undefined
    let baseSunscreenPrice = undefined

    let premiumCleanerPrice = undefined
    let premiumMoisturizerPrice = undefined
    let premiumSunscreenPrice = undefined
    let boosterPrice = undefined

    let baseRoutinePrice = undefined
    let premiumRoutinePrice = undefined
    let premiumPlusRoutinePrice = undefined

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

        baseCleanerPrice = rutinaBase[0].valor
        baseMoisturizerPrice = rutinaBase[1].valor
        baseSunscreenPrice = rutinaBase[2].valor

        premiumCleanerPrice = rutinaPremium[0].valor
        premiumMoisturizerPrice = rutinaPremium[1].valor
        premiumSunscreenPrice = rutinaPremium[2].valor
        boosterPrice = rutinaPremiumPlus[2].valor

        baseRoutinePrice = (baseCleanerPrice + baseMoisturizerPrice)
        premiumRoutinePrice = (premiumCleanerPrice + premiumMoisturizerPrice)
        premiumPlusRoutinePrice = (premiumRoutinePrice + boosterPrice)

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

        let contenedor_sunscreen_1 = document.getElementById("sunscreenBasePrice")
        let contenedor_sunscreen_2 = document.getElementById("sunscreenPremiumPrice")
        let contenedor_sunscreen_3 = document.getElementById("sunscreenPremiumPlusPrice")

        if (!contenedor_sunscreen_1 || !contenedor_sunscreen_2 || !contenedor_sunscreen_3) {
            console.log("No se ha cargado el DOM correctamente.")
        } else {
            contenedor_sunscreen_1.textContent = `+${baseSunscreenPrice.toLocaleString("es-ES")}`;
            contenedor_sunscreen_2.textContent = `+${premiumSunscreenPrice.toLocaleString("es-ES")}`;
            contenedor_sunscreen_3.textContent = `+${premiumSunscreenPrice.toLocaleString("es-ES")}`;
        }

        let contenedor_base = document.getElementById("basePrice")
        let contenedor_premium = document.getElementById("premiumPrice")
        let contenedor_premium_plus = document.getElementById("premiumPlusPrice")

        if (!contenedor_base || !contenedor_premium || !contenedor_premium_plus) {
            console.log("No se ha cargado el DOM correctamente.")
        } else {
            contenedor_base.textContent = `$${baseRoutinePrice.toLocaleString("es-ES")} COP`;
            contenedor_premium.textContent = `$${premiumRoutinePrice.toLocaleString("es-ES")} COP`;
            contenedor_premium_plus.textContent = `$${premiumPlusRoutinePrice.toLocaleString("es-ES")} COP`;
        }
    }

    // Ejecutar la función al cargar el archivo
    asignarProductos();

    function renderizarRutinas(id1, id2, rutina, sunscreenId) {
        const basePhoto = document.getElementById(id1);
        const baseNames = document.getElementById(id2);
        if (!basePhoto || !baseNames) return;

        basePhoto.innerHTML = ""; // Limpiar contenido previo
        baseNames.innerHTML = ""; // Limpiar contenido previo

        const categorias = [
            {
                general: ["LB", "LP"],
                especifica: "Limpiador"
            },
            {
                general: ["HB", "HP"],
                especifica: "Hidratante"
            },
            {
                general: ["BB", "BP"],
                especifica: "Bloqueador"
            },
            {
                general: ["P"],
                especifica: "Potenciador"
            },
        ]

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
        
                // Buscamos en "categorias" el objeto que tenga en su arreglo "general" el valor de producto.categoria
                const categoriaEncontrada = categorias.find(cat => cat.general.includes(producto.categoria));
                
                if (categoriaEncontrada) {
                    // Construimos el contenido con el "especifica" en negrilla
                    divNames.innerHTML = `<b>${categoriaEncontrada.especifica}</b> &nbsp;${producto.nombre} de ${producto.marca}`;
                } else {
                    // En caso de que no se encuentre, puedes asignar solo el nombre, o lo que necesites
                    divNames.textContent = producto.nombre;
                }
        
                baseNames.appendChild(divNames);
            }
        });
    }

    renderizarRutinas("basePhoto", "baseNames", rutinaBase, 1);
    renderizarRutinas("premiumPhoto", "premiumNames", rutinaPremium, 2);
    renderizarRutinas("premiumPlusPhoto", "premiumPlusNames", rutinaPremiumPlus, 3);

    let estructuraDescripciones = []

    function renderizarDescripciones() {
        // Primera estructura: utiliza rutinaBase[0], rutinaPremium[0] y descripciones.descripcionInicial1
        let html1 = `
    <div class="productZone">
        <div class="productColumnBase">
            <img src="assets/products/${rutinaBase[0].foto}.webp" alt="">
            <p class="productName">${rutinaBase[0].nombre}</p>
            <p class="productBrand">${rutinaBase[0].marca}</p>
            <p class="productQuantity">${rutinaBase[0].cantidad}ml</p>
            
        </div>
        <div class="productColumnPremium">
            <img src="assets/products/${rutinaPremium[0].foto}.webp" alt="">
            <p class="productName">${rutinaPremium[0].nombre}</p>
            <p class="productBrand">${rutinaPremium[0].marca}</p>
            <p class="productQuantity">${rutinaPremium[0].cantidad}ml</p>
            
        </div>
    </div>
    <div class="productDescription" id="productDescription">
        <p>PROTECCIÓN ANTIOXIDANTE</p>
        <div class="productDescriptionIcon">
            <div class="productDescriptionIcon1"><i class="fa-solid fa-check"></i></div>
            <div class="productDescriptionIcon2"><i class="fa-solid fa-check"></i></div>
        </div>

        <p>REDUCCIÓN DE ACNÉ</p>
        <div class="productDescriptionIcon">
            <div class="productDescriptionIcon1"><i class="fa-solid fa-check"></i></div>
            <div class="productDescriptionIcon2"><i class="fa-solid fa-check"></i></div>
        </div>


        <p>APTO PARA PIELES SENSIBLES</p>
        <div class="productDescriptionIcon">
            <div class="productDescriptionIcon1"><i class="fa-solid fa-check"></i></div>
            <div class="productDescriptionIcon2"><i class="fa-solid fa-check"></i></div>
        </div>


        <p>INGREDIENTES EMOLIENTES DE ALTA CALIDAD</p>
        <div class="productDescriptionIcon">
            <div class="productDescriptionIcon1"></div>
            <div class="productDescriptionIcon2"><i class="fa-solid fa-check"></i></div>
        </div>
    </div>`;
        estructuraDescripciones.push(html1);

        // Segunda estructura: utiliza rutinaBase[1], rutinaPremium[1] y descripciones.descripcionInicial2
        let html2 = `
    <div class="productZone">
        <div class="productColumnBase">
            <img src="assets/products/${rutinaBase[1].foto}.webp" alt="">
            <p class="productName">${rutinaBase[1].nombre}</p>
            <p class="productBrand">${rutinaBase[1].marca}</p>
            <p class="productQuantity">${rutinaBase[1].cantidad}ml</p>
            
        </div>
        <div class="productColumnPremium">
            <img src="assets/products/${rutinaPremium[1].foto}.webp" alt="">
            <p class="productName">${rutinaPremium[1].nombre}</p>
            <p class="productBrand">${rutinaPremium[1].marca}</p>
            <p class="productQuantity">${rutinaPremium[1].cantidad}ml</p>
            
        </div>
    </div>
    <div class="productDescription" id="productDescription">
        ${descripciones.descripcionInicial2.join('')}
    </div>`;
        estructuraDescripciones.push(html2);

        // Tercera estructura: utiliza rutinaBase[2], rutinaPremium[2] y descripciones.descripcionInicial3
        let html3 = `
    <div class="productZone">
        <div class="productColumnBase">
            <img src="assets/products/${rutinaBase[2].foto}.webp" alt="">
            <p class="productName">${rutinaBase[2].nombre}</p>
            <p class="productBrand">${rutinaBase[2].marca}</p>
            <p class="productQuantity">${rutinaBase[2].cantidad}ml</p>
            
        </div>
        <div class="productColumnPremium">
            <img src="assets/products/${rutinaPremium[2].foto}.webp" alt="">
            <p class="productName">${rutinaPremium[2].nombre}</p>
            <p class="productBrand">${rutinaPremium[2].marca}</p>
            <p class="productQuantity">${rutinaPremium[2].cantidad}ml</p>
            
        </div>
    </div>
    <div class="productDescription" id="productDescription">
        ${descripciones.descripcionInicial3.join('')}
    </div>`;
        estructuraDescripciones.push(html3);

        // Cuarta estructura:
        // En la columna base se usa una imagen "unknown.webp" y un nombre fijo
        // En la columna premium se usan datos de rutinaPremiumPlus[2] y la descripción de descripcionInicial4
        let html4 = `
    <div class="productZone">
        <div class="productColumnBase">
            <img src="assets/products/unknown.webp" alt="">
            <p class="productName">La rutina base no tiene potenciador.</p>
        </div>
        <div class="productColumnPremium">
            <img src="assets/products/${rutinaPremiumPlus[2].foto}.webp" alt="">
            <p class="productName">${rutinaPremiumPlus[2].nombre}</p>
            <p class="productBrand">${rutinaPremiumPlus[2].marca}</p>
            <p class="productQuantity">${rutinaPremiumPlus[2].cantidad}ml</p>
        </div>
    </div>
    <div class="productDescription" id="productDescription">
        ${descripciones.descripcionInicial4.join('')}
    </div>`;
        estructuraDescripciones.push(html4);

        // Muestra el arreglo resultante en consola
        console.log("Estructura Descripciones:", estructuraDescripciones);

        const container = document.getElementById('productZoneContainer');
        if (container) {
            container.innerHTML = estructuraDescripciones[0];
        } else {
            console.error("No se encontró el elemento con id 'productZoneContainer'");
        }
    }

    function setupEventosShow() {
        // Obtenemos los elementos <p> por sus IDs
        const show1 = document.getElementById('show1');
        const show2 = document.getElementById('show2');
        const show3 = document.getElementById('show3');
        const show4 = document.getElementById('show4');

        const shows = [show1, show2, show3, show4];

        // Asignamos el event listener a cada elemento
        shows.forEach((element, index) => {
            element.addEventListener('click', function () {
                // Si ya está activo, no hacemos nada
                if (this.classList.contains('active')) return;

                // Removemos la clase "active" de todos y se la asignamos al presionado
                shows.forEach(el => el.classList.remove('active'));
                this.classList.add('active');

                // Actualizamos el contenido del contenedor
                const container = document.getElementById('productZoneContainer');
                if (container && estructuraDescripciones[index]) {
                    container.innerHTML = estructuraDescripciones[index];
                }

                // Actualizamos el contenido del premiumLabel
                const premiumLabel = document.getElementById('premiumLabel');
                if (premiumLabel) {
                    premiumLabel.textContent = (index === 3) ? 'PREMIUM+' : 'PREMIUM';
                }
            });
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
            newDiv.innerHTML = `<b>Bloqueador</b>&nbsp;${rutina[rutina.length - 1].nombre} de ${rutina[rutina.length - 1].marca}`;
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
        toggleButton("addBase", "basePrice", baseRoutinePrice, baseSunscreenPrice, "isSunscreenBaseIncluded", "sunscreenImg1", "baseNames", rutinaBase);
    });

    document.getElementById("addPremium").addEventListener("click", () => {
        toggleButton("addPremium", "premiumPrice", premiumRoutinePrice, premiumSunscreenPrice, "isSunscreenPremiumIncluded", "sunscreenImg2", "premiumNames", rutinaPremiumPlus);
    });

    document.getElementById("addPremiumPlus").addEventListener("click", () => {
        toggleButton("addPremiumPlus", "premiumPlusPrice", premiumPlusRoutinePrice, premiumSunscreenPrice, "isSunscreenPremiumPlusIncluded", "sunscreenImg3", "premiumPlusNames", rutinaPremiumPlus);
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
        openModal(rutinaBase, "addBase", baseRoutinePrice, baseSunscreenPrice, document.getElementById("addBase").classList.contains("included") ? "GRATIS" : "$6.000 COP");
    });

    openButtonPremium.addEventListener("click", () => {
        openModal(rutinaPremium, "addPremium", premiumRoutinePrice, premiumSunscreenPrice, document.getElementById("addPremium").classList.contains("included") ? "GRATIS" : "$6.000 COP");
    });

    openButtonPremiumPlus.addEventListener("click", () => {
        openModal(rutinaPremiumPlus, "addPremiumPlus", premiumPlusRoutinePrice, premiumSunscreenPrice, "GRATIS");
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
    setupEventosShow();
    window.addEventListener("resize", ajustarAlturaOverlay);
});