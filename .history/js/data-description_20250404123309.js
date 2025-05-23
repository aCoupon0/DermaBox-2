const descriptions = [
    {
        casoParticular: [`["G",["RA","HS"],"B","S"]`],
        descripcionIndex: `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
            <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
            <li><i class="fa-solid fa-circle-check"></i> Hidratar con ingredientes a base de agua.</li>
        </ul>`,
        descripcionesFinales: {
            descripcionInicial1: ['<p><i class="fa-solid fa-check"></i>Limpian y destapan los poros</b></p>', ' <p><i class="fa-solid fa-check"></i>Contienen ingredientes <b>hidratantes y antioxidantes</b></p>', '<p><i class="fa-solid fa-check"></i><b>Aptos para pieles sensibles</b></p>'],
            descripcionInicial2: ['<p><i class="fa-solid fa-check"></i>Hidratan sin sobrecargar y taponar los poros.</b></p>', ' <p><i class="fa-solid fa-check"></i>Contiene activos que <b>calman y reparan</b> la piel durante la noche</p>'],
            descripcionInicial3: ['<p><i class="fa-solid fa-check"></i>EJEMPLO BLOQUEADOR 1.</b></p>', ' <p><i class="fa-solid fa-check"></i>EJEMPLO BLOQUEADOR 2</p>'],
            descripcionInicial4: ['<p><i class="fa-solid fa-check"></i>EJEMPLO POTENCIADOR</b></p>']
        }
    },
    {
        casoParticular: [`["M",["RA","HS"],"B","S"]`],
        descripcionIndex: `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Equilibrar la barrera de la piel.</li>
            <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
            <li><i class="fa-solid fa-circle-check"></i> Hidratar con ingredientes a base de agua.</li>
        </ul>`,
        descripcionesFinales: {
            descripcionInicial1: ["Un limpiador hidratante", "Ideal para pieles sensibles, sin alcohol ni perfumes que puedan irritar la piel."],
            descripcionInicial2: ["Un hidratante con vitamina C", "Con antioxidantes que tratan las manchas y recuperan la barrera protector de la piel."],
            descripcionInicial3: ["", "Con ingredientes hidratantes, y un color natural y suave para disimular manchas e imperfecciones."],
            descripcionInicial4: ["", "Un serúm con extra hidratación y vitamina B5 + colágeno, para sellar la rutina."]
        }
    }
]

//Cuando Iso es true, o "S", manejamos las descripciones desde aquí, ya que si se usa Iso, son practicamente iguales, a excepción de Tono, asi que solo hay que manejar asos iso para Blancos, Medios y Morenos, es decir, 3 posibilidades, el resto van arriba
const isoDescriptions = [
    {
        //Este es el ejemplo de iso con piel morena, las descripciones iniciales son las mismas en todos lados, aqui el "M" no tiene uso alguno, lo tendrá en el archivo data.js, pero para no generar dos casoParticulares diferentes
        casoParticular: [`["ISO","M"]`],
        descripcionIndex: `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Potenciar la acción de la Isotretinoina.</li>
            <li><i class="fa-solid fa-circle-check"></i> Combatir la deshidratación.</li>
        </ul>`,
        descripcionesFinales: {
            bloqueadores: "Con color natural para disimular y ocultar manchas y cicatrices.",
            potenciador: "Serúm ultra-hidratante, con Vitamina B5 y colágeno hidrolizado.",
            descripcionInicial1: ["Un limpiador hidratante", "Ideal para pieles sensibles, sin alcohol ni perfumes que puedan irritar la piel."],
            descripcionInicial2: ["Un hidratante con vitamina C", "Con antioxidantes que tratan las manchas y recuperan la barrera protector de la piel."],
            descripcionInicial3: ["", "Con ingredientes hidratantes, y un color natural y suave para disimular manchas e imperfecciones."],
            descripcionInicial4: ["", "Un serúm con extra hidratación y vitamina B5 + colágeno, para sellar la rutina."]
        }
    }
]