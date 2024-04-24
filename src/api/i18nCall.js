import { langUrl } from "../config/i18nConfig";

export function fetchTranslations(lang) {
  return new Promise((resolve, reject) => {
    fetch(langUrl.replace("{lang}", lang))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
