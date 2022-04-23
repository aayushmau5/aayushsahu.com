import CommandBar from "@/components/React/CommandBar";
import Layout from "@/components/React/Layout";

import "@/styles/globals.css";
import "@/styles/highlight.css";

function MyApp({ Component, pageProps }) {
  return (
    <CommandBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommandBar>
  );
}

export default MyApp;
