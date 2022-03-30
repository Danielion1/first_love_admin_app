import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function Widget({type}) {
    let data;
    const number = 1000;
    const percentageDiff = 20;

    switch(type){
        case 'impartation':
            data={
                title:'IMPARTATION',
                attendance: true,
                link:'View all branches attendance',
                icon:(<ConnectWithoutContactIcon className="icon" style={{color:'crimson', backgroundColor:'rgba(255, 0, 0, 0.2)' }}/>),

            };
            break;
            case 'fellowship':
                data={
                    title:'FELLOWSHIP',
                    attendance: true,
                    link:'View all branches attendance',
                    icon: (<EscalatorWarningIcon className='icon' style={{color:'blue', backgroundColor:'rgba(218, 165, 32, 0.2)' }}/>),
    
                };
                break;
                case 'flowPray':
                    data={
                        title:'FLOW PRAYER',
                        attendance: true,
                        link:'View all branches attendance',
                        icon: (<SettingsAccessibilityIcon className='icon' 
                        style={{color:'green', backgroundColor:'rgba(187, 352, 32, 0.2)' }}/>),

        
                    };
                    break;
                    case 'FlowUnity':
                        data={
                            title:'FLOW UNITY',
                            attendance: true,
                            link:'View all branches attendance',
                            icon: (<PeopleOutlineIcon className='icon' style={{color:'orange', backgroundColor:'rgba(200, 123, 16, 0.2)' }}/>),
            
                        };
                        break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='attendance'>{data.attendance} {number}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {percentageDiff}%</div>
                {data.icon}
        </div>
      
    </div>
  )
}
