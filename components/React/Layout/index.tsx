import { useEffect } from "react";

import styles from "./style.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Rays from "./Nav/Rays";
import Background from "./background";

export default function Layout({ children }) {
  useEffect(() => {
    console.log(
      "%c Hi there!, I see you :)",
      "font-weight: bold; font-size: 50px;color: white; text-shadow: 3px 3px 0 #4a5ae9;",
    );
  }, []);

  return (
    <>
      {/* <Rays /> */}
      <Nav />
      <Background>
        <main className={styles.container}>{children}</main>
      </Background>
      <Footer />
    </>
  );
}
