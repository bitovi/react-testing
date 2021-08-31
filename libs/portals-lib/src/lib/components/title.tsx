import React from "react";
import styled from "styled-components";

const TitleStyled = styled.div``;

export default function Title({ children }: React.PropsWithChildren<unknown>) {
  return <TitleStyled>{children}</TitleStyled>;
}
