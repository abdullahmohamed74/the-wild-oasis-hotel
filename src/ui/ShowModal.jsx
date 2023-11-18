import Modal from './Modal';
import Button from './Button';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function ShowModal() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default ShowModal;
