import styles from "./styles.module.css";
import classnames from "classnames";

function Loading({ fullHeight = false }) {
  return (
    <div
      className={classnames({
        [styles.fullHeight]: Boolean(fullHeight),
        [styles.normal]: !fullHeight,
      })}
    >
      <div className={styles["sk-folding-cube"]}>
        <div className={`${styles["sk-cube1"]} ${styles["sk-cube"]}`} />
        <div className={`${styles["sk-cube2"]} ${styles["sk-cube"]}`} />
        <div className={`${styles["sk-cube4"]} ${styles["sk-cube"]}`} />
        <div className={`${styles["sk-cube3"]} ${styles["sk-cube"]}`} />
      </div>
    </div>
  );
}

export default Loading;
