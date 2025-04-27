import { useContext, useEffect, useState } from "react";

import { Theme as ThemeType } from "./type";
import defaultDarkTheme from "./defaultDark";
import gruvboxDarkTheme from "./gruvboxDark";
import vitesseDarkTheme from "./vitesseDark";
import everforestDarkTheme from "./everforestDark";
import natureTheme from "./natureDark";
import vintageTheme from "./vintage";
import rosepineDarkTheme from "./rosepineDark";
import rosepineLightTheme from "./rosepineLight";
import { ThemeContext } from "./themeContext";

export default function Theme() {
  const themeContext = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState("default-dark");

  const selectTheme = (theme: string) => {
    setSelectedTheme(theme);
    window.localStorage.setItem("website-theme", theme);
    switch (theme) {
      case "default-dark":
        return changeTheme(defaultDarkTheme);
      case "vitesse-dark":
        return changeTheme(vitesseDarkTheme);
      case "gruvbox-dark":
        return changeTheme(gruvboxDarkTheme);
      case "everforest-dark":
        return changeTheme(everforestDarkTheme);
      case "vintage":
        return changeTheme(vintageTheme);
      case "nature":
        return changeTheme(natureTheme);
      case "rosepine-dark":
        return changeTheme(rosepineDarkTheme);
      case "rosepine-light":
        return changeTheme(rosepineLightTheme);
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
    const selectedTheme = window.localStorage.getItem("website-theme");
    selectTheme(selectedTheme);
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
        <option value="vintage">Vintage</option>
        <option value="nature">Nature</option>
        <option value="rosepine-dark">Rose Pine Dark</option>
        <option value="rosepine-light">Rose Pine Light</option>
      </select>
    </div>
  );
}
