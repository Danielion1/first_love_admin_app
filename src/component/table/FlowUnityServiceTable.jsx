import './table.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const FlowUnityServiceTable  = () => {
  
  const flowunitycolumn = [
    { field: 'id', headerName: 'ID', width: 80},
    { field: 'gatheringService', headerName: 'Branch', width: 200 },
     { field: 'typeOfService', headerName: 'Type Of Service', width: 200 },
     {field: 'zoomAttendance', headerName: 'Zoom Attendance', type: 'number',width: 200},
     { field: 'date', headerName: 'Date', width: 150 }
  ]

const [FlowUnityData, SetFlowUnityData] = useState([]);

const GetImpData = () => {
  const url = 'http://localhost:8000/flowUnityData'
  axios.get(url)
      .then(response => {
          const result = response.data;
          const { status, message, data } = result;
          if (status !== 'SUCCESS') {
              alert(message, status)
          }
          else {
            SetFlowUnityData(data)
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
        columns={flowunitycolumn}
         rows={FlowUnityData.map((item, index) =>(
          {
               id: index,
               gatheringService: item.gatheringService,
               typeOfService: item.typeOfService,
               zoomAttendance: item.zoomAttendance,
               date: item.date
           }
       ))}
       
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
  }

  export default FlowUnityServiceTable ;