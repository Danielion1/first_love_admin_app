import React, { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditForm(props) {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] =  useState(false)
    //view Model
    const handleViewShow = () => {SetViewShow(true)}
    const handleViewClose = () => {SetViewShow(false)}
     //FOr Edit Model
     const [ViewEdit, SetEditShow] = useState(false)
     const handleEditShow = () => { SetEditShow(true) }
     const handleEditClose = () => { SetEditShow(false) }

     const [id,setId] = useState("");

       //Define here local state that store the form Data
       const [name, setname] = useState("")
       const [email, setemail] = useState("")
       const [branch, setbranch] = useState("")
       const [gatheringattendance, setgatheringattendance] = useState("")
       const [impartationattendace, setimpartationattendace] = useState("")
       const [state, setstate] = useState("")



     const handleEdit = () =>{
        const url = `http://localhost:8000/pastor/${id}`
        const Credentials = {name, email, branch, gatheringattendance, impartationattendace, state  }
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

    
 const actionColumns = [{field: 'action', headerName: 'Action', width: 200, renderCell:()=>{
    return (
        <div className='cellAction'>
           {/* <Link to="" style={{textDecoration: "none"}}> */}
            <Button size='sm' variant='warning'onClick={()=> {handleEditShow(SetRowData(Data),setId(Data.id))}}  className='editButton'>Edit</Button>
           {/* // </Link> */}
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
    <div>
      {/* Modal for Edit employee record */}
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
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.name}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Branch</label>
                                <input type="text" className='form-control' onChange={(e) => setbranch(e.target.value)} placeholder="Please enter branch" defaultValue={RowData.branch}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Gathering</label>
                                <input type="number" className='form-control' onChange={(e) => setgatheringattendance(e.target.value)} placeholder="Please enter gathering attendance" defaultValue={RowData.gatheringattendance}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Impartation</label>
                                <input type="number" className='form-control' onChange={(e) => setimpartationattendace(e.target.value)} placeholder="Please enter Impartation attendance" defaultValue={RowData.impartationattendace}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>State</label>
                                <input type="text" className='form-control' onChange={(e) => setstate(e.target.value)} placeholder="Please enter state" defaultValue={RowData.state}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Pastor</Button>
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

export default EditForm
