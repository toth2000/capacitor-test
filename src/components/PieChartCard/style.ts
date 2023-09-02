import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

export const Container = styled.div<{ theme: ThemeInterface }>`
  background: ${({ theme }) => theme.color.secondary};
  margin: 0 5px;
  border-radius: 15px;
`;
