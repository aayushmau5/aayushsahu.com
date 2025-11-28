import { useContext, useEffect, useState } from "react";

import { Theme as ThemeType } from "./type";
import defaultDarkTheme from "./defaultDark";
import gruvboxDarkTheme from "./gruvboxDark";
import vitesseDarkTheme from "./vitesseDark";
import everforestDarkTheme from "./everforestDark";
import natureTheme from "./natureDark";
import rosepineDarkTheme from "./rosepineDark";
import { ThemeContext } from "./themeContext";
import styles from "./style.module.css";

interface ThemeOption {
  id: string;
  name: string;
  theme: ThemeType;
  background: string;
  accents: string[];
}

const themes: ThemeOption[] = [
  {
    id: "default-dark",
    name: "Default",
    theme: defaultDarkTheme,
    background: "#101114",
    accents: ["#21daa2", "#43dce5", "#36c3ef", "#4a5ae9"],
  },
  {
    id: "vitesse-dark",
    name: "Vitesse",
    theme: vitesseDarkTheme,
    background: "#121212",
    accents: ["#7a9f61", "#ba9468", "#7d5750", "#c37272"],
  },
  {
    id: "gruvbox-dark",
    name: "Gruvbox",
    theme: gruvboxDarkTheme,
    background: "#1d2021",
    accents: ["#b8bb26", "#8ec07c", "#83a598", "#d3869b"],
  },
  {
    id: "everforest-dark",
    name: "Everforest",
    theme: everforestDarkTheme,
    background: "#272e33",
    accents: ["#a7c080", "#7fbbb3", "#83c092", "#d699b6"],
  },
  {
    id: "nature",
    name: "Nature",
    theme: natureTheme,
    background: "#141a15",
    accents: ["#7caa43", "#8fb286", "#5a8d7d", "#a68c6e"],
  },
  {
    id: "rosepine-dark",
    name: "Rosé Pine",
    theme: rosepineDarkTheme,
    background: "#191724",
    accents: ["#f6c177", "#9ccfd8", "#31748f", "#c4a7e7"],
  },
];

export default function Theme() {
  const themeContext = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState("default-dark");

  const selectTheme = (themeId: string) => {
    setSelectedTheme(themeId);
    window.localStorage.setItem("website-theme", themeId);
    const themeOption = themes.find((t) => t.id === themeId);
    if (themeOption) {
      changeTheme(themeOption.theme);
    } else {
      changeTheme(defaultDarkTheme);
    }
  };

  function changeTheme(theme: ThemeType) {
    for (let [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("website-theme");
    selectTheme(storedTheme || "default-dark");
  }, []);

  useEffect(() => {
    themeContext.setTheme(selectedTheme);
  }, [themeContext, selectedTheme]);

  return (
    <>
      <p
        style={{
          color: "inherit",
          fontSize: "0.9rem",
          marginLeft: "4px",
          marginBottom: "0.6rem",
        }}
      >
        Theme:
      </p>
      <div
        className={styles.themeGrid}
        role="radiogroup"
        aria-label="Theme selection"
      >
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={`${styles.themeSwatch} ${
              selectedTheme === theme.id ? styles.selected : ""
            }`}
            onClick={() => selectTheme(theme.id)}
            role="radio"
            aria-checked={selectedTheme === theme.id}
            aria-label={`${theme.name} theme`}
            title={theme.name}
          >
            <div
              className={styles.colorPreview}
              style={{ backgroundColor: theme.background }}
            >
              <div className={styles.accentStripe}>
                {theme.accents.map((accent, i) => (
                  <span key={i} style={{ backgroundColor: accent }} />
                ))}
              </div>
              <div className={styles.checkmark}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className={styles.themeName}>{theme.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}
