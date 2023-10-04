import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

interface ContainerInterface {
  leftMargin: number;
  rightMargin: number;
  color: string;
  theme: ThemeInterface;
}

interface WrapperInterface {
  color: string;
  theme: ThemeInterface;
}

export const Container = styled.div<ContainerInterface>`
  width: 0;
  height: 0;
  border-left: ${({ leftMargin }) => leftMargin}px solid ${({ color }) => color};
  border-top: 25px solid ${({ color }) => color};
  border-right: ${({ rightMargin }) => rightMargin}px solid
    ${({ color }) => color};
  border-bottom: 150px solid transparent;
`;

export const Wrapper = styled.div<WrapperInterface>`
  background-color: ${({ color }) => color};
  margin: 0;
`;
