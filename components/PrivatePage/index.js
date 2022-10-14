import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import classnames from "classnames";

export default function PrivatePage({ children, fullHeight = true }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    //TODO move this to loading component
    return (
      <div
        className={classnames({
          [styles.fullHeight]: Boolean(fullHeight),
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
  if (session) {
    return children;
  } else {
    return (
      <div>
        <p>
          Para poder usar Cirilo, necesitas primero identificarte con tu cuenta
          Google
        </p>
        <br />
        <Button variant="contained" onClick={() => signIn()}>
          Inicia Sesión con Google
        </Button>
      </div>
    );
  }
}
