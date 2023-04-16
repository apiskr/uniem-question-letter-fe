import { BreakpointsOptions } from "@mui/material";
import { breakPoints } from "../../constants/breakPoints";

export const configMuiBreakpoints: BreakpointsOptions = {
  values: {
    ...breakPoints,
  },
};
