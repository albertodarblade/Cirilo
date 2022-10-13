import IconButton from "@mui/material/IconButton";

import { useSession, signOut } from "next-auth/react";

import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";

import { Toolbar, User, UserActions } from "./styles";
import ProductsList from "Containers/components/SalesList";

export default function Home() {
  const session = useSession();

  return (
    <div>
      <Toolbar>
        <User>
          <span> 👋 Hola! {session.data.user.name}</span>
          <UserActions>
            <Avatar
              alt="logged user"
              src={session.data.user.image}
              sx={{
                height: "64px",
                width: "64px",
              }}
            />
            <IconButton onClick={signOut} color="secondary">
              <LogoutIcon />
            </IconButton>
          </UserActions>
        </User>
      </Toolbar>

      <ProductsList />
    </div>
  );
}
