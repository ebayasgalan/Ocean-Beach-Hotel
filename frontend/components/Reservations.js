import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import styled from 'styled-components';
import ReservationList from './ReservationList';
import Button from '../components/styles/CoolButton';

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

const StyledPage = styled.div`
  height: 100vh;
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
    <StyledPage>
      <Query query={ALL_RESERVATIONS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>LOADING...</p>;
          if (error) return <p>Error: {error.message}</p>;
          const reservations = data.reservations;
          return (
            <>
              <h1 style={{ textAlign: 'center' }}>Reservations</h1>
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
                  <Link href='/new_reservation'>
                    <a>New Reservation</a>
                  </Link>
                </Button>
              </StyledButton>
            </>
          );
        }}
      </Query>
    </StyledPage>
  );
}

export default Reservations;
export { ALL_RESERVATIONS_QUERY };
