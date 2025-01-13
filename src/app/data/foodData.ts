// export const iceCreamData = [
//   {
//     "name": "Cup",
//     "image": "/temp/ice-cream/cup.png",
//     "alt": "Ice Cream cup",
//     "price": null,
//     "variations": [
//       { "name": "1 scoop", "price": 3.75 },
//       { "name": "2 scoops", "price": 4.75 },
//       { "name": "3 scoops", "price": 5.75 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Cone",
//     "image": "/temp/ice-cream/cone.png",
//     "alt": "Ice Cream cone",
//     "price": null,
//     "variations": [
//       { "name": "1 scoop", "price": 4.75 },
//       { "name": "2 scoops", "price": 5.75 },
//       { "name": "3 scoops", "price": 6.75 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Waffle Bowl",
//     "image": "/temp/ice-cream/waffle-bowl.png",
//     "alt": "Ice Cream waffle bowl",
//     "price": null,
//     "variations": [
//       { "name": "1 scoop", "price": 5.75 },
//       { "name": "2 scoops", "price": 6.75 },
//       { "name": "3 scoops", "price": 7.75 }
//     ],
//     "featured": true
//   },
// ];

export const iceCreamData = [
  {
    name: {
      en: "Cup",
      es: "Taza",
    },
    image: "/food/ice-cream/ice-cream-cup.png",
    alt: {
      en: "Ice Cream cup",
      es: "Taza de helado",
    },
    price: null,
    variations: [
      { name: { en: "1 scoop", es: "1 bola" }, price: 3.75 },
      { name: { en: "2 scoops", es: "2 bolas" }, price: 4.75 },
      { name: { en: "3 scoops", es: "3 bolas" }, price: 5.75 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Cone",
      es: "Cono",
    },
    image: "/temp/ice-cream/cone.png",
    alt: {
      en: "Ice Cream cone",
      es: "Cono de helado",
    },
    price: null,
    variations: [
      { name: { en: "1 scoop", es: "1 bola" }, price: 4.75 },
      { name: { en: "2 scoops", es: "2 bolas" }, price: 5.75 },
      { name: { en: "3 scoops", es: "3 bolas" }, price: 6.75 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Waffle Bowl",
      es: "Tazón de waffle",
    },
    image: "/temp/ice-cream/waffle-bowl.png",
    alt: {
      en: "Ice Cream waffle bowl",
      es: "Tazón de waffle con helado",
    },
    price: null,
    variations: [
      { name: { en: "1 scoop", es: "1 bola" }, price: 5.75 },
      { name: { en: "2 scoops", es: "2 bolas" }, price: 6.75 },
      { name: { en: "3 scoops", es: "3 bolas" }, price: 7.75 },
    ],
    featured: true,
  },
  {
    name: {
      en: "New Ice Cream",
      es: "Helado Nuevo",
    },
    image: "/food/ice-cream/new-ice-cream.png",
    alt: {
      en: "Ice Cream waffle bowl",
      es: "Tazón de waffle con helado",
    },
    price: null,
    variations: [
      { name: { en: "1 scoop", es: "1 bola" }, price: 5.75 },
      { name: { en: "2 scoops", es: "2 bolas" }, price: 6.75 },
      { name: { en: "3 scoops", es: "3 bolas" }, price: 7.75 },
    ],
    featured: true,
  },
];


// export const popsiclesData = [
//   {
//     "name": "Cream Base",
//     "image": "/temp/popsicles/cream.png",
//     "alt": "Cream popsicle",
//     "price": 3.99,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Water Based",
//     "image": "/temp/popsicles/water.png",
//     "alt": "Water popsicle",
//     "price": 2.99,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Dipped in Chocolate",
//     "image": "/temp/popsicles/chocolate.png",
//     "alt": "Chocolate popsicle",
//     "price": 7.75,
//     "variations": [],
//     "featured": true
//   }
// ];

export const popsiclesData = [
  {
    name: {
      en: "Cream Base",
      es: "Base de Crema",
    },
    image: "/temp/popsicles/cream.png",
    alt: {
      en: "Cream popsicle",
      es: "Paleta de crema",
    },
    price: 3.99,
    variations: [], // No variations for this item
    featured: false,
  },
  {
    name: {
      en: "Water Base",
      es: "Base de Agua",
    },
    image: "/temp/popsicles/water.png",
    alt: {
      en: "Water popsicle",
      es: "Paleta de agua",
    },
    price: 2.99,
    variations: [], // No variations for this item
    featured: false,
  },
  {
    name: {
      en: "Dipped in Chocolate",
      es: "Cubierta de Chocolate",
    },
    image: "/food/popsicles/chocolate.png",
    alt: {
      en: "Chocolate popsicle",
      es: "Paleta de chocolate",
    },
    price: 7.75,
    variations: [], // No variations for this item
    featured: true,
  },
];


// export const snacksData = [
//   {
//     "name": "Mini Pancakes",
//     "image": "/temp/snacks/minipancakes.png",
//     "alt": "Mini pancakes",
//     "price": null,
//     "variations": [
//       { "name": "With fruit", "price": 9.99 },
//       { "name": "With ice cream", "price": 12.50 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Corn in a cup",
//     "image": "/temp/snacks/elote.png",
//     "price": null,
//     "variations": [
//       { "name": "Medium", "price": 7.50 },
//       { "name": "Large", "price": 8.99 },
//       { "name": "Elote Entero", "price": 5.99 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Strawberries and cream",
//     "image": "/temp/snacks/strawberriesncream.png",
//     "price": 7.50,
//     "variations": [],
//     "featured": true
//   },
//   {
//     "name": "Boxed strawberries",
//     "image": "/temp/snacks/boxed-strawberries.png",
//     "price": 5.75,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Fruit and cream",
//     "image": "/temp/snacks/strawberriesncream.png",
//     "price": 7.25,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Fruit Cup",
//     "image": "/temp/snacks/fruit_cup.png",
//     "price": 6.50,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Dorinachos",
//     "image": "/temp/snacks/dorinachos.png",
//     "price": null,
//     "variations": [
//       { "name": "Md cheese only", "price": 4.99 },
//       { "name": "Md cheese & corn", "price": 5.99 },
//       { "name": "Lg cheese only", "price": 5.99 },
//       { "name": "Lg cheese & corn", "price": 7.99 }
//     ],
//     "featured": true
//   },
//   {
//     "name": "Pepihuates",
//     "image": "/temp/snacks/pepihuates.png",
//     "price": 6.50,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Popcorn",
//     "image": "/temp/snacks/popcorn.png",
//     "price": 2.99,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Maruchan",
//     "image": "/temp/snacks/maruchan.png",
//     "price": null,
//     "variations": [
//       { "name": "Sencilla", "price": 3.99 },
//       { "name": "Chorreada", "price": 8.99 }
//     ],
//     "featured": true
//   },
//   {
//     "name": "Papas Locas",
//     "image": "/temp/snacks/papaslocas.png",
//     "price": null,
//     "variations": [
//       { "name": "Sencillas", "price": 4.99 },
//       { "name": "Preparadas", "price": 7.99 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Chilindrina",
//     "image": "/temp/snacks/chilidrina.png",
//     "price": 6.99,
//     "variations": [],
//     "featured": true
//   },
//   {
//     "name": "Hot Cheetos with Cheese",
//     "image": "/temp/snacks/hotcheetos.png",
//     "price": 4.99,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Chicharrines",
//     "image": "/temp/snacks/chicharinnes.png",
//     "price": 3.99,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Cotton Candy",
//     "image": "/temp/snacks/cotton-candy.png",
//     "price": 3.99,
//     "variations": [],
//     "featured": false
//   },
//   {
//     "name": "Banana Split",
//     "image": "/temp/snacks/bananasplit.png",
//     "price": 7.75,
//     "variations": [],
//     "featured": true
//   }
// ];

export const snacksData = [
  {
    name: {
      en: "Mini Pancakes",
      es: "Mini Panqueques",
    },
    image: "/food/snacks/mini-pancakes.png",
    alt: {
      en: "Mini pancakes",
      es: "Mini panqueques",
    },
    price: null,
    variations: [
      { name: { en: "With fruit", es: "Con fruta" }, price: 9.99 },
      { name: { en: "With ice cream", es: "Con helado" }, price: 12.50 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Corn in a Cup",
      es: "Elote en Vaso",
    },
    image: "/food/snacks/corn-in-cup.png",
    alt: {
      en: "Corn in a cup",
      es: "Elote en vaso",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 7.50 },
      { name: { en: "Large", es: "Grande" }, price: 8.99 },
      { name: { en: "Whole Corn", es: "Elote Entero" }, price: 5.99 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Corn in a Cup2",
      es: "Elote en Vaso2",
    },
    image: "/food/snacks/corn-in-cup2.png",
    alt: {
      en: "Corn in a cup",
      es: "Elote en vaso",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 7.50 },
      { name: { en: "Large", es: "Grande" }, price: 8.99 },
      { name: { en: "Whole Corn", es: "Elote Entero" }, price: 5.99 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Strawberries and Cream",
      es: "Fresas con Crema",
    },
    image: "/food/snacks/strawberries-and-cream.png",
    alt: {
      en: "Strawberries and cream",
      es: "Fresas con crema",
    },
    price: 7.50,
    variations: [],
    featured: true,
  },
  {
    name: {
      en: "Boxed Strawberries",
      es: "Fresas en Caja",
    },
    image: "/temp/snacks/boxed-strawberries.png",
    alt: {
      en: "Boxed strawberries",
      es: "Fresas en caja",
    },
    price: 5.75,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Fruit and Cream",
      es: "Fruta con Crema",
    },
    image: "/temp/snacks/strawberriesncream.png",
    alt: {
      en: "Fruit and cream",
      es: "Fruta con crema",
    },
    price: 7.25,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Fruit Cup",
      es: "Copa de Frutas",
    },
    image: "/food/snacks/fruit-in-cup.png",
    alt: {
      en: "Fruit cup",
      es: "Copa de frutas",
    },
    price: 6.50,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Dorinachos",
      es: "Dorinachos",
    },
    image: "/food/snacks/dorinachos.png",
    alt: {
      en: "Dorinachos",
      es: "Dorinachos",
    },
    price: null,
    variations: [
      { name: { en: "Medium cheese only", es: "Mediano solo queso" }, price: 4.99 },
      { name: { en: "Medium cheese & corn", es: "Mediano queso y elote" }, price: 5.99 },
      { name: { en: "Large cheese only", es: "Grande solo queso" }, price: 5.99 },
      { name: { en: "Large cheese & corn", es: "Grande queso y elote" }, price: 7.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Dorinachos2",
      es: "Dorinachos2",
    },
    image: "/food/snacks/dorinachos2.png",
    alt: {
      en: "Dorinachos",
      es: "Dorinachos",
    },
    price: null,
    variations: [
      { name: { en: "Medium cheese only", es: "Mediano solo queso" }, price: 4.99 },
      { name: { en: "Medium cheese & corn", es: "Mediano queso y elote" }, price: 5.99 },
      { name: { en: "Large cheese only", es: "Grande solo queso" }, price: 5.99 },
      { name: { en: "Large cheese & corn", es: "Grande queso y elote" }, price: 7.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Pepihuates",
      es: "Pepihuates",
    },
    image: "/food/snacks/pepihuates.png",
    alt: {
      en: "Pepihuates",
      es: "Pepihuates",
    },
    price: 6.50,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Popcorn",
      es: "Palomitas",
    },
    image: "/temp/snacks/popcorn.png",
    alt: {
      en: "Popcorn",
      es: "Palomitas",
    },
    price: 2.99,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Maruchan",
      es: "Maruchan",
    },
    image: "/food/snacks/maruchan.png",
    alt: {
      en: "Maruchan",
      es: "Maruchan",
    },
    price: null,
    variations: [
      { name: { en: "Simple", es: "Sencilla" }, price: 3.99 },
      { name: { en: "Loaded", es: "Chorreada" }, price: 8.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Maruchan2",
      es: "Maruchan2",
    },
    image: "/food/snacks/maruchan2.png",
    alt: {
      en: "Maruchan",
      es: "Maruchan",
    },
    price: null,
    variations: [
      { name: { en: "Simple", es: "Sencilla" }, price: 3.99 },
      { name: { en: "Loaded", es: "Chorreada" }, price: 8.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Papas Locas",
      es: "Papas Locas",
    },
    image: "/temp/snacks/papaslocas.png",
    alt: {
      en: "Papas Locas",
      es: "Papas Locas",
    },
    price: null,
    variations: [
      { name: { en: "Simple", es: "Sencillas" }, price: 4.99 },
      { name: { en: "Loaded", es: "Preparadas" }, price: 7.99 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Chilindrina",
      es: "Chilindrina",
    },
    image: "/food/snacks/chilindrina.png",
    alt: {
      en: "Chilindrina",
      es: "Chilindrina",
    },
    price: 6.99,
    variations: [],
    featured: true,
  },
  {
    name: {
      en: "Hot Cheetos with Cheese",
      es: "Hot Cheetos con Queso",
    },
    image: "/food/snacks/hot-cheetos.png",
    alt: {
      en: "Hot Cheetos with cheese",
      es: "Hot Cheetos con queso",
    },
    price: 4.99,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Chicharrines",
      es: "Chicharrines",
    },
    image: "/temp/snacks/chicharinnes.png",
    alt: {
      en: "Chicharrines",
      es: "Chicharrines",
    },
    price: 3.99,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Cotton Candy",
      es: "Algodón de Azúcar",
    },
    image: "/temp/snacks/cotton-candy.png",
    alt: {
      en: "Cotton candy",
      es: "Algodón de azúcar",
    },
    price: 3.99,
    variations: [],
    featured: false,
  },
  {
    name: {
      en: "Banana Split",
      es: "Banana Split",
    },
    image: "/food/snacks/banana-split.png",
    alt: {
      en: "Banana split",
      es: "Banana split",
    },
    price: 7.75,
    variations: [],
    featured: true,
  },
  {
    name: {
      en: "Nachos",
      es: "Nachos",
    },
    image: "/food/snacks/nachos.png",
    alt: {
      en: "nachos",
      es: "nachos",
    },
    price: 7.75,
    variations: [],
    featured: true,
  },
  {
    name: {
      en: "Strawberry Waffles",
      es: "Waffles de fresa",
    },
    image: "/food/snacks/strawberries_waffles.png",
    alt: {
      en: "Strawberry Waffles",
      es: "Waffles de fresa",
    },
    price: 7.75,
    variations: [],
    featured: true,
  },
  {
    name: {
      en: "Banana Waffles",
      es: "Waffles de plátano",
    },
    image: "/food/snacks/waffles.png",
    alt: {
      en: "Banana Waffles",
      es: "Waffles de plátano",
    },
    price: 7.75,
    variations: [],
    featured: true,
  },
];

export const drinksData = [
  {
    name: {
      en: "Aguas Frescas",
      es: "Aguas Frescas",
    },
    image: "/food/drinks/agua-fresca.png",
    alt: {
      en: "Aguas Frescas",
      es: "Aguas Frescas",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 4.99 },
      { name: { en: "Large", es: "Grande" }, price: 5.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Aguas Frescas2",
      es: "Aguas Frescas2",
    },
    image: "/food/drinks/agua-fresca-horchata.png",
    alt: {
      en: "Aguas Frescas",
      es: "Aguas Frescas",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 4.99 },
      { name: { en: "Large", es: "Grande" }, price: 5.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Mineral Water",
      es: "Agua Mineral",
    },
    image: "/temp/drinks/mineral_water.png",
    alt: {
      en: "Mineral Water",
      es: "Agua Mineral",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 4.99 },
      { name: { en: "Large", es: "Grande" }, price: 5.99 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Mineral Water with Fruit",
      es: "Agua Mineral con Fruta",
    },
    image: "/food/drinks/mineral-water-with-fruit.png",
    alt: {
      en: "Mineral Water with Fruit",
      es: "Agua Mineral con Fruta",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 5.99 },
      { name: { en: "Large", es: "Grande" }, price: 6.99 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Clamato",
      es: "Clamato",
    },
    image:"/food/drinks/clamato.png",
    alt: {
      en: "Clamato",
      es: "Clamato",
    },
    price: null,
    variations: [
      { name: { en: "Special", es: "Especial" }, price: 8.99 },
      { name: { en: "Prepared", es: "Preparado" }, price: 12.99 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Mango Smoothie",
      es: "Smoothie de Mango",
    },
    image: "/food/drinks/mango-smoothie.png",
    alt: {
      en: "Mango Smoothie",
      es: "Smoothie de Mango",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 4.99 },
      { name: { en: "Large", es: "Grande" }, price: 6.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Mango Smoothie2",
      es: "Smoothie de Mango2",
    },
    image: "/food/drinks/mango-smoothie2.png",
    alt: {
      en: "Mango Smoothie",
      es: "Smoothie de Mango",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 4.99 },
      { name: { en: "Large", es: "Grande" }, price: 6.99 },
    ],
    featured: true,
  },
  {
    name: {
      en: "Red Drink",
      es: "Bebida Roja",
    },
    image: "/food/drinks/red-drink.png",
    alt: {
      en: "Red Drink",
      es: "Bebida Roja",
    },
    price: null,
    variations: [
      { name: { en: "Medium", es: "Mediano" }, price: 5.50 },
      { name: { en: "Large", es: "Grande" }, price: 6.50 },
      { name: { en: "Medium w/ fruit", es: "Mediano con fruta" }, price: 6.50 },
      { name: { en: "Large w/ fruit", es: "Grande con fruta" }, price: 7.50 },
    ],
    featured: false,
  },
  {
    name: {
      en: "Mexican Sodas",
      es: "Refrescos Mexicanos",
    },
    image: "/food/drinks/soda.png",
    alt: {
      en: "Mexican Sodas",
      es: "Refrescos Mexicanos",
    },
    price: 3.50,
    variations: [],
    featured: false,
  },
];




// export const drinksData = [
//   {
//     "name": "Aguas Frescas",
//     "image": "/temp/drinks/agua-fresca.png",
//     "price": null,
//     "variations": [
//       { "name": "Medium", "price": 4.99 },
//       { "name": "Large", "price": 5.99 }
//     ],
//     "featured": true
//   },
//   {
//     "name": "Mineral Water",
//     "image": "/temp/drinks/mineral_water.png",
//     "price": null,
//     "variations": [
//       { "name": "Medium", "price": 4.99 },
//       { "name": "Large", "price": 5.99 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Mineral Water with Fruit",
//     "image": "/temp/drinks/mineralfruit.png",
//     "price": null,
//     "variations": [
//       { "name": "Medium", "price": 5.99 },
//       { "name": "Large", "price": 6.99 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Clamato",
//     "image": "/temp/drinks/clamato.png",
//     "price": null,
//     "variations": [
//       { "name": "Special", "price": 8.99 },
//       { "name": "Preparado", "price": 12.99 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Mango Smoothie",
//     "image": "/temp/drinks/mineral_water.png",
//     "price": null,
//     "variations": [
//       { "name": "Medium", "price": 4.99 },
//       { "name": "Large", "price": 6.99 }
//     ],
//     "featured": true
//   },
//   {
//     "name": "Red Drink",
//     "image": "/temp/drinks/clamato.png",
//     "price": null,
//     "variations": [
//       { "name": "Medium", "price": 5.50 },
//       { "name": "Large", "price": 6.50 },
//       { "name": "Medium w/ fruit", "price": 6.50 },
//       { "name": "Large w/ fruit", "price": 7.50 }
//     ],
//     "featured": false
//   },
//   {
//     "name": "Mexican Sodas",
//     "image": "/temp/drinks/mineral_water.png",
//     "price": 3.50,
//     "variations": [],
//     "featured": false
//   },
// ]

