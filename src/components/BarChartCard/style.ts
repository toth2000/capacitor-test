import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

export const Container = styled.div<{ theme: ThemeInterface }>`
  background: ${({ theme }) => theme.color.main};
  display: flex;
  border-radius: 15px;
`;
