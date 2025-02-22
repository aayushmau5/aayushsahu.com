export default function Theme() {
  const selectedTheme = (theme: string) => {
    switch (theme) {
      case "default":
        return changeTheme(defaultTheme);
      case "vitesse-dark":
        return changeTheme(vitesseTheme);
      default:
        return changeTheme(defaultTheme);
    }
  };

  function changeTheme(theme: typeof defaultTheme) {
    for (let [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  }

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
        onChange={(e) => selectedTheme(e.target.value)}
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
        <option value="default">Default</option>
        <option value="vitesse-dark">Vitesse Dark</option>
      </select>
    </div>
  );
}

const defaultTheme = {
  "--background": "#101114",
  "--text-color": "#fff",
  "--link-hover": "#fff",
  "--link-color": "#53bcf0",
  "--li-marker": "#5686f5",
  "--home-highlight-color": "#5858585b",
  "--home-next-steps-background": "#0a0a0a",
  "--code-background": "#4d4d4d4d",
  "--view-all-background": "#191919",
  "--view-all-background-hover": "#252525",
  "--projects-paragraph": "#919191",
  "--project-box-background": "#0a0a0a",
  "--books-paragraph": "#919191",
  "--blog-reading-time": "gray",
  "--blog-no-of-blogs": "#919191",
  "--blog-container-hover": "#191919",
  "--blog-container-focus": "rgb(236, 236, 236)",
  "--details-background": "#22272a",
  "--details-focus": "#22272a",
  "--summary-color": "white",
  "--summary-list-color": "white",
  "--tags-background": "#191919",
  "--tags-color": "#eee",
  "--tag-selected": "#191919",
  "--tag-selected-background": "#eee",
  "--input-container-background": "rgb(34, 34, 34)",
  "--container-svg-color": "gray",
  "--input-color": "white",
  "--other-color": "gray",
  "--next-prev-info-color": "gray",
  "--next-prev-container-hover": "#191919",
  "--blog-container-title": "white",
  "--blog-other-info-color": "gray",
  "--blog-caption": "gray",
  "--blog-caption-link": "white",
  "--blog-content-color": "rgba(255, 255, 255, 0.74)",
  "--like-button": "#fff",
  "--like-button-hover": "rgb(199, 73, 73)",
  "--blog-information": "white",
  "--blog-headers": "white",
  "--blog-headers-link": "rgb(83, 188, 240)",
  "--blockquote-background": "#0a0a0a",
  "--blockquote-color": "white",
  "--callout-icon-green": "#56f58b",
  "--callout-background-green": "#1d3329",
  "--callout-icon-red": "#fa4e4e",
  "--callout-background-red": "#472027",
  "--callout-color": "black",
  "--card-background": "#131417",
  "--card-border": "#252932",
  "--code-filename-color": "white",
  "--code-filename-container": "#181818",
  "--codeblock-background": "#2e2e2e",
  "--hidden-expand-background": "#2e2e2e63",
  "--hidden-expand-color": "white",
  "--ol-ul-marker": "rgb(86, 134, 245)",
  "--anchor-color": "rgb(83, 188, 240)",
  "--theme-one": "#21daa2",
  "--theme-two": "#43dce5",
  "--theme-three": "#36c3ef",
  "--theme-four": "#4a5ae9",
  "--nav-links-color": "#999999",
  "--nav-link-active": "white",
  "--nav-link-container-color": "white",
  "--kbar-click": "#fff",
  "--kbar-command": "#fff",
  "--footer-border-top": "rgb(27, 27, 27)",
  "--footer-color": "gray",
  "--footer-color-hover": "white",
  "--users-online-circle": "#43dce5",
  "--spotify-container-background": "rgba(0, 0, 0, 0.2)",
  "--spotify-container-hover": "rgba(0, 0, 0, 0.324)",
  "--spotify-title": "white",
  "--command-bar-shadow": "rgba(0, 0, 0, 0.8)",
  "--command-bar-animator-background": "#1a1c1e",
  "--command-bar-color": "#fff",
  "--command-bar-search-background": "#101114",
  "--command-bar-result-background": "#191a1c",
};

const vitesseTheme = {
  "--background": "#121212",
  "--text-color": "#c3bfb3",
  "--link-hover": "#4c9173",
  "--link-color": "#4c9173",
  "--li-marker": "#c37272",
  "--home-highlight-color": "#5858585b",
  "--home-next-steps-background": "#0a0a0a",
  "--code-background": "#4d4d4d4d",
  "--view-all-background": "#191919",
  "--view-all-background-hover": "#252525",
  "--projects-paragraph": "#919191",
  "--project-box-background": "#0a0a0a",
  "--books-paragraph": "#919191",
  "--blog-reading-time": "gray",
  "--blog-no-of-blogs": "#919191",
  "--blog-container-hover": "#191919",
  "--blog-container-focus": "rgb(236, 236, 236)",
  "--details-background": "#22272a",
  "--details-focus": "#22272a",
  "--summary-color": "white",
  "--summary-list-color": "#7a9f61",
  "--tags-background": "#191919",
  "--tags-color": "#eee",
  "--tag-selected": "#fff",
  "--tag-selected-background": "#7d5750",
  "--input-container-background": "rgb(34, 34, 34)",
  "--container-svg-color": "gray",
  "--input-color": "white",
  "--other-color": "gray",
  "--next-prev-info-color": "gray",
  "--next-prev-container-hover": "#191919",
  "--blog-container-title": "white",
  "--blog-other-info-color": "gray",
  "--blog-caption": "gray",
  "--blog-caption-link": "white",
  "--blog-content-color": "rgba(255, 255, 255, 0.74)",
  "--like-button": "#fff",
  "--like-button-hover": "rgb(199, 73, 73)",
  "--blog-information": "white",
  "--blog-headers": "white",
  "--blog-headers-link": "#7a9f61",
  "--blockquote-background": "#0a0a0a",
  "--blockquote-color": "white",
  "--callout-icon-green": "#56f58b",
  "--callout-background-green": "#1d3329",
  "--callout-icon-red": "#fa4e4e",
  "--callout-background-red": "#472027",
  "--callout-color": "black",
  "--card-background": "#121212cf",
  "--card-border": "rgb(27, 27, 27)",
  "--code-filename-color": "white",
  "--code-filename-container": "#181818",
  "--codeblock-background": "#2e2e2e",
  "--hidden-expand-background": "#2e2e2e63",
  "--hidden-expand-color": "white",
  "--ol-ul-marker": "#c37272",
  "--anchor-color": "#7d5750",
  "--theme-one": "#7a9f61",
  "--theme-two": "#ba9468",
  "--theme-three": "#7d5750",
  "--theme-four": "#c37272",
  "--nav-links-color": "#999999",
  "--nav-link-active": "#4c9173",
  "--nav-link-container-color": "#4c9173",
  "--kbar-click": "#fff",
  "--kbar-command": "#fff",
  "--footer-border-top": "rgb(27, 27, 27)",
  "--footer-color": "gray",
  "--footer-color-hover": "white",
  "--users-online-circle": "#7a9f61",
  "--spotify-container-background": "rgba(0, 0, 0, 0.2)",
  "--spotify-container-hover": "rgba(0, 0, 0, 0.324)",
  "--spotify-title": "white",
  "--command-bar-shadow": "#121212cf",
  "--command-bar-animator-background": "#121212",
  "--command-bar-color": "#fff",
  "--command-bar-search-background": "#121212",
  "--command-bar-result-background": "#7a9f61",
};
