import './navbar.scss'
import SearchOutlinedIcon  from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" className='searchBox' placeholder='Search..' />
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://stringfixer.com/files/24952408.jpg" className='profileImg' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
