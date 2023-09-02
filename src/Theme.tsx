import { ThemeProvider } from "styled-components";
import { ThemeInterface } from "./interface/theme";

const Theme = ({ children }: { children: any }) => {
  const themeVal: ThemeInterface = {
    color: {
      main: "#96B6C5",
      secondary: "#ADC4CE",
      thrid: "#EEE0C9",
      fourth: "#fff",
      alternate: "#F1F0E8",
    },
    breakpoints: {
      mobile: "360px",
      tablet: "768px",
      laptop: "1366px",
    },
  };

  return <ThemeProvider theme={themeVal}> {children} </ThemeProvider>;
};

export default Theme;
