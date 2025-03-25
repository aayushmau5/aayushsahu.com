import { useContext, useEffect } from "react";

import { ThemeContext } from "../Theme/themeContext";

export default function Background({ children }) {
  const themeContext = useContext(ThemeContext);

  function randomTransform() {
    const skewX = -30 + Math.floor(Math.random() * 60);
    const skewY = -20 + Math.floor(Math.random() * 40);
    const scale = 0.8 + Math.random() * 0.4;
    const rotation = Math.floor(Math.random() * 360);

    return `skew(${skewX}deg, ${skewY}deg) scale(${scale}) rotate(${rotation}deg)`;
  }

  function getRandomPosition() {
    const posX = 20 + Math.floor(Math.random() * 60);
    const posY = 20 + Math.floor(Math.random() * 60);
    return [posX, posY];
  }

  function addTransparency(hex: string, alpha: number) {
    if (hex.startsWith("#")) {
      hex = hex.slice(1);
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    alpha = Math.min(1, Math.max(0, alpha));

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  useEffect(() => {
    const style = window.getComputedStyle(document.documentElement);
    const accentColor1 = style.getPropertyValue("--theme-one");
    const accentColor2 = style.getPropertyValue("--theme-two");
    const accentColor3 = style.getPropertyValue("--theme-three");
    const accentColor4 = style.getPropertyValue("--theme-four");

    const accentColors = [
      addTransparency(accentColor1, 0.3),
      addTransparency(accentColor2, 0.3),
      addTransparency(accentColor3, 0.3),
      addTransparency(accentColor4, 0.3),
    ];
    const accentIndex = Math.floor(Math.random() * accentColors.length);
    const accentColor = accentColors[accentIndex];
    document.documentElement.style.setProperty("--accent-color", accentColor);

    const abstractBgsElements = document.querySelectorAll(".abstract-bg");

    const firstEl = abstractBgsElements[0] as HTMLDivElement;
    firstEl.style.transform = randomTransform();
    const [posX, posY] = getRandomPosition();
    firstEl.style.background = `radial-gradient(circle at ${posX}% ${posY}%, var(--accent-color) 0%, transparent ${40 + Math.floor(Math.random() * 40)}%)`;

    const secondEl = abstractBgsElements[1] as HTMLDivElement;
    secondEl.style.transform = randomTransform();
    secondEl.style.opacity = "0.6";
    secondEl.style.background = `radial-gradient(circle at ${100 - posX}% ${100 - posY}%, var(--accent-color) 0%, transparent ${40 + Math.floor(Math.random() * 20)}%)`;
  }, [themeContext.theme]);

  return (
    <>
      <div className="abstract-bg"></div>
      <div className="abstract-bg"></div>
      {children}
    </>
  );
}
