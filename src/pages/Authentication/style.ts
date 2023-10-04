import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";
import { Icon } from "@iconify/react";

interface ElementInterface {
  theme: ThemeInterface;
}

export const Container = styled.div<ElementInterface>`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p<ElementInterface>`
  margin: 0;
`;

export const LoginContainer = styled.div<ElementInterface>`
  padding: 20px 15px 0 0;
  display: flex;
  justify-content: end;
`;

export const HeroContainer = styled.div<ElementInterface>`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1<ElementInterface>`
  margin: 0;
  color: ${({ theme }) => theme.color.main};
`;

export const ItemIcon = styled(Icon)<ElementInterface>`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.main};
`;

export const ButtonContainer = styled.div<ElementInterface>`
  display: flex;
  margin-top: 25px;
  width: 75%;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
