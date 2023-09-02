import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

export const Container = styled.div<{ theme: ThemeInterface }>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 15px 0;
`;

export const LineGraphWrapper = styled.div<{ theme: ThemeInterface }>`
  background: ${({ theme }) => theme.color.secondary};
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 5px;
  border-radius: 15px;
`;
