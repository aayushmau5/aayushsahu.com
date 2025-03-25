import { Socket } from "@/components/Phoenix/Socket";
import CommandBar from "@/components/React/CommandBar";
import Layout from "@/components/React/Layout";
import { ThemeProvider } from "@/components/React/Theme/themeContext";

import "@/styles/globals.css";
import "@/styles/highlight.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Socket>
        <CommandBar>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CommandBar>
      </Socket>
    </ThemeProvider>
  );
}

export default MyApp;
