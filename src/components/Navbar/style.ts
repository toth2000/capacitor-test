import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

export const Container = styled.div<{ theme: ThemeInterface }>`
  background-color: ${({ theme }) => theme.color.main};
  padding: 20px;
  border-radius: 15px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fourth};
  margin: 0;
`;
