import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const RESERVATIONS_QUERY = gql`
  query RESERVATIONS_QUERY { 
    reservations() {
      id
      checkIn
      checkOut
      roomType
    }
  }
`;

class Reservations extends Component {
  render() {
    return (
      <Query query={}>
        
      </Query>
    )
  }
}

export default Reservations;