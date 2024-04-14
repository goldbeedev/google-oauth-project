import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
&& {
    ${tw`bg-white text-primary border-primary border-2`}
}
`;

const StyledLoginButton = ({onClick}: {onClick: () => void}) => (
  <div>
    <StyledButton variant="contained" onClick={onClick}>
      Sign In With Google
    </StyledButton>
  </div>
);

export default StyledLoginButton;