export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  section: "menu" | "pizza" | "bar";
  image: string;
  available?: boolean;
};

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=80`;

export const MENU: Item[] = [
  // Plats africains
  { id: "m1", section: "menu", category: "Plats Africains", name: "Poulet DG", description: "Poulet braisé, bananes plantains, légumes sautés", price: 4500, image: img("photo-1604908176997-125f25cc6f3d") },
  { id: "m2", section: "menu", category: "Plats Africains", name: "Sauce graine de palme", description: "Poisson fumé, légumes, riz blanc", price: 3500, image: img("photo-1565299624946-b28f40a0ca4b") },
  { id: "m3", section: "menu", category: "Plats Africains", name: "Abobo", description: "Maïs pilé à la sauce d'arachide", price: 2500, image: img("photo-1567620905732-2d1ec7ab7445") },
  { id: "m4", section: "menu", category: "Grillades", name: "Grillades mixtes", description: "Bœuf, poulet, poisson grillés, légumes", price: 6500, image: img("photo-1544025162-d76694265947") },
  { id: "m5", section: "menu", category: "Plats Africains", name: "Attiéké poisson", description: "Semoule de manioc, poisson grillé, sauce tomate", price: 3000, image: img("photo-1606851094291-6efae152bb87") },
  // Européens
  { id: "m6", section: "menu", category: "Plats Européens", name: "Steak frites", description: "Faux filet, frites maison, sauce au choix", price: 5500, image: img("photo-1546964124-0cce460f38ef") },
  { id: "m7", section: "menu", category: "Plats Européens", name: "Poulet rôti", description: "Légumes de saison, pommes de terre", price: 4800, image: img("photo-1598103442097-8b74394b95c6") },
  { id: "m8", section: "menu", category: "Plats Européens", name: "Pasta Carbonara", description: "Spaghetti, lardons, crème, parmesan", price: 3800, image: img("photo-1612874742237-6526221588e3") },
  { id: "m9", section: "menu", category: "Salades", name: "Salade César", description: "Poulet grillé, laitue, parmesan, croûtons", price: 2800, image: img("photo-1546069901-ba9599a7e63c") },
  { id: "m10", section: "menu", category: "Entrées", name: "Bruschetta tomate", description: "Pain grillé, tomates fraîches, basilic", price: 2000, image: img("photo-1572441713132-c542fc4fe282") },
  { id: "m11", section: "menu", category: "Desserts", name: "Mousse au chocolat", description: "Chocolat noir, crème fouettée", price: 2000, image: img("photo-1541783245831-57d6fb0926d3") },
  { id: "m12", section: "menu", category: "Desserts", name: "Salade de fruits", description: "Fruits frais de saison", price: 1800, image: img("photo-1490474418585-ba9bad8fd0ea") },
];

export const PIZZAS: Item[] = [
  { id: "p1", section: "pizza", category: "Classiques", name: "Margherita", description: "Tomate, mozzarella, basilic", price: 3500, image: img("photo-1604382354936-07c5d9983bd3") },
  { id: "p2", section: "pizza", category: "Classiques", name: "Quattro Formaggi", description: "4 fromages fondus", price: 4200, image: img("photo-1574071318508-1cdbab80d002") },
  { id: "p3", section: "pizza", category: "Spéciales", name: "Poulet Africain", description: "Tomate, poulet épicé, oignons, poivrons", price: 4500, image: img("photo-1565299507177-b0ac66763828") },
  { id: "p4", section: "pizza", category: "Calzones", name: "Calzone Végétarien", description: "Légumes du marché, mozzarella", price: 3800, image: img("photo-1571407970349-bc81e7e96d47") },
  { id: "p5", section: "pizza", category: "Spéciales", name: "Spéciale Le Tablier", description: "Recette maison secrète", price: 5000, image: img("photo-1513104890138-7c749659a591") },
  { id: "p6", section: "pizza", category: "Végétariennes", name: "Végétarienne", description: "Champignons, poivrons, oignons, olives", price: 3800, image: img("photo-1601924582970-9238bcb495d9") },
];

export const DRINKS: Item[] = [
  { id: "d1", section: "bar", category: "Cocktails", name: "Cocktail Maison", description: "Rhum, citron, sirop de gingembre, menthe", price: 2500, image: img("photo-1551024506-0bccd828d307") },
  { id: "d2", section: "bar", category: "Cocktails", name: "Pina Colada", description: "Rhum blanc, ananas, lait de coco", price: 2200, image: img("photo-1587223962930-cb7f31384c19") },
  { id: "d3", section: "bar", category: "Jus frais", name: "Bissap Frais", description: "Hibiscus, citron, menthe, sucre de canne", price: 1000, image: img("photo-1546171753-97d7676e4602") },
  { id: "d4", section: "bar", category: "Jus frais", name: "Gingembre Citron", description: "Préparation maison rafraîchissante", price: 800, image: img("photo-1556679343-c7306c1976bc") },
  { id: "d5", section: "bar", category: "Bières", name: "Bière Flag", description: "Bière locale togolaise", price: 1000, image: img("photo-1608270586620-248524c67de9") },
  { id: "d6", section: "bar", category: "Bières", name: "Castel", description: "Bière blonde", price: 900, image: img("photo-1535958636474-b021ee887b13") },
  { id: "d7", section: "bar", category: "Bières", name: "Heineken", description: "Bière internationale", price: 1200, image: img("photo-1618885472179-5e474019f2a9") },
  { id: "d8", section: "bar", category: "Vins", name: "Vin rouge — Verre", description: "Sélection maison", price: 1500, image: img("photo-1510812431401-41d2bd2722f3") },
  { id: "d9", section: "bar", category: "Vins", name: "Vin rouge — Bouteille", description: "Sélection maison", price: 8000, image: img("photo-1553361371-9b22f78e8b1d") },
  { id: "d10", section: "bar", category: "Softs", name: "Coca-Cola", description: "33cl bien frais", price: 700, image: img("photo-1554866585-cd94860890b7") },
];

export const ALL_ITEMS: Item[] = [...MENU, ...PIZZAS, ...DRINKS];
