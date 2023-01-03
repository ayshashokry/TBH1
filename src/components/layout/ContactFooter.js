import React, { Component } from 'react';
import '../../stylesheets/ContactCss.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class ContactFooter extends Component {
  render() {
    return (
      <section className="contactfooter">
        <Container>
          <div className="offset-lg-1 pl-5">
            {' '}
            <Row>
              {' '}
              <Col sm="2">
                {' '}
                <div className="hr"></div>
                <h6>{this.props.lefttoptitle} </h6>
              </Col>
              <Col sm="10">
                <h4>{this.props.rightheader}</h4>
                <p>{this.props.rightparagraph}</p>
              </Col>
            </Row>
          </div>
        </Container>{' '}
      </section>
    );
  }
}
