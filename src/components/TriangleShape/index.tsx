import React from "react";
import { useDimensions } from "../../hooks/useDimensions";
import { Container, Wrapper } from "./style";

const TriangleShape = ({
  color,
  children,
}: {
  color: string;
  children?: React.ReactNode;
}) => {
  const { screenSize } = useDimensions();

  return (
    <>
      <Wrapper color={color}>{children}</Wrapper>
      <Container
        color={color}
        leftMargin={screenSize.width * 0.25}
        rightMargin={screenSize.width * 0.75}
      ></Container>
    </>
  );
};

export default TriangleShape;
