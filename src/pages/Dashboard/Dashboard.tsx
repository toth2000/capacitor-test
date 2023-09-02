import LineGraphCard from "../../components/LineGraphCard";
import PieChartCard from "../../components/PieChartCard";
import { Container, LineGraphWrapper } from "./style";

const Dashboard = () => {
  return (
    <Container>
      <LineGraphWrapper>
        <LineGraphCard
          title="Total Visits"
          value="325K"
          changeText="+325K"
          positive={true}
        />
        <LineGraphCard
          title="Total Visits"
          value="325K"
          changeText="+325K"
          positive={false}
        />
      </LineGraphWrapper>
      <PieChartCard />
    </Container>
  );
};

export default Dashboard;
