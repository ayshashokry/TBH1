import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col, Row } from 'react-bootstrap';

export default class Garage extends Component {
  render() {
    return (
      <div className="garagesection">
        <div className="garagebackground py-5" style={{ marginTop: '40px' }}>
          <div className="container garagetexts">
            <Row className="d-flex justify-content-center">
              <Col sm={12} md={11}>
                <Row>
                  <Col sm={12}>
                    <div className="garagetitle pt-2">
                      {/* <img
                        src="https://tbhwebsite.s3.me-south-1.amazonaws.com/Group+7.webp"
                        className="pt-2 img-fluid "
                        alt="LirtenHome"
                      /> */}

                      {/* <picture>
                        <source
                          srcset="https://tbhwebsite.s3.me-south-1.amazonaws.com/Group+7.webp"
                          className="pt-2 img-fluid "
                          alt="LirtenHome"
                          type="image/webp"
                        />
                        <source
                          srcset="https://tbhwebsitepng.s3.me-south-1.amazonaws.com/Group+7.png"
                          className="pt-2 img-fluid "
                          alt="LirtenHome"
                          type="image/png"
                        />
                        <img
                          src="img/creakyOldJPEG.jpg"
                          className="pt-2 img-fluid "
                          alt="LirtenHome"
                        />
                      </picture> */}

                      <h1 className="pb-3 pt-5">
                        the 21st century <br />
                        garage
                      </h1>
                    </div>
                    <div className="whitelinee mb-3"></div>

                    <div className="container p3">
                      <Row className="d-flex justify-content-center mt-5">
                        <Col sm={12} md={12}>
                          <Row>
                            <Col sm={12} md={5} className="p3 ">
                              <div className="thirdcolheader">
                                <h2 className="mb-3">
                                  {' '}
                                  WHY <span className="tbh">TBH</span> ?
                                </h2>
                              </div>

                              <div className="thirdcolparag mb-5">
                                <p>
                                  {' '}
                                  Who could conduct business in a crowded
                                  environment, no-matter if its a coffeeshop or
                                  a shared office space just like everyone
                                  does?. Professional business has to be
                                  conducted in professional environment. and
                                  that’s exactly what we do. Well we’ve got your
                                  back ! Now you can get your stand alone office
                                  room just to create your good-old co-working
                                  space with all its drawbacks.{' '}
                                </p>
                              </div>
                            </Col>
                            <Col sm={12} md={2} className="p3 px-5"></Col>
                            <Col sm={12} md={5} className="p3">
                              <div className="thirdcolheader">
                                <h2 className="mb-3">CORE VALUES</h2>
                              </div>
                              <div className="thirdcolparag mb-5 ">
                                <p>
                                  {' '}
                                  It is our duty to keep providing what ignites
                                  your business and creative juices, so we keep
                                  our spaces open and energetic.We believe in
                                  well conducted business, hassle free, and thus
                                  we created this space to encompass our core
                                  beliefs. We believe in well organized offices.
                                  We believe that creativity needs energy, and
                                  energy comes form the beautiful scenery.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>

                    {/* <div className="garageparg ">
                      <p>
                        Google, Facebook, Uber and a lot of other successful
                        businesses over the past decade started in either a dorm
                        room or a garage. You may not have a dorm room or a
                        garage but neither would a professional office space be
                        the most practical choice for your business at it’s
                        early stages. We’ve got your pain and we’ve got you a
                        solution! Now you can get your stand alone office room
                        with just the comfort that you would expect from a
                        million dollar office building, but only a lot more
                        convenient.
                      </p>
                    </div> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className="garageoverlay"></div>
      </div>
    );
  }
}
