import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

interface ElementInterface {
  theme: ThemeInterface;
}

export const Container = styled.div<ElementInterface>`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div<ElementInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const Text = styled.h2<ElementInterface>`
  margin: 0;
  width: 50%;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
`;

export const ButtonContainer = styled.div<ThemeInterface>`
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
  align-items: center;
`;

export const TextButton = styled.h3<ThemeInterface>`
  margin: 0;
  color: ${({ theme }) => theme.color.black};
`;
