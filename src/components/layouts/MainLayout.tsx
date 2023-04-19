import React from "react";
import styled from "@emotion/styled";
import { sizes } from "@/constants/sizes";
import { MainHeader } from "../organisms/MainHeader";

const Main = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  maxWidth: sizes.pageMaxWidth,
});

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <MainHeader />
      <Main>{children}</Main>
    </>
  );
};

const Absolute = ({ children }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
      }}
    >
      {children}
    </div>
  );
};

const Body = ({ children }: Props) => {
  return <>{children}</>;
};

export const MainLayout = Object.assign(Layout, { Absolute, Body });
