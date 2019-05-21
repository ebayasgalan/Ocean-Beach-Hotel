import React, { Component } from "react";
import Form from "./styles/Form";

const RESERVE_MUTATION = gql`
  mutation RESERVE_MUTATION(
    $checkIn: Date!
    $checkOut: Date!
    $roomType: String!
  ) {
    reserve(checkIn: $checkIn, checkOut: $checkOut, roomType: $roomType) {
      id
      checkIn
      checkOut
    }
  }
`;

class Reservation extends Component {
  state = {
    checkIn: "",
    checkOut: "",
    roomType: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(reserve, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await reserve();
                this.setState({
                  checkIn: "",
                  checkOut: "",
                  roomType: ""
                });
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
                    <option value={this.state.roomType}>Deluxe Full</option>
                    <option value={this.state.roomType}>Deluxe Queen</option>
                    <option value={this.state.roomType}>Deluxe Twin</option>
                    <option value={this.state.roomType}>Suite</option>
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

export default Reservation;
