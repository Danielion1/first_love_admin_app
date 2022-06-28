
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Table from '../table/GatheringServiceTable';
import ImpartationServiceTable from '../table/ImpartationServiceTable';
import FlowUnityServiceTable from '../table/FlowUnityServiceTable';


function tabSelection () {
  return (
    <Tabs
      defaultActiveKey="gathering"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="gathering" title="Gathering Service">
        <Table name="Gathering Service"/>
      </Tab>
      <Tab eventKey="impartation" title="Impartation Service">
        <ImpartationServiceTable name="Impartation Service"/>
      </Tab>
      <Tab eventKey="flowUnity" title="Flow Unity Service">
        <FlowUnityServiceTable name="Flow Unity Service"/>
      </Tab>

    </Tabs>
  );
}

export default tabSelection;