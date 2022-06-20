
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Table from '../table/Table';

function tabSelection () {
  return (
    <Tabs
      defaultActiveKey="gathering"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="gathering" title="Gathering">
        <Table name="gathering"/>
      </Tab>
      <Tab eventKey="impartation" title="Impartation">
        <Table name="impartation"/>
      </Tab>
      <Tab eventKey="flowPrayer" title="Flow Prayer">
        <Table name="flowPrayer"/>
      </Tab>
    </Tabs>
  );
}

export default tabSelection;