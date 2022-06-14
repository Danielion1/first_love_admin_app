// import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from "react-bootstrap";


function SubmitData() {

  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => SetPostShow(true) 
  const handlePostClose = () => SetPostShow(false)

  return (
    <div>
      <div onClick={handlePostShow}>
        Submit Data
      </div>{' '}
      <div className='modal-wrapper'>
        <Modal
            show={ViewPost}
            onHide={handlePostClose}
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
                  <Form.Control type="date" placeholder="mm/dd/year" />
                </Col>
              </Form.Group>
                <Form.Select aria-label="Default select example">
                <option>Select Gathering Service</option>
                  <option value="1">ALBANY GATHERING SERVICE</option>
                  <option value="2">ATLANTA GATHERING SERVICE</option>
                  <option value="3">AUSTIN GATHERING SERVICE</option>
                  <option value="4">BAY AREA GATHERING SERVICE</option>
                  <option value="5">BOSTON GATHERING SERVICE</option>
                  <option value="6">CALGARY GATHERING SERVICE</option>
                  <option value="7">CHATTANOOGA GATHERING SERVICE</option>
                  <option value="8">CHICAGO CITY GATHERING SERVICE </option>
                  <option value="9">COLUMBUS GATHERING SERVICE</option>
                  <option value="10">CONNECTICUT GATHERING SERVICE</option>
                  <option value="11">DALLAS GATHERING SERVICE</option>
                  <option value="12">DC GATHERING SERVICE</option>
                  <option value="13">GILROY GATHERING SERVICE</option>
                  <option value="14">GREENSBORO GATHERING SERVICE</option>
                  <option value="15">HANOVER GATHERING SERVICE</option>
                  <option value="16">HANOVER GATHERING SERVICE</option>
                  <option value="16">HONOLULU GATHERING SERVICE</option>
                  <option value="17">HOUSTON GATHERING SERVICE</option>
                  <option value="18">LAS VEGAS GATHERING SERVICE</option>
                  <option value="19">LETHBRIDGE GATHERING SERVICE</option>
                  <option value="20">LOS ANGELES GATHERING SERVICE</option>
                  <option value="21">MASS CENTRAL GATHERING SERVICE</option>
                  <option value="22">MELBOURNE GATHERING SERVICE</option>
                  <option value="23">MEMPHIS GATHERING SERVICE</option>
                  <option value="24">MIAMI GATHERING SERVICE</option>
                  <option value="25">NEW JERSEY GATHERING SERVICE</option>
                  <option value="26">NEW YORK CITY GATHERING SERVICE</option>
                  <option value="27">OAKLAND GATHERING SERVICE</option>
                  <option value="28">PHILADDELPHIA GATHERING SERVICE</option>
                  <option value="29">PITTSBURGH GATHERING SERVICE</option>
                  <option value="30">RICHMOND GATHERING SERVICE</option>
                  <option value="31">ROLLA GATHERING SERVICE</option>
                  <option value="32">SAN JUAN GATHERING SERVICE</option>
                  <option value="33">SUDBURY GATHERING SERVICE</option>
                  <option value="34">TOLEDO GATHERING SERVICE</option>
                  <option value="35">TORONTO GATHERING SERVICE</option>
                  <option value="36">TUCSON GATHERING SERVICE</option>
                  <option value="37">UNIVERSITY OF MINNESOTA GATHERING SERVICE</option>
                  <option value="38">URBANAN GATHERING SERVICE</option>
                  <option value="39">WEST MICHIGAN GATHERING SERVICE</option>
                </Form.Select>
                
                <Form.Select aria-label="Default select example">
                  <option>Type of Service</option>
                  <option value="1">Flow Prayers</option>
                  <option value="2">Flow Unity</option>
                  <option value="3">Gathering Service</option>
                  <option value="4">Other</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formZoomAttendance">
                  <Form.Label>Zoom</Form.Label>
                  <Form.Control type="zoom" placeholder="Please put zero if none of your members watched on zoom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formInPersonAttendance">
                  <Form.Label>In Person Attendance</Form.Label>
                  <Form.Control type="inPerson" placeholder="In Person Attendance" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNewConverts">
                  <Form.Label>Number of New Converts</Form.Label>
                  <Form.Control type="newConverts" placeholder="Number of New Converts" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstTimers">
                  <Form.Label>Number of First Timers</Form.Label>
                  <Form.Control type="zoom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formtithers">
                  <Form.Label>Number of tithers</Form.Label>
                  <Form.Control type="zoom" placeholder="Enter the number of people who paid tithes" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handlePostClose}>Cancel</Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    </div>
    )
}

export default SubmitData;
