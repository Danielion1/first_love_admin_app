
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import GatheringServiceTable from '../table/GatheringServiceTable';
import ImpartationServiceTable from '../table/ImpartationServiceTable';
import FlowUnityServiceTable from '../table/FlowUnityServiceTable';





function TabSelectionss () {
 // const [key, setKey] = useState('gathering');

//  const handleSelects= (key)=> {
           
//   if(key === 'gathering') {
//       //console.log('ll', key)
//       //this.setState({ heading: "Gathering Service" })
//       $(document).ready(function () {
//         $('#gatheringTable').DataTable();
//       }); 

//   } else if(key === 'impartationTable') {
//     //console.log('ll', key)
//     //this.setState({ heading: "Impartation Service" })
//     $(document).ready(function () {
//         $('#impartationTable').DataTable();});
       
//   } else if(key === 'flowUnity') {
//    // console.log('ll', key)
//     //this.setState({ heading: "Flow Unity Service" })
//     $(document).ready(function () {
//         $('#flowUnity').DataTable();});
//   }

// } 

  return (

    // <Tabs
    <Tabs 
      defaultActiveKey="gathering"
      id="uncontrolled-tab-example"
      className="mb-3"
>
      <Tab eventKey="gathering" title="Gathering Service">
        <GatheringServiceTable name="Gathering Service"/> 
      </Tab>

      <Tab eventKey="impartationTable" title="Impartation Service">
        <ImpartationServiceTable name="Impartation Service"/>
      </Tab>
      
      <Tab eventKey="flowUnity" title="Flow Unity Service">
        <FlowUnityServiceTable name="Flow Unity Service"/>
      </Tab>
      

    </Tabs>

  );
}

export default TabSelectionss;