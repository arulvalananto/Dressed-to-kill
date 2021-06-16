import styled from "styled-components";

import LocalMallIcon from "@material-ui/icons/LocalMall";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CartIconLogo = styled(LocalMallIcon)`
  width: 24px;
  height: 24px;
`;
export const CartIconCount = styled.span`
  position: absolute;
  bottom: 3px;
  right: 2px;
  font-size: 12px;
  font-weight: bold;
  color: black;
`;
