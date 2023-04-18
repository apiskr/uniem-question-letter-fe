import React from "react";
import { Typography } from "@mui/material";
import { sizes } from "@/constants/sizes";
import { appColor } from "@/constants/appColor";

export const MainHeader = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          borderBlockEnd: `1px solid ${appColor.border}`,
          maxWidth: sizes.pageMaxWidth,
          margin: "auto",
        }}
      >
        <Typography variant="h1">유니음</Typography>
      </header>
    </>
  );
};
