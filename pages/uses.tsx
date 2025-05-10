import Image from "next/image";
import { PageSEO } from "@/components/SEO";
import styles from "@/styles/Uses.module.css";
import homeStyles from "@/styles/Home.module.css";
import desk from "@/public/desk.jpeg";

export default function Uses() {
  return (
    <>
      <PageSEO
        title="Uses | Aayush Kumar Sahu"
        description="List of things I use in my day to day life"
      />
      <div className={homeStyles.container}>
        <h1>Uses</h1>
        <p>
          Inspired by{" "}
          <a
            className={homeStyles.link}
            href="https://usesthis.com/"
            target="_blank"
            rel="noreferrer"
          >
            usesthis.com
          </a>
        </p>

        <div style={{ width: "100%", height: "auto", margin: "1rem auto" }}>
          <Image src={desk} alt="My Desk" />
        </div>

        <div className={styles.inner}>
          <h3>Editor</h3>
          <ul>
            <li>
              VSCode with Vim extension and some{" "}
              <ExternalLink href="https://github.com/aayushmau5/dotfiles/">
                configuration
              </ExternalLink>
              .
            </li>
            <li>
              And sometimes, NeoVim with{" "}
              <ExternalLink href="https://github.com/aayushmau5/dotfiles/">
                minimal configuration
              </ExternalLink>
              .
            </li>
            <li>
              Font: I alternate between{" "}
              <ExternalLink href={"https://github.com/tonsky/FiraCode"}>
                Fira Code
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://commitmono.com/">
                Commit Mono
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://github.com/zed-industries/zed-fonts">
                Zed Mono
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://juliamono.netlify.app/">
                Julia Mono
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://fonts.adobe.com/fonts/calling-code">
                Calling Code
              </ExternalLink>
              .
            </li>
            <li>
              Theme:{" "}
              <ExternalLink href="https://github.com/antfu/vscode-theme-vitesse">
                Vitesse Dark
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://www.nordtheme.com/ports/visual-studio-code">
                Nord
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme">
                Github Dark
              </ExternalLink>
              .
            </li>
            <li>
              Icons:{" "}
              <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=cdonohue.quill-icons">
                Quill Icons
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons">
                File Icons
              </ExternalLink>
              .
            </li>
          </ul>
          <h3>Terminal</h3>
          <ul>
            <li>
              <ExternalLink href="https://sw.kovidgoyal.net/kitty/">
                Kitty
              </ExternalLink>{" "}
              terminal emulator and{" "}
              <ExternalLink href="https://fishshell.com/">
                fish shell
              </ExternalLink>
              (with vim mode).
            </li>
            <li>
              Font:{" "}
              <ExternalLink href="https://www.nerdfonts.com/">
                FuraCode Nerd Font
              </ExternalLink>
              .
            </li>
            <li>
              Tools:{" "}
              <ExternalLink href="https://github.com/ogham/exa">
                Exa
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://github.com/sharkdp/bat">
                Bat
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://github.com/jethrokuan/z">
                z
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://asdf-vm.com/">
                asdf version manager
              </ExternalLink>
              .
            </li>
          </ul>
          <h3>Apps</h3>
          <ul>
            <li>
              OS:{" "}
              <ExternalLink href="https://pop.system76.com/">
                PopOS!
              </ExternalLink>{" "}
              with Gnome DE.
            </li>
            <li>
              Window/Application management: I don&apos;t use pop-shell tiling
              mode(that comes pre-configured with PopOS). I organise
              applications in workspaces instead.
            </li>
            <li>Launcher: default pop-shell works well enough for me.</li>
            <li>
              Browser: Firefox as primary web browser, with brave and chromium
              for testing purpose.
            </li>
            <li>
              Note taking:{" "}
              <ExternalLink href="https://www.notion.so/">Notion</ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://obsidian.md/">Obsidian</ExternalLink>
              (for local stuff).
            </li>
            <li>
              Todos and task management:{" "}
              <ExternalLink href="https://www.notion.so/">Notion</ExternalLink>.
            </li>
          </ul>
          <h3>Hardware(pretty budget-ish)</h3>
          <ul>
            <li>Laptop: Apple M2 Air.</li>
            <li>
              Laptop(Old but still works): Dell Inspiron 3576(+ AMD iGPU). Works
              pretty well with linux.
            </li>
            <li>
              Keyboard:{" "}
              <ExternalLink href="https://keychron.in/product/keychron-k2-v-2/">
                Keychron K2-V2
              </ExternalLink>
              .
            </li>
            <li>Headphones: Lenovo Ideapad Gaming Headset.</li>
            <li>
              Monitor:{" "}
              <ExternalLink href="https://www.acer.com/us-en/monitors/gaming/nitro-vg0/pdp/UM.QV0AA.S03">
                Acer Nitro VG240YS
              </ExternalLink>
              .
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className={homeStyles.link} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
