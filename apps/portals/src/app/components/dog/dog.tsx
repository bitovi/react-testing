import React from "react";
import styled from "styled-components";
import Portal from "../portal/portal";

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 50px;
`;

export default function Dog() {
  const emoji = "🐕";

  return (
    <span aria-label="Dog" role="img">
      {emoji}
    </span>
  );
}
