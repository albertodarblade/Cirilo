import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    customBackground: {
      main: "#F2F5F7",
      textColor: "#37517e",
    },
    primary: {
      main: "#2EAD4B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#01B9FF",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
