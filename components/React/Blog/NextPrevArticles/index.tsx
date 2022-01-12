import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import SeparatorSvg from "../../SeparatorSvg";
import styles from "./style.module.css";

export default function NextPrevArticles({ recommendedPostList }) {
  return (
    <>
      <SeparatorSvg stroke={"gray"} />
      <p className={styles.other}>Other articles</p>
      <div className={styles.container}>
        {recommendedPostList.prev ? (
          <ShowArticle article={recommendedPostList.prev} prev />
        ) : null}
        {recommendedPostList.next ? (
          <ShowArticle article={recommendedPostList.next} />
        ) : null}
      </div>
    </>
  );
}

function ShowArticle({ article, prev = false }) {
  return (
    <a
      href={`/blog/${article.slug}`}
      className={`${styles.links} ${!prev ? styles.nextPlacement : ""}`}
    >
      <p className={`${styles.info} ${!prev ? styles.nextArticle : ""}`}>
        {prev ? (
          <>
            <FiArrowLeft /> Previous article
          </>
        ) : (
          <>
            Next article <FiArrowRight />
          </>
        )}
      </p>
      {article.title}
    </a>
  );
}
