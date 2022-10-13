import { styled } from "@mui/material";

export const Sale = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  height: "64px",
  "& > * + *": {
    marginLeft: "16px",
  },
});

export const Price = styled("div")(({ theme }) => ({
  color: theme.palette.success.main,
  padding: "8px",
  borderRadius: "8px",
  flexShrink: 0,
}));

export const Name = styled("div")(({ theme }) => ({
  width: "200px",
}));

export const Total = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "64px",
  borderTop: theme.palette.divider,
  fontWeight: "500",
  padding: "16px",
  "& > * + *": {
    marginLeft: "16px !important",
    backgroundColor: theme.palette.success.main,
    color: `${theme.palette.success.contrastText} !important`,
  },
}));

export const ListContent = styled("div")(({ theme }) => ({
  minHeight: "320px",
  backgroundColor: theme.palette.customBackground.main,
  color: theme.palette.customBackground.textColor,
  padding: "16px 0",
}));

export const DateHeader = styled("div")(({ theme }) => ({
  display: "flex",
  fontSize: "18px",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "500",
}));
