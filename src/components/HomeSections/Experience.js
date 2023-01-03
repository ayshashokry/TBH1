import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col, Row, Container } from 'react-bootstrap';

export default class Experience extends Component {
  render() {
    return (
      <div className="pt-1 pb-4">
        <Container>
          <Row>
            <Col sm={12}>
              <h1 className="imgheader mt-5 pb-4 text-center">
                OFFICE EXPERIENCE
              </h1>
            </Col>
          </Row>
        </Container>

        <Container style={{ maxWidth: '100%' }} className="bgimg">
          {/* <Row> */}
          {/* <Col sm={12} className="paddingunset"> */}
          {/* <h1 className="imgheader mt-3 text-center">OFFICE EXPERIENCE</h1> */}
          {/*       
           <img
              src={require('../../images/home.png')}
              alt="ExperienceImage"
              className="img-fluid"
             
            />  */}

          {/* </Col> */}
          {/* </Row> */}
        </Container>
      </div>
    );
  }
}
