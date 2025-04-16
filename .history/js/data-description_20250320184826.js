const descriptions = [
    {
        casoParticular: [`["G",["RA", "HS"],"B","S"]`],
        descripcionIndex: `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
            <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
            <li><i class="fa-solid fa-circle-check"></i> Hidratar con ingredientes a base de agua.</li>
        </ul>`
    },
    {
        casoParticular: `["M", ["RA", "HS"], "B", "S"]`,
        descripcionIndex: `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Equilibrar la barrera de la piel.</li>
            <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
            <li><i class="fa-solid fa-circle-check"></i> Hidratar con ingredientes a base de agua.</li>
        </ul>`
    }
]

//Cuando Iso es true, o "S", manejamos las descripciones desde aquí, ya que si se usa Iso, son practicamente iguales, a excepción de Tono, asi que solo hay que manejar asos iso para Blancos, Medios y Morenos, es decir, 3 posibilidades, el resto van arriba
const isoDescriptions = [
    {
        //Este es el ejemplo de iso con piel morena, las descripciones iniciales son las mismas en todos lados, aqui el "M" no tiene uso alguno, lo tendrá en el archivo data.js, pero para no generar dos casoParticulares diferentes
        casoParticular: ["ISO", "M"],
        descripcionIndex: `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Potenciar la acción del medicamento.</li>
            <li><i class="fa-solid fa-circle-check"></i> Combatir la deshidratación.</li>
        </ul>`
    }
]