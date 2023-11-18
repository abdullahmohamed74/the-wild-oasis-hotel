import styled from 'styled-components';
import { useDarkModeContext } from '../hooks/useDarkModeContext';

function Logo() {
  const { isDarkMode } = useDarkModeContext();
  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png';

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

export default Logo;
