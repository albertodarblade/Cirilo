import styled from "@emotion/styled";

export const Section = styled("div")({
  margin: "32px 16px",
});

export const Actions = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "32px 0",
  "& > * + *": {
    marginLeft: "32px !important",
  },
});
