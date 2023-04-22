import React from "react";
import Button from "@mui/material/Button";
import { appColor } from "@/constants/appColor";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};

export const ButtonSelect = ({ children }: Props) => {
  return (
    <StyledButton variant="outlined">
      {children}
      <ArrowForwardIosIcon color="primary" />
    </StyledButton>
  );
};

const StyledButton = styled(Button)({
  backgroundColor: appColor.backgroundSecondary,
  height: "3rem",
  color: appColor.textSecondary,
  display: "flex",
  justifyContent: "space-between",
});
