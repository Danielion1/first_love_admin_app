import './table.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const GatheringServiceTable = () => {

  const colGathering = [
      { field: 'id', headerName: 'ID', width: 80},
      { field: 'gatheringService', headerName: 'Branch', width: 200 },
       { field: 'typeOfService', headerName: 'Type Of Service', width: 200 },
       { field: 'inpersonAttendance', headerName: 'In Person Attendance', type: 'number', width: 200 },
       {field: 'zoomAttendance', headerName: 'Zoom Attendance', type: 'number',width: 200},
       {field: 'firstTimers', headerName: 'First Timers', type: 'number',width: 200},
       {field: 'tithers', headerName: 'Tithers', type: 'number',width: 200},
       {field: 'newConvert', headerName: 'New Convert', type: 'number',width: 200},
       { field: 'date', headerName: 'Date', width: 150 }
  ]

const [Data, setData] = useState([]);

  const GetPastorData = () => {
    //here we will get all pastor    data
    const url = 'http://localhost:8000/submitData'
    axios.get(url)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                setData(data)
                console.log(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
}
 useEffect(() => {
  GetPastorData();
 }, [])

  return (
  
    <div className='rows' style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={colGathering}
         rows={Data.map((item, index) =>(
          {
               id: index,
               gatheringService: item.gatheringService,
               typeOfService: item.typeOfService,
               inpersonAttendance: item.inpersonAttendance,
               zoomAttendance: item.zoomAttendance,
               firstTimers: item.firstTimers,
               tithers: item.tithers,
               newConvert: item.newConvert,
               date: item.date
           }
       ))}
       
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
  }

  export default GatheringServiceTable;
