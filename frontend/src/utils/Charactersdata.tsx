//import nebulaCharactersImg from "../../public/characters/nebulaCharactersImg.js"; 
import nebulaCharactersImg from "../../public/nebula-characters/nebulaCharactersImg.js";

type DataType = {
  id: number;
  name: string;
  health: number;
  strength: number;
  attack: number;
  speed: number;
  super_power: string;
  price: number;
  img: string;
  model: string
};

const charactersdata: DataType[] = [
  {
    id: 1,
    name: "Mystic Seer",
    health: 80,
    strength: 10,
    attack: 10,
    speed: 10,
    super_power: "Thunderbolt",
    price: 317,
    img: nebulaCharactersImg.mystic,
    model: "/models/mystic.gltf"
  },
  {
    id: 2,
    name: "Zylar the Conqueror",
    health: 90,
    strength: 10,
    attack: 13,
    speed: 9,
    super_power: "Flamethrower",
    price: 385,
    img: nebulaCharactersImg.zylar,
    model: "/models/zylar.gltf"
  },
  {
    id: 3,
    name: "Shadow Strike",
    health: 75,
    strength: 10,
    attack: 13,
    speed: 10,
    super_power: "VineWhip",
    price: 307,
    img: nebulaCharactersImg.sStrike,
    model: "/models/s-strike.gltf"
  },
  {
    id: 4,
    name: "Captain Valor",
    health: 85,
    strength: 8,
    attack: 10,
    speed: 8,
    super_power: "WaterGun",
    price: 350,
    img: nebulaCharactersImg.cValor,
    model: "/models/c-valor.gltf"
  },
  {
    id: 5,
    name: "Sir Elara the Great",
    health: 88,
    strength: 9,
    attack: 13,
    speed: 7,
    super_power: "SleepSong",
    price: 362,
    img: nebulaCharactersImg.sElara,
    model: "/models/s-elara.gltf"
  },
  {
    id: 6,
    name: "Ghoul King",
    health: 92,
    strength: 11,
    attack: 14,
    speed: 9,
    super_power: "Psychic",
    price: 415,
    img: nebulaCharactersImg.ghoul,
    model: "/models/ghoul.gltf"
  },
  {
    id: 7,
    name: "Elinor Swiftstrike",
    health: 80,
    strength: 10,
    attack: 13,
    speed: 7,
    super_power: "HeadCrush",
    price: 320,
    img: nebulaCharactersImg.eSwiftstrike,
    model: "/models/e-swiftstrike.gltf"
  },
  {
    id: 8,
    name: "Bone Collector",
    health: 93,
    strength: 12,
    attack: 15,
    speed: 8,
    super_power: "Adaptability",
    price: 440,
    img: nebulaCharactersImg.bCollector,
    model: "/models/b-collector.gltf"
  },
  {
    id: 9,
    name: "Vortex",
    health: 88,
    strength: 10,
    attack: 13,
    speed: 8,
    super_power: "SonicKick",
    price: 370,
    img: nebulaCharactersImg.vortex,
    model: "/models/vortex.gltf"
  },
  {
    id: 10,
    name: "Dire Wolf",
    health: 90,
    strength: 11,
    attack: 14,
    speed: 6,
    super_power: "TelekineticHit",
    price: 397,
    img: nebulaCharactersImg.dWolf,
    model: "/models/d-wolf.gltf"
  },
  {
    id: 11,
    name: "Luna Empress",
    health: 87,
    strength: 8,
    attack: 15,
    speed: 10,
    super_power: "InvisibleClaws",
    price: 357,
    img: nebulaCharactersImg.luna,
    model: "/models/luna.gltf"
  },
  {
    id: 12,
    name: "Blaze",
    health: 83,
    strength: 8,
    attack: 13,
    speed: 8,
    super_power: "DodgeNdTailLash",
    price: 338,
    img: nebulaCharactersImg.blaze,
    model: "/models/blaze.gltf"
  },
  {
    id: 13,
    name: "Techno Mage",
    health: 93,
    strength: 10,
    attack: 12,
    speed: 8,
    super_power: "DodgeNdTailLash",
    price: 430,
    img: nebulaCharactersImg.techno,
    model: "/models/techno.gltf"
  },
  {
    id: 14,
    name: "Berzerker",
    health: 96,
    strength: 13,
    attack: 14,
    speed: 8,
    super_power: "DodgeNdTailLash",
    price: 480,
    img: nebulaCharactersImg.berzerker,
    model: "/models/berzerker.gltf"
  },
  {
    id: 15,
    name: "Gorgon",
    health: 92,
    strength: 11,
    attack: 13,
    speed: 8,
    super_power: "DodgeNdTailLash",
    price: 405,
    img: nebulaCharactersImg.gorgon,
    model: "/models/gorgon.gltf"
  },
  {
    id: 16,
    name: "Troll",
    health: 93,
    strength: 11,
    attack: 15,
    speed: 7,
    super_power: "DodgeNdTailLash",
    price: 440,
    img: nebulaCharactersImg.troll,
    model: "/models/troll.gltf"
  },
  {
    id: 17,
    name: "Drake Fire",
    health: 90,
    strength: 10,
    attack: 10,
    speed: 8,
    super_power: "DodgeNdTailLash",
    price: 380,
    img: nebulaCharactersImg.drake,
    model: "/models/drake.gltf"
  },
  {
    id: 18,
    name: "Stone Golem",
    health: 91,
    strength: 10,
    attack: 13,
    speed: 7,
    super_power: "DodgeNdTailLash",
    price: 400,
    img: nebulaCharactersImg.sGolem,
    model: "/models/s-golem.gltf"
  },
  {
    id: 19,
    name: "Serena Hawk",
    health: 88,
    strength: 10,
    attack: 11,
    speed: 9,
    super_power: "DodgeNdTailLash",
    price: 365,
    img: nebulaCharactersImg.sHawk,
    model: "/models/s-hawk.gltf"
  },
  {
    id: 20,
    name: "Ravager",
    health: 75,
    strength: 8,
    attack: 16,
    speed: 6,
    super_power: "ShadowBall",
    price: 300,
    img: nebulaCharactersImg.ravager,
    model: "/models/ravager.gltf"
  },
];

export default charactersdata;
