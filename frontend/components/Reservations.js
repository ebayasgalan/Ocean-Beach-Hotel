import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import { perPage } from "../config";
import ReservationList from "./ReservationList";
import Button from "../components/styles/CoolButton";

const ALL_RESERVATIONS_QUERY = gql`
  query ALL_RESERVATIONS_QUERY($skip: Int = 0, $first: Int = ${perPage}) { 
    reservations(first: $first, skip: $skip, orderBy: createdAt_DESC ) {
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

function Reservations(props) {
  return (
    <>
      <Query
        query={ALL_RESERVATIONS_QUERY}
        variables={{
          skip: props.page * perPage - perPage
        }}
      >
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
            </>
          );
        }}
      </Query>
      <Button>Make a new reservation</Button>
    </>
  );
}

export default Reservations;
export { ALL_RESERVATIONS_QUERY };
