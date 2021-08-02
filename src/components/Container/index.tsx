import React from "react";
import styled from "styled-components";

interface Children {
  children: React.ReactNode;
}

const FlexWrapper = styled.div`
  display: flex;
`;

const ContainerWrapper = styled.div`
  width: 1024px;
  margin: 32px;
  text-align: center;
`;

const Container = ({ children }: Children) => {
  return (
    <FlexWrapper>
      <ContainerWrapper>{children}</ContainerWrapper>
    </FlexWrapper>
  );
};

export default Container;
