import styled from "styled-components";
import { ThemeInterface } from "../../../interface/theme";

interface WrapperInterface {
  borderColor: string;
  theme: ThemeInterface;
}

interface ButtonInterface {
  color: string;
  theme: ThemeInterface;
}

export const Wrapper = styled.div<WrapperInterface>`
  width: 45%;
  border: 3px solid ${(props) => props.borderColor};
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  border-radius: 15px;
`;

export const Container = styled.div<{ theme: ThemeInterface }>`
  flex: 1;
  background-color: ${({ theme }) => theme.color.fourth};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: none;
  padding: 15px 0;
  border-radius: 15px;
  gap: 8px;
`;

export const TextContainer = styled.div<{ theme: ThemeInterface }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

export const Title = styled.h1<{ theme: ThemeInterface }>`
  margin: 0 0 0 10px;
  padding: 0;
  color: ${({ theme }) => theme.color.main};
  font-size: 18px;
  align-self: start;
`;

export const Description = styled.p<{ theme: ThemeInterface }>`
  margin: 0 0 0 10px;
  padding: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

export const Button = styled.button<ButtonInterface>`
  border: none;
  background: ${(props) => props.color};
  padding: 15px;
  width: 80%;
  border-radius: 50px;
`;
