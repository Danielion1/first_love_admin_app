import React from 'react'
import './tables.scss';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      FirstName: "John",
      LastName: "Smith",
      Branch: "Grand Rapids",
      GatheringAttd: 1000,
      ImpartationAttd: 45,
      FlowPrayerAttd: 100,
      Tither: 50,
      Date:"03/30/2022",
    },
    {
      id: 2235235,
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      FirstName: "John",
      LastName: "Smith",
      Branch: "Grand Rapids",
      GatheringAttd: 550,
      ImpartationAttd: 45,
      FlowPrayerAttd: 50,
      Tither: 50,
      Date:"03/30/2022",
    },
    {
      id: 2342353,
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      FirstName: "John",
      LastName: "Smith",
      Branch: "Grand Rapids",
      GatheringAttd: 200,
      ImpartationAttd: 45,
      FlowPrayerAttd: 50,
      Tither: 50,
      Date:"03/30/2022",
    },
    {
      id: 2357741,
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      FirstName: "John",
      LastName: "Smith",
      Branch: "Grand Rapids",
      GatheringAttd: 150,
      ImpartationAttd: 45,
      FlowPrayerAttd: 50,
      Tither: 50,
      Date:"03/30/2022",
    },
    {
      id: 2342355,
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      FirstName: "John",
      LastName: "Smith",
      Branch: "Grand Rapids",
      GatheringAttd: 2000,
      ImpartationAttd: 45,
      FlowPrayerAttd: 50,
      Tither: 50,
      Date:"03/30/2022",
    },
  ];

  return (
    <div>
       <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 199 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Branch</TableCell>
            <TableCell className="tableCell">Gathering</TableCell>
            <TableCell className="tableCell">Impartation</TableCell>
            <TableCell className="tableCell">Flow Prayer</TableCell>
            <TableCell className="tableCell">Tithers</TableCell>
            <TableCell className="tableCell">Date</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell className="tableCell" >{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.FirstName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.LastName}</TableCell>
              <TableCell className="tableCell">{row.Branch}</TableCell>
              <TableCell className="tableCell">{row.GatheringAttd}</TableCell>
              <TableCell className="tableCell">{row.ImpartationAttd}</TableCell>
              <TableCell className="tableCell">{row.FlowPrayerAttd}</TableCell>
              <TableCell className="tableCell">{row.Tither}</TableCell>
              <TableCell className="tableCell">{row.Date}</TableCell>
              {/* <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>  */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default List;


