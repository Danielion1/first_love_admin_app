// import DatePicker from "react-datepicker"
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ErrorSharp } from "@mui/icons-material";
import React, {useState} from "react";
import './submitForm.scss';

const SubmitForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        gathering: '',
        impartationservice:'',
        attendance: '',
        zoomattendance: '',
        tithers: '',
        gatheringservice: '',
        flowprayer:'',
        flowunity:'',
        other:''

    });
    const[feedback, setFeedback] = useState('');
    const[errors, setErrors] = useState({});

    const handleChange = event =>{setFormData({
        ...formData,
        [event.target.name]:event.target.type ==="checkbox" ? event.target.checked :
         event.target.value
    })};

    const [startDate, setStartDate] = useState(new Date());

  
    const validate = formData =>{
        const {date, attendance, gathering, zoomattendance, tithers, gatheringservice} = formData;
        const errors = {};

        if(!attendance) errors.email ="Attendance cannot be blank";
        if(!date) errors.email ="date cannot be blank";
        if(!gathering) errors.email ="Branch cannot be blank";
        if(zoomattendance) errors.email ="Zoom Attendance cannot be blank";
        if(tithers) errors.email ="tithers cannot be blank";

        return errors;
    }
    const handFormSubmission = event =>{
        event.preventDefault();
        const errors = validate(formData);
        setErrors(errors);
        if(Object.keys(errors).length=== 0){
            console.log("form is now submitted");
            console.log(formData);
            setFormData({
                date: '',
                gathering:'',
                impartationservice:'',
                attendance: '',
                zoomattendance: '',
                tithers: '',
                gatheringservice: '',
                flowprayer:'',
                flowunity:'',
                other:''
            });
            setFeedback('You data has been submitted.');
        }

    }
  return (
    <div className="register-container">
    <form className="card-panel" onSubmit={handFormSubmission}>
        {Object.values(errors).map(error=>(
            <h8 key={error} className="center red-text">{error}</h8>
        ))}
        {/* <h3 className="center pink-text">Submit Service Data</h3>
        <h2 className="center deep-purple-text">{formData.date}</h2>
        <h2 className="center deep-purple-text">{formData.gathering}</h2>
        <h2 className="center deep-purple-text">{formData.attendance}</h2>
        <h2 className="center deep-purple-text">{feedback}</h2> */}

        <div className="field">
            <label htmlFor="date" name="date">Date</label>
            <DatePicker className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)}/>
        </div>
        {/* <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
        </div> */}
        <div className="field">
            <label htmlFor="gathering">Gathering Service </label>
            <select name="gathering" id="gathering"
            className="browser-default"
            value={formData.gathering}
            onChange={handleChange}
            >
                <option>Choose any one</option>
                <option value="software EN">Albany</option>
                <option value="software TM">Atlanta</option>
                <option value="software RE">Austin</option>
                <option value="software GJ">BAY AREA</option>
                <option value="software TM">ATLANTA</option>
                <option value="software RE">AUSTIN</option>
                <option value="software GJ">BAY AREA</option>
                <option value="software TM">ATLANTA</option>
                <option value="software RE">AUSTIN</option>
                <option value="software GJ">BAY AREA</option>
            </select>
        </div>
        <fieldset>
            <legend>Select your service method</legend>

        <div className="field">
            <input type="checkbox" name="gatheringservice" className="filled-in"
            onChange={handleChange} 
            checked={formData.gatheringservice}/>
            <span>Gathering Service</span>
        </div>
        <div className="field">
            <input type="checkbox" name="impartationservice" className="filled-in"
            onChange={handleChange} 
            checked={formData.impartationservice}/>
            <span>Impartation Service</span>
        </div>
        <div className="field">
            <input type="checkbox" name="flowprayer" className="filled-in"
            onChange={handleChange} 
            checked={formData.flowprayer}/>
            <span>Flow Prayers</span>
        </div>
        <div className="field">
            <input type="checkbox" name="flowunity" className="filled-in"
            onChange={handleChange} 
            checked={formData.flowunity}/>
            <span>Flow Unity</span>
        </div>
        <div className="field">
            <input type="checkbox" name="other" className="filled-in"
            onChange={handleChange} 
            checked={formData.other}/>
            <span>Others</span>
        </div>
        </fieldset>
        <div className="field">
            <label htmlFor="text">Attendance</label>
            <input type="text" name="attendance" id="attendance" placeholder="Enter Attendance" value={formData.attendance} onChange={handleChange}/>
        </div>
        <div className="field">
            <label htmlFor="text">Zoom Attendance</label>
            <input type="text" name="zoomattendance" id="zoomattendance" placeholder="Enter Zoom Attendance" value={formData.zoomattendance} onChange={handleChange}/>
        </div>
        <div className="field">
            <label htmlFor="text">Number Tithers</label>
            <input type="text" name="tithers" id="tithers" placeholder="Enter Number Tithers" value={formData.tithers} onChange={handleChange}/>
        </div>
        <div className="field center">
            <button className="btn-pink">Submit</button>

        </div>
    </form>
    </div>
  )
}

export default SubmitForm
