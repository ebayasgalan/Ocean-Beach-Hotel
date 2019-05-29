import gql from "graphql-tag";
import { Query } from "react-apollo";
import Link from "next/Link";
import styled from "styled-components";
import ReservationList from "./ReservationList";
import Button from "../components/styles/CoolButton";

const ALL_RESERVATIONS_QUERY = gql`
  query ALL_RESERVATIONS_QUERY {
    reservations {
      id
      checkIn
      checkOut
      roomType
    }
  }
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: 400px;
  max-width: ${props => props.theme.maxWidth};
`;

const StyledButton = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 10px auto;
  max-width: 250px;
`;

function Reservations() {
  return (
    <>
      <Query query={ALL_RESERVATIONS_QUERY}>
        {({ data: { reservations }, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <>
              <h1 style={{ textAlign: "center" }}>Reservations</h1>
              <StyledList>
                {reservations.map(reservation => (
                  <ReservationList
                    key={reservation.id}
                    reservation={reservation}
                  />
                ))}
              </StyledList>
              <StyledButton>
                <Button>
                  <Link href="/new_reservation">
                    <a>New Reservation</a>
                  </Link>
                </Button>
              </StyledButton>
            </>
          );
        }}
      </Query>
    </>
  );
}

export default Reservations;
export { ALL_RESERVATIONS_QUERY };
