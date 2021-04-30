import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as svg } from "../../assets/blueberries.svg";

const LogoContainerStyles = css`
  height: 50px;
  width: 50px;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const LogoSvg = styled(svg)`
  ${LogoContainerStyles}
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
`;
