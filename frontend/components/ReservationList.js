import styled from 'styled-components';
import Link from 'next/link';

const StyledList = styled.div`
  width: 35rem;
  height: 10rem;
  background: ${props => props.theme.light};
  border: 2px black solid;
  text-align: center;
  margin: 2px;
  padding: 3px;
  :hover {
    background: ${props => props.theme.dark};
  }
`;

const ReservationsList = props => {
  const checkIn = props.reservation.checkIn.slice(0, 10);
  const checkOut = props.reservation.checkOut.slice(0, 10);
  return (
    <StyledList>
      <Link
        href={{
          pathname: '/reservation',
          query: { id: props.reservation.id }
        }}
      >
        <a>
          <p>Arrival Date: {checkIn} </p>
          <p>Departure Date: {checkOut}</p>
        </a>
      </Link>
    </StyledList>
  );
};

export default ReservationsList;
