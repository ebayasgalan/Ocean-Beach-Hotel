import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import { ALL_RESERVATIONS_QUERY } from './Reservations';

const DELETE_RESERVATION_MUTATION = gql`
  mutation DELETE_RESERVATION_MUTATION($id: ID!) {
    deleteReservation(id: $id) {
      id
    }
  }
`;

const StyledDelete = styled.div`
  button {
    cursor: pointer;
    border-radius: 1rem;
  }
`;

class DeleteReservation extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client
    // read the cache for the items
    const data = cache.readQuery({ query: ALL_RESERVATIONS_QUERY });
    // filter the deleted item out of page
    data.reservations = data.reservations.filter(
      reservation => reservation.id !== payload.data.deleteReservation.id
    );
    // Put the items back
    cache.writeQuery({ query: ALL_RESERVATIONS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_RESERVATION_MUTATION}
        variables={{
          id: this.props.id
        }}
        update={this.update}
      >
        {(deleteReservation, { loading, error }) => (
          <StyledDelete>
            <button
              onClick={() => {
                if (confirm('Are you sure to cancel this reservation?')) {
                  deleteReservation()
                    .then(() => {
                      if (loading) {
                        return <p>Loading...</p>;
                      }
                      Router.push({
                        pathname: '/reservations'
                      });
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                }
              }}
            >
              {this.props.children}
            </button>
          </StyledDelete>
        )}
      </Mutation>
    );
  }
}

export default DeleteReservation;
