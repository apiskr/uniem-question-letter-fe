import React from "react";
import styled from "@emotion/styled";
import { getChildrenByName } from "@/lib/utils/getChildrenByName";
import { isEmpty } from "@/lib/utils/isEmpty";
import { Empty } from "../atoms";
import { sizes } from "@/constants/sizes";

const Layout = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: sizes.pageMaxWidth,
  margin: "auto",
});

type Props = { children: React.ReactNode };

const Main = ({ children }: Props) => {
  const arrayBodyComponenets = getChildrenByName(children, "Body");
  const arrayAbsoluteComponenets = getChildrenByName(children, "Absolute");
  const arrayMainCtaComponenets = getChildrenByName(children, "MainCta");

  return (
    <Layout>
      {isEmpty(arrayAbsoluteComponenets) || arrayAbsoluteComponenets}
      {isEmpty(arrayBodyComponenets) || arrayBodyComponenets}
      <Empty height="2rem" />
      {isEmpty(arrayMainCtaComponenets) || arrayMainCtaComponenets}
    </Layout>
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

const MainCta = ({ children }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 50,
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};

export const MainLayout = Object.assign(Main, { Absolute, Body, MainCta });
