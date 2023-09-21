import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary};
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const IconContainer = styled.div``;

export const ItemIcon = styled(Icon)`
  width: 36px;
  height: 36px;
`;

export const OfferContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.thrid};
  padding: 5px 10px 0px 5px;
  border-radius: 20px;
  align-items: center;
  gap: 5px;
`;

export const OfferIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin: 0;
  &:not(:first-child) {
    margin-left: -8px;
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 3px;
  font-size: 12px;
`;
