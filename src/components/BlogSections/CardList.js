import React, { Component } from 'react';
import Card from '../layout/CardItem.js';
import { Row } from 'react-bootstrap';

import myData from '../../DataBase/Data.json';
export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: myData };
  }

  render() {
    return (
      <div>
        <Row>
          {this.state.data.map(item => (
            <Card key={Math.floor(Math.random() * 101)} itemData={item} />
          ))}
        </Row>
      </div>
    );
  }
}
