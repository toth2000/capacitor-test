import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

interface ChangeTextInterface {
  positive: boolean;
  theme: ThemeInterface;
}

export const Container = styled.div<{ theme: ThemeInterface }>`
  background: ${({ theme }) => theme.color.main};
  display: flex;
  border-radius: 15px;
`;

export const Left = styled.div<{ theme: ThemeInterface }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const Right = styled.div<{ theme: ThemeInterface }>`
  flex: 2;
`;

export const Title = styled.h2<{ theme: ThemeInterface }>`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.color.fourth};
`;

export const ValueText = styled.h2<{ theme: ThemeInterface }>`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.color.fourth};
`;

export const ChangeText = styled.h2<ChangeTextInterface>`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ positive }) => (positive === true ? "green" : "red")};
`;
