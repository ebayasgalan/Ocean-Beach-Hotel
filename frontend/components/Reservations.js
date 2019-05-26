import gql from "graphql-tag";
import { Query } from "react-apollo";
import { perPage } from "../config";

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

function Reservations(props) {
  return (
      <Query
        query={ALL_RESERVATIONS_QUERY}
        variables={{
          skip: props.page * perPage - perPage
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <ReservationsList>
              {data.reservations.map(reservation => (

              ))}
            </ReservationsList>
          );
        }}
      </Query>
  );
}

export default Reservations;
export { ALL_RESERVATIONS_QUERY };
