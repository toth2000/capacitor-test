import { VictoryBar } from "victory";
import { Container } from "./style";

const BarChartCard = () => {
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
      <VictoryBar
        horizontal
        data={data}
        categories={{ x: ["dogs", "cats", "mice"] }}
      />
    </Container>
  );
};

export default BarChartCard;
