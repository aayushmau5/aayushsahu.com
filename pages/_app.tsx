import Layout from "@/components/React/Layout";

import "@/styles/globals.css";
import "@/styles/highlight.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
