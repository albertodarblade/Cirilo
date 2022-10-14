import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function PrivatePage({ children }) {
  const { data: session } = useSession();

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
