import React, { Component } from 'react';
import '../../stylesheets/CardItemCss.css';

import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class CardItem extends Component {
  render() {
    return (
      <Col lg={4} md={6} sm={12} className=" px-2 py-5 mx-auto">
        <Card
         style={{ width: '18rem' }}
          className="mx-auto smallCard">
          <Card.Img variant="top" src= {this.props.itemData.smallImg} />

          <Card.Body>
            <Card.Title>
              {/* Get in line! Stay in the herd and don’t think for yourself! */}
              {this.props.itemData.cardtitle}
            </Card.Title>
            <div className="blackline my-3"></div>

            <Card.Text>
              {/* Stalin was a master in getting you to follow the rules and do what
              he wanted you to do. Just think of it, this is technically
              slavery. The whole Soviet Army was slavery. You get to abide by
              the rules, you don’t get to coul... */}
              {this.props.itemData.cardart}

            </Card.Text>
            <Button className="my-3 cardbutt" ><Link to={{ pathname:`/blog/${this.props.itemData.id}`, state: { info: this.props.itemData} }}>READ MORE</Link></Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
