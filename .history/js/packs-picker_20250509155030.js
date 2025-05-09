document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector('.overlay');
    function ajustarAlturaOverlay() {
        overlay.style.height = document.body.offsetHeight + "px";
    }
    ajustarAlturaOverlay();

    let rutinaBase = []

    let rutinaPremium = []

    let rutinaPremiumPlus = []

    let baseCleanerPrice = undefined
    let baseMoisturizerPrice = undefined

    let premiumCleanerPrice = undefined
    let premiumMoisturizerPrice = undefined
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
        P = JSON.parse(localStorage.getItem("P"));

        // Reasignar valores a las rutinas existentes
        rutinaBase = [LB, HB];
        rutinaPremium = [LP, HP];
        rutinaPremiumPlus = [LP, HP, P];

        // Recuperar y asignar descripciones
        descripciones = JSON.parse(localStorage.getItem("descripcionGlobal"));

        // Logs para verificar
        console.log("Rutina Base:", rutinaBase);
        console.log("Rutina Premium:", rutinaPremium);
        console.log("Rutina Premium Plus:", rutinaPremiumPlus);
        console.log("Descripciones:", descripciones);

        baseCleanerPrice = rutinaBase[0].valor
        baseMoisturizerPrice = rutinaBase[1].valor

        premiumCleanerPrice = rutinaPremium[0].valor
        premiumMoisturizerPrice = rutinaPremium[1].valor
        boosterPrice = rutinaPremiumPlus[2].valor

        baseRoutinePrice = (baseCleanerPrice + baseMoisturizerPrice)
        premiumRoutinePrice = (premiumCleanerPrice + premiumMoisturizerPrice)
        premiumPlusRoutinePrice = (premiumRoutinePrice + boosterPrice)

        baseRoutinePrice = Math.ceil(baseRoutinePrice / 5000) * 5000;
        premiumRoutinePrice = Math.ceil(premiumRoutinePrice / 5000) * 5000;
        premiumPlusRoutinePrice = Math.ceil(premiumPlusRoutinePrice / 5000) * 5000;

        console.log("Precio Limpiador Base:", baseCleanerPrice)
        console.log("Precio Hidratante Base:", baseMoisturizerPrice)

        console.log("Precio Limpiador Premium:", premiumCleanerPrice)
        console.log("Precio Hidratante Premium:", premiumMoisturizerPrice)
        console.log("Precio Potenciador:", boosterPrice)

        console.log("Precio Rutina Base:", baseRoutinePrice)
        console.log("Precio Rutina Premium:", premiumRoutinePrice)
        console.log("Precio Rutina Premium+:", premiumPlusRoutinePrice)



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
                general: ["P"],
                especifica: "Potenciador"
            },
        ]

        rutina.forEach((producto, index) => {
            const img = document.createElement("img");
            img.src = `../assets/products/${producto.foto}.webp`;
            img.alt = producto.nombre;

            basePhoto.appendChild(img);

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

        });
    }

    renderizarRutinas("basePhoto", "baseNames", rutinaBase, 1);
    renderizarRutinas("premiumPhoto", "premiumNames", rutinaPremium, 2);
    renderizarRutinas("premiumPlusPhoto", "premiumPlusNames", rutinaPremiumPlus, 3);

    let estructuraDescripciones = []

    function crearDescripcion(productoB, productoP) {
        let html = "";

        // Bloque 1: Calificación general  
        // Si el producto base (B) está definido, se muestran sus estrellas en el primer contenedor;
        // en caso contrario, el primer contenedor queda vacío. En ambos se muestran las estrellas según el tier del producto premium.
        html += `<p>Calificación general</p>
      <div class="productDescriptionIcon">
        <div class="productDescriptionIconStars">`;
        if (productoB) {
            for (let i = 0; i < productoB.tier; i++) {
                html += `<i class="fa-solid fa-star"></i>`;
            }
        }
        html += `</div>
        <div class="productDescriptionIconStars">`;
        for (let i = 0; i < productoP.tier; i++) {
            html += `<i class="fa-solid fa-star"></i>`;
        }
        html += `</div>
      </div>`;

        // Bloque 2: Ventajas simples  
        // Si productoB está definido, se recorre su propiedad "ventajas" y solo se muestran aquellas
        // que también aparecen en productoP. En caso de que productoB sea undefined, se recorren TODAS las ventajas de productoP,
        // y en el icono de la izquierda se deja vacío (sin marca).
        if (productoB) {
            productoB.ventajas.forEach(function (ventaja) {
                if (productoP.ventajas.includes(ventaja)) {
                    html += `<p>${ventaja}</p>
      <div class="productDescriptionIcon">
        <div class="productDescriptionIcon1"><i class="fa-solid fa-check"></i></div>
        <div class="productDescriptionIcon2"><i class="fa-solid fa-check"></i></div>
      </div>`;
                }
            });
        } else {
            productoP.ventajas.forEach(function (ventaja) {
                html += `<p>${ventaja}</p>
      <div class="productDescriptionIcon">
        <div class="productDescriptionIcon1"></div>
        <div class="productDescriptionIcon2"><i class="fa-solid fa-check"></i></div>
      </div>`;
            });
        }

        // Bloque 3: Ventaja adicional  
        // Se muestra el contenido de productoP.ventajaAdicional.  
        // En el caso en que productoB esté definido, el primer icono se muestra como 'xmark' con color (indicando que la base no lo posee);
        // si productoB es undefined, se deja el primer icono vacío.
        html += `<p>${productoP.ventajaAdicional}</p>
      <div class="productDescriptionIcon">
        <div class="productDescriptionIcon1">`;
        if (productoB) {
            html += `<i class="fa-solid fa-xmark" style="color: #aaaaaa;"></i>`;
        }
        html += `</div>
        <div class="productDescriptionIcon2"><i class="fa-solid fa-check"></i></div>
      </div>`;

        return html;
    }

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
    <div class="productDescription">
        ${crearDescripcion(rutinaBase[0], rutinaPremium[0])}
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
    <div class="productDescription">
        ${crearDescripcion(rutinaBase[1], rutinaPremium[1])}
    </div>`;
        estructuraDescripciones.push(html2);

        let html3 = `
    <div class="productZone">
        <div class="productColumnBase">
            <img src="assets/products/unknown.webp" alt="">
            <p class="productName">La rutina light no tiene potenciador.</p>
        </div>
        <div class="productColumnPremium">
            <img src="assets/products/${rutinaPremiumPlus[2].foto}.webp" alt="">
            <p class="productName">${rutinaPremiumPlus[2].nombre}</p>
            <p class="productBrand">${rutinaPremiumPlus[2].marca}</p>
            <p class="productQuantity">${rutinaPremiumPlus[2].cantidad}ml</p>
        </div>
    </div>
    <div class="productDescription">
        ${crearDescripcion(undefined, rutinaPremiumPlus[2])}
    </div>`;
        estructuraDescripciones.push(html3);

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

        const shows = [show1, show2, show3];

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
                    premiumLabel.textContent = (index === 2) ? 'PREMIUM+' : 'PREMIUM';
                }
            });
        });
    }

    const modal = document.getElementById("modal");
    const openButtonBase = document.getElementById("acquireBase");
    const openButtonPremium = document.getElementById("acquirePremium");
    const openButtonPremiumPlus = document.getElementById("acquirePremiumPlus");
    const closeButton = document.getElementById("closeModal");

    const modalProductsContainer = document.getElementById("modalProductsContainer");
    const subtotalContainer = document.getElementById("subtotal");
    const deliveryContainer = document.getElementById("delivery");
    const totalContainer = document.getElementById("total");

    const routineDeleted = []

    function openModal(rutina, precioBase, envio) {
        modalProductsContainer.innerHTML = "";

        rutina.forEach((producto, index) => {

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
                <div class="modalProductButton">
                    <button class="productDelete" id="${producto.foto}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
            modalProductsContainer.appendChild(productDiv);
        });

        const precioFinal = precioBase;
        const envioCosto = envio === "GRATIS" ? 0 : 9000;

        subtotalContainer.innerHTML = `
        <p>Rutina <b>${rutina === rutinaBase
                ? "Light"
                : rutina === rutinaPremium
                    ? "Premium"
                    : rutina === rutinaPremiumPlus
                        ? "PremiumPlus"
                        : "Desconocida"
            }</b></p>
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

    function updateAfterAdd(rutina, precioBase, envio) {
        modalProductsContainer.innerHTML = "";

        rutina.forEach((producto, index) => {

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
                <div class="modalProductButton">
                    <button class="productDelete" id="${producto.foto}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
            modalProductsContainer.appendChild(productDiv);
        });

        const precioFinal = precioBase;
        const envioCosto = envio === "GRATIS" ? 0 : 9000;

        subtotalContainer.innerHTML = `
        <p>Rutina <b>${rutina === rutinaBase
                ? "Light"
                : rutina === rutinaPremium
                    ? "Premium"
                    : rutina === rutinaPremiumPlus
                        ? "PremiumPlus"
                        : "Desconocida"
            }</b></p>
        `;

        deliveryContainer.innerHTML = `
            <p>Costo de envío</p>
            <p>${envio}</p>
        `;

        totalContainer.innerHTML = `
            <p>TOTAL</p>
            <p>$${(precioFinal + envioCosto).toLocaleString("es-CO")} COP</p>
        `;
    }

    openButtonBase.addEventListener("click", () => {
        openModal(rutinaBase, baseRoutinePrice, "GRATIS");
    });

    openButtonPremium.addEventListener("click", () => {
        openModal(rutinaPremium, premiumRoutinePrice, "GRATIS");
    });

    openButtonPremiumPlus.addEventListener("click", () => {
        openModal(rutinaPremiumPlus, premiumPlusRoutinePrice, "GRATIS");
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    document.addEventListener('click', handleAnyDeleteClick);

    function handleAnyDeleteClick(event) {
        // Buscamos hacia arriba un botón con la clase .productDelete
        const deleteBtn = event.target.closest('button.productDelete');
        if (!deleteBtn) return;   // si no era un click en un .productDelete, salimos

        // ¡Mostramos el id del botón pulsado!
        alert(deleteBtn.id);
    }


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