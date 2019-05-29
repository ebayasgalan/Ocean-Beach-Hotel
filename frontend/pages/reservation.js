import Reservation from "../components/Reservation";

const ReservationPage = props => {
  return <Reservation id={props.query.id} />;
};

export default ReservationPage;
