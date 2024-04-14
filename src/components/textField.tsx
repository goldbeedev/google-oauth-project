import styled from 'styled-components';
import tw from 'twin.macro';
import { TextField } from '@mui/material';


const StyledTextInput = styled(TextField)`
&& {
    ${tw`bg-white text-primary border-primary border-2`}
}
`;

const StyledTextField = ({ label }: { label: string }) => (
  <div>
    <StyledTextInput variant='outlined'  label={label} />
  </div>
);

export default StyledTextField;