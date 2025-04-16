const descriptions = [
    {
        casoParticular: ['["G",["RA"],"S"]', '["G",["RA"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir el acné.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["HS"],"S"]', '["G",["HS"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Hidratar y calmar la piel.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["A"],"S"]', '["G",["A"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Prevenir el envejecimiento.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["CM"],"S"]', '["G",["CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Reducir cicatrices y manchas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["RA","HS"],"S"]', '["G",["RA","HS"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y calmar la piel.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["RA","A"],"S"]', '["G",["RA","A"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y prevenir arrugas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["RA","CM"],"S"]', '["G",["RA","CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y atenuar manchas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["HS","A"],"S"]', '["G",["HS","A"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Hidratar y prevenir arrugas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["HS","CM"],"S"]', '["G",["HS","CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Hidratar y atenuar manchas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["A","CM"],"S"]', '["G",["A","CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Prevenir arrugas y atenuar manchas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["RA","HS","A"],"S"]', '["G",["RA","HS","A"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir acné, hidratar y prevenir arrugas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["RA","HS","CM"],"S"]', '["G",["RA","HS","CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir acné, hidratar y atenuar manchas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["RA","A","CM"],"S"]', '["G",["RA","A","CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir acné, prevenir arrugas y atenuar manchas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["HS","A","CM"],"S"]', '["G",["HS","A","CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Hidratar, prevenir arrugas y atenuar manchas.</li>
  </ul>`
    },
    {
        casoParticular: ['["G",["RA","HS","A","CM"],"S"]', '["G",["RA","HS","A","CM"],"N"]'],
        descripcionIndex: `
  <ul>
  <li><i class="fa-solid fa-circle-check"></i> Disminuir la cantidad de grasa.</li>
  <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
  <li><i class="fa-solid fa-circle-check"></i> Combatir acné, hidratar, prevenir arrugas y atenuar manchas.</li>
  </ul>`
    },

    {
        // Caso: M RA
        casoParticular: ['["M",["RA"],"S"]', '["M",["RA"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné.</li>
    </ul>`
      },
      {
        // Caso: M HS
        casoParticular: ['["M",["HS"],"S"]', '["M",["HS"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Hidratar y calmar la piel.</li>
    </ul>`
      },
      {
        // Caso: M A
        casoParticular: ['["M",["A"],"S"]', '["M",["A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Prevenir el envejecimiento.</li>
    </ul>`
      },
      {
        // Caso: M CM
        casoParticular: ['["M",["CM"],"S"]', '["M",["CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Reducir cicatrices y manchas.</li>
    </ul>`
      },
      {
        // Caso: M RA, HS
        casoParticular: ['["M",["RA","HS"],"S"]', '["M",["RA","HS"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y calmar la piel.</li>
    </ul>`
      },
      {
        // Caso: M RA, A
        casoParticular: ['["M",["RA","A"],"S"]', '["M",["RA","A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y prevenir arrugas.</li>
    </ul>`
      },
      {
        // Caso: M RA, CM
        casoParticular: ['["M",["RA","CM"],"S"]', '["M",["RA","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y atenuar manchas.</li>
    </ul>`
      },
      {
        // Caso: M HS, A
        casoParticular: ['["M",["HS","A"],"S"]', '["M",["HS","A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Hidratar y prevenir arrugas.</li>
    </ul>`
      },
      {
        // Caso: M HS, CM
        casoParticular: ['["M",["HS","CM"],"S"]', '["M",["HS","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Hidratar y atenuar manchas.</li>
    </ul>`
      },
      {
        // Caso: M A, CM
        casoParticular: ['["M",["A","CM"],"S"]', '["M",["A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Prevenir arrugas y atenuar manchas.</li>
    </ul>`
      },
      {
        // Caso: M RA, HS, A
        casoParticular: ['["M",["RA","HS","A"],"S"]', '["M",["RA","HS","A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, hidratar y prevenir arrugas.</li>
    </ul>`
      },
      {
        // Caso: M RA, HS, CM
        casoParticular: ['["M",["RA","HS","CM"],"S"]', '["M",["RA","HS","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, hidratar y atenuar manchas.</li>
    </ul>`
      },
      {
        // Caso: M RA, A, CM
        casoParticular: ['["M",["RA","A","CM"],"S"]', '["M",["RA","A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, prevenir arrugas y atenuar manchas.</li>
    </ul>`
      },
      {
        // Caso: M HS, A, CM
        casoParticular: ['["M",["HS","A","CM"],"S"]', '["M",["HS","A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Hidratar, prevenir arrugas y atenuar manchas.</li>
    </ul>`
      },
      {
        // Caso: M RA, HS, A, CM
        casoParticular: ['["M",["RA","HS","A","CM"],"S"]', '["M",["RA","HS","A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Regular la producción de sebo.</li>
      <li><i class="fa-solid fa-circle-check"></i> Limpiar y destapar los poros.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, hidratar, prevenir arrugas y atenuar manchas.</li>
    </ul>`
      },

      {
        casoParticular: ['["S",["RA"],"S"]', '["S",["RA"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné.</li>
    </ul>`
      },
      // 2. S, HS
      {
        casoParticular: ['["S",["HS"],"S"]', '["S",["HS"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Calmar la piel.</li>
    </ul>`
      },
      // 3. S, A
      {
        casoParticular: ['["S",["A"],"S"]', '["S",["A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Prevenir arrugas.</li>
    </ul>`
      },
      // 4. S, CM
      {
        casoParticular: ['["S",["CM"],"S"]', '["S",["CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Reducir cicatrices y manchas.</li>
    </ul>`
      },
      // 5. S, RA, HS
      {
        casoParticular: ['["S",["RA","HS"],"S"]', '["S",["RA","HS"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y calmar la piel.</li>
    </ul>`
      },
      // 6. S, RA, A
      {
        casoParticular: ['["S",["RA","A"],"S"]', '["S",["RA","A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y prevenir arrugas.</li>
    </ul>`
      },
      // 7. S, RA, CM
      {
        casoParticular: ['["S",["RA","CM"],"S"]', '["S",["RA","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir el acné y atenuar manchas.</li>
    </ul>`
      },
      // 8. S, HS, A
      {
        casoParticular: ['["S",["HS","A"],"S"]', '["S",["HS","A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Calmar la piel y prevenir arrugas.</li>
    </ul>`
      },
      // 9. S, HS, CM
      {
        casoParticular: ['["S",["HS","CM"],"S"]', '["S",["HS","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Calmar la piel y atenuar manchas.</li>
    </ul>`
      },
      // 10. S, A, CM
      {
        casoParticular: ['["S",["A","CM"],"S"]', '["S",["A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Prevenir arrugas y atenuar manchas.</li>
    </ul>`
      },
      // 11. S, RA, HS, A
      {
        casoParticular: ['["S",["RA","HS","A"],"S"]', '["S",["RA","HS","A"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, calmar la piel y prevenir arrugas.</li>
    </ul>`
      },
      // 12. S, RA, HS, CM
      {
        casoParticular: ['["S",["RA","HS","CM"],"S"]', '["S",["RA","HS","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, calmar la piel y atenuar manchas.</li>
    </ul>`
      },
      // 13. S, RA, A, CM
      {
        casoParticular: ['["S",["RA","A","CM"],"S"]', '["S",["RA","A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, prevenir arrugas y atenuar manchas.</li>
    </ul>`
      },
      // 14. S, HS, A, CM
      {
        casoParticular: ['["S",["HS","A","CM"],"S"]', '["S",["HS","A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Calmar la piel, prevenir arrugas y atenuar manchas.</li>
    </ul>`
      },
      // 15. S, RA, HS, A, CM
      {
        casoParticular: ['["S",["RA","HS","A","CM"],"S"]', '["S",["RA","HS","A","CM"],"N"]'],
        descripcionIndex: `
    <ul>
      <li><i class="fa-solid fa-circle-check"></i> Aumentar la humectación.</li>
      <li><i class="fa-solid fa-circle-check"></i> Proteger la barrera cutánea.</li>
      <li><i class="fa-solid fa-circle-check"></i> Combatir acné, calmar la piel, prevenir arrugas y atenuar manchas.</li>
    </ul>`
      }
];

//Cuando Iso es true, o "S", manejamos las descripciones desde aquí, ya que si se usa Iso, son practicamente iguales, a excepción de Tono, asi que solo hay que manejar asos iso para Blancos, Medios y Morenos, es decir, 3 posibilidades, el resto van arriba
const isoDescriptions = [
    {
        //Este es el ejemplo de iso con piel morena, las descripciones iniciales son las mismas en todos lados, aqui el "M" no tiene uso alguno, lo tendrá en el archivo data.js, pero para no generar dos casoParticulares diferentes
        casoParticular: [`["ISO"]`],
        descripcionIndex: `
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> Potenciar la acción de la Isotretinoina.</li>
            <li><i class="fa-solid fa-circle-check"></i> Combatir la deshidratación.</li>
        </ul>`
    }
]