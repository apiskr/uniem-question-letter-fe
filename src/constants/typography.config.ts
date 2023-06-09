import { TypographyOptions } from "@mui/material/styles/createTypography";
import { appColor } from "./appColor";

export const configTypography: TypographyOptions = {
  fontFamily: ["Pretendard", "sans-serif"].join(","),
  h1: { fontSize: 16, fontWeight: 800 },
  h2: { fontSize: 26 },
  h3: { fontSize: 18, fontWeight: "bold" },
  body1: {
    fontSize: 16,
    letterSpacing: "1px",
  },
  body2: { fontSize: 12, fontWeight: 400, color: appColor.textSecondary },
};
