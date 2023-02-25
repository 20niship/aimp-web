import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import { Paper, Table, TableBody, Typography, TableContainer, TableHead, TableCell, Avatar } from '@mui/material';

import { MusicInfo } from '@/lib/global';


const tmp = {
  name: "name",
  duration: "1:30",
  img: "/img",
  url: "url",
  artists: "deco*27"
}

const rows = [
  tmp, tmp, tmp, tmp, tmp, tmp,
  tmp, tmp, tmp, tmp, tmp, tmp,
  tmp, tmp, tmp, tmp, tmp, tmp,
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell >Title</TableCell>
            <TableCell align="right">artists</TableCell>
            <TableCell align="right">duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={Math.random()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar src={row.img} />
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body2">
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="right">{row.artists}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
