import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import GroupIcon from '@mui/icons-material/Group';
import ChurchIcon from '@mui/icons-material/Church';
import FaceIcon from '@mui/icons-material/Face';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
          <span className='logo'>FLCNA-ADMIN</span>
      </div>
      <hr/>
      <div className="center">
          <ul>
              <p className='title'>Main</p>
              <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
              </li>
              <p className='title'>List</p>
              <li>
                <PersonIcon className='icon'/>
                <span>Users</span>
              </li>
              <li>
                <GroupIcon className='icon'/>
                <span>Pastors</span>
              </li>
              <li>
                 <GroupIcon className='icon'/>
                  <span>GSOs</span>
              </li>
              <li>
                <DirectionsBusIcon className='icon'/>
                  <span>Bacenter Leaders</span>
              </li>
              <li>
                 <ChurchIcon className='icon'/>
                  <span>Churches</span>
              </li>
              <p className='title'>Users</p>
              <li>
                <FaceIcon className='icon'/>
                <span>Profile</span>
              </li>
              <li>
                <ExitToAppIcon className='icon'/>
                <span>Logout</span>
              </li>
              <p className='title'>Color</p>
          </ul>
      </div>
      
      <div className="buttom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
      </div>
    </div>
  )
}
