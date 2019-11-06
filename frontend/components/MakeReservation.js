import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

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

class MakeReservation extends Component {
  state = {
    checkIn: "",
    checkOut: "",
    roomType: "Deluxe Full"
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={RESERVE_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(createReservation, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await createReservation();
                this.setState({
                  checkIn: "",
                  checkOut: "",
                  roomType: "Deluxe Full"
                });
                if (!error) {
                  Router.push("/index");
                }
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Make a Reservation</h2>
                <Error error={error} />
                <label htmlFor="checkIn">
                  Check In
                  <input
                    type="date"
                    name="checkIn"
                    value={this.state.checkIn}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="checkOut">
                  Check Out
                  <input
                    type="date"
                    name="checkOut"
                    value={this.state.checkOut}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="roomType">
                  Room Type
                  <select name="roomType" onChange={this.saveToState}>
                    <option value="Deluxe Full">Deluxe Full</option>
                    <option value="Deluxe Queen">Deluxe Queen</option>
                    <option value="Deluxe Twin">Deluxe Twin</option>
                    <option value="Suite">Suite</option>
                  </select>
                </label>
                <button type="submit">Reserve</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default MakeReservation;
