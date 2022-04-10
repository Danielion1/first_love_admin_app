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
        email: '',
        profession: '',
        citizen: false,
        graduate: false

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
        const {date, email, gathering, profession, citizen, graduate} = formData;
        const errors = {};

        if(!email) errors.email ="Email cannot be blank";
        if(!date) errors.email ="date cannot be blank";
        if(!gathering) errors.email ="Branch cannot be blank";
        if(!profession) errors.email ="profession cannot be blank";
        if(!citizen) errors.email ="citizen cannot be blank";
        if(!graduate) errors.email ="graduate cannot be blank";

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
                email: '',
                profession: '',
                citizen: false,
                graduate: false
            });
            setFeedback('You data has been submitted.');
        }

    }
  return (
    <div className="register container">
    <form className="card-panel" onSubmit={handFormSubmission}>
        {Object.values(errors).map(error=>(
            <h8 key={error} className="center red-text">{error}</h8>
        ))}
        <h3 className="center pink-text">Submit Service Data</h3>
        <h2 className="center deep-purple-text">{formData.date}</h2>
        <h2 className="center deep-purple-text">{formData.gathering}</h2>
        <h2 className="center deep-purple-text">{formData.email}</h2>
        <h2 className="center deep-purple-text">{feedback}</h2>

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
            <input type="checkbox" name="citizen" className="filled-in"
            onChange={handleChange} 
            checked={formData.citizen}/>
            <span>Gathering Service</span>
        </div>
        <div className="field">
            <input type="checkbox" name="graduate" className="filled-in"
            onChange={handleChange} 
            checked={formData.graduate}/>
            <span>Flow Prayers</span>
        </div>
        <div className="field">
            <input type="checkbox" name="pra" className="filled-in"
            onChange={handleChange} 
            checked={formData.graduate}/>
            <span>Flow Unity</span>
        </div>
        <div className="field">
            <input type="checkbox" name="nlo" className="filled-in"
            onChange={handleChange} 
            checked={formData.graduate}/>
            <span>Others</span>
        </div>
        </fieldset>
        <div className="field center">
            <button className="btn pink">Submit</button>

        </div>
    </form>
    </div>
  )
}

export default SubmitForm
