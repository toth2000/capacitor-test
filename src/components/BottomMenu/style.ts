import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";
import { Icon } from '@iconify/react';

interface ItemContainerInterface {
  active: boolean;
  theme: ThemeInterface;
}

export const Container = styled.div<{ theme: ThemeInterface }>`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary};
  border: 1px solid ${({ theme }) => theme.color.thrid};
  padding: 10px 15px;
  border-radius: 15px;
  gap: 10px;
`;

export const ItemContainer = styled.div<ItemContainerInterface>`
  display: flex;
  flex: 1;
  padding: 4px;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  background: ${({ active, theme }) =>
    active === true ? theme.color.thrid : "transparent"};
`;

export const ItemTitle = styled.h1<{ theme: ThemeInterface }>`
  color: ${({ theme }) => theme.color.alternate};
  margin: 0;
  font-size: 12px;
`;

export const ItemIcon = styled(Icon)<{ theme: ThemeInterface }>`
  width: 28px;
  height: 26px;
`;
