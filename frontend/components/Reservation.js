import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import DeleteReservation from './DeleteReservation';

const SINGLE_RESERVATION_QUERY = gql`
  query SINGLE_RESERVATION_QUERY($id: ID!) {
    reservation(id: $id) {
      id
      roomType
      checkIn
      checkOut
      createdAt
      user {
        id
        name
      }
    }
  }
`;

const ReservationStyles = styled.div`
  height: 100vh;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.light};
  box-shadow: ${props => props.theme.bs};
  padding: 2rem;
  border-top: 10px solid #297a91;
  & > p {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.light};
    span {
      padding: 1rem;
    }
  }
  .buttonList {
    button,
    a {
      :hover {
        background: ${props => props.theme.light};
        color: black;
      }
      background: #297a91;
      color: white;
      border: 0;
      font-size: 1.8rem;
      font-weight: 600;
      padding: 0.5rem 1rem;
    }
  }
`;

class Reservation extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    return (
      <Query query={SINGLE_RESERVATION_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          const reservation = data.reservation;
          return (
            <ReservationStyles>
              <Head>
                <title>
                  Ocean Beach Hotel reservation for {reservation.user.name}
                </title>
              </Head>
              <p>
                <span>Guest's name:</span>
                <span>{reservation.user.name}</span>
              </p>
              <p>
                <span>Confirmation number:</span>
                <span>{reservation.id}</span>
              </p>

              <p>
                <span>Arrival:</span>
                <span>{format(reservation.checkIn, 'MMMM DD, YYYY')}</span>
              </p>
              <p>
                <span>Departure:</span>
                <span>{format(reservation.checkOut, 'MMMM DD, YYYY')}</span>
              </p>
              <p>
                <span>Room Type:</span>
                <span>{reservation.roomType}</span>
              </p>
              <p>
                <span>Reserved on: </span>
                <span>
                  {format(reservation.createdAt, 'MMMM DD, YYYY h:mm a')}
                </span>
              </p>
              <div className='buttonList'>
                <div className='items'>
                  <Link
                    href={{
                      pathname: '/update',
                      query: { id: reservation.id }
                    }}
                  >
                    <a>Edit ✏️</a>
                  </Link>
                </div>
                <div className='items'>
                  <DeleteReservation id={reservation.id}>
                    Cancel ❌
                  </DeleteReservation>
                </div>
              </div>
            </ReservationStyles>
          );
        }}
      </Query>
    );
  }
}

export default Reservation;
