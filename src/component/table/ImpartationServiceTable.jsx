import './table.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const ImpartationServiceTable = () => {
  
  const colImpartation = [
    { field: 'id', headerName: 'ID', width: 80},
    { field: 'gatheringService', headerName: 'Branch', width: 200 },
     { field: 'typeOfService', headerName: 'Type Of Service', width: 200 },
     {field: 'zoomAttendance', headerName: 'Zoom Attendance', type: 'number',width: 200},
     {field: 'firstTimers', headerName: 'First Timers', type: 'number',width: 200},
     {field: 'tithers', headerName: 'Tithers', type: 'number',width: 200},
     {field: 'newConvert', headerName: 'New Convert', type: 'number',width: 200},
     { field: 'date', headerName: 'Date', width: 150 }
  ]

const [Imp, SetImpData] = useState([]);

const GetImpData = () => {
  const url = 'http://localhost:8000/impartationData'
  axios.get(url)
      .then(response => {
          const result = response.data;
          const { status, message, data } = result;
          if (status !== 'SUCCESS') {
              alert(message, status)
          }
          else {
            SetImpData(data)
              console.log(data)
          }
      })
      .catch(err => {
          console.log(err)
      })
}

 useEffect(() => {
  GetImpData();
 }, [])

  return (
  
    <div className='rows' style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={colImpartation}
         rows={Imp.map((item, index) =>(
          {
               id: index,
               gatheringService: item.gatheringService,
               typeOfService: item.typeOfService,
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

  export default ImpartationServiceTable;
