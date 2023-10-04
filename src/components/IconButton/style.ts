import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";
import { Icon } from "@iconify/react";

interface ContainerInterface {
  width: string;
  background: string;
  gap?: string;
  theme: ThemeInterface;
}

interface TextInterface {
  textColor: string;
  theme: ThemeInterface;
}

interface ElementInterface {
  theme: ThemeInterface;
}

export const Container = styled.div<ContainerInterface>`
  display: flex;
  padding: 15px;
  border-radius: 50px;
  background: ${({ background }) => background};
  width: ${({ width }) => width};
  align-items: center;
  gap: ${({ gap }) => gap};
`;

export const Text = styled.p<TextInterface>`
  margin: 0;
  flex: 1;
  text-align: center;
  color: ${({ textColor }) => textColor};
`;

export const ItemIcon = styled(Icon)<ElementInterface>`
  width: 18px;
  height: 18px;
`;
