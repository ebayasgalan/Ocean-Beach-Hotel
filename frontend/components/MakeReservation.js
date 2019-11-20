import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import styled from 'styled-components';

import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import { ALL_RESERVATIONS_QUERY } from './Reservations';

const RESERVE_MUTATION = gql`
  mutation RESERVE_MUTATION(
    $checkIn: DateTime!
    $checkOut: DateTime!
    $roomType: String!
  ) {
    createReservation(
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

class MakeReservation extends Component {
  state = {
    checkIn: '',
    checkOut: '',
    roomType: 'Deluxe Full'
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledPage>
        <Mutation
          mutation={RESERVE_MUTATION}
          variables={this.state}
          refetchQueries={[
            { query: CURRENT_USER_QUERY, query: ALL_RESERVATIONS_QUERY }
          ]}
        >
          {(createReservation, { error, loading }) => {
            return (
              <div className='form'>
                <div className='classOne' />
                <div className='middleOne'>
                  <Form
                    method='post'
                    onSubmit={async e => {
                      e.preventDefault();
                      await createReservation();
                      this.setState({
                        checkIn: '',
                        checkOut: '',
                        roomType: 'Deluxe Full'
                      });
                      if (!error) {
                        Router.push({
                          pathname: '/reservations'
                        });
                      }
                    }}
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <h2>Book a reservation</h2>
                      <Error error={error} />
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
                          <option value='Deluxe Queen'>Deluxe Queen</option>
                          <option value='Deluxe Twin'>Deluxe Twin</option>
                          <option value='Suite'>Suite</option>
                        </select>
                      </label>
                      <button type='submit'>Reserve</button>
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
  }
}

export default MakeReservation;
