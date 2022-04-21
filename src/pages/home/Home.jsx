import Tables from '../../component/tables/Tables'
import Table from '../../component/table/Table'
import Chart from '../../component/chart/Chart'
import Featured from '../../component/featured/Featured'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import Widget from '../../component/widget/Widget'
import SubmitForm from '../../pages/submitForm/SubmitForm'

import './home.scss'
export default function home() {
  return (
    <div className='home'>  
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type ='impartation'/>
          <Widget  type ='fellowship'/>
          <Widget  type ='flowPray'/>
          <Widget  type ='FlowUnity'/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart title ="Gathering Service Attendance" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Pastors and GSOs</div>
          <Table/>
          {/* <Tables/> */}
          <SubmitForm/>
        </div>
      </div>
    </div>
  )
}
