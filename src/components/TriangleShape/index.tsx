import { useDimensions } from "../../hooks/useDimensions";
import { Container } from "./style";

const TriangleShape = ({ color }: { color: string }) => {
  const { screenSize } = useDimensions();

  return (
    <Container
      color={color}
      leftMargin={screenSize.width * 0.25}
      rightMargin={screenSize.width * 0.75}
    ></Container>
  );
};

export default TriangleShape;
