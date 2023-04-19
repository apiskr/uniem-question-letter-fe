import React from "react";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { appColor } from "@/constants/appColor";

export const MainTextField = styled(TextField)(() => ({
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: appColor.border,
  },

  ".MuiOutlinedInput-notchedOutline:hover": {
    borderColor: appColor.border,
  },
  ".MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: appColor.inputBackground,
  },
}));
