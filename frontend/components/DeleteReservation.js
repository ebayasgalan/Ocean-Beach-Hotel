import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_RESERVATIONS_QUERY } from './Reservations';

const DELETE_RESERVATION_MUTATION = gql`
  mutation DELETE_RESERVATION_MUTATION($id: ID!) {
    deleteReservation(id: $id) {
      id
    }
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
        {(deleteReservation, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure to cancel this reservation?')) {
                deleteReservation().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteReservation;
