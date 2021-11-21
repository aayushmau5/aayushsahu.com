import Head from "next/head";

import SearchBar from "../components/SearchBar";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | Aayush Kumar Sahu</title>
        <meta
          name="description"
          content="Checkout the blogs written by aayushmau5"
        />
      </Head>
      <h1>Blog</h1>
      <SearchBar />
      <h3>Most recent blog</h3>
      None.
    </div>
  );
}
