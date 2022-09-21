import './table.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//import { format } from 'date-fns'
//import * as moment from 'moment'





const GatheringServiceTable = () => {

const [RowData, SetRowData] = useState([])
 const [ViewShow, SetViewShow] =  useState(false)
 const [Data, setData] = useState([]);
 //const [startDate, setStartDate] = useState(new Date());

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
       const [region, setregion] = useState("")
       const [inpersonAttendance, setinpersonAttendance] = useState("")
       const [zoomAttendance, setzoomAttendance] = useState("")
       const [firstTimers, setfirstTimers] = useState("")
       const [tithers, settithers] = useState("")
       const [newConvert, setnewConvert] = useState("")
       const [date, setdate] = useState("")
       //const [action, setaction] = useState("")

       const [Delete,setDelete] = useState(false)

      const [id,setId] = useState("");

  const GetData = () => {
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

const handleEdit = async(e) =>{
    e.preventDefault();
   const url = `http://localhost:8000/submitData/${id}`
    const Credentials = {gatheringService, typeOfService, region, inpersonAttendance, zoomAttendance, firstTimers, tithers, newConvert, date}
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

const handleDelete = async () =>{
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
    <div className='row'>
                <div className='table-responsive'>
                    <table id="gatheringTable" className="table table-striped table-bordered">
                        <thead>
                            <tr className="table-dark">
                                <th>Branch</th>
                                <th>Type of Service</th>
                                <th>Region</th>
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
                                    <td>{element.region}</td>
                                    <td>{element.inpersonAttendance}</td>
                                    <td>{element.zoomAttendance}</td>
                                    <td>{element.firstTimers}</td>
                                    <td>{element.tithers}</td>
                                    <td>{element.newConvert}</td>
                                    <td>{element.date}</td>

                                    <td style={{ minWidth: 190}}>
                                        <Button size='sm' variant='primary' onClick={() => handleViewShow(SetRowData(element))}>View</Button>
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
                        <label>Branch</label>
                            <input type="text" className='form-control' defaultValue ={RowData.gatheringService} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                        <label>Type of Service</label>
                            <input type="text" className='form-control' defaultValue ={RowData.typeOfService} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                        <label>Region</label>
                            <input type="text" className='form-control' defaultValue ={RowData.region} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                        <label>In Person</label>
                            <input type="number" className='form-control' defaultValue ={RowData.inpersonAttendance} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                            <input type="number" className='form-control' defaultValue ={RowData.zoomAttendance} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                        <label>First Timer</label>
                            <input type="number" className='form-control' defaultValue ={RowData.firstTimers} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                        <label>Tithers</label>
                            <input type="number" className='form-control' defaultValue ={RowData.tithers} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                        <label>New Convert</label>
                            <input type="number" className='form-control' defaultValue ={RowData.newConvert} readOnly/>
                        </div>
                        <div className='form-group mt-3'>
                        <label>Date</label>
                           
                            <input type="date" className='form-control' defaultValue ={RowData.date}
                             readOnly/>
                        </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Gathering Data</Button>
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
                        <Form.Select aria-label="Default select example" onChange={(e) => setgatheringService(e.target.value)} defaultValue={RowData.gatheringService} key={RowData.gatheringService}  id= "gatheringService" placeholder="Enter Gathering Services">
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
                           {/* ))}       */}
                            </div>
                             <div className='form-group mt-3'>
                                <label>Type of Service</label>
                                <Form.Select aria-label="Default select example" onChange={(e) => settypeOfService(e.target.value)} defaultValue={RowData.typeOfService}>
                                <option>Select Service</option>
                                <option value="Gathering Service">Gathering Service</option>
                                <option value="Impartation Service">Impartation Service</option>
                                <option value="Flow Unity Service">Flow Unity Service</option>
                                <option value="Flow Unity Prayer">Flow Unity Prayer</option>
                                </Form.Select>
                            </div>

                            <div className='form-group mt-3'>
                                <label>Region</label>
                                <Form.Select aria-label="Default select example" onChange={(e) => setregion(e.target.value)} defaultValue={RowData.region}>
                                <option>Select Region</option>
                                <option value="North East">North East</option>
                                <option value="South East">South East</option>
                                <option value="Midwest">Midwest</option>
                                <option value="South West">South West</option>
                                <option value="West Coast">West Coast</option>
                                <option value="DMV">DMV</option>
                                <option value="Canada">Canada</option>
                                </Form.Select>
                            </div>

                            <div className='form-group mt-3'>
                                <label>In Person</label>
                                <input type="number" className='form-control' onChange={(e) => setinpersonAttendance(e.target.value)} placeholder="Enter In Person Attendance" defaultValue={RowData.inpersonAttendance} key={RowData.inpersonAttendance}></input>
                            </div>

                            <div className='form-group mt-3'>
                                <label>Zoom</label>
                                <input type="number" className='form-control' onChange={(e) => setzoomAttendance(e.target.value)} placeholder="Enter In Zoom Attendance" defaultValue={RowData.zoomAttendance}/>
        
                            </div>
                            <div className='form-group mt-3'>
                                <label>First Timers</label>
                                <input type="number" className='form-control' onChange={(e) => setfirstTimers(e.target.value)} placeholder="Enter Timers Attendance" defaultValue={RowData.firstTimers}/>
                                
                            </div>
                            <div className='form-group mt-3'>
                                <label>Tithers</label>
                                <input type="number" className='form-control' onChange={(e) => settithers(e.target.value)} placeholder="Enter Number of Tithers" defaultValue={RowData.tithers}/>

                            </div>
                            <div className='form-group mt-3'>
                                <label>New Convert</label>
                                <input type="number" className='form-control' onChange={(e) => setnewConvert(e.target.value)} placeholder="Enter New Convert" defaultValue={RowData.newConvert}/>

                            </div>
                            <div className='form-group mt-3'>
                                <label>Date</label>
                                <Form.Control type="date" placeholder="mm/dd/year" className='form-control' onChange={(e) => setdate(e.target.value)} defaultValue={RowData.date}/>

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
