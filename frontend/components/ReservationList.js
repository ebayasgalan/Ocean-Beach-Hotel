import styled from 'styled-components';
import { format, addDays, parse } from 'date-fns';
import Link from 'next/link';

const StyledList = styled.div`
  width: 350px;
  height: 150px;
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
  return (
    <StyledList>
      <Link
        href={{
          pathname: '/reservation',
          query: { id: props.reservation.id }
        }}
      >
        <a>
          <p>Arrival Date: {props.reservation.checkIn}</p>
          <p>Departure Date: {props.reservation.checkOut}</p>
        </a>
      </Link>
    </StyledList>
  );
};

export default ReservationsList;
