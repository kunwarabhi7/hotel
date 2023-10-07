import styled from "styled-components";
import Logo1 from "../assets/logo-light.png";
import LogoDark from "../assets/logo-dark.png";
import { useDarkMode } from "../context/DarkModeContext";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      {isDarkMode ? (
        <Img src={LogoDark} alt="dark logo" />
      ) : (
        <Img src={Logo1} alt="Logo" />
      )}
    </StyledLogo>
  );
}

export default Logo;
