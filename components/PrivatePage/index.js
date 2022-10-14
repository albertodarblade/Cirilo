import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Loading from "components/Loading";

export default function PrivatePage({ children, fullHeight = true }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    //TODO move this to loading component
    return <Loading fullHeight />;
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
