export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    house: "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";
  }[];
}

export interface House {
  name: string;
  id: "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";
  description: string;
  traits: string[];
  colors: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué cualidad valoras más?",
    options: [
      { text: "Coraje y valentía", house: "gryffindor" },
      { text: "Ambición y determinación", house: "slytherin" },
      { text: "Sabiduría e inteligencia", house: "ravenclaw" },
      { text: "Lealtad y trabajo duro", house: "hufflepuff" },
    ],
  },
  {
    id: 2,
    question: "¿Cuál sería tu mascota ideal en Hogwarts?",
    options: [
      { text: "Un león majestuoso", house: "gryffindor" },
      { text: "Una serpiente astuta", house: "slytherin" },
      { text: "Un águila sabia", house: "ravenclaw" },
      { text: "Un tejón leal", house: "hufflepuff" },
    ],
  },
  {
    id: 3,
    question: "¿Qué tipo de magia te interesa más?",
    options: [
      { text: "Hechizos de combate y defensa", house: "gryffindor" },
      { text: "Artes oscuras y pociones avanzadas", house: "slytherin" },
      { text: "Encantamientos complejos y teoría mágica", house: "ravenclaw" },
      { text: "Herbología y cuidado de criaturas mágicas", house: "hufflepuff" },
    ],
  },
  {
    id: 4,
    question: "¿Cómo prefieres resolver los problemas?",
    options: [
      { text: "Enfrentándolos de frente con valor", house: "gryffindor" },
      { text: "Usando la estrategia y la astucia", house: "slytherin" },
      { text: "Analizando todas las opciones cuidadosamente", house: "ravenclaw" },
      { text: "Trabajando en equipo y pidiendo ayuda", house: "hufflepuff" },
    ],
  },
  {
    id: 5,
    question: "¿Qué ambiente prefieres para estudiar?",
    options: [
      { text: "Un lugar donde pueda moverme y practicar", house: "gryffindor" },
      { text: "Un lugar privado y exclusivo", house: "slytherin" },
      { text: "Una biblioteca silenciosa llena de libros", house: "ravenclaw" },
      { text: "Un lugar acogedor rodeado de amigos", house: "hufflepuff" },
    ],
  },
  {
    id: 6,
    question: "¿Qué te motivaría más en una aventura?",
    options: [
      { text: "Proteger a los inocentes", house: "gryffindor" },
      { text: "Obtener poder y reconocimiento", house: "slytherin" },
      { text: "Descubrir conocimientos perdidos", house: "ravenclaw" },
      { text: "Ayudar y apoyar a tus compañeros", house: "hufflepuff" },
    ],
  },
];

export const houses: Record<string, House> = {
  gryffindor: {
    name: "Gryffindor",
    id: "gryffindor",
    description: "Los miembros de Gryffindor son conocidos por su valentía, coraje y determinación.",
    traits: ["Valiente", "Audaz", "Caballeroso", "Temerario"],
    colors: ["Rojo", "Dorado"],
  },
  slytherin: {
    name: "Slytherin",
    id: "slytherin",
    description: "Los miembros de Slytherin son ambiciosos, astutos y determinados a alcanzar sus objetivos.",
    traits: ["Ambicioso", "Astuto", "Determinado", "Ingenioso"],
    colors: ["Verde", "Plateado"],
  },
  ravenclaw: {
    name: "Ravenclaw",
    id: "ravenclaw",
    description: "Los miembros de Ravenclaw valoran la inteligencia, el conocimiento y la creatividad.",
    traits: ["Inteligente", "Sabio", "Creativo", "Curioso"],
    colors: ["Azul", "Bronce"],
  },
  hufflepuff: {
    name: "Hufflepuff",
    id: "hufflepuff",
    description: "Los miembros de Hufflepuff son leales, trabajadores y valoran la justicia y la igualdad.",
    traits: ["Leal", "Trabajador", "Justo", "Paciente"],
    colors: ["Amarillo", "Negro"],
  },
};

export const calculateHouse = (answers: string[]): string => {
  const scores: Record<string, number> = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0,
  };

  answers.forEach((house) => {
    scores[house]++;
  });

  const maxScore = Math.max(...Object.values(scores));
  const winningHouses = Object.keys(scores).filter(
    (house) => scores[house] === maxScore
  );

  // En caso de empate, seleccionar aleatoriamente
  return winningHouses[Math.floor(Math.random() * winningHouses.length)];
};