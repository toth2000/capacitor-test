import styled from "styled-components";
import { ThemeInterface } from "../../interface/theme";

export const Container = styled.div<{ theme: ThemeInterface }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  padding: 10px;
  margin-top: 15px;
`;
