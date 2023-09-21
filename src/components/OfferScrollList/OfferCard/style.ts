import styled from "styled-components";
import { ThemeInterface } from "../../../interface/theme";
import { Icon } from "@iconify/react";

interface WrapperInterface {
  borderColor: string;
  theme: ThemeInterface;
}

interface LinkContainerInterface {
  borderColor: string;
  theme: ThemeInterface;
}

export const Wrapper = styled.div<WrapperInterface>`
  width: 45%;
  border: 3px solid ${(props) => props.borderColor};

  display: flex;
  flex-direction: column;
  align-item: flex-start;

`;

export const Container = styled.div<{ theme: ThemeInterface }>`
  flex: 1;
  background-color: ${({ theme }) => theme.color.fourth};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.black};
  padding: 30px 0;
  gap: 30px;
`;

export const ImageContainer = styled.div<{ theme: ThemeInterface }>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  padding: 30px;
  border-radius: 100%;
`;

export const Image = styled.img`
  height: 70px;
  width: 70px;
`;

export const TextContainer = styled.div<{ theme: ThemeInterface }>`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1<{ theme: ThemeInterface }>`
  margin: 0;
  color: ${({ theme }) => theme.color.main};
  font-size: 18px;
`;

export const Description = styled.p<{ theme: ThemeInterface }>`
  marign: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

export const LinkContainer = styled.div<LinkContainerInterface>`
  background-color: ${(props) => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Link = styled.p<{ theme: ThemeInterface }>`
  marign: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

export const ItemIcon = styled(Icon)<{ theme: ThemeInterface }>`
  width: 26px;
  height: 26px;
`;
