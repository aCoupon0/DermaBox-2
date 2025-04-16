console.log("data.js cargado correctamente");
const limpiadoresBase = [
    {
        categoria: "LB",
        nombre: "Jabón Deep Clean Intensive",
        marca: "Neutrogena",
        cantidad: 80,
        valor: 36000,
        foto: "LB1",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LB",
        nombre: "Espuma Bright Miracle",
        marca: "POND'S",
        cantidad: 100,
        valor: 46000,
        foto: "LB2",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LB",
        nombre: "Espuma Facial Equilibrante",
        marca: "Ana María",
        cantidad: 120,
        valor: 42000,
        foto: "LB3",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LB",
        nombre: "Jabón Suave de Leche",
        marca: "Alergibon",
        cantidad: 90,
        valor: 50000,
        foto: "LB4",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
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
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Synderm Plus con Ácido Salicílico",
        marca: "PharmaDerm",
        cantidad: 280,
        valor: 99000,
        foto: "LP2",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Barra Cleanance Pieles Grasas y con Imperfecciones",
        marca: "Avene",
        cantidad: 100,
        valor: 67000,
        foto: "LP3",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Limpiador Pro B5",
        marca: "Acid Mantle",
        cantidad: 200,
        valor: 76000,
        foto: "LP4",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Ph5 Syndet",
        marca: "Eucerin",
        cantidad: 250,
        valor: 99000,
        foto: "LP5",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Matcha Biome Amino Acne",
        marca: "Heimish",
        cantidad: 150,
        valor: 95000,
        foto: "LP7",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Espuma Ceramid Rice",
        marca: "Eyenlip",
        cantidad: 100,
        valor: 66000,
        foto: "LP8",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Amino Acid Gentle",
        marca: "Dr. Althea",
        cantidad: 140,
        valor: 126000,
        foto: "LP9",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Espuma Matcha Hydrating",
        marca: "BLAB",
        cantidad: 120,
        valor: 97000,
        foto: "LP12",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Madagascar Centella Ampoule",
        marca: "SKIN1004",
        cantidad: 125,
        valor: 104000,
        foto: "LP14",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "LP",
        nombre: "Espuma Hydrating 8 Hyaluronic Acid",
        marca: "Anua",
        cantidad: 150,
        valor: 101000,
        foto: "LP15",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
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
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "HB",
        nombre: "Suero Just Niacinamida 10%",
        marca: "REVOX",
        cantidad: 30,
        valor: 56000,
        foto: "HB2",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "HB",
        nombre: "Suero Just Ácido Hialurónico 5%",
        marca: "REVOX",
        cantidad: 30,
        valor: 56000,
        foto: "HB3",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "HB",
        nombre: "Crema 5 en 1",
        marca: "Nivea",
        cantidad: 100,
        valor: 49000,
        foto: "HB5",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
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
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "HP",
        nombre: "Bean Essence",
        marca: "Mixsoon",
        cantidad: 30,
        valor: 126000,
        foto: "HP2",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "HP",
        nombre: "Pure Snail Repair Gel",
        marca: "Eyenlip",
        cantidad: 45,
        valor: 76000,
        foto: "HP3",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "HP",
        nombre: "Crema Advanced Snail 92 All in One",
        marca: "COSRX",
        cantidad: 100,
        valor: 111000,
        foto: "HP4",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
    {
        categoria: "HP",
        nombre: "Glatathione Niacinamide",
        marca: "APLB",
        cantidad: 55,
        valor: 101000,
        foto: "HP5",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
]

const bloqueadoresBase = [
    {
        categoria: "BB",
        nombre: "Face Water +50FPS",
        marca: "ISDIN",
        cantidad: 60,
        valor: 71000,
        foto: "BB1",
        descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
        ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
]

const bloqueadoresPremium = [
    {
        categoria: "BP",
        nombre: "Oil Control +60FPS",
        marca: "Eucerin",
        cantidad: 60,
        valor: 96000,
        foto: "BP2",
        descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
        ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
]

const potenciadores = [
    {
        categoria: "P",
        nombre: "Tónico de Ácido Glícolico 7%",
        marca: "The Ordinary",
        cantidad: 60,
        valor: 126000,
        foto: "P12",
        descripcionClinica: "Emulsión facial con ácido hialuronico 2%",
        ingredientes: "Aqua Purificata, Glycerinum Solutum, Hyaluronicum Complexum 1%, Emulsan Polisiloxane X, Extractum Centella Asiaticum, Alcoholum Cetilicum, Sorbitan Stearate, Carbopolum 940, Trietanolaminium, Phenoxyethanol, Ethylhexylglycerin",
        configuraciones: [`["G",["RA","HS"],"B","S"]`]
    },
]