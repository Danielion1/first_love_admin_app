// import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from "react-bootstrap";
import axios from 'axios';



function SubmitData() {
  const [gatheringService, setGatheringService] = useState("")
     const [typeOfService, setTypeOfService] = useState("")
     const [inpersonAttendance, setInpersonAttendance] = useState("")
     const [zoomAttendance, setZoomAttendance] = useState("")
     const [firstTimers, setFirstTimers] = useState("")
     const [tithers, setTithers] = useState("")
     const [newConvert, setNewConvert] = useState("")
     const [date, setDate] = useState("")
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
    const Credentials = { gatheringService, typeOfService, inpersonAttendance, zoomAttendance, firstTimers, tithers, newConvert, date }
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
      <div className='modal-wrapper'>
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
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate">
                <Form.Label column sm={1}>
                  Date
                </Form.Label>
                <Col sm={15}>
                  <Form.Control type="date" placeholder="mm/dd/year" onChange={(e) => setDate(e.target.value)}/>
                </Col>
              </Form.Group>
                <Form.Select aria-label="Default select example" onChange={(e) => setGatheringService(e.target.value)}>
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
                
                <Form.Select aria-label="Default select example" onChange={(e) => setTypeOfService(e.target.value)}>
                  <option>Type of Service</option>
                  <option value="Gathering Service">Gathering Service</option>
                  <option value="Impartation Service">Impartation Service</option>
                  <option value="Flow Unity Service">Flow Unity Service</option>
                  <option value="Flow Unity Prayer">Flow Unity Prayer</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formZoomAttendance">
                  <Form.Label>Zoom</Form.Label>
                  <Form.Control type="zoom" placeholder="Please put zero if none of your members watched on zoom" onChange={(e) => setZoomAttendance(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formInPersonAttendance">
                  <Form.Label>In Person Attendance</Form.Label>
                  <Form.Control type="inPerson" placeholder="In Person Attendance" onChange={(e) => setInpersonAttendance(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNewConverts">
                  <Form.Label>Number of New Converts</Form.Label>
                  <Form.Control type="newConverts" placeholder="Number of New Converts" onChange={(e) => setNewConvert(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstTimers">
                  <Form.Label>Number of First Timers</Form.Label>
                  <Form.Control type="zoom" onChange={(e) => setFirstTimers(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formtithers">
                  <Form.Label>Number of tithers</Form.Label>
                  <Form.Control type="zoom" placeholder="Enter the number of people who paid tithes" onChange={(e) => setTithers(e.target.value)}/>
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
