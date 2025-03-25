import { useContext, useEffect, useState } from "react";

import { Theme as ThemeType } from "./type";
import defaultDarkTheme from "./defaultDark";
import gruvboxDarkTheme from "./gruvboxDark";
import vitesseDarkTheme from "./vitesseDark";
import everforestDarkTheme from "./everforestDark";
import { ThemeContext } from "./themeContext";

export default function Theme() {
  const themeContext = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState("default-dark");
  const themes = ["default-dark", "vitesse-dark", "gruvbox-dark"];

  const selectTheme = (theme: string) => {
    setSelectedTheme(theme);
    switch (theme) {
      case "default-dark":
        return changeTheme(defaultDarkTheme);
      case "vitesse-dark":
        return changeTheme(vitesseDarkTheme);
      case "gruvbox-dark":
        return changeTheme(gruvboxDarkTheme);
      case "everforest-dark":
        return changeTheme(everforestDarkTheme);
      default:
        return changeTheme(defaultDarkTheme);
    }
  };

  function changeTheme(theme: ThemeType) {
    for (let [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  }

  useEffect(() => {
    // randomly select one of themes by default
    selectTheme(themes[Math.floor(Math.random() * themes.length)]);
  }, []);

  useEffect(() => {
    themeContext.setTheme(selectedTheme);
  }, [themeContext, selectedTheme]);

  return (
    <div>
      <span
        style={{
          color: "var(--text-color)",
          fontSize: "0.9rem",
          marginLeft: "4px",
        }}
      >
        Theme:
      </span>
      <select
        title="Theme"
        onChange={(e) => selectTheme(e.target.value)}
        value={selectedTheme}
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "1px solid var(--text-color)",
          color: "var(--text-color)",
          padding: "5px",
          borderRadius: "5px",
          margin: "0 0 1.5rem 7px",
        }}
      >
        <option value="default-dark">Default Dark</option>
        <option value="vitesse-dark">Vitesse Dark</option>
        <option value="gruvbox-dark">GruvBox Dark</option>
        <option value="everforest-dark">Everforest Dark</option>
      </select>
    </div>
  );
}
