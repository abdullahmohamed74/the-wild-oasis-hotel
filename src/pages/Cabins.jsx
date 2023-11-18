import CabinTable from '../features/cabins/CabinTable';
import CabinsTableOperations from '../features/cabins/CabinsTableOperations';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import ShowModal from '../ui/ShowModal';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinsTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <ShowModal />
      </Row>
    </>
  );
}

export default Cabins;
