import './table.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import EditForm from '../../pages/editForm/EditForm';


const GatheringServiceTable = (props) => {

   const [RowData, SetRowData] = useState([])
 const [ViewShow, SetViewShow] =  useState(false)
  // //view Model
  // const handleViewShow = () => {SetViewShow(true)}
  // const handleViewClose = () => {SetViewShow(false)}
  //  //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const handleEditClose = () => { SetEditShow(false) }

       //Define here local state that store the form Data
       const [gatheringService, setgatheringService] = useState("")
       const [typeOfService, settypeOfService] = useState("")
       const [inpersonAttendance, setinpersonAttendance] = useState("")
       const [zoomAttendance, setzoomAttendance] = useState("")
       const [firstTimers, setfirstTimers] = useState("")
       const [tithers, settithers] = useState("")
       const [newConvert, setnewConvert] = useState("")
       const [date, setdate] = useState("")
       const [state, setstate] = useState("")

    const [id,setId] = useState("");


  const colGathering = [
      { field: 'id', headerName: 'ID', width: 60},
      { field: 'gatheringService', headerName: 'Branch', width: 130},
       { field: 'typeOfService', headerName: 'Type Of Service', width: 150 },
       { field: 'inpersonAttendance', headerName: 'In Person', type: 'number', width: 80 },
       {field: 'zoomAttendance', headerName: 'Zoom', type: 'number',width: 80},
       {field: 'firstTimers', headerName: 'First Timers', type: 'number',width: 100},
       {field: 'tithers', headerName: 'Tithers', type: 'number',width: 80},
       {field: 'newConvert', headerName: 'New Convert', type: 'number',width: 100},
       { field: 'date', headerName: 'Date', width: 150 }
      // { field: 'action', headerName: 'Action', width: 150 }
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


 const actionColumns = [{field: 'action', headerName: 'Action', width: 200, renderCell:()=>{
  return (
      <div className='cellAction'>
          {/* <Link to="" style={{textDecoration: "none"}}>  */}
           {/* {Data.map((items, index) =>(
          {
               id: index,
               gatheringService: items.gatheringService,
               typeOfService: items.typeOfService,
               inpersonAttendance: items.inpersonAttendance,
               zoomAttendance: items.zoomAttendance,
               firstTimers: items.firstTimers,
               tithers: items.tithers,
               newConvert: items.newConvert,
               date: items.date
               
           }

           
       ))} */}
          <Button size='sm' variant='warning'onClick={()=> {handleEditShow(SetRowData(Data),setId(Data.id))}}  className='editButton'>Edit</Button>
         {/* </Link>  */}
          <Link to="" style={{textDecoration: "none"}}>
          <div className='viewButton'>View</div>
          </Link>
          <div className='deleteButton'>Delete</div>
      </div>
  );
},
},
];

  return (
  
    <div className='rows' style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={colGathering.concat(actionColumns)}
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
      <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Pastor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Gathering Service</label>
                                <input type="select" className='form-control' onChange={(e) => setgatheringService(e.target.value)} placeholder="Enter Gathering Service" defaultValue={Data.gatheringService}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Type of Service</label>
                                <input type="text" className='form-control' onChange={(e) => settypeOfService(e.target.value)} placeholder="Select Type of Service" defaultValue={RowData.typeOfService} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>In Person</label>
                                <input type="number" className='form-control' onChange={(e) => setinpersonAttendance(e.target.value)} placeholder="Enter In Person Attendance" defaultValue={Data.inpersonAttendance}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Zoom</label>
                                <input type="number" className='form-control' onChange={(e) => setzoomAttendance(e.target.value)} placeholder="Enter In Zoom Attendance" defaultValue={Data.zoomAttendance}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>First Timers</label>
                                <input type="number" className='form-control' onChange={(e) => setfirstTimers(e.target.value)} placeholder="Enter Timers Attendance" defaultValue={Data.firstTimers}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Tithers</label>
                                <input type="number" className='form-control' onChange={(e) => settithers(e.target.value)} placeholder="Enter Number of Tithers" defaultValue={Data.tithers}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>New Convert</label>
                                <input type="number" className='form-control' onChange={(e) => setnewConvert(e.target.value)} placeholder="Enter New Convert" defaultValue={Data.newConvert}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Date</label>
                                <input type="select" className='form-control' onChange={(e) => setdate(e.target.value)} placeholder="Select Date" defaultValue={Data.date}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' >Submit</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
    </div>

    
  )
  }

  export default GatheringServiceTable;
