'use strict';

import React from 'react';
import request from 'axios';

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    this.loadPeople();
    setInterval(() => {
      this.loadPeople();
    }, this.props.pollInterval);
  }

  loadPeople() {
    request
      .get('/api/v1/people')
      .then((res) => {
        this.setState({ people: res.data });
      });
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this
            .state
            .people
            .map((person, i) => (
              <tr className="selected" key={i}>
                <td>
                  <figure className="avatar" data-initial="YZ"></figure>
                </td>
                <td>{person.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

People.propTypes = {
  pollInterval: React.PropTypes.number.isRequired,
};
