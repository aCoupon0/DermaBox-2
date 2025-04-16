console.log("data.js cargado correctamente");
const limpiadoresBase = [
    {
        categoria: "LB",
        nombre: "Jabón Deep Clean Intensive",
        marca: "Neutrogena",
        cantidad: 80,
        valor: 36000,
        foto: "LB1",
        configuraciones: [`["G",["RA"],"N"]`, `["G",["RA","CM"],"N"]`, `["G",["RA","HS","A"],"N"]`, `["G",["RA","HS","CM"],"N"]`, `["G",["RA","A","CM"],"N"]`, `["G",["RA","HS","A","CM"],"N"]`, '["M",["A"],"N"]']
    },
    {
        categoria: "LB",
        nombre: "Espuma Bright Miracle",
        marca: "POND'S",
        cantidad: 100,
        valor: 46000,
        foto: "LB2",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["HS"],"S"]`, `["G",["A"],"S"]`, `["G",["CM"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["HS","CM"],"S"]`, `["G",["A","CM"],"S"]`, `["G",["RA","HS","A"],"S"]`, `["G",["RA","HS","CM"],"S"]`, `["G",["RA","A","CM"],"S"]`, `["G",["HS","A","CM"],"S"]`, `["G",["RA","HS","A","CM"],"S"]`, `["G",["A"],"N"]`, `["G",["CM"],"N"]`, `["G",["RA","HS"],"N"]`, `["G",["RA","A"],"N"]`, `["G",["HS","CM"],"N"]`, `["G",["A","CM"],"N"]`, ["M", ["RA"], "S"], '["M", ["CM"], "S"]',
            '["M",["RA","HS"],"S"]',
            '["M",["RA","A"],"S"]',
            '["M",["RA","CM"],"S"]',
            '["M",["A","CM"],"S"]',
            '["M",["RA","HS","A"],"S"]',
            '["M",["RA","HS","CM"],"S"]',
            '["M",["RA","A","CM"],"S"]',
            '["M",["RA","HS","A","CM"],"S"]',
            '["M",["RA"],"N"]',               // Fila 1
            '["M",["CM"],"N"]',               // Fila 4
            '["M",["RA","HS"],"N"]',          // Fila 5
            '["M",["RA","A"],"N"]',           // Fila 6
            '["M",["RA","CM"],"N"]',          // Fila 7
            '["M",["HS","CM"],"N"]',          // Fila 9
            '["M",["A","CM"],"N"]',           // Fila 10
            '["M",["RA","HS","A"],"N"]',      // Fila 11
            '["M",["RA","HS","CM"],"N"]',     // Fila 12
            '["M",["RA","A","CM"],"N"]',      // Fila 13
            '["M",["RA","HS","A","CM"],"N"]']
    },
    {
        categoria: "LB",
        nombre: "Espuma Facial Equilibrante",
        marca: "Ana María",
        cantidad: 120,
        valor: 42000,
        foto: "LB3",
        configuraciones: [`["G",["HS"],"N"]`, `["G",["HS","A"],"N"]`, `["G",["HS","A","CM"],"N"]`, ["M", ["HS"], "S"],
            '["M", ["A"], "S"]',
            '["M", ["HS", "A"], "S"]',
            '["M", ["HS", "CM"], "S"]',
            '["M", ["HS", "A", "CM"], "S"]',
            '["M",["HS"],"N"]',               // Fila 2
            '["M",["HS","A"],"N"]',           // Fila 8
            '["M",["HS","A","CM"],"N"]'
        ]
    },
    {
        categoria: "LB",
        nombre: "Jabón Suave de Leche",
        marca: "Alergibon",
        cantidad: 90,
        valor: 50000,
        foto: "LB4",
        configuraciones: [
            '["S",["RA"],"S"]',
            '["S",["HS"],"S"]',
            '["S",["A"],"S"]',
            '["S",["CM"],"S"]',
            '["S",["RA","HS"],"S"]',
            '["S",["RA","A"],"S"]',
            '["S",["RA","CM"],"S"]',
            '["S",["HS","A"],"S"]',
            '["S",["HS","CM"],"S"]',
            '["S",["A","CM"],"S"]',
            '["S",["RA","HS","A"],"S"]',
            '["S",["RA","HS","CM"],"S"]',
            '["S",["RA","A","CM"],"S"]',
            '["S",["HS","A","CM"],"S"]',
            '["S",["RA","HS","A","CM"],"S"]'
        ]
    },
]

const hidratantesBase = [
    {
        categoria: "HB",
        nombre: "Crema Natural con Filtros Solares",
        marca: "Haiko",
        cantidad: 50,
        valor: 55000,
        foto: "HB1",
        configuraciones: [
            '["M",["A"],"S"]',
            '["M",["RA", "A"],"S"]',
            '["M",["HS", "A"],"S"]',
            '["M",["A", "CM"],"S"]',
            '["M",["RA","HS","A"],"S"]',
            '["M",["A"],"N"]',                // Fila 3
            '["M",["RA","A"],"N"]',           // Fila 6
            '["M",["HS","A"],"N"]',           // Fila 8
            '["M",["A","CM"],"N"]',           // Fila 10
            '["M",["RA","HS","A"],"N"]',      // Fila 11
            '["M",["RA","A","CM"],"N"]',      // Fila 13
            '["M",["RA","HS","A","CM"],"N"]'
        ]
    },
    {
        categoria: "HB",
        nombre: "Suero Just Niacinamida 10%",
        marca: "REVOX",
        cantidad: 30,
        valor: 56000,
        foto: "HB2",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["CM"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`, `["G",["HS","CM"],"S"]`,
            '["M",["RA"],"S"]',
            '["M",["CM"],"S"]',
            '["M",["RA","CM"],"S"]',
            '["M",["HS","CM"],"S"]',
            '["M",["RA","HS","CM"],"S"]',
            '["M",["RA","A","CM"],"S"]',
            '["M",["HS","A","CM"],"S"]',
            '["M",["RA","HS","A","CM"],"S"]',
            '["M", ["RA", "HS"], "S"]',
            '["M",["RA"],"N"]',               // Fila 1
            '["M",["CM"],"N"]',               // Fila 4
            '["M",["RA","CM"],"N"]',          // Fila 7
            '["M",["HS","CM"],"N"]',          // Fila 9
            '["M",["RA","HS","CM"],"N"]',     // Fila 12
            '["M",["HS","A","CM"],"N"]'
        ]
    },
    {
        categoria: "HB",
        nombre: "Suero Just Ácido Hialurónico 5%",
        marca: "REVOX",
        cantidad: 30,
        valor: 56000,
        foto: "HB3",
        configuraciones: [`["G",["HS"],"S"]`, `["G",["A"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["A","CM"],"S"]`, '["M",["HS"],"S"]', '["M",["HS"],"N"]',               // Fila 2
            '["M",["RA","HS"],"N"]',
            '["S",["RA"],"S"]',
            '["S",["HS"],"S"]',
            '["S",["A"],"S"]',
            '["S",["CM"],"S"]',
            '["S",["RA","HS"],"S"]',
            '["S",["RA","A"],"S"]',
            '["S",["RA","CM"],"S"]',
            '["S",["HS","A"],"S"]',
            '["S",["HS","CM"],"S"]',
            '["S",["A","CM"],"S"]',
            '["S",["RA","HS","A"],"S"]',
            '["S",["RA","HS","CM"],"S"]',
            '["S",["RA","A","CM"],"S"]',
            '["S",["HS","A","CM"],"S"]',
            '["S",["RA","HS","A","CM"],"S"]']
    },
    {
        categoria: "HB",
        nombre: "Crema 5 en 1",
        marca: "Nivea",
        cantidad: 100,
        valor: 49000,
        foto: "HB5",
        configuraciones: []
    },
]







const limpiadoresPremium = [
    {
        categoria: "LP",
        nombre: "Gel Oil-Free Clear Wash",
        marca: "Neutrogena",
        cantidad: 177,
        valor: 70000,
        foto: "LP1",
        configuraciones: []
    },
    {
        categoria: "LP",
        nombre: "Synderm Plus con Ácido Salicílico",
        marca: "PharmaDerm",
        cantidad: 280,
        valor: 99000,
        foto: "LP2",
        configuraciones: [
            '["M",["RA"],"S"]',
            '["M",["RA","HS"],"S"]',
            '["M",["RA","A"],"S"]',
            '["M",["RA","CM"],"S"]',
            '["M",["RA","HS","A"],"S"]',
            '["M",["RA","HS","CM"],"S"]',
            '["M",["RA","A","CM"],"S"]',
            '["M",["RA","HS","A","CM"],"S"]',
            '["M",["RA"],"N"]',               // Fila 1
            '["M",["RA","HS"],"N"]',          // Fila 5
            '["M",["RA","A"],"N"]',           // Fila 6
            '["M",["RA","CM"],"N"]',          // Fila 7
            '["M",["RA","HS","A"],"N"]',      // Fila 11
            '["M",["RA","HS","CM"],"N"]',     // Fila 12
            '["M",["RA","A","CM"],"N"]',      // Fila 13
            '["M",["RA","HS","A","CM"],"N"]'
        ]
    },
    {
        categoria: "LP",
        nombre: "Barra Cleanance Pieles Grasas y con Imperfecciones",
        marca: "Avene",
        cantidad: 100,
        valor: 67000,
        foto: "LP3",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["A"],"S"]`, `["G",["CM"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["HS","CM"],"S"]`, `["G",["A","CM"],"S"]`]
    },
    {
        categoria: "LP",
        nombre: "Limpiador Pro B5",
        marca: "Acid Mantle",
        cantidad: 200,
        valor: 76000,
        foto: "LP4",
        configuraciones: [
            '["S",["RA"],"S"]',
            '["S",["HS"],"S"]',
            '["S",["A"],"S"]',
            '["S",["CM"],"S"]',
            '["S",["RA","HS"],"S"]',
            '["S",["RA","A"],"S"]',
            '["S",["RA","CM"],"S"]',
            '["S",["HS","A"],"S"]',
            '["S",["HS","CM"],"S"]',
            '["S",["A","CM"],"S"]',
            '["S",["RA","HS","A"],"S"]',
            '["S",["RA","HS","CM"],"S"]',
            '["S",["RA","A","CM"],"S"]',
            '["S",["HS","A","CM"],"S"]',
            '["S",["RA","HS","A","CM"],"S"]'
        ]
    },
    {
        categoria: "LP",
        nombre: "Ph5 Syndet",
        marca: "Eucerin",
        cantidad: 250,
        valor: 99000,
        foto: "LP5",
        configuraciones: []
    },
    {
        categoria: "LP",
        nombre: "Matcha Biome Amino Acne",
        marca: "Heimish",
        cantidad: 150,
        valor: 95000,
        foto: "LP7",
        configuraciones: []
    },
    {
        categoria: "LP",
        nombre: "Espuma Ceramid Rice",
        marca: "Eyenlip",
        cantidad: 100,
        valor: 66000,
        foto: "LP8",
        configuraciones: [
            '["M",["HS"],"S"]',
            '["M",["HS","A"],"S"]',
            '["M",["HS","CM"],"S"]',
            '["M",["HS","A","CM"],"S"]',
            '["M",["HS"],"N"]',               // Fila 2
            '["M",["HS","A"],"N"]',           // Fila 8
            '["M",["HS","CM"],"N"]',          // Fila 9
            '["M",["HS","A","CM"],"N"]'
        ]
    },
    {
        categoria: "LP",
        nombre: "Amino Acid Gentle",
        marca: "Dr. Althea",
        cantidad: 140,
        valor: 126000,
        foto: "LP9",
        configuraciones: [`["G",["HS"],"S"]`]
    },
    {
        categoria: "LP",
        nombre: "Espuma Matcha Hydrating",
        marca: "BLAB",
        cantidad: 120,
        valor: 97000,
        foto: "LP12",
        configuraciones: [
            '["M",["A"],"S"]',
            '["M",["CM"],"S"]',
            '["M",["A","CM"],"S"]'
        ]
    },
    {
        categoria: "LP",
        nombre: "Madagascar Centella Ampoule",
        marca: "SKIN1004",
        cantidad: 125,
        valor: 104000,
        foto: "LP14",
        configuraciones: [
            '["M",["A"],"N"]',                // Fila 3
            '["M",["CM"],"N"]',               // Fila 4
            '["M",["A","CM"],"N"]'
        ]
    },
    {
        categoria: "LP",
        nombre: "Espuma Hydrating 8 Hyaluronic Acid",
        marca: "Anua",
        cantidad: 150,
        valor: 101000,
        foto: "LP15",
        configuraciones: []
    },
]

const hidratantesPremium = [
    {
        categoria: "HP",
        nombre: "Madagascar Centella Ampoule",
        marca: "SKIN1004",
        cantidad: 55,
        valor: 116000,
        foto: "HP1",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`,
            '["M",["HS"],"S"]',
            '["M",["HS","CM"],"S"]',
            '["M",["HS"],"N"]',               // Fila 2
            '["M",["HS","CM"],"N"]'
        ]
    },
    {
        categoria: "HP",
        nombre: "Bean Essence",
        marca: "Mixsoon",
        cantidad: 30,
        valor: 126000,
        foto: "HP2",
        configuraciones: ['["M",["CM"],"S"]']
    },
    {
        categoria: "HP",
        nombre: "Pure Snail Repair Gel",
        marca: "Eyenlip",
        cantidad: 45,
        valor: 76000,
        foto: "HP3",
        configuraciones: [
            '["M",["A"],"S"]',
            '["M",["RA","A"],"S"]',
            '["M",["HS","A"],"S"]',
            '["M",["A","CM"],"S"]',
            '["M",["RA","HS","A"],"S"]',
            '["M",["RA","A","CM"],"S"]',
            '["M",["HS","A","CM"],"S"]',
            '["M",["RA","HS","A","CM"],"S"]',
            '["M",["RA"],"N"]',               // Fila 1
            '["M",["HS","A"],"N"]',           // Fila 8
            '["M",["HS","A","CM"],"N"]',
            '["S",["RA"],"S"]',
            '["S",["HS"],"S"]',
            '["S",["A"],"S"]',
            '["S",["CM"],"S"]',
            '["S",["RA","HS"],"S"]',
            '["S",["RA","A"],"S"]',
            '["S",["RA","CM"],"S"]',
            '["S",["HS","A"],"S"]',
            '["S",["HS","CM"],"S"]',
            '["S",["A","CM"],"S"]',
            '["S",["RA","HS","A"],"S"]',
            '["S",["RA","HS","CM"],"S"]',
            '["S",["RA","A","CM"],"S"]',
            '["S",["HS","A","CM"],"S"]',
            '["S",["RA","HS","A","CM"],"S"]'
        ]
    },
    {
        categoria: "HP",
        nombre: "Crema Advanced Snail 92 All in One",
        marca: "COSRX",
        cantidad: 100,
        valor: 111000,
        foto: "HP4",
        configuraciones: [
            '["M",["RA"],"S"]',
            '["M",["RA","HS"],"S"]',
            '["M",["RA","CM"],"S"]',
            '["M",["RA","HS","CM"],"S"]',
            '["M",["RA","HS"],"N"]',          // Fila 5
            '["M",["RA","HS","CM"],"N"]'
        ]
    },
    {
        categoria: "HP",
        nombre: "Glatathione Niacinamide",
        marca: "APLB",
        cantidad: 55,
        valor: 101000,
        foto: "HP5",
        configuraciones: [`["G",["HS"],"S"]`, `["G",["A"],"S"]`, `["G",["CM"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["HS","CM"],"S"]`, `["G",["A","CM"],"S"]`,
            '["M",["A"],"N"]',                // Fila 3
            '["M",["CM"],"N"]',               // Fila 4
            '["M",["RA","A"],"N"]',           // Fila 6
            '["M",["RA","CM"],"N"]',          // Fila 7
            '["M",["A","CM"],"N"]',           // Fila 10
            '["M",["RA","HS","A"],"N"]',      // Fila 11
            '["M",["RA","A","CM"],"N"]',      // Fila 13
            '["M",["RA","HS","A","CM"],"N"]']
    },
]

const potenciadores = [
    {
        categoria: "P",
        nombre: "Serúm Vitamina C + B3",
        marca: "PILI",
        cantidad: 30,
        valor: 59000,
        foto: "P1",
        configuraciones: [
            '["M",["A"],"S"]',
            '["M",["HS","A"],"S"]',
            '["M",["A"],"N"]',                // Fila 3
            '["M",["RA","A"],"N"]'
        ]
    },
    {
        categoria: "P",
        nombre: "Serúm Age Miracle Vitamina C",
        marca: "POND'S",
        cantidad: 30,
        valor: 100000,
        foto: "P3",
        configuraciones: [
            '["M",["RA","HS","A"],"N"]',      // Fila 11
            '["M",["RA","HS","A","CM"],"N"]'
        ]
    },
    {
        categoria: "P",
        nombre: "Tónico AHA/BHA Claryfing Treatment",
        marca: "COSRX",
        cantidad: 150,
        valor: 111000,
        foto: "P4",
        configuraciones: [
            '["M",["HS"],"S"]',
            '["M",["HS","CM"],"S"]',
            '["M",["HS"],"N"]',               // Fila 2
            '["M",["HS","CM"],"N"]',          // Fila 9
            '["M",["HS","A","CM"],"N"]'
        ]
    },
    {
        categoria: "P",
        nombre: "Madagascar Centella Tea-Trica Relief",
        marca: "SKIN1004",
        cantidad: 30,
        valor: 85000,
        foto: "P5",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`, '["M",["RA","A"],"S"]', '["M",["RA","CM"],"S"]', '["M",["RA","HS","A","CM"],"S"]', '["M",["RA","A","CM"],"S"]', '["M",["RA","HS","A"],"S"]', '["M",["RA","A","CM"],"N"]',
            `["M",["RA","HS","CM"],"S"]`,
            '["M",["RA","CM"],"N"]',          // Fila 7
            '["M",["RA","HS","CM"],"N"]',
            '["S",["RA","HS"],"S"]',          // Fila 5
            '["S",["RA","A"],"S"]',           // Fila 6
            '["S",["RA","CM"],"S"]',          // Fila 7
            '["S",["RA","HS","A"],"S"]',      // Fila 11
            '["S",["RA","HS","CM"],"S"]',     // Fila 12
            '["S",["RA","A","CM"],"S"]',      // Fila 13
            '["S",["RA","HS","A","CM"],"S"]'
        ]
    },
    {
        categoria: "P",
        nombre: "Advanced Snail 96 Mucin Power",
        marca: "COSRX",
        cantidad: 100,
        valor: 126000,
        foto: "P7",
        configuraciones: [
            `["M",["CM"],"S"]`,

        ]
    },
    {
        categoria: "P",
        nombre: "Glow Serum: Propolis + Niacinamida",
        marca: "Beauty of Joseon",
        cantidad: 30,
        valor: 116000,
        foto: "P8",
        configuraciones: [`["G",["A"],"S"]`, `["G",["CM"],"S"]`, `["G",["A","CM"],"S"]`,
            '["S",["RA"],"S"]',               // Fila 1
            '["S",["CM"],"S"]'
        ]
    },
    {
        categoria: "P",
        nombre: "Serúm Niacinamida 10% + 1% Zinc",
        marca: "The Ordinary",
        cantidad: 30,
        valor: 86000,
        foto: "P9",
        configuraciones: [
            '["M",["RA"],"S"]',
            '["M",["RA","HS"],"S"]',
            '["M",["RA"],"N"]',               // Fila 1
            '["M",["RA","HS"],"N"]'
        ]
    },
    {
        categoria: "P",
        nombre: "Apricot Blossom Peeling Gel",
        marca: "Beauty of Joseon",
        cantidad: 100,
        valor: 110000,
        foto: "P10",
        configuraciones: [
            '["M",["A","CM"],"S"]',
            '["M",["HS","A","CM"],"S"]',
            '["M",["CM"],"N"]',               // Fila 4
            '["M",["HS","A"],"N"]',           // Fila 8
            '["M",["A","CM"],"N"]',           // Fila 10

        ]
    },
    {
        categoria: "P",
        nombre: "Tónico Full Fit Propolis Synergy",
        marca: "COSRX",
        cantidad: 150,
        valor: 115000,
        foto: "P11",
        configuraciones: [`["G",["HS"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["HS","CM"],"S"]`]
    },
    {
        categoria: "P",
        nombre: "Rice 70+ Glow Milky Toner",
        marca: "Anua",
        cantidad: 250,
        valor: 126000,
        foto: "P12",
        configuraciones: [
            '["S",["HS"],"S"]',               // Fila 2
            '["S",["A"],"S"]',                // Fila 3
            '["S",["HS","A"],"S"]',           // Fila 8
            '["S",["HS","CM"],"S"]',          // Fila 9
            '["S",["A","CM"],"S"]',           // Fila 10
            '["S",["HS","A","CM"],"S"]'
        ]
    },
]