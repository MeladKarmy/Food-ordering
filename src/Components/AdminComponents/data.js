const data = [
  {
    size: {
      small: 5,
      medium: 7,
      large: 10,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    offer: false,
    _id: "6591d055c3712f4ba4e758bd",
    nameEn: "Margherita",
    nameAr: "مارجريتا",
    descriptionEn: "Cheese",
    descriptionAr: "جبنة",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Cheese"],
    toppingsAr: ["مارتزيلا", "جبنة"],
  },
  {
    size: {
      small: 7,
      medium: 9,
      large: 11,
    },
    toppingsPrize: {
      medium: 2,
      large: 3,
    },
    offer: false,
    _id: "6591d075c3712f4ba4e758be",
    nameEn: "Tandoori Paneer",
    nameAr: "تندوري",
    descriptionEn:
      "Spiced paneeer, Onion,Green Capsicum & Red Paprika in Tandoori Sauce",
    descriptionAr: "بانيه متبل، بصل، فلفل أخضر، بابريكا حمراء في صلصة تندوري",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=550",
    quantity: 1,
    toppingsEn: [
      "Muzzarella",
      "Spiced paneeer",
      "Green Capsicum",
      "Tandoori Sauce",
    ],
    toppingsAr: ["مارتزيلا", "صلصة تندوري", "فلفل أخضر", "بانيه متبل،"],
  },
  {
    size: {
      small: 5,
      medium: 6,
      large: 7,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    offer: false,
    _id: "6591d084c3712f4ba4e758bf",
    nameEn: "Veggie Supreme",
    nameAr: "خضروات",
    descriptionEn:
      "Black Olives,Green Capsicum, Mushroom, Onion,Red Paprika, Sweet Corn",
    descriptionAr:
      "زيتون أسود، فليفلة خضراء، مشروم، بصل، بابريكا حمراء، ذرة حلوة",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Mushroom"],
    toppingsAr: ["مارتزيلا", "مشروم"],
  },
  {
    size: {
      small: 5,
      medium: 7,
      large: 10,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    offer: false,
    _id: "6591d098c3712f4ba4e758c0",
    nameEn: "Double Paneer Supreme",
    nameAr: "بانيه دوبل",
    descriptionEn: "Spiced Paneer, Herbed Onion&Green Capsicum, Red Paprika",
    descriptionAr: "بانية متبل، بصل عشبي، فلفل أخضر، بابريكا حمراء",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.3cb382529b41d14d4a041b5cc5e64341.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Cheese", "Red Paprika"],
    toppingsAr: ["مارتزيلا", "بانية متبل", "بابريكا حمراء"],
  },
  {
    size: {
      small: 7,
      medium: 9,
      large: 11,
    },
    toppingsPrize: {
      medium: 2,
      large: 4,
    },
    offer: false,
    _id: "6591d0a6c3712f4ba4e758c1",
    nameEn: "Veggie Kebab Surprise",
    nameAr: "كباب نباتي",
    descriptionEn:
      "Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
    descriptionAr: "كباب نباتي، بصل، فلفل أخضر، طماطم، ذرة حلوة في صلصة تندوري",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.abab1dff179ab8cf95a59f30d6352297.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Kebab", "Tandoori Sauce"],
    toppingsAr: ["مارتزيلا", "صوص التندوري", "كباب"],
  },
  {
    size: {
      small: 8,
      medium: 10,
      large: 12,
    },
    toppingsPrize: {
      medium: 3,
      large: 5,
    },
    offer: false,
    _id: "6591d0b4c3712f4ba4e758c2",
    nameEn: "Chicken Supreme",
    nameAr: "دجاج سوبر",
    descriptionEn: "Herbed Chicken,Schezwan Chicken Meatball,Chicken Tikka",
    descriptionAr: "دجاج بالأعشاب، كرات لحم دجاج شيزوان، دجاج تكا",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.6d53f104f071d304a47440f2fffa7378.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Schezwan Chicken Meatball", "Chicken Tikka"],
    toppingsAr: ["مارتزيلا", "كرات لحم دجاج شيزوان", "دجاج تكا"],
  },
  {
    size: {
      small: 10,
      medium: 15,
      large: 17,
    },
    toppingsPrize: {
      medium: 5,
      large: 7,
    },
    offer: false,
    _id: "6591d0bbc3712f4ba4e758c3",
    nameEn: "Triple Chicken Feast",
    nameAr: "دجاج تريبل",
    descriptionEn:
      "Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
    descriptionAr:
      "دجاج شيزوان، كرات لحم، دجاج بالأعشاب، سجق دجاج، فلفل أخضر، بصل، بابريكا حمراء",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.e4a546e7a8581a60952b99e3fe22987e.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Chicken Sausage", "Schezwan Chicken Meatball"],
    toppingsAr: ["مارتزيلا", "سجق دجاج", "دجاج شيزوان"],
  },
  {
    size: {
      small: 5,
      medium: 7,
      large: 10,
    },
    toppingsPrize: {
      medium: 2,
      large: 4,
    },
    offer: false,
    _id: "6591d0d2c3712f4ba4e758c4",
    nameEn: "Chicken Tikka",
    nameAr: "دجاج تيكا",
    descriptionEn: "Chicken Tikka, Onion, Tomato",
    descriptionAr: "دجاج تكا، بصل، طماطم",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.6d441a65371e941db36c2754586119a8.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Chicken Tikka"],
    toppingsAr: ["مارتزيلا", "دجاج تكا"],
  },
  {
    size: {
      small: 8,
      medium: 9,
      large: 10,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    offer: false,
    _id: "6591d0dec3712f4ba4e758c5",
    nameEn: "Double Cheese",
    nameAr: "جبنه أكسترا",
    descriptionEn: "Extra Cheese on Cheese",
    descriptionAr: "جبنة أضافيه أكثر",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Cheese"],
    toppingsAr: ["مارتزيلا", "جبنة"],
  },
  {
    size: {
      small: 6,
      medium: 7,
      large: 8,
    },
    toppingsPrize: {
      medium: 2,
      large: 3,
    },
    offer: false,
    _id: "6591d0eac3712f4ba4e758c6",
    nameEn: "Italian Chicken Feast",
    nameAr: "دجاج ايطالي",
    descriptionEn: "Herbed Chicken, Onion, Green Capsicum, Red Capsicum ",
    descriptionAr: "دجاج بالأعشاب، بصل، فلفل أخضر، فلفل أحمر",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-chicken-feast.edad91a082e9a16d677722a071487a1c.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Herbed Chicken"],
    toppingsAr: ["مارتزيلا", "دجاج بالأعشاب"],
  },
  {
    size: {
      small: 5,
      medium: 7,
      large: 8,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    offer: false,
    _id: "6591d0f6c3712f4ba4e758c7",
    nameEn: "Tandoori Onion",
    nameAr: "تندوري بصل",
    descriptionEn: "Cheese & Onion in Tandoori sause",
    descriptionAr: "الجبن والبصل في صلصة تندوري",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-onion.98e8cbd306a1166cedbbdbd2a97eade3.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Cheese", "Tandoori sause"],
    toppingsAr: ["مارتزيلا", "جبنة", "صوص التندوري"],
  },
  {
    size: {
      small: 5,
      medium: 7,
      large: 10,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    offer: false,
    _id: "6591d104c3712f4ba4e758c8",
    nameEn: "veggie Pick",
    nameAr: "نباتي",
    descriptionEn:
      "Onion Herbed & Green Capsicum, Red Capsicum, Mushroom, Baby Corn",
    descriptionAr:
      "أعشاب البصل والفلفل الأخضر، الفلفل الأحمر، الفطر، الذرة الصغيرة",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/farmers-pick.794695a631c14d4404057470020be703.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Red Capsicum", "Mushroom", "Green Capsicum", "Onion Herbed"],
    toppingsAr: ["أعشاب البصل", "والفلفل الأخضر", "الفلفل الأحمر", "مشروم"],
  },
  {
    size: {
      small: 6,
      medium: 8,
      large: 10,
    },
    toppingsPrize: {
      medium: 2,
      large: 3,
    },
    offer: false,
    _id: "6591d110c3712f4ba4e758c9",
    nameEn: "Classic Sausage",
    nameAr: "السجق الكلاسيكي",
    descriptionEn:
      "Pizza topped with our Classic Pan sauce, flavorful chicken sausage and cheesy dressing.",
    descriptionAr:
      "بيتزا مغطاة بصوص البان الكلاسيكية ونقانق الدجاج اللذيذة وصلصة الجبنة",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-sausage-pan-personal.fbbfbce57f62a8d8b366db5f66798704.1.jpg?width=550",
    quantity: 1,
    toppingsEn: ["Muzzarella", "Cheese", "Classic Pan sauce"],
    toppingsAr: ["مارتزيلا", "جبنة", "صوص البان"],
  },
  {
    size: {
      small: 9,
      medium: 12,
      large: 15,
    },
    toppingsPrize: {
      medium: 4,
      large: 7,
    },
    offer: false,
    _id: "6591d130c3712f4ba4e758ca",
    nameEn: "Italian Pepperoni & Onion",
    nameAr: "بيبروني ايطالي",
    descriptionEn:
      "Pizza topped with our Chef's Special Italian sauce, crunchy onion, chicken pepperoni and cheesy dressing.",
    descriptionAr:
      "بيتزا مغطاة بصوص الشيف الإيطالي الخاصة، بصل مقرمش، دجاج بيبروني و صوص الجبنة",
    category: {
      _id: "6591747ee7c53542dd464c76",
      nameEn: "PizzA",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-pepperoni-&-onion-pan-personal.b6c0c99c9241f2fce14493773f625dd3.1.jpg?width=550",
    quantity: 1,
    toppingsEn: [
      "Muzzarella",
      "Special Italian sauce",
      "chicken pepperoni",
      "cheesy sauce",
      "crunchy onion",
    ],
    toppingsAr: [
      "مارتزيلا",
      "صوص جبنة",
      "بصل مقرمش",
      "دجاج بيبروني",
      "صوص الشيف الإيطالي",
    ],
  },
  {
    size: {
      small: 5,
      medium: 7,
      large: 10,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    _id: "65aeed03d20781fd10066051",
    nameEn: "tea",
    nameAr: "شاي",
    descriptionEn: "Hut Drink",
    descriptionAr: "مشروب ساخن",
    category: {
      _id: "6591c2c3c3712f4ba4e758b7",
      nameEn: "Drinks",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
    quantity: 1,
    offer: false,
    toppingsEn: ["tea", "n3n3"],
    toppingsAr: ["نعناع", "شاي"],
  },
  {
    size: {
      small: 5,
      medium: 7,
      large: 10,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    _id: "65aeedb944ca8df34a2b6109",
    nameEn: "tea1",
    nameAr: "1شاي",
    descriptionEn: "Hut Drink",
    descriptionAr: "مشروب ساخن",
    category: {
      _id: "6591c2c3c3712f4ba4e758b7",
      nameEn: "Drinks",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
    quantity: 1,
    offer: true,
    offerNumber: 20,
    toppingsEn: ["tea", "n3n3"],
    toppingsAr: ["نعناع", "شاي"],
  },
  {
    size: {
      small: 5,
      medium: 7,
      large: 10,
    },
    toppingsPrize: {
      medium: 1,
      large: 2,
    },
    _id: "65aef60944ca8df34a2b6144",
    nameEn: "tea2",
    nameAr: "3شاي",
    descriptionEn: "Hut Drink",
    descriptionAr: "مشروب ساخن",
    category: {
      _id: "6591c6c7c3712f4ba4e758b9",
      nameEn: "Offers",
    },
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
    quantity: 1,
    offer: true,
    offerNumber: 20,
    toppingsEn: ["tea", "n3n3"],
    toppingsAr: ["نعناع", "شاي"],
  },
];
export default data;
