import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Portal from "../portal/portal";

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 50px;
`;

const Button = styled.button`
  font-size: 24px;
  height: 50px;
  margin-left: 20px;
  padding: 10px;
  width: 100px;
`;

export default function Cat() {
  const [count, setCount] = useState(1);
  const emoji = "🐈";

  return (
    <>
      <Portal>
        <Content>
          <Link to="/dog">Dog?</Link>
          <Button onClick={() => setCount(current => current + 1)}>
            Moar!
          </Button>
          <Button
            onClick={() =>
              setCount(current => (current <= 1 ? 1 : current - 1))
            }
          >
            Less
          </Button>
        </Content>
      </Portal>

      <span aria-label="Cat" role="img">
        {emoji.repeat(count)}
      </span>
    </>
  );
}
