import styled from "styled-components";

import Button from "../Button/Button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 10;

  span {
    align-self: center;
  }
`;
export const CartDropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`;
