import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import React, { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";



function SubmitData() {
  const [gatheringService, setGatheringService] = useState("")
     const [typeOfService, setTypeOfService] = useState("")
     const [region, setregion] = useState("")
     const [inpersonAttendance, setInpersonAttendance] = useState("")
     const [zoomAttendance, setZoomAttendance] = useState("")
     const [firstTimers, setFirstTimers] = useState("")
     const [tithers, setTithers] = useState("")
     const [newConvert, setNewConvert] = useState("")
     const [date, setDate] = useState(new Date())
     const [url, setUrl] = useState("")


  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => {SetPostShow(true)} 
  const handlePostClose = () => {SetPostShow(false)}

  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false)
  const handleEditShow = () => { SetEditShow(true) }
  const handleEditClose = () => { SetEditShow(false) }

  //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false)
  const handleDeleteShow = () => { SetDeleteShow(true) }
  const handleDeleteClose = () => { SetDeleteShow(false) }


  const handleSubmit = () => {
    if(typeOfService ==="Gathering Service")
    {
     setUrl('http://localhost:8000/submitData');
     
    }
    else if (typeOfService ==="Impartation Service")
    {
      setUrl('http://localhost:8000/impartationData');
    }
    else if (typeOfService ==="Flow Unity Service"){
      setUrl('http://localhost:8000/flowUnityData');
  }
    const Credentials = { gatheringService, typeOfService, region, inpersonAttendance, zoomAttendance, firstTimers, tithers, newConvert, date }
    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
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

  return (
    <div>
      <div onClick={() =>{handlePostShow()}}>
        Submit Data
      </div>
      {/* <Button variant="primary" type="submit" onClick={() =>{handlePostShow()}}>
Submit Data
</Button> */}
      <div className='model-box-view'>
        <Modal
             show={ViewPost}
             onHide={handlePostClose}
             backdrop="static"
             keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add New Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>

              <Form.Group className='form-group mt-3' controlId="formHorizontalDate">
                <Form.Label> Date</Form.Label>
                {/* <DatePicker selected={date} onChange={(date) => setDate(date.toISOString().split('T')[0])} /> */}
               <Form.Control type="date" placeholder="mm/dd/year" onChange={(e) => setDate(e.target.value)}/> 
              </Form.Group>
              <div className='form-group'>
              <Form.Label>Branch</Form.Label>
                <Form.Select  aria-label="Default select example" onChange={(e) => setGatheringService(e.target.value)}>
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

                <Form.Group className='form-group mt-3' controlId="formtypeofservice">
                <Form.Label>Type of Service</Form.Label>
                <Form.Select  aria-label="Default select example" onChange={(e) => setTypeOfService(e.target.value)}>
                  <option>Type of Service</option>
                  <option value="Gathering Service">Gathering Service</option>
                  <option value="Impartation Service">Impartation Service</option>
                  <option value="Flow Unity Service">Flow Unity Service</option>
                  <option value="Flow Unity Prayer">Flow Unity Prayer</option>
                </Form.Select>
                </Form.Group>

                <Form.Group className='form-group mt-3' controlId="formregion">
                <Form.Label>Region</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setregion(e.target.value)}>
                  <option>Select Region</option>
                  <option value="North East">North East</option>
                  <option value="South East">South East</option>
                  <option value="Midwest">Midwest</option>
                  <option value="South West">South West</option>
                  <option value="West Coast">West Coast</option>
                  <option value="DMV">DMV</option>
                  <option value="Canada">Canada</option>
                 </Form.Select>
                 </Form.Group>

                <Form.Group className='form-group mt-3' controlId="formZoomAttendance">
                  <Form.Label>Zoom</Form.Label>
                  <Form.Control type="zoom" placeholder="Zoom Attendance" onChange={(e) => setZoomAttendance(e.target.value)} />
                </Form.Group>

                <Form.Group className='form-group mt-3' controlId="formInPersonAttendance">
                  <Form.Label>In Person</Form.Label>
                  <Form.Control type="inPerson" placeholder="In Person Attendance" onChange={(e) => setInpersonAttendance(e.target.value)}/>
                </Form.Group>

                <Form.Group className='form-group mt-3' controlId="formNewConverts">
                  <Form.Label>New Converts</Form.Label>
                  <Form.Control type="newConverts" placeholder="Number of New Converts" onChange={(e) => setNewConvert(e.target.value)}/>
                </Form.Group>

                <Form.Group className='form-group mt-3' controlId="formFirstTimers">
                  <Form.Label>First Timers</Form.Label>
                  <Form.Control type="zoom" placeholder="Number of First Timers"  onChange={(e) => setFirstTimers(e.target.value)} />
                </Form.Group>
                <Form.Group className='form-group mt-3' controlId="formtithers">
                  <Form.Label>Number of Tithers</Form.Label>
                  <Form.Control type="zoom" placeholder="Number of Tithers" onChange={(e) => setTithers(e.target.value)}/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handlePostClose}>Cancel</Button>
                {/* <Button variant="primary" type="submit" onClick={handleSubmit}> */}
                <Button variant="primary" type="submit" onClick={() =>{handleSubmit()}}>
                  Submit
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    </div>
    )
}

export default SubmitData;
