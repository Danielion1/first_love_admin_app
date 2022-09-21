
import React, { useState } from 'react';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GatheringServiceTable from '../table/GatheringServiceTable';
import ImpartationServiceTable from '../table/TTImpartationServiceTableMIX';
import {useId} from 'react';
//import FlowUnityServiceTable from '../table/FlowUnityServiceTable';


function TabSelection () {

const [tabIndex, setTabIndex] = useState(0);
const id = useId();


  return (
    

    // <Tabs
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

    <TabList>
      <Tab htmlFor={id +'gatheringTable'} >Gathering Service</Tab>
      <Tab htmlFor={id +'impartationTable'}>Impartation Service</Tab>
    </TabList>

  <TabPanel>
      <GatheringServiceTable name="Gathering Service" htmlFor={id +'gatheringTable'}/> 
  </TabPanel>

  <TabPanel>
      <ImpartationServiceTable name="Impartation Service" htmlFor={id +'impartationTable'}/>
  </TabPanel>
      
</Tabs>

  );
}

export default TabSelection;