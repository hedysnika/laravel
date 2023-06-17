export interface Product {
    id: string;
    name: string;
    price: string;
    about?: string;
    image: string[];
    category?: string[];
    RAM?: string;
    Processor?: string;
    Screen?: string;
  }
  
const maks: Product[] = [
  {
    id: "161",
    name: "Macbook M1 Pro 16 Inch 1tb",
    price: "6500",
    about: "1TB",
    RAM: "16GB",
    Processor: "M1 Pro",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    Screen: "16 Inch",
  },
  {
    id: "16512",
    name: "Macbook M1 Pro 16 Inch 512Gb",
    price: "5700",
    about: "512GB",
    RAM: "16GB",
    Processor: "M1 Pro",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    Screen: "16 Inch",
  },
  {
    id: "1632",
    name: "Macbook M1 Max 16, 32GB Ram, Inch 1tb",
    price: "8600",
    about: "1TB",
    RAM: "32GB",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    Processor: "M1 Max",
    Screen: "16 Inch",
  },
  {
    id: "14512",
    name: "Macbook M1 Pro 14 Inch 512Gb",
    price: "5100",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    about: "512GB",
    RAM: "16GB",
    Processor: "M1 Pro",
    Screen: "14 Inch",
  },
  {
    id: "141",
    name: "Macbook M1 Pro 14 Inch 1tb",
    price: "5800",
    about: "1TB",
    RAM: "16GB",
    Processor: "M1 Pro",
    Screen: "14 Inch",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
  },
  {
    id: "131256",
    name: "Macbook M2 Air 13 Inch 256Gb",
    price: "3400",
    about: "256GB",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    RAM: "8GB",
    Processor: "M2 Air",
    Screen: "13 Inch",
  },
  {
    id: "131512",
    name: "Macbook M2 Air 13 Inch 512Gb",
    price: "4200",
    about: "512GB",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    RAM: "8GB",
    Processor: "M2 Air",
    Screen: "13 Inch",
  },
  {
    id: "132256",
    name: "Macbook M2 Pro 13 Inch 256Gb",
    price: "3700",
    about: "256GB",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    RAM: "8GB",
    Processor: "M2 Pro",
    Screen: "13 Inch",
  },
  {
    id: "132512",
    name: "Macbook M2 Pro 13 Inch 512Gb",
    price: "4200",
    about: "512GB",
    image: ["https://i.imgur.com/RlZAqNB.png", "https://i.imgur.com/RlZAqNB.png"],
    RAM: "8GB",
    Processor: "M2 Pro",
    Screen: "13 Inch",
  },
];

export default maks;
