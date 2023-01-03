import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../../stylesheets/SpaceCss.css';

export default class PrivateOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officeRooms: [
        {
          src1:
            'https://tbhwebsite.s3.me-south-1.amazonaws.com/private+office+1.webp',
          src2: 'https://tbhwebsitepng.s3.me-south-1.amazonaws.com/office1.png',
          alt: 'TBH office1',
          id: '1'
        },
        {
          src1:
            'https://tbhwebsite.s3.me-south-1.amazonaws.com/private+office+2.webp',
          src2: 'https://tbhwebsitepng.s3.me-south-1.amazonaws.com/office2.png',
          alt: 'TBH office2',
          id: '2'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div>
          <div className="col-sm-12 mx-auto py-4 redbg ">
            <div className="col-sm-8 mx-auto px-5 ">
              <p className=" white mb-0 spacetitle">Maadi Headquarters</p>

              <Row>
                <Col sm={12} md={6}>
                  {' '}
                  <h3 className="white subTitle"> Private Rooms</h3>
                </Col>
                <Col sm={12} md={6}>
                  {' '}
                  <p className="include">
                    {' '}
                    It includes:
                    <br /> Virtual office, Training rooms and private offices
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <Container>
            <Row className="pt-2 ml-5">
              <Col sm={6}>
                <p className="p1 py-2">
                  feel free to lay it out in your own unique way!
                </p>
              </Col>
            </Row>

            <Carousel>
              {this.state.officeRooms.map(off => (
                <Carousel.Item key={off.id}>
                  {/* <img
                    className="img-fluid interimg"
                    src={off.src}
                    alt={off.alt}
                  /> */}
                  <picture>
                    <source
                      className="img-fluid interimg"
                      srcset={off.src1}
                      alt={off.alt}
                      type="image/webp"
                    />
                    <source
                      className="img-fluid interimg"
                      srcset={off.src2}
                      alt={off.alt}
                      type="image/png"
                    />
                    <img
                      src="img/creakyOldJPEG.jpg"
                      className="img-fluid interimg"
                      alt={off.alt}
                    />
                  </picture>
                </Carousel.Item>
              ))}
            </Carousel>

            <Row>
              {/* <Col sm={12} md={2}>
                <p className="px-2 p2">
                  The offices are repleted with services that will help conduct
                  your business successfully.
                </p>
              </Col> */}
              <Col sm={12} md={4}>
                <div className="redline mt-4 mb-1 mx-2"></div>

                <h2 className="px-2 white headline2 pt-1">SerVices:</h2>
                <p className="px-2 p2">
                  The offices are repleted with
                  <br /> services that will help conduct
                  <br />
                  your business successfully.
                </p>
              </Col>
              <Col className="listService pt-4" sm={12} md={4}>
                <ul>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Food and Music
                  </li>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Free Coffee
                  </li>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Cool Munchies
                  </li>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Free WIFI
                  </li>

                  <li>
                    <i className="fas fa-check-square px-2"></i>Ergonomics
                    Chairs
                  </li>
                </ul>
              </Col>
              <Col className="listService pt-4" sm={12} md={4}>
                <ul>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Private
                    open-air Balacony
                  </li>
                  <li>
                    <i className="fas fa-check-square px-2"></i> LEDs Screen
                  </li>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Comfy Bean Bags
                  </li>

                  <li>
                    <i className="fas fa-check-square px-2"></i> White Boards
                  </li>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Office Supplies
                  </li>
                  <li>
                    <i className="fas fa-check-square px-2"></i> Printing (50
                    Papers)
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
