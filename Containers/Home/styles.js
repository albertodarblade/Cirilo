import { styled } from "@mui/material";

export const Toolbar = styled("div")(({ theme, ...props }) => {
  return {
    backgroundColor: theme.palette.background.default,
    top: 0,
    display: "flex",
    padding: "0 16px",
    alignItems: "center",
    justifyContent: "Center",
    fontWeight: "500",
    padding: "32px 0",
  };
});

export const User = styled("div")({
  display: "flex",
  fontSize: "20px",
  flexDirection: "column",
  alignItems: "center",
  "& > * + *": {
    marginTop: "16px",
  },
});

export const UserActions = styled("div")({
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: "8px !important",
  },
});

export const Action = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "0px 0 32px 0",
});
