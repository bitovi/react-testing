import React from "react";
import styled from "styled-components";
import Title from "./title";
import PortalContainer from "../portal/portal-container";
import PortalProvider from "../portal/portal-provider";

export default function App({
  children,
  title
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <LayoutContainer>
      <Title>
        <h1>{title}</h1>
      </Title>
      <PortalProvider>
        <PortalContainer style={{ backgroundColor: "yellow" }} />

        <Content>{children}</Content>
      </PortalProvider>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px auto;
  margin: 0;
  padding: 0;
  position: relative;
`;

const Content = styled.div`
  align-items: center;
  border: 2px solid black;
  display: flex;
  font-size: 144px;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-content: center;
`;
