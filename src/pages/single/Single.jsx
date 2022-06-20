import './single.scss'
import Sidebar  from '../../component/Sidebar/Sidebar'
import Navbar  from '../../component/navbar/Navbar'
import Chart  from '../../component/chart/Chart'
import Table  from '../../component/table/Table'

export default function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className="Item">
              <img src="https://stringfixer.com/files/27176728.jpg" className='itemImg' alt="" />
              <div className="details">
                    <h1 className="itemTitle">Dan Samuel</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">danjohn@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
<<<<<<< HEAD
                      <span className="itemValue">+1 234 453 111</span>
=======
                      <span className="itemValue">+1 234 453 1111</span>
>>>>>>> 390231d74b4439722266623a579a23fc02dee179
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemValue">234 Faltonta dr. Holt Carlifornia 58334</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">USA</span>
                    </div>

              </div>

            </div>
          </div>
          <div className="right">
            <Chart aspect ={3/1} title ="Gathering Service Attendances"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className='title'>Attendance</h1>
          <Table/>
        </div>
      </div>
    </div>
  )
}
