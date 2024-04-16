import styled from 'styled-components';
import tw from 'twin.macro';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { formatDateString } from '../utilities/dateFormat';

interface DriveTable {
    mimeType: string
    webViewLink: string
    id: string
    name: string
    createdTime: string
    modifiedTime: string
}

const StyledMuiTableCell = styled(TableCell)`
&& {
    ${tw`text-primary`}
}
`

const StyledMuiTableHeaderCell = styled(TableCell)`
&& {
    ${tw`font-bold`}
}
`

const StyledTable = ({data}: {data: DriveTable[]}) => (
  <Container>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledMuiTableHeaderCell>File Name</StyledMuiTableHeaderCell>
            <StyledMuiTableHeaderCell align="right">File Type</StyledMuiTableHeaderCell>
            <StyledMuiTableHeaderCell align="right">Link</StyledMuiTableHeaderCell>
            <StyledMuiTableHeaderCell align="right">Created At</StyledMuiTableHeaderCell>
            <StyledMuiTableHeaderCell align="right">Modified At</StyledMuiTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((file: any) => (
            <TableRow
              key={file.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledMuiTableCell component="th" scope="row">
                {file.name}
              </StyledMuiTableCell>
              <StyledMuiTableCell align="right">{file.mimeType}</StyledMuiTableCell>
              <StyledMuiTableCell align="right">
                <a href={file.webViewLink} target="_blank" rel="noopener noreferrer">View File</a>
              </StyledMuiTableCell>
              <StyledMuiTableCell align="right">{formatDateString(file.createdTime)}</StyledMuiTableCell>
              <StyledMuiTableCell align="right">{formatDateString(file.modifiedTime)}</StyledMuiTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
);

export default StyledTable;