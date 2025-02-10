// services/translationService.js

const nameTranslations = {
  behrad: "بهراد",
  fatemeh: "فاطمه",
  offBehrad: "آف بهراد",
  offFatemeh: "آف فاطمه",
};

export function translateName(name) {
  return nameTranslations[name] || name;
}
