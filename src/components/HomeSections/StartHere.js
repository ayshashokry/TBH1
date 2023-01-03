import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class StartHere extends Component {
  render() {
    return (
      <div className="startheresection">
        <Container>
          <Row>
            <Col className="m-auto" sm={12} md={2}>
              {' '}
              {/* <img
                alt="TBH"
                src="https://tbhwebsite.s3.me-south-1.amazonaws.com/startheretbh.webp"
              /> */}
              <picture>
                <source
                  srcset="https://tbhwebsite.s3.me-south-1.amazonaws.com/startheretbh.webp"
                  alt="TBH"
                  type="image/webp"
                />
                <source
                  srcset="https://tbhwebsitepng.s3.me-south-1.amazonaws.com/Group+7.png"
                  alt="TBH"
                  type="image/png"
                />
                <img src="img/creakyOldJPEG.jpg" alt="TBH" />
              </picture>
            </Col>
            <Col sm={12} md={7} className="pt-4">
              <h2>START HERE!</h2>
            </Col>
          </Row>
          <Row>
            <Col className="m-auto" sm={9}>
              <p className="pl-3">
                Google, Facebook, Uber and a lot of other successful businesses
                over the past decade started in either a dorm room or a garage.
                You may not have a dorm room or a garage but neither would a
                professional office space be the most practical choice for your
                business at it’s early stages. We’ve got your pain and we’ve got
                you a solution! Now you can get your stand alone office room
                with just the comfort that you would expect from a million
                dollar office building, but only a lot more convenient.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="m-auto" sm={9}>
              <div className="headquarter">
                <p>Maadi Headquarters SPACE</p>
              </div>
            </Col>
          </Row>
          <Row className="text-center px-5 pb-5 buttonsrow">
            <Col className="m-auto text-center px-3 py-3" sm={12} md={4}>
              {' '}
              <Button className="startButtons">
                <Link to={{ pathname: '/space', state: { info: 'meetings' } }}>
                  MEETING ROOMS
                </Link>
              </Button>
            </Col>{' '}
            <Col className="m-auto text-center py-3" sm={12} md={4}>
              <Button className="startButtons px-4">
                <Link to={{ pathname: '/space', state: { info: 'private' } }}>
                  PRIVATE OFFICE
                </Link>
              </Button>
            </Col>{' '}
            <Col className="m-auto text-center py-3" sm={12} md={4}>
              <Button className="startButtons px-4">
                <Link to={{ pathname: '/space', state: { info: 'training' } }}>
                  TRAINING ROOM
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
