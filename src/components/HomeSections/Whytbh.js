import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col, Row } from 'react-bootstrap';

export default class Whytbh extends Component {
  render() {
    return (
      <div className="container p3 pt-5">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={9}>
            <Row>
              <Col sm={12} md={6} className="p3">
                <div className="thirdcolheader">
                  <h2 className="mb-3 mt-5">
                    {' '}
                    WHY <span className="tbh">TBH</span> ?
                  </h2>
                </div>

                <div className="thirdcolparag mb-5 px-2">
                  <p>
                    {' '}
                    Who could conduct business in a crowded environment,
                    no-matter if its a coffeeshop or a shared office space just
                    like everyone does?. Professional business has to be
                    conducted in professional environment. and that’s exactly
                    what we do. Well we’ve got your back ! Now you can get your
                    stand alone office room just to create your good-old
                    co-working space with all its drawbacks.{' '}
                  </p>
                </div>
              </Col>

              <Col sm={12} md={6} className="p3">
                <div className="thirdcolheader">
                  <h2 className="mb-3 mt-5">CORE VALUES</h2>
                </div>
                <div className="thirdcolparag mb-5 px-2">
                  <p>
                    {' '}
                    It is our duty to keep providing what ignites your business
                    and creative juices, so we keep our spaces open and
                    energetic.We believe in well conducted business, hassle
                    free, and thus we created this space to encompass our core
                    beliefs. We believe in well organized offices. We believe
                    that creativity needs energy, and energy comes form the
                    beautiful scenery.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
