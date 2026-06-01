// Le Tablier brand config
export const WHATSAPP_NUMBER = "22800000000"; // TODO: replace with real WhatsApp number
export const BRAND = {
  name: "Le Tablier",
  tagline: "Cuisine authentique, convivialité sincère",
  address: "Après la pharmacie Shalom, carrefour Bodjona, Agoè Cacavéli, Lomé, Togo",
  hours: "Lundi–Dimanche : 11h00 – 23h00",
  phone: "+228 00 00 00 00",
  instagram: "@restaurant_le_tablier_lome",
  facebook: "Le Tablier Lomé",
};

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const formatFCFA = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
