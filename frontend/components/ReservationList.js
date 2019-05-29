import styled from "styled-components";
import { format } from "date-fns";
import Link from "next/link";

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
          pathname: "/reservation",
          query: { id: props.reservation.id }
        }}
      >
        <a>
          <p>Confirmation Number: {props.reservation.id}</p>
          <p>
            Arrival Date: {format(props.reservation.checkIn, "MMMM d, YYYY")}
          </p>
          <p>
            Departure Date: {format(props.reservation.checkOut, "MMMM d, YYYY")}
          </p>
        </a>
      </Link>
    </StyledList>
  );
};

export default ReservationsList;
