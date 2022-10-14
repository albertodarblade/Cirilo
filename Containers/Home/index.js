import IconButton from "@mui/material/IconButton";

import { useSession, signOut } from "next-auth/react";

import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";

import { Toolbar, User, UserActions, Action } from "./styles";
import ProductsList from "Containers/Home/components/SalesList";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Button } from "@mui/material";
import { useState } from "react";
import StatsModal from "./components/StatsModal";

export default function Home() {
  const session = useSession();
  const [showModal, setShowModal] = useState(false);
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

      <Action>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => setShowModal(!showModal)}
          startIcon={<EventNoteIcon />}
        >
          Ver Estadísticas
        </Button>
      </Action>
      {showModal && (
        <StatsModal open={showModal} onClose={() => setShowModal(false)} />
      )}
      <ProductsList />
    </div>
  );
}
