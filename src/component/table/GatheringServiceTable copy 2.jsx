import './table.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';


//import EditForm from '../../pages/editForm/EditForm';


const GatheringServiceTable = () => {

const [RowData, SetRowData] = useState([])
 const [ViewShow, SetViewShow] =  useState(false)
 const [Data, setData] = useState([]);

 //view Model
 const handleViewShow = () => {SetViewShow(true)}
 const handleViewClose = () => {SetViewShow(false)}
  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false)
  const handleEditShow = () => { SetEditShow(true) }
  const handleEditClose = () => { SetEditShow(false) }
  //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false)
  const handleDeleteShow = () => { SetDeleteShow(true) }
  const handleDeleteClose = () => { SetDeleteShow(false) }
  //FOr Add New Data Model
  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const handlePostClose = () => { SetPostShow(false) }


       //Define here local state that store the form Data
       const [gatheringService, setgatheringService] = useState("")
       const [typeOfService, settypeOfService] = useState("")
       const [inpersonAttendance, setinpersonAttendance] = useState("")
       const [zoomAttendance, setzoomAttendance] = useState("")
       const [firstTimers, setfirstTimers] = useState("")
       const [tithers, settithers] = useState("")
       const [newConvert, setnewConvert] = useState("")
       const [date, setdate] = useState("")
       //const [action, setaction] = useState("")

       const [Delete,setDelete] = useState(false)

      const [id,setId] = useState("");

      const [inpval, setINP] = useState({
        gatheringService: "",
        typeOfService: "",
        inpersonAttendance: "",
        zoomAttendance: "",
        firstTimers: "",
        tithers: "",
        newConvert: "",
        date:""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

//   const colGathering = [
//       { field: 'id', headerName: 'ID', width: 60},
//       { field: 'gatheringService', headerName: 'Branch', width: 130},
//        { field: 'typeOfService', headerName: 'Type Of Service', width: 150 },
//        { field: 'inpersonAttendance', headerName: 'In Person', type: 'number', width: 80 },
//        {field: 'zoomAttendance', headerName: 'Zoom', type: 'number',width: 80},
//        {field: 'firstTimers', headerName: 'First Timers', type: 'number',width: 100},
//        {field: 'tithers', headerName: 'Tithers', type: 'number',width: 80},
//        {field: 'newConvert', headerName: 'New Convert', type: 'number',width: 100},
//        { field: 'date', headerName: 'Date', width: 150 }
//       // {field: 'action', headerName: 'Action', width: 200}
//       // { field: 'action', headerName: 'Action', width: 150 }
//   ]

  const GetData = async () => {
    //here we will get all pastor    data
    const url = `http://localhost:8000/submitData`
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

const handleEdit = async() =>{
   const url = `http://localhost:8000/submitData/${id}`
   const Credentials = {gatheringService, typeOfService, inpersonAttendance, zoomAttendance, firstTimers, tithers, newConvert, date}
   //const Credentials  = {inpval}
   axios.put(url, Credentials)
       .then(response => {
           const result = response.data;
           const { status, message } = result;
           if (status !== 'SUCCESS') {
               alert(message, status)
           }
           else {
               alert(message)
               window.location.reload()
           }
       })
       .catch(err => {
           console.log(err)
       })
}

const handleDelete = () =>{
    const url = `http://localhost:8000/submitData/${id}`
    axios.delete(url)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
}


useEffect(() => {
    GetData();
   }, [])
  

return (
    <div>
    {/* <div className="row">
        <div className="mt-5 mb-4">
        <Button variant='primary' onClick={() => {handlePostShow()}}><i className='fa fa-plu'></i>
                Submit Data
        </Button>
        </div>
    </div> */}
    
    <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr className="table-dark">
                                <th>Branch</th>
                                <th>Type of Service</th>
                                <th>In Person</th>
                                <th>Zoom</th>
                                <th>First Timers</th>
                                <th>Tithers</th>
                                <th>New Convert</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
            <tbody>
                {
                    Data.map((element) => 
                        //return (
                            
                            <tr key={element._id}>
                                    <td>{element.gatheringService}</td>
                                    <td>{element.typeOfService}</td>
                                    <td>{element.inpersonAttendance}</td>
                                    <td>{element.zoomAttendance}</td>
                                    <td>{element.firstTimers}</td>
                                    <td>{element.tithers}</td>
                                    <td>{element.newConvert}</td>
                                    <td>{element.date}</td>

                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => handleViewShow(element._id)}>View</Button>
                                        <Button size='sm' variant='warning'onClick={()=> {handleEditShow(SetRowData(element),setId(element._id))}}>Edits</Button>
                                        <Button size='sm' variant='danger' onClick={() =>{handleViewShow(SetRowData(element),setId(element._id), setDelete(true))}}>Delete</Button>
                                    </td>
                                    </tr>

                        //)
                    )
                }
            </tbody>
        </table>


    </div>
</div>



 {/* Modal for view data in Action */}
 <div className='model-box-view'>
                <Modal 
                show ={ViewShow} 
                onHide ={handleViewClose} 
                backdrop ="static" 
                keyboard = {false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>View Gathering Service Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='form-group'>
                            <input type="text" className='form-control' value ={RowData.gatheringService} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="text" className='form-control' value ={RowData.typeOfService} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="number" className='form-control' value ={RowData.inpersonAttendance} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="number" className='form-control' value ={RowData.zoomAttendance} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="number" className='form-control' value ={RowData.firstTimers} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="number" className='form-control' value ={RowData.tithers} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="number" className='form-control' value ={RowData.newConvert} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="text" className='form-control' value ={RowData.date} readOnly/>
                        </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Pastor</Button>
                                )
                            }
                    </div>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

    
      <div className='model-box-view'>
                <Modal     
                    show={ViewEdit}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false}
                >    
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Gathering Service Data</Modal.Title>
                    </Modal.Header>                 
                    <Modal.Body>

                        <div>
                            
                            <div className='form-group'>
                                <label>Gathering Service</label>
                                {/* <input type="select" className='form-control' onChange={(e) => setgatheringService(e.target.value)} placeholder="Enter Gathering Services" defaultValue={RowData.gatheringService} /> */}
                        <Form.Select aria-label="Default select example" onChange={(e) => setgatheringService(e.target.value)} placeholder="Enter Gathering Services" defaultValue={RowData.gatheringService}>
                                <option>Select Gathering Service</option>
                                <option value="Albany">Albany</option>
                                <option value="Atlanta">Atlanta</option>
                                <option value="Austin">Austin</option>
                                <option value="Bay Area">Bay Area</option>
                                <option value="Boston">Boston</option>
                                <option value="Calgary">Calgary</option>
                                <option value="Chattanooga">Chattanooga</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Columbus">Columbus</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Dallas">Dallas</option>
                                <option value="DC">DC</option>
                                <option value="Gilroy">Gilroy</option>
                                <option value="Greensboro">Greensboro</option>
                                <option value="Hanover">Hanover</option>
                                <option value="Honolulu">Honolulu</option>
                                <option value="Houston">Houston</option>
                                <option value="Las Vegas">Las Vegas</option>
                                <option value="Lethbridge">Lethbridge</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Mass Central">Mass Central</option>
                                <option value="Melbourne">Melbourne</option>
                                <option value="Memphis">Memphis</option>
                                <option value="Miami">Miami</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New York">New York</option>
                                <option value="Oakland">Oakland</option>
                                <option value="Philadelphia">Philadelphia</option>
                                <option value="Pittsburgh">Pittsburgh</option>
                                <option value="Richmond">Richmond</option>
                                <option value="Rolla">Rolla</option>
                                <option value="San Juan">San Juan</option>
                                <option value="Sudbury">Sudbury</option>
                                <option value="Toledo">Toledo</option>
                                <option value="Toronto">Toronto</option>
                                <option value="Tucson">Tucson</option>
                                <option value="University of Minnesota">University of Minnesota</option>
                                <option value="Urbana">Urbana</option>
                                <option value="West Michigan">West Michigan</option>
                </Form.Select>
                                
                            </div>
                             <div className='form-group mt-3'>
                                <label>Type of Service</label>
                                <Form.Select aria-label="Default select example" onChange={(e) => settypeOfService(e.target.value)} defaultValue={RowData.typeOfService}>
                                {/* <option>Type of Service</option> */}
                                <option value="Gathering Service">Select Service</option>
                                <option value="Gathering Service">Gathering Service</option>
                                <option value="Impartation Service">Impartation Service</option>
                                <option value="Flow Unity Service">Flow Unity Service</option>
                                <option value="Flow Unity Prayer">Flow Unity Prayer</option>
                                </Form.Select>

                                {/* <input type="text" className='form-control' onChange={(e) => settypeOfService(e.target.value)} placeholder="Select Type of Service" value={items.typeOfService} /> */}
                            </div>
                            <div className='form-group mt-3'>
                                <label>In Person</label>
                                <input type="number" className='form-control' onChange={(e) => setinpersonAttendance(e.target.value)} placeholder="Enter In Person Attendance" defaultValue={RowData.inpersonAttendance} />
                                {/* <input type="text" value={inpval.inpersonAttendance} onChange={setdata} name="inpersonAttendance" class="form-control" id="inpersonAttendance" /> */}
                            </div>
                            <div className='form-group mt-3'>
                                <label>Zoom</label>
                                <input type="number" className='form-control' onChange={(e) => setzoomAttendance(e.target.value)} placeholder="Enter In Zoom Attendance" defaultValue={RowData.zoomAttendance}/>
                                {/* <input type="text" value={inpval.zoomAttendance} onChange={setdata} name="zoomAttendance" class="form-control" id="zoomAttendance" /> */}
                            </div>
                            <div className='form-group mt-3'>
                                <label>First Timers</label>
                                <input type="number" className='form-control' onChange={(e) => setfirstTimers(e.target.value)} placeholder="Enter Timers Attendance" defaultValue={RowData.firstTimers}/>
                                {/* <input type="text" value={inpval.firstTimers} onChange={setdata} name="firstTimers" class="form-control" id="firstTimers" /> */}
                            </div>
                            <div className='form-group mt-3'>
                                <label>Tithers</label>
                                <input type="number" className='form-control' onChange={(e) => settithers(e.target.value)} placeholder="Enter Number of Tithers" defaultValue={RowData.tithers}/>
                                {/* <input type="text" value={inpval.tithers} onChange={setdata} name="tithers" class="form-control" id="tithers" /> */}
                            </div>
                            <div className='form-group mt-3'>
                                <label>New Convert</label>
                                <input type="number" className='form-control' onChange={(e) => setnewConvert(e.target.value)} placeholder="Enter New Convert" defaultValue={RowData.newConvert}/>
                                {/* <input type="text" value={inpval.newConvert} onChange={setdata} name="newConvert" class="form-control" id="newConvert" /> */}
                            </div>
                            <div className='form-group mt-3'>
                                <label>Date</label>
                                <input type="text" className='form-control' onChange={(e) => setdate(e.target.value)} placeholder="Select Date" defaultValue={RowData.date}/>
                                {/* <input type="text" value={inpval.date} onChange={setdata} name="date" class="form-control" id="date" /> */}
                            </div> 
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Submit</Button>

                             </div>                       
                    </Modal.Body>                  
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleEditClose}>Close</Button>
                    </Modal.Footer>                   
                </Modal>
            
            </div>

            </div>
            
);

  };

  export default GatheringServiceTable;
