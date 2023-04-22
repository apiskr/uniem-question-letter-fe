import React from "react";
import Stack from "@mui/material/Stack";
import { Empty } from "@/components/atoms/Empty";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const SectionLayout = ({ title, children }: Props) => {
  return (
    <Stack component="section" sx={{ width: "90%" }} spacing={2}>
      <Empty height="0.1rem" />
      <Typography variant="h3">{title}</Typography>
      {children}
    </Stack>
  );
};
