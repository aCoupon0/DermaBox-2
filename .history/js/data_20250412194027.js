console.log("data.js cargado correctamente");
const limpiadoresBase = [
    {
        categoria: "LB",
        nombre: "Jabón Deep Clean Intensive",
        marca: "Neutrogena",
        cantidad: 80,
        valor: 36000,
        foto: "LB1",
        configuraciones: []
    },
    {
        categoria: "LB",
        nombre: "Espuma Bright Miracle",
        marca: "POND'S",
        cantidad: 100,
        valor: 46000,
        foto: "LB2",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["HS"],"S"]`, `["G",["A"],"S"]`,  `["G",["CM"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["HS","CM"],"S"]`, `["G",["A","CM"],"S"]`, `["G",["RA","HS","A"],"S"]`, `["G",["RA","HS","CM"],"S"]`, `["G",["RA","A","CM"],"S"]`, `["G",["HS","A","CM"],"S"]`, `["G",["RA","HS","A","CM"],"S"]`]
    },
    {
        categoria: "LB",
        nombre: "Espuma Facial Equilibrante",
        marca: "Ana María",
        cantidad: 120,
        valor: 42000,
        foto: "LB3",
        configuraciones: []
    },
    {
        categoria: "LB",
        nombre: "Jabón Suave de Leche",
        marca: "Alergibon",
        cantidad: 90,
        valor: 50000,
        foto: "LB4",
        configuraciones: []
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
        configuraciones: []
    },
    {
        categoria: "HB",
        nombre: "Suero Just Niacinamida 10%",
        marca: "REVOX",
        cantidad: 30,
        valor: 56000,
        foto: "HB2",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["CM"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`, `["G",["HS","CM"],"S"]`]
    },
    {
        categoria: "HB",
        nombre: "Suero Just Ácido Hialurónico 5%",
        marca: "REVOX",
        cantidad: 30,
        valor: 56000,
        foto: "HB3",
        configuraciones: [`["G",["HS"],"S"]`,  `["G",["A"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["A","CM"],"S"]`]
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
        configuraciones: []
    },
    {
        categoria: "LP",
        nombre: "Barra Cleanance Pieles Grasas y con Imperfecciones",
        marca: "Avene",
        cantidad: 100,
        valor: 67000,
        foto: "LP3",
        configuraciones: [`["G",["RA"],"S"]`,  `["G",["A"],"S"]`, `["G",["CM"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["HS","CM"],"S"]`, `["G",["A","CM"],"S"]`]
    },
    {
        categoria: "LP",
        nombre: "Limpiador Pro B5",
        marca: "Acid Mantle",
        cantidad: 200,
        valor: 76000,
        foto: "LP4",
        configuraciones: []
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
        configuraciones: []
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
        configuraciones: []
    },
    {
        categoria: "LP",
        nombre: "Madagascar Centella Ampoule",
        marca: "SKIN1004",
        cantidad: 125,
        valor: 104000,
        foto: "LP14",
        configuraciones: []
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
        configuraciones: [`["G",["RA"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`]
    },
    {
        categoria: "HP",
        nombre: "Bean Essence",
        marca: "Mixsoon",
        cantidad: 30,
        valor: 126000,
        foto: "HP2",
        configuraciones: []
    },
    {
        categoria: "HP",
        nombre: "Pure Snail Repair Gel",
        marca: "Eyenlip",
        cantidad: 45,
        valor: 76000,
        foto: "HP3",
        configuraciones: []
    },
    {
        categoria: "HP",
        nombre: "Crema Advanced Snail 92 All in One",
        marca: "COSRX",
        cantidad: 100,
        valor: 111000,
        foto: "HP4",
        configuraciones: []
    },
    {
        categoria: "HP",
        nombre: "Glatathione Niacinamide",
        marca: "APLB",
        cantidad: 55,
        valor: 101000,
        foto: "HP5",
        configuraciones: [`["G",["HS"],"S"]`, `["G",["A"],"S"]`, `["G",["CM"],"S"]`, `["G",["HS","A"],"S"]`, `["G",["HS","CM"],"S"]`, `["G",["A","CM"],"S"]`, ]
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
        configuraciones: []
    },
    {
        categoria: "P",
        nombre: "Serúm Age Miracle Vitamina C",
        marca: "POND'S",
        cantidad: 30,
        valor: 100000,
        foto: "P3",
        configuraciones: []
    },
    {
        categoria: "P",
        nombre: "Tónico AHA/BHA Claryfing Treatment",
        marca: "COSRX",
        cantidad: 150,
        valor: 111000,
        foto: "P4",
        configuraciones: []
    },
    {
        categoria: "P",
        nombre: "Madagascar Centella Tea-Trica Relief",
        marca: "SKIN1004",
        cantidad: 30,
        valor: 85000,
        foto: "P5",
        configuraciones: [`["G",["RA"],"S"]`, `["G",["RA","HS"],"S"]`, `["G",["RA","A"],"S"]`, `["G",["RA","CM"],"S"]`]
    },
    {
        categoria: "P",
        nombre: "Advanced Snail 96 Mucin Power",
        marca: "COSRX",
        cantidad: 100,
        valor: 126000,
        foto: "P7",
        configuraciones: []
    },
    {
        categoria: "P",
        nombre: "Glow Serum: Propolis + Niacinamida",
        marca: "Beauty of Joseon",
        cantidad: 30,
        valor: 116000,
        foto: "P8",
        configuraciones: [`["G",["A"],"S"]`, `["G",["CM"],"S"]`, `["G",["A","CM"],"S"]`, ]
    },
    {
        categoria: "P",
        nombre: "Serúm Niacinamida 10% + 1% Zinc",
        marca: "The Ordinary",
        cantidad: 30,
        valor: 86000,
        foto: "P9",
        configuraciones: []
    },
    {
        categoria: "P",
        nombre: "Apricot Blossom Peeling Gel",
        marca: "Beauty of Joseon",
        cantidad: 100,
        valor: 110000,
        foto: "P10",
        configuraciones: []
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
        configuraciones: []
    },
]