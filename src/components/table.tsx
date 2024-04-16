import styled from 'styled-components';
import tw from 'twin.macro';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const StyledMuiTable = styled(Table)`
&& {
    ${tw`bg-white text-primary border-primary border-2`}
}
`;

const StyledTable = ({data}: {data: any}) => (
  <div>
     <TableContainer component={Paper}>
      <StyledMuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.thing}</TableCell>
              <TableCell align="right">{row.thing}</TableCell>
              <TableCell align="right">{row.thing}</TableCell>
              <TableCell align="right">{row.thing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledMuiTable>
    </TableContainer>
  </div>
);

export default StyledTable;