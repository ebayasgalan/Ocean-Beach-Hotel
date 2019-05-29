import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { format } from "date-fns";
import styled from "styled-components";
import Head from "next/head";
import gql from "graphql-tag";
import Error from "./ErrorMessage";

const SINGLE_RESERVATION_QUERY = gql`
  query SINGLE_RESERVATION_QUERY($id: ID!) {
    reservation(id: $id) {
      id
      roomType
      checkIn
      checkOut
      createdAt
      price
      user {
        id
        name
      }
    }
  }
`;

const ReservationStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.light};
  box-shadow: ${props => props.theme.bs};
  padding: 2rem;
  border-top: 10px solid purple;
  & > p {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.light};
    span {
      padding: 1rem;
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
                <span>Confirmation #:</span>
                <span>{this.props.id}</span>
              </p>

              <p>
                <span>Arrival:</span>
                <span>{format(reservation.checkIn, "MMMM d, YYYY")}</span>
              </p>
              <p>
                <span>Departure:</span>
                <span>{format(reservation.checkOut, "MMMM d, YYYY")}</span>
              </p>
              <p>
                <span>Room Type:</span>
                <span>{reservation.roomType}</span>
              </p>
              <p>
                <span>Reserved on: </span>
                <span>
                  {format(reservation.createdAt, "MMMM d, YYYY h:mm a")}
                </span>
              </p>

              <p>
                <span>Price per night</span>
                <span>$ {reservation.price}</span>
              </p>
            </ReservationStyles>
          );
        }}
      </Query>
    );
  }
}

export default Reservation;
