 export const randomPhrase
    = (...phrases: String[]) =>
      phrases[Math.floor(Math.random() * phrases.length)];