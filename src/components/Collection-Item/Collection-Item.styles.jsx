import styled from "styled-components";

import Button from "../Button/Button.component";

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  margin: 1rem;
  position: relative;
`;

export const CollectionItemBackground = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.9;
  }
`;
export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-top: 0.5rem;
`;

export const CollectionItemFooterName = styled.span`
  flex: 0.9;
`;

export const CollectionItemFooterPrice = styled.span`
  flex: 0.1;
  font-weight: bold;
`;

export const CollectionItemButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 250px;

  &:hover {
    opacity: 0.85;
  }
`;
