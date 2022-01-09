import styles from "./style.module.css";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
