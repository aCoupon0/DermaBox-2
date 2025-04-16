
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector('.overlay');
  function ajustarAlturaOverlay() {
    overlay.style.height = document.body.offsetHeight + "px";
  }
  ajustarAlturaOverlay();



  const carruselContent = document.getElementById("carruselContent");

  // Arreglo de strings, cada uno contiene el HTML de título y descripción
  const carruselInfo = [
    `
    <div class="carruselTitle">
      <p>Encuentra tu rutina perfecta</p>
    </div>
    <div class="carruselDescription">
      <p>Responde unas preguntas sobre tu piel y crearemos una rutina que se ajuste a ti.</p>
    </div>
  `,
    `
        <div class="carruselTitle">
          <p>Productos dermatológicamente comprobados</p>
        </div>
        <div class="carruselDescription">
          <p>+300 productos coreanos y europeos originales</p>
        </div>
      `,
    `
        <div class="carruselTitle">
          <p>Apto para cualquier presupuesto</p>
        </div>
        <div class="carruselDescription">
          <p>Te presentamos 2 rutinas de diferente precio. Puedes decidir cuál prefieres.</p>
        </div>
      `,
    `
        <div class="carruselTitle">
          <p>Guía de aplicación incluida</p>
        </div>
        <div class="carruselDescription">
          <p>Incluimos en el paquete una guía de cómo y cuándo aplicar la rutina.</p>
        </div>
      `
  ];

  let currentIndex = 0;
  const steps = document.querySelectorAll(".carruselSteps .step");

  function updateSteps(activeIndex) {
    steps.forEach(step => {
      if (step.id === String(activeIndex)) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }

  function swapCarouselContent() {
    // Quitar la clase 'visible' para iniciar el fade-out
    carruselContent.classList.remove("visible");

    // Esperar 1 segundo (duración de la transición de fade-out)
    setTimeout(() => {
      // Cambiar el contenido
      carruselContent.innerHTML = carruselInfo[currentIndex];

      updateSteps(currentIndex);

      // Actualizar el índice de forma cíclica
      currentIndex = (currentIndex + 1) % carruselInfo.length;
      // Agregar la clase 'visible' para iniciar el fade-in
      carruselContent.classList.add("visible");
    }, 1000);
  }

  // Inicializar con el primer contenido y mostrarlo (fade-in)
  carruselContent.innerHTML = carruselInfo[currentIndex];
  carruselContent.classList.add("visible");
  updateSteps(currentIndex);
  currentIndex++;

  // Ejecutar el swap cada 5 segundos (ajusta el intervalo si lo deseas)
  setInterval(swapCarouselContent, 5000);

  const quizOpener = document.getElementById("quizOpener")
  const quizOpener2 = document.getElementById("quizOpener2")
  const quizCloser = document.querySelector(".quizCloser")
  const quizModal = document.getElementById("quizModal")
  quizOpener.addEventListener("click", openModal);
  quizOpener2.addEventListener("click", openModal);
  quizCloser.addEventListener("click", closeModal)

  let currentOptionIndex = 0;
  const quizContent = document.getElementById("quizContent");

  function openModal() {
    quizContent.innerHTML = quizOptions[currentOptionIndex];
    quizModal.classList.add("active");
  }

  function closeModal() {
    if (currentOptionIndex === 0) {
      // Si estamos en la primera pregunta, simplemente cierra el modal
      quizModal.classList.remove("active");
    } else {
      // Si estamos en la última pregunta, restablece el texto del botón a "Siguiente"
      if (currentOptionIndex === quizOptions.length - 1) {
        nextButton.textContent = "Siguiente";
      }

      // Aplica la transición para retroceder
      quizContent.classList.add("not-visible");

      setTimeout(function () {
        // Retrocede en el índice y actualiza el contenido con el estado guardado
        currentOptionIndex--;
        quizContent.innerHTML = quizOptions[currentOptionIndex];

        // Quita la clase para que aparezca (fade in)
        quizContent.classList.remove("not-visible");
        updateProgress()
      }, 200);
    }

  }


  let quizOptions = [
    //PREGUNTA 1
    `
      <div class="quizLabel">¿Cuál es tu tipo de piel?</div>
      <div class="quizOption" id="Op1">
        <p class="optionTitle">Grasa</p>
        <p class="optionDescription">Brillante y aceitosa, con poros visibles. Propensa a acné y espinillas.</p>
      </div>

      <div class="quizOption" id="Op2">
        <p class="optionTitle">Mixta</p>
        <p class="optionDescription">Grasa en algunos lugares, seca en otros.</p>
      </div>

      <div class="quizOption" id="Op3">
        <p class="optionTitle">Seca</p>
        <p class="optionDescription">Tiene poca grasa y es áspera al tacto. Suele irritarse y resecarse con facilidad.</p>
      </div>
      `,



    //PREGUNTA 2
    `
      <div class="quizLabel">¿Qué objetivos te gustaría alcanzar?</div>
      <div class="quizOption" id="Op4">
        <p class="optionTitle">+ Reducir Acné</p>
      </div>

      <div class="quizOption" id="Op5">
        <p class="optionTitle">+ Hidratar y Sanar</p>
      </div>

      <div class="quizOption" id="Op6">
        <p class="optionTitle">+ Antienvejecimiento</p>
      </div>
            
      <div class="quizOption" id="Op7">
        <p class="optionTitle">+ Tratar Cicatrices y/o Manchas</p>
      </div>
      `,


    //PREGUNTA 3
    `
      <div class="quizLabel">¿Cuál es tu tono de piel?</div>
      <div class="quizOption tono" id="Op8">
        <p class="optionTitle">Moreno</p>
        <div class="moreno"></div>
      </div>

      <div class="quizOption tono" id="Op9">
        <p class="optionTitle">Medio / Canela</p>
        <div class="canela"></div>
      </div>

      <div class="quizOption tono" id="Op10">
        <p class="optionTitle">Blanco</p>
        <div class="blanco"></div>
      </div>
      `,


    //PREGUNTA 4
    `
    <div class="quizLabel">¿Tienes la piel sensible?</div>
    <div class="quizOption" id="Op12">
      <p class="optionTitle">Si</p>
      <p class="optionDescription">Se irrita y se quema fácilmente.</p>
    </div>

    <div class="quizOption" id="Op11">
      <p class="optionTitle">No</p>
      <p class="optionDescription">Es raro que se irrite y se enrojezca</p>
    </div>

    
      `,


    //PREGUNTA 5
    `
    <div class="quizLabel">¿Estás tomando Isotretinoina / Roacutan actualmente?</div>
    <div class="quizOption" id="Op13">
      <p class="optionTitle">Si</p>
    </div>

    <div class="quizOption" id="Op14">
      <p class="optionTitle">No</p>
    </div>
      `,


    `
    `,
  ];

  let tipoPiel = "";
  let objetivos = []
  let tonoDePiel = ""
  let sensibilidad = ""
  let iso = ""

  quizContent.addEventListener("click", function (e) {
    let target = e.target;
    // Recorremos hacia arriba la cadena de padres hasta encontrar un elemento con la clase quizOption
    while (target && target !== quizContent) {
      if (target.classList && target.classList.contains("quizOption")) {
        // Grupo 1: Tipo de piel (Op1, Op2, Op3) - Selección única
        if (target.id === "Op1" || target.id === "Op2" || target.id === "Op3") {
          const optionsGrupo1 = quizContent.querySelectorAll("#Op1, #Op2, #Op3");
          optionsGrupo1.forEach(function (option) {
            option.classList.remove("active");
          });
          target.classList.add("active");
          if (target.id === "Op1") {
            tipoPiel = "G";
          } else if (target.id === "Op2") {
            tipoPiel = "M";
          } else if (target.id === "Op3") {
            tipoPiel = "S";
          }
          console.log("tipoPiel:", tipoPiel);

          // Grupo 2: Objetivos (Op4, Op5, Op6, Op7) - Permite selección múltiple
        } else if (target.id === "Op4" || target.id === "Op5" || target.id === "Op6" || target.id === "Op7") {
          let optionValue;
          switch (target.id) {
            case "Op4":
              optionValue = "RA";
              break;
            case "Op5":
              optionValue = "HS";
              break;
            case "Op6":
              optionValue = "A";
              break;
            case "Op7":
              optionValue = "CM";
              break;
          }
          // Obtenemos el párrafo hijo para actualizar el texto
          const pTitle = target.querySelector(".optionTitle");

          // Si ya está activo, se quita; si no, se añade.
          if (target.classList.contains("active")) {
            target.classList.remove("active");
            objetivos = objetivos.filter(item => item !== optionValue);
            // Al deseleccionar, restablecemos el prefijo a "+ "
            if (pTitle.textContent.startsWith("- ")) {
              pTitle.textContent = "+ " + pTitle.textContent.slice(2);
            }
          } else {
            target.classList.add("active");
            objetivos.push(optionValue);
            // Al seleccionar, cambiamos el prefijo a "- "
            if (pTitle.textContent.startsWith("+ ")) {
              pTitle.textContent = "- " + pTitle.textContent.slice(2);
            } else {
              // En caso de que no tenga el prefijo por alguna razón, lo añadimos
              pTitle.textContent = "- " + pTitle.textContent;
            }
          }
          console.log("Objetivos:", objetivos);

          // Grupo 3: Tono de piel (Op8, Op9, Op10) - Selección única
        } else if (target.id === "Op8" || target.id === "Op9" || target.id === "Op10") {
          const toneOptions = quizContent.querySelectorAll("#Op8, #Op9, #Op10");
          toneOptions.forEach(function (option) {
            option.classList.remove("active");
          });
          target.classList.add("active");
          if (target.id === "Op8") {
            tonoDePiel = "M";
          } else if (target.id === "Op9") {
            tonoDePiel = "C";
          } else if (target.id === "Op10") {
            tonoDePiel = "B";
          }
          console.log("tonoDePiel:", tonoDePiel);

          // Grupo 4: Sensibilidad (Op11, Op12) - Selección única
        } else if (target.id === "Op11" || target.id === "Op12") {
          const sensOptions = quizContent.querySelectorAll("#Op11, #Op12");
          sensOptions.forEach(function (option) {
            option.classList.remove("active");
          });
          target.classList.add("active");
          if (target.id === "Op11") {
            sensibilidad = "N";
          } else if (target.id === "Op12") {
            sensibilidad = "S";
          }
          console.log("sensibilidad:", sensibilidad);

          // Grupo 5: Iso (Op13, Op14) - Selección única
        } else if (target.id === "Op13" || target.id === "Op14") {
          const isoOptions = quizContent.querySelectorAll("#Op13, #Op14");
          isoOptions.forEach(function (option) {
            option.classList.remove("active");
          });
          target.classList.add("active");
          if (target.id === "Op13") {
            iso = "S";
          } else if (target.id === "Op14") {
            iso = "N";
          }
          console.log("iso:", iso);
        }
        break; // Una vez procesada la opción, salimos del while
      }
      target = target.parentElement;
    }
  });

  const nextButton = document.getElementById("nextButton")
  nextButton.addEventListener("click", function () {
    // Validaciones según el currentOptionIndex
    if (currentOptionIndex === 0) {
      if (tipoPiel === "") {
        alert("Por favor selecciona una opción para tu tipo de piel.");
        return; // Detiene el avance
      }
    } else if (currentOptionIndex === 1) {
      if (objetivos.length === 0) {
        alert("Por favor selecciona al menos una opción para tus objetivos.");
        return;
      }
    } else if (currentOptionIndex === 2) {
      if (tonoDePiel === "") {
        alert("Por favor selecciona una opción para tu tono de piel.");
        return;
      }
    } else if (currentOptionIndex === 3) {
      if (sensibilidad === "") {
        alert("Por favor selecciona una opción para la sensibilidad.");
        return;
      }
    } else if (currentOptionIndex === 4) {
      if (iso === "") {
        alert("Por favor selecciona una opción para isotretinoina.");
        return;
      }
    }

    // Si no es la última pregunta, actualizamos el contenido actual en quizOptions
    if (currentOptionIndex < quizOptions.length - 1) {
      // Verifica si estamos en la penúltima posición
      if (currentOptionIndex === quizOptions.length - 2) {
        // Cambia el contenido del botón a un icono de cargando
        nextButton.innerHTML = `<div class="spinner"></div>`;
        // Espera 2 segundos para mostrar el icono de carga
        setTimeout(function () {
          quizOptions[quizOptions.length - 1] = generarResumen();
          // Inicia la animación de fade out
          quizContent.classList.add("not-visible");

          // Espera 200ms a que se complete el fade out
          setTimeout(function () {
            // Guarda el estado actual en quizOptions (para regresar luego, si es necesario)
            quizOptions[currentOptionIndex] = quizContent.innerHTML;

            // Incrementa el índice y actualiza el contenido
            currentOptionIndex++;
            quizContent.innerHTML = quizOptions[currentOptionIndex];

            // Quita la clase not-visible para hacer el fade in
            quizContent.classList.remove("not-visible");

            // Cambia el contenido del botón a "Crear rutina"
            nextButton.textContent = "Crear rutina";

            // Actualiza la barra de progreso
            updateProgress();
          }, 200);
        }, 2000);
      } else {
        // Para las demás posiciones, procede normalmente
        quizContent.classList.add("not-visible");

        setTimeout(function () {
          quizOptions[currentOptionIndex] = quizContent.innerHTML;
          currentOptionIndex++;
          quizContent.innerHTML = quizOptions[currentOptionIndex];
          quizContent.classList.remove("not-visible");

          // Actualiza la barra de progreso
          updateProgress();
        }, 200);
      }
    } else {
      // Si es la última pregunta, finaliza el quiz
      encontrarProductos();

      // Console log con nombre y categoría de los objetos en localStorage
      const keys = ["LB", "LP", "HB", "HP", "BB", "BP", "P"];
      const resumen = keys.map(key => {
        const item = JSON.parse(localStorage.getItem(key));
        return item ? { categoria: item.categoria, nombre: item.nombre } : null;
      }).filter(Boolean);

      console.log(JSON.stringify(resumen, null, 2));
    }
  });

  const quizProgressBar = document.querySelector('.progressBar');

  function updateProgress() {
    // Total de etapas: 6 (5 preguntas + 1 final)
    const totalSteps = quizOptions.length; // 6 en este caso
    // Calcula el progreso en porcentaje
    const progress = ((currentOptionIndex + 1) / totalSteps) * 100;
    quizProgressBar.style.setProperty('--progress-width', progress + '%');

    // Actualiza el texto dentro del <p> de la progressBar
    const progressText = quizProgressBar.querySelector('p');
    if (currentOptionIndex < totalSteps - 1) {
      // Muestra "Pregunta X de 5" para los índices 0 a 4
      progressText.textContent = `Pregunta ${currentOptionIndex + 1} de ${totalSteps - 1}`;
    } else {
      // En la etapa final (índice 5)
      progressText.textContent = "Quiz terminado";
    }

    // Si estamos en la etapa final, desvanecemos la barra completa
    if (currentOptionIndex === totalSteps - 1) {
      quizProgressBar.style.opacity = "0";
    } else {
      quizProgressBar.style.opacity = "1";
    }
  }

  let casoParticular;
  function generarResumen() {
    let pielTexto = "";
    if (tipoPiel === "G") {
      pielTexto = "Grasa";
    } else if (tipoPiel === "M") {
      pielTexto = "Mixta";
    } else if (tipoPiel === "S") {
      pielTexto = "Seca";
    }

    // Determinar el texto para tono de piel
    let tonoTexto = "";
    if (tonoDePiel === "M") {
      tonoTexto = "Moreno";
    } else if (tonoDePiel === "C") {
      tonoTexto = "Medio / Canela";
    } else if (tonoDePiel === "B") {
      tonoTexto = "Blanco";
    }

    // Determinar el texto para sensibilidad
    let sensibilidadTexto = "";
    if (sensibilidad === "S") {
      sensibilidadTexto = "Alta";
    } else if (sensibilidad === "N") {
      sensibilidadTexto = "Baja";
    }

    // Variables para el bloque de ISO, casoParticular y la descripción a usar en modalExplication
    let isoContainerHTML = "";
    let modalExpHtml = "";

    if (iso === "S") {
      // Si iso es "S", el casoParticular es solo ["ISO", tonoDePiel]
      casoParticular = ["ISO", tonoDePiel];
      localStorage.setItem("casoP", JSON.stringify(casoParticular));
      isoContainerHTML = `
        <div class="quizChoosing" id="isoContainer">
          <p class="choosingLabel">Isotretinoina</p>
          <p class="answer" id="iso">Si</p>
        </div>
      `;

      // Convertir el casoParticular a string para la comparación
      const casoStr = JSON.stringify(casoParticular);
      // Buscar en isoDescriptions
      if (typeof isoDescriptions !== "undefined") {
        const matchingIsoDesc = isoDescriptions.find(desc => desc.casoParticular.includes(casoStr));
        if (matchingIsoDesc) {
          modalExpHtml = matchingIsoDesc.descripcionIndex;
        }
      }
    } else {
      // Si iso es "N", ordenamos los objetivos y formamos el casoParticular completo
      const orden = ["RA", "HS", "A", "CM"];
      const objetivosOrdenados = orden.filter(cod => objetivos.includes(cod));
      casoParticular = [tipoPiel, objetivosOrdenados, sensibilidad];
      localStorage.setItem("casoP", JSON.stringify(casoParticular));

      const casoStr = JSON.stringify(casoParticular).replace(/\s/g, "");
      if (typeof descriptions !== "undefined") {

        const matchingDesc = descriptions.find(desc => {
          if (Array.isArray(desc.casoParticular)) {
            // Si casoParticular es un array, verificamos si incluye casoStr
            return desc.casoParticular.includes(casoStr);
          } else if (typeof desc.casoParticular === "string") {
            // Si casoParticular es un string, lo comparamos directamente
            return desc.casoParticular.replace(/\s/g, "") === casoStr;
          }
          return false;
        });
        if (matchingDesc) {
          modalExpHtml = matchingDesc.descripcionIndex;
        }
      }
    }

    // Si no se encontró coincidencia, usar un contenido por defecto
    if (!modalExpHtml) {
      modalExpHtml = `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Caso no encontrado.</li>
        </ul>
      `;
    }

    // Construir la lista de objetivos (aplica solo si iso es "N")
    const objetivosHTML = (function () {
      let html = "";
      const orden = ["RA", "HS", "A", "CM"];
      const objetivosOrdenados = orden.filter(cod => objetivos.includes(cod));
      objetivosOrdenados.forEach(cod => {
        if (cod === "RA") html += `<li>Reducir Acné</li>`;
        else if (cod === "HS") html += `<li>Hidratar y Sanar</li>`;
        else if (cod === "A") html += `<li>Antienvejecimiento</li>`;
        else if (cod === "CM") html += `<li>Tratar Manchas y/o Cicatrices</li>`;
      });
      return html;
    })();

    // Armar el HTML final del resumen
    let resumenHTML = `
    <div class="modalExplicationTitle">
    <p class="choosingLabel">Tus respuestas</p>
    <i class="fa-solid fa-circle-down"></i>
  </div>
      
      <div class="quizChoosing" id="skinTypeContainer">
        <p class="choosingLabel">Piel</p>
        <p class="answer" id="skinType">${pielTexto}</p>
      </div>
      
      <div class="quizChoosing" id="skinToneContainer">
        <p class="choosingLabel">Tono</p>
        <p class="answer" id="skinTone">${tonoTexto}</p>
      </div>
      
      <div class="quizChoosing" id="skinSensibilityContainer">
        <p class="choosingLabel">Sensibilidad</p>
        <p class="answer" id="skinSensibility">${sensibilidadTexto}</p>
      </div>
      
      ${isoContainerHTML}
      
      <div class="quizChoosing" id="skinGoalsContainer">
        <div class="goalsContainer1">
          <p class="choosingLabel">Objetivos</p>
        </div>
        <div class="goalsContainer2">
          <ul>
            ${objetivosHTML}
          </ul>
        </div>
      </div>
      
      <div class="modalExplicationTitle">
        <p class="choosingLabel">Pensaremos en</p>
        <i class="fa-solid fa-circle-down"></i>
      </div>
      
      <div class="modalExplication">
        ${modalExpHtml}
      </div>
    `;
    return resumenHTML;
  }

  function encontrarProductos() {
    const casoStr = JSON.stringify(casoParticular).replace(/\s/g, ""); // Convertir casoParticular a string sin espacios
    console.log("Caso Particular String:", casoStr);

    const todasLasClaves = ["LB", "LP", "HB", "HP", "BB", "BP", "P", "descripcionGlobal"];
    todasLasClaves.forEach(key => localStorage.removeItem(key));

    const categorias = [
      { array: limpiadoresBase, key: "LB" },
      { array: limpiadoresPremium, key: "LP" },
      { array: hidratantesBase, key: "HB" },
      { array: hidratantesPremium, key: "HP" },
      { array: bloqueadoresBase, key: "BB" },
      { array: bloqueadoresPremium, key: "BP" },
      { array: potenciadores, key: "P" }
    ];

    categorias.forEach(({ array, key }) => {
      const producto = array.find(item => {
        return item.configuraciones.some(config => {
          const configStr = config.replace(/\s/g, ""); // Eliminar espacios de la configuración
          return configStr === casoStr;
        });
      });

      if (producto) {
        console.log(`Producto encontrado en ${key}:`, producto.nombre);
        const { configuraciones, ...productoSinConfig } = producto;
        localStorage.setItem(key, JSON.stringify(productoSinConfig));
      } else {
        console.log(`No encontrado en ${key}`);
      }
    });

    console.log("Verificando descriptions e isoDescriptions...");
    console.log("descriptions:", descriptions);
    console.log("isoDescriptions:", isoDescriptions);

    console.log("Buscando descripción para:", casoStr);

    const fuente = iso === "N" ? descriptions : isoDescriptions; // Seleccionar la fuente correcta
    console.log("Fuente seleccionada:", iso === "N" ? "descriptions" : "isoDescriptions");

    const descripcionEncontrada = fuente.find(desc => {
      return desc.casoParticular.some(config => {
        const configStr = config.replace(/\s/g, "");
        return configStr === casoStr;
      });
    });

    if (descripcionEncontrada) {
      console.log("Descripción encontrada:", descripcionEncontrada);
      localStorage.setItem("descripcionGlobal", JSON.stringify(descripcionEncontrada.descripcionesFinales));
    } else {
      console.log("No se encontró una descripción para el caso particular.");
    }

    // Mostrar en consola los valores finales en localStorage
    console.log("LB:", localStorage.getItem("LB"));
    console.log("LP:", localStorage.getItem("LP"));
    console.log("HB:", localStorage.getItem("HB"));
    console.log("HP:", localStorage.getItem("HP"));
    console.log("BB:", localStorage.getItem("BB"));
    console.log("BP:", localStorage.getItem("BP"));
    console.log("P:", localStorage.getItem("P"));
    console.log("descripcionGlobal:", localStorage.getItem("descripcionGlobal"));

    const todoExiste = todasLasClaves.every(key => {
      const item = localStorage.getItem(key);
      return item !== null && item !== "null" && item !== "undefined" && item !== "";
    });

    if (todoExiste) {
      console.log("Todos los elementos están en localStorage. Mostrando spinner...");
      nextButton.innerHTML = `<div class="spinner"></div><p>Creando rutina...</p>`;

      setTimeout(() => {
        console.log("Redirigiendo a packs-picker.html...");
        window.location.href = "packs-picker.html";
      }, 3500);
    } else {
      console.log("Faltan elementos en localStorage. No se realiza la redirección.");
    }
  }



  window.addEventListener("resize", ajustarAlturaOverlay);
});
