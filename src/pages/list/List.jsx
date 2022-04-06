import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import './list.scss'
import Datatable from '../../component/datatable/Datatable'

export default function List() {
  return (
    <div>
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable/>
        </div>
      </div>
    </div>
  )
}
