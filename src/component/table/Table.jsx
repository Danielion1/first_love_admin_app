import './table.scss'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70},
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'gatheringService', headerName: 'Branch', width: 130 },


  {
    field: 'gatheringServiceAttd',
    headerName: 'Gathering Attendance',
    type: 'number',
    width: 200,
  },

  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
    width: 120,
  },


];

const rows = [
  {
    id: 1,
    lastName: 'Daniel',
    firstName: 'Odi',
    gatheringService: 'Grand Rapids',
    gatheringServiceAttd: 35,
    date:'03-23-2021'
},
  { id: 2, lastName: 'Mathew', firstName: 'Jon',gatheringService: 'Grand Rapids', gatheringServiceAttd: 40, date:'03-23-2021' },
  { id: 3, lastName: 'Henry', firstName: 'frank', gatheringService: 'Grand Rapids', gatheringServiceAttd: 34,  date:'03-23-2021' },
  { id: 4, lastName: 'Erica', firstName: 'Mark', gatheringService: 'Grand Rapids', gatheringServiceAttd: 56,  date:'03-26-2021' },
  { id: 5, lastName: 'Snadra', firstName: 'Hillary', gatheringService: 'Grand Rapids',gatheringServiceAttd: 53,  date:'03-25-2021'},
  { id: 6, lastName: 'Nana', firstName: 'Ama', gatheringService: 'Grand Rapids',gatheringServiceAttd: 24,  date:'03-23-2021'},
  { id: 7, lastName: 'Pascal', firstName: 'Timothy', gatheringService: 'Grand Rapids',gatheringServiceAttd: 53,  date:'03-23-2021' },
  { id: 8, lastName: 'Snow', firstName: 'Jon', gatheringService: 'Grand Rapids',gatheringServiceAttd: 403,  date:'03-23-2021' },
  { id: 9, lastName: 'Snow', firstName: 'Jon', gatheringService: 'Grand Rapids',gatheringServiceAttd: 33,  date:'03-23-2021' },
  { id: 10, lastName: 'Snow', firstName: 'Jon', gatheringService: 'Grand Rapids',gatheringServiceAttd: 66,  date:'03-23-2021' },
  { id: 11, lastName: 'Snow', firstName: 'Jon', gatheringService: 'Grand Rapids',gatheringServiceAttd: 908,  date:'03-23-2021' },
  { id: 12, lastName: 'Snow', firstName: 'Jon', gatheringService: 'Grand Rapids',gatheringServiceAttd: 876,  date:'03-23-2021'},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
export default function table() {
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
