// services/translationService.js

const dayTranslations = {
      saturday: "شنبه",
      sunday: "یکشنبه",
      monday: "دوشنبه",
      tuseday: "سه شنبه",
      wednesday: "چهارشنبه",
      thursday: "پنجشنبه",
      friday: "جمعه",
    };
    
    export function translateDay(day) {
      return dayTranslations[day] || day;
    }
    