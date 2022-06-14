import './table.scss'
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70},
//   { field: 'firstName', headerName: 'First Name', width: 130 },
//   { field: 'lastName', headerName: 'Last Name', width: 130 },
//   { field: 'branch', headerName: 'Branch', width: 150 },


//   {field: 'gatheringAttd', headerName: 'Gathering', type: 'number',width: 110},
//   {field: 'impartationAttd', headerName: 'Impartation', type: 'number',width: 110},
//   {field: 'flowPrayerAttd', headerName: 'Flow Prayer', type: 'number',width: 110},
//   {field: 'tithers', headerName: 'Tithers', type: 'number',width: 110},


//   {
//     field: 'date',
//     headerName: 'Date',
//     type: 'number',
//     width: 120,
//   },


// ];

let columns = [];

const colGathering = [
  { field: 'id', headerName: 'ID', width: 80},
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'lastName', headerName: 'Last Name', width: 200 },
  { field: 'branch', headerName: 'Branch', width: 200 },
  {field: 'gatheringAttd', headerName: 'Attendance', type: 'number',width: 200},
  { field: 'date', headerName: 'Date', type: 'number', width: 150 }
]

const colImpartation = [
  { field: 'id', headerName: 'ID', width: 80},
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'lastName', headerName: 'Last Name', width: 200 },
  { field: 'branch', headerName: 'Branch', width: 200 },
  {field: 'impartationAttd', headerName: 'Attendance', type: 'number',width: 200},
  { field: 'date', headerName: 'Date', type: 'number', width: 150 }
]

const colFlowPrayer = [
  { field: 'id', headerName: 'ID', width: 80},
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'lastName', headerName: 'Last Name', width: 200 },
  { field: 'branch', headerName: 'Branch', width: 200 },
  {field: 'flowPrayerAttd', headerName: 'Attendance', type: 'number',width: 200},
  { field: 'date', headerName: 'Date', type: 'number', width: 150 },
]

const rows = [
  {id: 1, lastName: 'Daniel', firstName: 'Odi', branch: 'Grand Rapids', gatheringAttd: 35, impartationAttd: 50,flowPrayerAttd:50, tithers:100, date:'03-23-2021'},
  { id: 2, lastName: 'Mathew', firstName: 'Jon',branch: 'Grand Rapids', gatheringAttd: 40, impartationAttd: 50,flowPrayerAttd:50, tithers:100, date:'03-23-2021' },
  { id: 3, lastName: 'Henry', firstName: 'frank', branch: 'Grand Rapids', gatheringAttd: 34, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021' },
  { id: 4, lastName: 'Erica', firstName: 'Mark', branch: 'Grand Rapids', gatheringAttd: 56, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-26-2021' },
  { id: 5, lastName: 'Snadra', firstName: 'Hillary', branch: 'Grand Rapids',gatheringAttd: 53, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-25-2021'},
  { id: 6, lastName: 'Nana', firstName: 'Ama', branch: 'Grand Rapids',gatheringAttd: 24, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021'},
  { id: 7, lastName: 'Pascal', firstName: 'Timothy', branch: 'Grand Rapids',gatheringAttd: 53, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021' },
  { id: 8, lastName: 'Snow', firstName: 'Jon', branch: 'Grand Rapids',gatheringAttd: 403, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021' },
  { id: 9, lastName: 'Snow', firstName: 'Jon', branch: 'Grand Rapids',gatheringAttd: 33, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021' },
  { id: 10, lastName: 'Snow', firstName: 'Jon', branch: 'Grand Rapids',gatheringAttd: 66, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021' },
  { id: 11, lastName: 'Snow', firstName: 'Jon', branch: 'Grand Rapids',gatheringAttd: 908, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021' },
  { id: 12, lastName: 'Snow', firstName: 'Jon', branch: 'Grand Rapids',gatheringAttd: 876, impartationAttd: 50,flowPrayerAttd:50, tithers:100,  date:'03-23-2021'},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function serviceSelection(selection) {
  if (selection == "flowPrayer") {
    columns = colFlowPrayer;
  } else if (selection == "impartation") {
    columns = colImpartation;
  }
  else {
    columns = colGathering;
  }
  return columns
}

export default function table(props) {
  serviceSelection(props.name);

  return (
    <div className='table'>
      <div className='rows' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
}
