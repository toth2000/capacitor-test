import { VictoryLine } from "victory";
import { ChangeText, Container, Left, Right, Title, ValueText } from "./style";

const LineGraphCard = ({
  title,
  value,
  changeText,
  positive
}: {
  title: string;
  value: string;
  changeText: string;
  positive: boolean
}) => {
  interface Data {
    x: number;
    y: number;
  }
  const data: Data[] = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 6 },
  ];
  return (
    <Container>
      <Left>
        <Title>{title}</Title>
        <ValueText>{value}</ValueText>
        <ChangeText positive={positive}>{changeText}</ChangeText>
      </Left>
      <Right>
        <VictoryLine data={data} style={{ data: { stroke: "#122a31" } }} />
      </Right>
    </Container>
  );
};

export default LineGraphCard;
