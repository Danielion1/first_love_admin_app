import './new.scss';
import Sidebar from '../../component/Sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
//import { async } from '@firebase/util';
import { db } from '../../firebase';

const handleAdd = async(e)=>{
  e.preventDefault()
  // Add a new document in collection "cities"
    await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});
}
export default function New({inputs, title}) {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={
              file? URL.createObjectURL(file):"https://stringfixer.com/files/8631295.jpg"
            } alt="" />
          </div>
          <div className='right'>
            <form onSubmit={handleAdd} action="form">
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className='icon'/>
                  </label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:'none'}}/>
              </div>
              
              {inputs.map((input) =>(
              <div className="formInput"key={input.id} >
                <label htmlFor="">{input.label}</label>
                <input type={input.type}  placeholder={input.placeholder}/>
              </div>
              ))}
              <button type='submit'>Send</button>
              

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
