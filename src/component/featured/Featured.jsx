import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
//  import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PieChart from '../../component/chart/PieChart';
import { border } from '@mui/system';
export default function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">GATHERING SERVICE</h1>
            <MoreVertIcon fontSize='small'/>
            
        </div>
        <div className="bottom">
       
            <div className="featuredChart">
           
            

                {/* <CircularProgressbar className='circularProgressBar' value={45} text ={"45%"} strokeWidth={7}/> */}
            </div>
            <p className='title'>Percentage close to target</p>
            <p className='attendance'>1340</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">10000</div>
                    </div>

                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resultAmount">1100</div>
                    </div>

                </div>
                <div className="item">
                    <div className="itemTitle">Previous Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">1400</div>
                    </div>

                </div>
            </div>
            <PieChart className="pieBar"/>
            <div className="btncolor">
            <button className='piecolor' style={{ background: "#0088FE", color: "#FFFFFF", border:"none"}}>NE</button>
            <button className='piecolor' style={{ background: "#00C49F", color: "#FFFFFF", border:"none"}}>MW</button>
            <button className='piecolor'  style={{ background: "#FFBB28", color: "#FFFFFF", border:"none"}}>SE</button>
            <button className='piecolor' style={{ background: "#FF8042", color: "#FFFFFF", border:"none"}}>NE</button>
            <button className='piecolor' style={{ background: "#C02BB8", color: "#FFFFFF", border:"none"}}>NE</button>
            <button className='piecolor' style={{ background: "#D02332", color: "#FFFFFF", border:"none"}}>NE</button>
            </div>
        </div>
      
    </div>
  )
}
