import {
  KBarProvider,
  Action,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";
import { useRouter } from "next/router";
import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineCopy,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { RiOpenSourceLine } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";

import styles from "./style.module.css";

export default function CommandBar(props) {
  const router = useRouter();

  const actions: Action[] = [
    {
      id: "home",
      name: "Home",
      perform: () => router.push("/"),
      icon: <AiOutlineHome />,
      subtitle: "Home page",
      keywords: "go-home",
      section: "Go To",
    },
    {
      id: "projects",
      name: "Projects",
      perform: () => router.push("/projects"),
      icon: <AiOutlineBulb />,
      keywords: "go-projects",
      section: "Go To",
    },
    {
      id: "blog",
      name: "Blog",
      perform: () => router.push("/blog"),
      icon: <BsPen />,
      keywords: "go-blog",
      section: "Go To",
    },
    {
      id: "about",
      name: "About Me",
      keywords: "go-about",
      section: "Go To",
      perform: () => router.push("/about"),
      icon: <SiAboutdotme />,
    },
    {
      id: "copy",
      name: "Copy URL",
      keywords: "copy-url",
      section: "General",
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <AiOutlineCopy />,
    },
    {
      id: "email",
      name: "Send Email",
      keywords: "send-email",
      section: "General",
      perform: () => window.open("mailto:aayushmau5@gmail.com", "_blank"),
      icon: <AiOutlineMail />,
    },
    {
      id: "source",
      name: "View Source",
      keywords: "view-source",
      section: "General",
      perform: () =>
        window.open("https://github.com/aayushmau5/aayushsahu.com", "_blank"),
      icon: <RiOpenSourceLine />,
    },
    {
      id: "github",
      name: "Github",
      keywords: "go-github",
      section: "Follow",
      perform: () => window.open("https://github.com/aayushmau5", "_blank"),
      icon: <AiOutlineGithub />,
    },
    {
      id: "twitter",
      name: "Twitter",
      keywords: "go-twitter",
      section: "Follow",
      perform: () => window.open("https://twitter.com/aayushmau5", "_blank"),
      icon: <AiOutlineTwitter />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      keywords: "go-linkedin",
      section: "Follow",
      perform: () =>
        window.open("https://linkedin.com/in/aayushmau5", "_blank"),
      icon: <AiOutlineLinkedin />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className={styles.positioner}>
          <KBarAnimator className={styles.animator}>
            <KBarSearch
              placeholder="Search..."
              aria-placeholder="Search..."
              className={styles.searchBar}
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className={styles.renderString}>{item}</div>
        ) : (
          <div
            className={styles.results}
            style={{
              background: active ? "#fff" : "#101114",
              color: active ? "#000" : "#fff",
            }}
          >
            <div className={styles.items}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          </div>
        )
      }
    />
  );
}
