import UpdateReservation from '../components/UpdateReservation';

const UpdatePage = props => (
  <div>
    <UpdateReservation id={props.query.id} />
  </div>
);

export default UpdatePage;
