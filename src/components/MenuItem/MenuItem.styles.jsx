import styled, { css } from "styled-components";

const sizeStyles = css`
  height: 380px;
`;

const getSize = (props) => {
  return props.size && sizeStyles;
};

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0 7.5px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  ${getSize}
`;

export const MenuItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.2);
  position: absolute;
  border-bottom-left-radius: 15px;
`;

export const MenuItemContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: black;
`;
