import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Router from 'next/router';

import Error from './ErrorMessage';
import Form from './styles/Form';

const SINGLE_RESERVATION_QUERY = gql`
  query SINGLE_RESERVATION_QUERY($id: ID!) {
    reservation(id: $id) {
      id
      roomType
      checkIn
      checkOut
      user {
        id
        name
      }
    }
  }
`;

const UPDATE_RESERVATION_MUTATION = gql`
  mutation UPDATE_RESERVATION_MUTATION(
    $checkIn: DateTime!
    $checkOut: DateTime!
    $roomType: String!
  ) {
    updateReservation(
      checkIn: $checkIn
      checkOut: $checkOut
      roomType: $roomType
    ) {
      id
      checkIn
      checkOut
      roomType
    }
  }
`;

const StyledPage = styled.div`
  height: 100vh;
  .form {
    display: flex;

    .classOne {
      flex: 1;
    }
    .middleOne {
      flex-basis: 50rem;
    }
  }
`;

class UpdateReservation extends Component {
  state = {
    checkIn: '',
    checkOut: '',
    roomType: 'Deluxe Full'
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  updateReservation = async (e, updateReservationMutation) => {
    e.preventDefault();
    const res = await updateReservationMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
  };

  render() {
    return (
      <Query
        query={SINGLE_RESERVATION_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data) return <p>No Reservation Found for ID {this.props.id}</p>;
          return (
            <StyledPage>
              <Mutation
                mutation={UPDATE_RESERVATION_MUTATION}
                variables={this.state}
              >
                {(updateReservation, { error, loading }) => {
                  return (
                    <div className='form'>
                      <div className='classOne' />
                      <div className='middleOne'>
                        <Form
                          method='post'
                          onSubmit={e => {
                            this.updateReservation(e, updateReservation);
                            this.setState({
                              checkIn: '',
                              checkOut: '',
                              roomType: 'Deluxe Full'
                            });
                            Router.push({
                              pathname: '/reservations'
                            });
                          }}
                        >
                          <Error error={error} />
                          <fieldset disabled={loading} aria-busy={loading}>
                            <h2>Modify Your Reservation</h2>
                            <label htmlFor='checkIn'>
                              Check In
                              <br />
                              <input
                                type='date'
                                name='checkIn'
                                value={this.state.checkIn}
                                onChange={e => this.saveToState(e)}
                              />
                            </label>
                            <label htmlFor='checkOut'>
                              Check Out
                              <br />
                              <input
                                type='date'
                                name='checkOut'
                                value={this.state.checkOut}
                                onChange={e => this.saveToState(e)}
                              />
                            </label>
                            <label htmlFor='roomType'>
                              Room Type
                              <select
                                name='roomType'
                                onChange={e => this.saveToState(e)}
                              >
                                <option value='Deluxe Full'>Deluxe Full</option>
                                <option value='Deluxe Queen'>
                                  Deluxe Queen
                                </option>
                                <option value='Deluxe Twin'>Deluxe Twin</option>
                                <option value='Suite'>Suite</option>
                              </select>
                            </label>
                            <button type='submit'>
                              Sav{loading ? 'ing' : 'e'}
                            </button>
                          </fieldset>
                        </Form>
                      </div>
                      <div className='classOne' />
                    </div>
                  );
                }}
              </Mutation>
            </StyledPage>
          );
        }}
      </Query>
    );
  }
}

export default UpdateReservation;
export { UPDATE_RESERVATION_MUTATION };
