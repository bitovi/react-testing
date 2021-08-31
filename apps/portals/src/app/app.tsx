import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Title from "./components/title/title";
import PortalContainer from "./components/portal/portal-container";
import PortalProvider from "./components/portal/portal-provider";
import Cat from "./components/cat/cat";
import Dog from "./components/dog/dog";

export default function App() {
  return (
    <LayoutContainer>
      <Title>
        <h1>Pets</h1>
      </Title>

      <PortalProvider>
        <PortalContainer style={{ backgroundColor: "yellow" }} />

        <Content>
          <Switch>
            <Route path="/cat">
              <Cat />
            </Route>
            <Route path="/dog">
              <Dog />
            </Route>
            <p>Please choose path "cat" or "dog".</p>
          </Switch>
        </Content>
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
