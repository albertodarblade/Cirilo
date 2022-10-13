import RegisterProduct from "components/RegisterProduct";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";

import Button from "@mui/material/Button";

import { useSession, signOut } from "next-auth/react";

import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";

import { Action, Toolbar, User, UserActions } from "./styles";
import ProductsList from "Containers/components/SalesList";
import { globalSelector, onViewChange } from "store/slices/global";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector(globalSelector);
  const session = useSession();

  function toggleRegisterForm() {
    dispatch(onViewChange({ showSellRegister: !state.view.showSellRegister }));
  }
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
      {!state.view.showSellRegister && (
        <Action>
          <Button
            onClick={toggleRegisterForm}
            variant={"contained"}
            startIcon={<CreateIcon />}
          >
            Registrar Venta
          </Button>
        </Action>
      )}

      {state.view.showSellRegister && <RegisterProduct />}

      <ProductsList />
    </div>
  );
}
