import styled from "@emotion/styled";

export const Calendar = styled("div")(({ theme }) => ({
  ".rdrDefinedRangesWrapper": {
    display: " none",
  },
  marginBottom: "32px",
}));

export const DateDetail = styled("div")(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  display: "inline-flex",
  padding: "12px",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "bold",
}));

export const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > * + *": {
    marginLeft: "16px !important",
  },
  "& + &": {
    marginTop: "32px",
  },
}));

export const Amount = styled("div")(({ theme }) => ({
  color: theme.palette.secondary.main,
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "6px",
  fontWeight: "500",
  padding: "12px",
  height: "32px",
  justifyContent: "center",
  alignItems: "center",
  display: "inline-flex",
  marginRight: "16px",
  fontSize: "12px",
}));

export const DetailsText = styled("span")(({ theme }) => ({
  fontSize: "12px",
}));

export const SaleDetail = styled("div")({
  display: "flex",
  fontSize: "12px",
  "& > * + *": {
    maxWidth: "200px",
    marginLeft: "16px",
  },
  alignItems: "center",
  "& + &": {
    marginTop: "12px",
  },
});
