import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function PrivatePage({ children }) {
  const { data: session } = useSession();

  if (session) {
    return children;
  } else {
    return (
      <div>
        <p>Please log in out with your google account</p>
        <br />
        <Button variant="contained" onClick={() => signIn()}>
          Sign in
        </Button>
      </div>
    );
  }
}
