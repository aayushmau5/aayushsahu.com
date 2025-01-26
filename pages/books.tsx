import { PageSEO } from "@/components/SEO";
import styles from "@/styles/Books.module.css";

export default function Books() {
  return (
    <>
      <PageSEO title="Books | Aayush Sahu" description="Books I have read" />
      <div className={styles.container}>
        <h1>Books</h1>
        <p className={styles.para}>
          List of books I have read. This doesn&apos;t contain every book i have
          read because i don&apos;t remember them.
        </p>
        <p className={styles.para}>
          I&apos;m not an avid book reader but i like to read books whenever i
          feel like reading something.
        </p>

        <h3 className={styles.genre}>Tech</h3>
        <p className={styles.remarks}>Tech related books.</p>
        <ul>
          <li>
            Elixir in Action by Saša Juric
            <p className={styles.book_remarks}>
              Great book for elixir beginners!
            </p>
          </li>
          <li>
            Docker in Action
            <p className={styles.book_remarks}>Docker is cool!</p>
          </li>
          <li>
            Phoenix in Action by Geoffrey Lessel
            <p className={styles.book_remarks}>
              Nice book about phoenix and stuff. Not much about LiveView though.
            </p>
          </li>
          <li>
            Programming Ecto
            <p className={styles.book_remarks}>
              Ecto is the ORM of elixir world. It&apos;s pretty neat!
            </p>
          </li>
          <li>Programming Phoenix LiveView</li>
          <li>
            High Performace Browser Networking(hpbn.co) by Ilya Grigorik
            <p className={styles.book_remarks}>
              Most of the relevant stuff about networking. Highly recommend this
              book for web devs!
            </p>
          </li>
          <li>
            Concurrent Data Processing in Elixir by Svilen Gospodinov
            <p className={styles.book_remarks}>
              Task, GenServer, GenStage, Flow & Broadway go brrrrrrr!
            </p>
          </li>
        </ul>

        <h3 className={styles.genre}>Fiction</h3>
        <p className={styles.remarks}>Fiction, Sci-Fi, etc.</p>
        <ul>
          <li>
            Dark Matter by Blake Crouch
            <p className={styles.book_remarks}>
              Sci-fi, thriller. One of the first sci-fi books I read in two
              days!
            </p>
          </li>
          <li>
            Recursion by Blake Crouch
            <p className={styles.book_remarks}>
              Sci-fi, thriller. It is pretty recursive!
            </p>
          </li>
          <li>
            Sherlock Holmes
            <p className={styles.book_remarks}>The game is afoot!</p>
          </li>
          <li>
            Fahrenheit 451 by Ray Bradbury
            <p className={styles.book_remarks}>Introspective.</p>
          </li>
          <li>
            1984 by George Orwell
            <p className={styles.book_remarks}>
              What a dsytopian world we live in.
            </p>
          </li>
          <li>
            Animal Farm by George Orwell
            <p className={styles.book_remarks}>
              Listen to Animals by Pink Floyd after reading this book.
            </p>
          </li>
          <li>
            Project Hail Mary by Andry Weir
            <p className={styles.book_remarks}>
              Sci-fi, Space. Liked it very much!
            </p>
          </li>
          <li>
            The Shadow of the Wind by Carlos Ruiz Zafón
            <p className={styles.book_remarks}>
              Fiction. Didn&apos;t expected to like this book as much as i like
              it now.
            </p>
          </li>
          <li>
            The Stranger by Albert Camus
            <p className={styles.book_remarks}>
              Absurdism: &quot;a philosophy based on the belief that the
              universe is irrational and meaningless and that the search for
              order brings the individual into conflict with the universe&quot;
            </p>
          </li>
          <li>
            The Book Thief by Markus Zusak
            <p className={styles.book_remarks}>Heartbreaking.</p>
          </li>
          <li>
            Almond by Won-pyung Sohn
            <p className={styles.book_remarks}>
              Alexithymia: the inability to identify and express one&apos;s
              feelings.
            </p>
          </li>
          <li>
            Sphere by Michael Crichton
            <p className={styles.book_remarks}>
              Insane sci-fi and thriller. much recommend.
            </p>
          </li>
          <li>
            The Three Body Problem trilogy by Liu Cixin
            <ul>
              <li>The Three-Body Problem</li>
              <li>The Dark Forest</li>
              <li>Death&apos;s end</li>
            </ul>
            <p className={styles.book_remarks}>
              Holy shit! The fastest I finished 3 books back to back.
            </p>
          </li>
          <li>
            The Bell Jar by Slyvia Plath
            <p className={styles.book_remarks}>
              Can write a whole essay on this.
            </p>
          </li>
        </ul>

        <h3 className={styles.genre}>Next reading list:</h3>
        <ul>
          <li>Designing Data-Intensive Applications</li>
          <li>Structure and Interpretation of Computer Programs</li>
          <li>Soul of new machine</li>
          <li>Black book of gaming engine</li>
          <li>The Hitchhiker&apos;s Guide to the Galaxy</li>
          <li>Pale blue dot by Carl Sagan</li>
          <li>Astronomy for people in a hurry</li>
        </ul>
      </div>
    </>
  );
}
