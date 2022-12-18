import { Socket } from "@/components/Phoenix/Socket";
import CommandBar from "@/components/React/CommandBar";
import Layout from "@/components/React/Layout";

import "@/styles/globals.css";
import "@/styles/highlight.css";

function MyApp({ Component, pageProps }) {
  return (
    <Socket>
      <CommandBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CommandBar>
    </Socket>
  );
}

export default MyApp;
