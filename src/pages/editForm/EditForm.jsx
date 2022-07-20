import React, {useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
//import { updatedata } from './context/ContextProvider'
import { useNavigate } from 'react-router-dom';



const EditForm = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} =  useState([]);

    //const history = useHistory("");
    const navigate = useNavigate();


    const [inpval, setINP] = useState({
        gatheringService: "",
        typeOfService: "",
        inpersonAttendance: "",
        zoomAttendance: "",
        firstTimers: "",
        tithers: "",
        newConvert: "",
        date: ""
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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/submitData/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {gatheringService,typeOfService,inpersonAttendance,zoomAttendance,firstTimers,tithers,newConvert,date} = inpval;

        const res2 = await fetch(`http://localhost:8000/submitData/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                gatheringService,typeOfService,inpersonAttendance,zoomAttendance,firstTimers,tithers,newConvert,date
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
           // history.push("/")
            navigate.push("/")

            setUPdata(data2);
        }

    }


    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Branch</label>
                        <input type="text" value={inpval.gatheringService} onChange={setdata} name="gatheringService" class="form-control" id="gatheringService" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="typeOfService" class="form-label">Type of Service</label>
                        <input type="text" value={inpval.typeOfService} onChange={setdata} name="typeOfService" class="form-control" id="typeOfService" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="inpersonAttendance" class="form-label">In Person</label>
                        <input type="number" value={inpval.inpersonAttendance} onChange={setdata} name="inpersonAttendance" class="form-control" id="inpersonAttendance" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="zoomAttendance" class="form-label">Zoom</label>
                        <input type="number" value={inpval.zoomAttendance} onChange={setdata} name="zoomAttendance" class="form-control" id="zoomAttendance" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="firstTimers" class="form-label">First Timers</label>
                        <input type="number" value={inpval.firstTimers} onChange={setdata} name="firstTimers" class="form-control" id="firstTimers" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Tithers</label>
                        <input type="number" value={inpval.tithers} onChange={setdata} name="tithers" class="form-control" id="tithers" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="newConvert" class="form-label">New Convert</label>
                        <input type="number" value={inpval.newConvert} onChange={setdata} name="newConvert" class="form-control" id="newConvert" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="date" class="form-label">Date</label>
                        <input type="date" value={inpval.date} onChange={setdata} name="date" class="form-control" id="date" />
                    </div>

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm;





