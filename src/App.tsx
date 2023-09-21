import { BrowserRouter, Route, Routes } from "react-router-dom";
import Theme from "./Theme";
import BottomMenu from "./components/BottomMenu";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Container, BottomMenuWrapper, NavBarWrapper } from "./style";
import Analytics from "./pages/Analytics";
import DashboardHeader from "./components/DashboardHeader";
import { dashboardOffers } from "./constant/offers";

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        {/* <Container>
          <NavBarWrapper>
            <Navbar />
          </NavBarWrapper>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
          <BottomMenuWrapper>
            <BottomMenu />
          </BottomMenuWrapper>
        </Container> */}
        <DashboardHeader
          leftIcon="ph:meta-logo-bold"
          rightIcon="ic:outline-settings"
          offers={dashboardOffers}
        />
      </Theme>
    </BrowserRouter>
  );
};

export default App;
