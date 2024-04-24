import { Dropdown } from "react-bulma-components";
import useTranslations from "../hooks/useTranslations";

export function Switch() {
  const { lang, supportedLangs, setLang } = useTranslations();

  const handleLangChange = (newLang) => {
    setLang(newLang);
    console.log(newLang);
  };

  return (
    <Dropdown value={lang} color="dark" mr={1}>
      {Object.entries(supportedLangs).map(([code, name]) => (
        <Dropdown.Item
          key={code}
          value={code}
          onClick={() => handleLangChange(code)}
          style={{ cursor: "pointer" }}
        >
          {name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
