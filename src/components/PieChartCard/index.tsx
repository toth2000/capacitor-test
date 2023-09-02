import { Container } from "./style";
import { VictoryPie } from "victory";

const PieChartCard = () => {
  interface Data {
    x: string;
    y: number;
  }

  const data: Data[] = [
    { x: "Desktop", y: 35 },
    { x: "Mobile", y: 40 },
    { x: "Tablet", y: 55 },
  ];

  return (
    <Container>
      <VictoryPie data={data} innerRadius={100} labelPlacement={"perpendicular"} />
    </Container>
  );
};

export default PieChartCard;
