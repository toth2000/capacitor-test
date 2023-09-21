import styled from "styled-components";
import { ThemeInterface } from "../../../interface/theme";
import { Icon } from "@iconify/react";

interface WrapperInterface {
  theme: ThemeInterface;
}

interface LinkContainerInterface {
  theme: ThemeInterface;
}

export const Wrapper = styled.div<WrapperInterface>`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

export const ImageContainer = styled.div<{ theme: ThemeInterface }>`
  display: flex;
  flex: 1;
  margin-top: 10px;
  box-shadow: 0px 1px ${({ theme }) => theme.color.fourth};
  margin-bottom: 1px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h1<{ theme: ThemeInterface }>`
  margin: 0;
  color: ${({ theme }) => theme.color.main};
  font-size: 18px;
  align-self: start;
`;

export const LinkContainer = styled.div<LinkContainerInterface>`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Link = styled.p<{ theme: ThemeInterface }>`
  marign: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.alternate};
`;

export const ItemIcon = styled(Icon)<{ theme: ThemeInterface }>`
  width: 26px;
  height: 26px;
`;
